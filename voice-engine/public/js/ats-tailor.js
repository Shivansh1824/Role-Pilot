document.addEventListener('DOMContentLoaded', () => {
    // --- Supabase Init & Role Selection ---
    const initSupabaseSession = async () => {
        try {
            const db = await import('./supabase-client.js').then(m => m.getSupabaseClient());
            const { data: { session }, error } = await db.auth.getSession();
            if (error || !session) return;
            
            const { data: profile } = await db
                .from('profiles')
                .select('target_role, experience_level, avatar_url, full_name')
                .eq('id', session.user.id)
                .maybeSingle();

            if (profile) {
                // Set target role dropdown
                if (profile.target_role) {
                    const roleSelect = document.getElementById('target-role-select');
                    if (roleSelect) {
                        let optionExists = Array.from(roleSelect.options).some(opt => opt.value === profile.target_role);
                        if (!optionExists) {
                            roleSelect.add(new Option(profile.target_role, profile.target_role));
                        }
                        roleSelect.value = profile.target_role;
                        roleSelect.dispatchEvent(new Event('change'));
                    }
                }

                // Set target experience dropdown
                if (profile.experience_level) {
                    const expSelect = document.getElementById('target-experience-select');
                    if (expSelect) {
                        expSelect.value = profile.experience_level;
                    }
                }
                
                // Set avatar/initials
                const triggerEl = document.getElementById('profile-trigger');
                if (triggerEl) {
                    const fullName = profile.full_name || session.user.user_metadata?.full_name || "User";
                    const firstName = fullName.split(' ')[0];
                    const initials = fullName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
                    
                    if (profile.avatar_url && profile.avatar_url !== 'custom_placeholder') {
                        triggerEl.innerHTML = `<img src="${profile.avatar_url}" style="width:100%; height:100%; border-radius:50%; object-fit:contain;" alt="${firstName}">`;
                    } else {
                        triggerEl.textContent = initials;
                    }
                }
            }

            // Load Recent Resumes dynamically
            await loadRecentResumes(db, session.user.id);
            
            // Define global historical viewer function
            window.viewHistoricalAnalysis = (resumeId, fileUrl, fileName) => {
                window.location.href = 'ats-result.html?id=' + resumeId;
            };

            // Define global delete function
            window.deleteResume = async (resumeId, fileUrl, event) => {
                if (event) event.stopPropagation();
                
                const confirmed = confirm("Are you sure you want to delete this resume and its analysis history? This action cannot be undone.");
                if (!confirmed) return;

                try {
                    // 1. Delete from database (Cascading delete will remove evaluations)
                    const { error: dbError } = await db
                        .from('resumes')
                        .delete()
                        .eq('id', resumeId);

                    if (dbError) throw dbError;

                    // 2. Delete from Supabase Storage bucket
                    if (fileUrl) {
                        await db.storage
                            .from('resumes')
                            .remove([fileUrl])
                            .catch(e => console.error("Storage cleanup failed during delete:", e));
                    }

                    // 3. Refresh list
                    await loadRecentResumes(db, session.user.id);

                } catch (err) {
                    console.error("Error deleting resume:", err);
                    alert("Failed to delete the resume. Please try again.");
                }
            };

        } catch (err) {
            console.error("Supabase Init Error:", err);
        }
    };

    const loadRecentResumes = async (db, userId) => {
        const listContainer = document.getElementById('recent-resumes-list');
        const countBadge = document.getElementById('recent-resumes-count');
        if (!listContainer || !countBadge) return;

        try {
            const { data, error } = await db
                .from('resumes')
                .select('*, resume_evaluations(id)')
                .eq('user_id', userId)
                .not('parsed_text', 'is', null)
                .order('created_at', { ascending: false })
                .limit(5);

            if (error) throw error;

            countBadge.textContent = `${data.length} Resume${data.length !== 1 ? 's' : ''}`;
            
            if (data.length === 0) {
                listContainer.innerHTML = `
                    <div class="empty-state" style="padding: 2rem 1rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
                        <i class="fa-regular fa-folder-open" style="font-size: 2rem; margin-bottom: 0.5rem; opacity: 0.5;"></i>
                        <p>No recent resumes found.</p>
                    </div>
                `;
                return;
            }

            listContainer.innerHTML = '';
            
            data.forEach(resume => {
                const dateStr = new Date(resume.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                
                const itemHtml = `
                    <div class="file-info">
                        <i class="fa-regular fa-file-pdf file-icon" style="color: var(--primary); font-size: 1.5rem;"></i>
                        <div class="file-details">
                            <div class="file-name" style="font-weight: 600; font-size: 0.95rem; color: var(--text-primary); word-break: break-word; padding-right: 10px;" title="${resume.title}">${resume.title}</div>
                            <div class="file-date" style="font-size: 0.8rem; color: var(--text-muted);">${dateStr}</div>
                        </div>
                        <div class="file-actions">
                            <button class="btn btn-secondary-outline btn-sm" title="View" style="padding: 6px 10px;" onclick="window.viewHistoricalAnalysis('${resume.id}', '${resume.file_url}', '${resume.title.replace(/'/g, "\\'")}')"><i class="fa-regular fa-eye"></i></button>
                            <button class="btn btn-secondary-outline btn-sm" title="Delete" style="padding: 6px 10px; color: var(--error); border-color: rgba(239, 68, 68, 0.2); background: rgba(239, 68, 68, 0.02);" onclick="window.deleteResume('${resume.id}', '${resume.file_url}', event)"><i class="fa-regular fa-trash-can"></i></button>
                        </div>
                    </div>
                `;
                listContainer.innerHTML += itemHtml;
            });

        } catch (err) {
            console.error("Error fetching resumes:", err);
            listContainer.innerHTML = `<p style="color:var(--error); font-size:0.85rem; padding: 1rem; text-align: center;">Failed to load resumes.</p>`;
        }
    };

    initSupabaseSession();

    // Profile Dropdown Toggle Logic
    const profileTrigger = document.getElementById('profile-trigger');
    const profileDropdown = document.getElementById('profile-dropdown');
    
    if (profileTrigger && profileDropdown) {
        profileTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            profileDropdown.classList.toggle('show');
        });
        
        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!profileDropdown.contains(e.target) && e.target !== profileTrigger) {
                profileDropdown.classList.remove('show');
            }
        });
    }

    // Logout Logic
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            const db = await import('./supabase-client.js').then(m => m.getSupabaseClient());
            await db.auth.signOut();
            window.location.href = 'index.html';
        });
    }

    // DOM Elements
    const dropzone = document.getElementById('resume-dropzone');
    const fileInput = document.getElementById('file-input');
    const selectedFileState = document.getElementById('selected-file-state');
    const fileNameDisplay = document.getElementById('selected-file-name');
    const removeFileBtn = document.getElementById('remove-file-btn');
    const analyzeBtn = document.getElementById('analyze-btn');
    
    // Analysis Panels
    const atsSetupView = document.getElementById('ats-setup-view');
    const atsLoadingView = document.getElementById('ats-loading-view');
    const scanProgressBar = document.getElementById('scan-progress-bar');

    // --- File Drag and Drop Logic ---

    const preventDefaults = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, preventDefaults, false);
    });

    ['dragenter', 'dragover'].forEach(eventName => {
        dropzone.addEventListener(eventName, () => {
            dropzone.classList.add('dragover');
        }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, () => {
            dropzone.classList.remove('dragover');
        }, false);
    });

    dropzone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files);
    });

    dropzone.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', function() {
        handleFiles(this.files);
    });

    function handleFiles(files) {
        if (files.length > 0) {
            const file = files[0];
            window.resumeFileObj = file; // Store raw file for Supabase upload
            // Update UI with file name
            fileNameDisplay.textContent = file.name;
            
            // Hide dropzone entirely, show selected state
            dropzone.style.display = 'none';
            selectedFileState.style.display = 'block';
            
            // Set resume step state as completed
            const stepResume = document.getElementById('step-resume');
            if (stepResume) stepResume.classList.add('completed');
            
            // Extract Base64 to let Gemini AI natively read the PDF/Doc
            const reader = new FileReader();
            reader.onload = function(e) {
                const base64String = e.target.result.split(',')[1];
                window.resumeDocument = {
                    mimeType: file.type || 'application/pdf',
                    data: base64String
                };
            };
            reader.readAsDataURL(file);
            
            // Reset any previous analysis
            resetAnalysis();
        }
    }

    removeFileBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent clicking the dropzone again
        fileInput.value = ''; // Clear input
        
        // Restore dropzone UI
        dropzone.style.display = 'flex';
        selectedFileState.style.display = 'none';
        
        // Remove completed state
        const stepResume = document.getElementById('step-resume');
        if (stepResume) stepResume.classList.remove('completed');
        
        resetAnalysis();
    });

    const uploadDifferentBtn = document.getElementById('upload-different-btn');
    if (uploadDifferentBtn) {
        uploadDifferentBtn.addEventListener('click', () => {
            fileInput.click();
        });
    }

    // --- Predefined AI Job Templates ---
    const jobTemplates = {
        "Software Engineer": "We are seeking a Software Engineer to design, build, and maintain efficient, reusable, and reliable code. Candidates should have a strong understanding of computer science fundamentals (algorithms, data structures, OOP) and experience with at least one major programming language (Java, C++, C#, or Python). Collaborative problem-solving and software testing skills are essential.",
        "Frontend Engineer": "We are seeking a Frontend Engineer proficient in modern JavaScript frameworks (React, Vue, or Angular). The ideal candidate should have strong experience with responsive UI development, HTML5, CSS3, and state management. Experience with version control (Git) and web performance optimization is highly valued.",
        "Backend Engineer": "We are looking for a Backend Engineer with strong expertise in server-side languages (Node.js, Python, or Java) and building scalable RESTful APIs. The role requires experience with relational databases (PostgreSQL/MySQL), cloud infrastructure (AWS/GCP), and modern CI/CD pipelines.",
        "Full Stack Developer": "We are hiring a Full Stack Developer capable of designing and implementing end-to-end web applications. You should be comfortable working with frontend frameworks (React/Vue), backend technologies (Node.js/Python), and managing database architectures (SQL/NoSQL). Experience with cloud deployment and agile methodologies is required.",
        "Product Manager": "We are looking for a Product Manager to lead cross-functional teams in delivering high-impact products. The ideal candidate has a strong mix of technical understanding, user empathy, and business strategy. Experience with agile workflows (Scrum/Kanban), writing user stories, and conducting user research is essential.",
        "Data Scientist": "We are hiring a Data Scientist to build predictive models and analyze complex datasets. Required skills include Python, SQL, and machine learning libraries (TensorFlow, Scikit-learn, or PyTorch). Experience with data visualization and statistical analysis is required.",
        "UI/UX Designer": "We are seeking a UI/UX Designer to create intuitive and aesthetically pleasing digital experiences. The candidate must be proficient in design tools (Figma, Sketch, Adobe Creative Suite) and have a strong portfolio demonstrating user-centered design principles, wireframing, and interactive prototyping.",
        "DevOps Engineer": "We are searching for a DevOps Engineer to streamline our deployment pipelines and maintain cloud infrastructure. Requires strong experience with CI/CD tools (Jenkins, GitHub Actions), containerization (Docker, Kubernetes), and Infrastructure as Code (Terraform, CloudFormation). AWS/GCP expertise is mandatory.",
        "Mobile Developer": "We are looking for a Mobile Developer to build high-performance iOS and Android applications. Candidates should have experience in React Native, Flutter, Swift, or Kotlin. Deep understanding of mobile UI/UX standards, state management, and app store deployment is required.",
        "QA Engineer": "We are hiring a QA Engineer to ensure the quality and reliability of our software. Requires experience with automated testing frameworks (Selenium, Cypress, Jest) and manual testing procedures. You must have a strong eye for detail and experience writing comprehensive test cases and bug reports.",
        "Cybersecurity Analyst": "We are seeking a Cybersecurity Analyst to monitor and protect our IT infrastructure. Requirements include experience with threat hunting, vulnerability assessments, penetration testing, and security information and event management (SIEM) tools. Knowledge of compliance standards (SOC2, ISO) is preferred.",
        "Gen AI Engineer": "We are hiring a Generative AI Engineer to integrate foundation models into our core products. Candidates must have experience with LLMs (OpenAI, Anthropic, Gemini API), LangChain, vector databases (Pinecone, Weaviate), and RAG architectures. Strong Python and system design skills are necessary.",
        "Prompt Engineer": "We are looking for a Prompt Engineer to optimize interactions with LLMs. Candidates must possess exceptional communication skills, an understanding of context window management, and experience designing structured, reliable prompts for production systems. Prior experience in AI testing or red-teaming is a plus.",
        "MLOps Engineer": "We are seeking an MLOps Engineer to productionize machine learning models. You must have experience with ML lifecycle tools (MLflow, Kubeflow), model deployment strategies, and monitoring data drift. Strong DevOps, Kubernetes, and Python skills are required.",
        "AI Product Manager": "We are hiring an AI Product Manager to define the vision for our AI-powered features. Requires deep understanding of AI capabilities/limitations, experience balancing data privacy with innovation, and a track record of taking ML products from prototype to production.",
        "AI Ethics Specialist": "We are seeking an AI Ethics Specialist to ensure our AI models are fair, unbiased, and compliant with emerging regulations. Background in data privacy, algorithm auditing, and AI governance is required. You will work closely with legal and engineering teams to mitigate risks.",
        "Customer Support": "We are looking for a dedicated Customer Support Representative to assist users and resolve issues. Ideal candidates possess excellent written and verbal communication skills, high empathy, and experience with helpdesk software (Zendesk, Intercom). Strong problem-solving abilities are essential.",
        "Call Agent / Telesales": "We are hiring a Telesales Agent to drive revenue and build client relationships over the phone. Requires a proven track record in outbound sales, CRM software proficiency (Salesforce, HubSpot), resilience, and excellent persuasive communication skills. Prior experience meeting quotas is required.",
        "Client Relations Manager": "We are seeking a Client Relations Manager to act as the primary liaison for our high-value accounts. Requirements include exceptional interpersonal skills, experience in B2B account management, and the ability to upsell services while ensuring long-term client retention and satisfaction."
    };

    const roleSelect = document.getElementById('target-role-select');
    const jobDescriptionInput = document.getElementById('job-description');
    const templateWarning = document.getElementById('ai-template-warning');
    
    // Helper to check if current text is a generic template
    const isTemplateActive = (text) => {
        return Object.values(jobTemplates).includes(text.trim());
    };

    // Auto-fill template when role changes
    if (roleSelect && jobDescriptionInput) {
        roleSelect.addEventListener('change', (e) => {
            const selectedRole = e.target.value;
            // Only overwrite if the textarea is empty or contains an existing generic template
            if (!jobDescriptionInput.value.trim() || isTemplateActive(jobDescriptionInput.value)) {
                if (jobTemplates[selectedRole]) {
                    jobDescriptionInput.value = jobTemplates[selectedRole];
                    jobDescriptionInput.dispatchEvent(new Event('input')); // Trigger step validation & warning check
                }
            }
        });
        
        // Initial population if empty (using setTimeout to bypass browser form-state restoration)
        setTimeout(() => {
            if (!jobDescriptionInput.value.trim() && jobTemplates[roleSelect.value]) {
                jobDescriptionInput.value = jobTemplates[roleSelect.value];
                if (templateWarning) templateWarning.style.display = 'flex';
                jobDescriptionInput.dispatchEvent(new Event('input')); // Trigger step validation
            }
        }, 100);
    }

    // Reactive listener for Job Description step
    if (jobDescriptionInput) {
        const toggleJobStep = () => {
            const stepJob = document.getElementById('step-job');
            if (stepJob) {
                if (jobDescriptionInput.value.trim().length > 0) {
                    stepJob.classList.add('completed');
                } else {
                    stepJob.classList.remove('completed');
                }
            }
            
            // Toggle Warning Alert
            if (templateWarning) {
                if (isTemplateActive(jobDescriptionInput.value)) {
                    templateWarning.style.display = 'flex';
                } else {
                    templateWarning.style.display = 'none';
                }
            }
        };
        jobDescriptionInput.addEventListener('input', toggleJobStep);
        // Initial load check
        toggleJobStep();
    }

    // --- Analysis Simulation Logic ---

    function switchState(showElement, hideElements = []) {
        hideElements.forEach(el => {
            if (el) {
                el.style.display = 'none';
                el.classList.remove('state-animate');
            }
        });
        if (showElement) {
            showElement.style.display = '';
            // Force reflow to restart CSS keyframes
            void showElement.offsetWidth;
            showElement.classList.add('state-animate');
        }
    }

    function resetAnalysis() {
        switchState(atsSetupView, [atsLoadingView]);
        if (scanProgressBar) scanProgressBar.style.width = '0%';
    }

    analyzeBtn.addEventListener('click', async () => {
        // Validate inputs
        const isFileUploaded = selectedFileState && selectedFileState.style.display === 'block';
        if (!isFileUploaded) {
            alert('Please upload your resume first.');
            return;
        }

        const jdText = document.getElementById('job-description').value;
        const targetRole = document.getElementById('target-role-select').value;
        
        if (!jdText.trim()) {
            alert('Please paste a target job description first.');
            document.getElementById('job-description').focus();
            return;
        }

        // Dynamic loading messages to keep user engaged
        const loadingMessages = [
            "Extracting credentials and parsing layout...",
            "Securing document in cloud storage...",
            "Connecting to Gemini AI engine...",
            "Evaluating keyword density & skill gaps...",
            "Running deterministic ATS scoring...",
            "Generating actionable improvement tips...",
            "Finalizing match percentage..."
        ];
        
        const loadingText = document.getElementById('loading-text');
        
        // Clear any existing interval/timeout to prevent overlapping text
        if (window.loadingMessageInterval) {
            clearInterval(window.loadingMessageInterval);
        }
        if (window.loadingMessageTimeout) {
            clearTimeout(window.loadingMessageTimeout);
        }
        window.loadingMessageInterval = null;
        window.loadingMessageTimeout = null;
        
        if (loadingText) {
            let msgIndex = 0;
            loadingText.textContent = loadingMessages[0];
            loadingText.style.opacity = '1';
            loadingText.style.transition = 'opacity 0.2s ease-in-out';
            
            window.loadingMessageInterval = setInterval(() => {
                msgIndex = (msgIndex + 1) % loadingMessages.length;
                
                loadingText.style.opacity = '0';
                window.loadingMessageTimeout = setTimeout(() => {
                    loadingText.textContent = loadingMessages[msgIndex];
                    
                    // FORCE REFLOW: Fixes Safari GPU texture caching bugs that cause text overlay
                    loadingText.style.display = 'none';
                    loadingText.offsetHeight; // Trigger reflow
                    loadingText.style.display = 'block';
                    
                    loadingText.style.opacity = '1';
                }, 200);
            }, 2500); 
        }

        // Start scanning UI
        switchState(atsLoadingView, [atsSetupView]);
        
        // Populate iframe source if PDF
        const viewerBody = document.getElementById('document-viewer-body');
        const viewerFileName = document.getElementById('viewer-file-name');
        if (window.resumeFileObj && viewerBody && viewerFileName) {
            viewerFileName.textContent = window.resumeFileObj.name;
            if (window.resumeFileObj.type === 'application/pdf') {
                viewerBody.innerHTML = `<iframe src="${URL.createObjectURL(window.resumeFileObj)}#toolbar=0&view=FitH" class="document-iframe" title="Resume Document"></iframe>`;
            } else {
                viewerBody.innerHTML = `<div class="viewer-placeholder"><i class="fa-solid fa-file-word" style="color: var(--primary);"></i><p>Document preview unavailable for DOCX. File is ready for analysis.</p></div>`;
            }
        }
        
        if (scanProgressBar) scanProgressBar.style.width = '20%';
        
        let uploadedFilePath = null;
        let insertedResumeId = null;
        let db = null;
        
        try {
            // Import Supabase to call Edge Function
            db = await import('./supabase-client.js').then(m => m.getSupabaseClient());
            
            // --- STEP 1: PRE-VALIDATE INPUTS ---
            const isAiTemplate = (jdText.trim() === (jobTemplates[targetRole] || "").trim());
            const { data: valData, error: valError } = await db.functions.invoke('validate-inputs', {
                body: {
                    resume_document: window.resumeDocument, // Sends base64 directly to Gemini natively
                    job_title: targetRole,
                    job_description: jdText,
                    is_ai_template: isAiTemplate
                }
            });

            // Handle AI Guardrail Validation Error
            if (valError || (valData && valData.validation_error)) {
                const errorMessage = valData?.validation_error || "There was an error validating your inputs. Please try again.";
                const errorTitleText = (errorMessage.toLowerCase().includes("resume") || errorMessage.toLowerCase().includes("document")) 
                    ? "Invalid Resume Document" 
                    : "Invalid Job Description";
                
                // Show Red Error Box
                const redError = document.getElementById('ai-validation-error');
                const redErrorText = document.getElementById('ai-validation-error-text');
                const redErrorTitle = document.getElementById('ai-validation-error-title');
                const yellowWarning = document.getElementById('ai-template-warning');
                
                if (redError && redErrorText) {
                    redErrorText.textContent = errorMessage;
                    if (redErrorTitle) redErrorTitle.textContent = errorTitleText;
                    redError.style.display = 'flex';
                    if (yellowWarning) yellowWarning.style.display = 'none'; // Hide yellow box
                }
                
                if (window.loadingMessageInterval) clearInterval(window.loadingMessageInterval);
                if (window.loadingMessageTimeout) clearTimeout(window.loadingMessageTimeout);
                resetAnalysis(); // Stop scanning animation
                return; // Stop the flow
            }

            // --- STEP 1.5: UPLOAD & REGISTER RESUME IN DB ---
            if (scanProgressBar) scanProgressBar.style.width = '40%';
            
            const { data: userData, error: authError } = await db.auth.getUser();
            if (authError || !userData?.user) {
                throw new Error("You must be logged in to upload a resume.");
            }
            
            const userId = userData.user.id;
            const fileObj = window.resumeFileObj;
            const fileExt = fileObj.name.split('.').pop();
            const filePath = `${userId}/${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
            
            // Upload to Supabase Storage 'resumes' bucket
            const { error: uploadError } = await db.storage
                .from('resumes')
                .upload(filePath, fileObj);
                
            if (uploadError) {
                console.error("Storage upload error:", uploadError);
                throw new Error("Failed to upload resume document.");
            }
            
            uploadedFilePath = filePath; // Track for potential cleanup
            
            // Insert record into resumes table
            const { data: resumeRecord, error: insertError } = await db
                .from('resumes')
                .insert({
                    user_id: userId,
                    title: fileObj.name,
                    file_url: filePath,
                    is_primary: false
                })
                .select()
                .single();
                
            if (insertError || !resumeRecord) {
                console.error("Database insert error:", insertError);
                throw new Error("Failed to register resume in database.");
            }
            
            insertedResumeId = resumeRecord.id;
            
            if (scanProgressBar) scanProgressBar.style.width = '60%';

            // --- STEP 2: EVALUATE RESUME ---
            const { data, error } = await db.functions.invoke('evaluate-resume', {
                body: {
                    resume_id: resumeRecord.id, // REAL ID mapped to the database!
                    file_path: filePath,
                    mime_type: fileObj.type || 'application/pdf',
                    job_title: targetRole,
                    job_description: jdText,
                    experience_level: document.getElementById('target-experience-select')?.value || "mid"
                }
            });

            if (error) {
                console.error("Evaluation error:", error);
                throw new Error("Failed to analyze resume. Please try again.");
            }

            // If Validation passes, simulate the rest of the progress bar
            let progress = 20;
            const scanInterval = setInterval(() => {
                progress += Math.random() * 15;
                if (progress > 100) progress = 100;
                if (scanProgressBar) scanProgressBar.style.width = `${progress}%`;
                
                if (progress === 100) {
                    clearInterval(scanInterval);
                    if (window.loadingMessageInterval) clearInterval(window.loadingMessageInterval);
                    if (window.loadingMessageTimeout) clearTimeout(window.loadingMessageTimeout);
                    // Use actual Edge Function data to animate score
                    const finalScore = data?.original_ats_score || 82;
                    
                    // Refresh the Recent Resumes list so it shows the new dynamically named file!
                    loadRecentResumes(db, userId);
                    
                    // Redirect to the dedicated ATS Result page
                    window.location.href = 'ats-result.html?id=' + resumeRecord.id;
                }
            }, 300);

        } catch (err) {
            console.error("Analysis Error:", err);
            
            // SECURITY / HYGIENE PROTOCOL: Cleanup orphaned records if analysis failed
            if (db) {
                if (insertedResumeId) {
                    db.from('resumes').delete().eq('id', insertedResumeId).catch(e => console.error("Cleanup DB Error:", e));
                }
                if (uploadedFilePath) {
                    db.storage.from('resumes').remove([uploadedFilePath]).catch(e => console.error("Cleanup Storage Error:", e));
                }
            }
            
            const redError = document.getElementById('ai-validation-error');
            const redErrorText = document.getElementById('ai-validation-error-text');
            const redErrorTitle = document.getElementById('ai-validation-error-title');
            
            if (redError && redErrorText) {
                redErrorText.textContent = err.message || "An error occurred during analysis. Please try again.";
                if (redErrorTitle) redErrorTitle.textContent = "Analysis Failed";
                redError.style.display = 'flex';
            } else {
                alert(err.message || "An error occurred during analysis.");
            }
            
            if (window.loadingMessageInterval) clearInterval(window.loadingMessageInterval);
            if (window.loadingMessageTimeout) clearTimeout(window.loadingMessageTimeout);
            resetAnalysis();
        }
    });
});
