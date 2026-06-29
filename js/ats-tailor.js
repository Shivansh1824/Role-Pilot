document.addEventListener('DOMContentLoaded', () => {
    // --- Supabase Init & Role Selection ---
    const initSupabaseSession = async () => {
        try {
            const db = await import('./supabase-client.js').then(m => m.getSupabaseClient());
            const { data: { session }, error } = await db.auth.getSession();
            if (error || !session) return;
            
            const { data: profile } = await db
                .from('profiles')
                .select('target_role, avatar_url, full_name')
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
        } catch (err) {
            console.error("Supabase Init Error:", err);
        }
    };
    initSupabaseSession();

    // DOM Elements
    const dropzone = document.getElementById('resume-dropzone');
    const fileInput = document.getElementById('file-input');
    const selectedFileState = document.getElementById('selected-file-state');
    const fileNameDisplay = document.getElementById('selected-file-name');
    const removeFileBtn = document.getElementById('remove-file-btn');
    const analyzeBtn = document.getElementById('analyze-btn');
    
    // Analysis Panels
    const emptyState = document.getElementById('empty-analysis-state');
    const scanningState = document.getElementById('scanning-state');
    const resultsContainer = document.getElementById('results-container');
    const scanProgressBar = document.getElementById('scan-progress-bar');
    
    // Score Elements
    const scoreValue = document.getElementById('score-value');
    const scoreRingProgress = document.getElementById('score-ring-progress');
    const scoreCard = document.querySelector('.score-card');

    // Theme Toggle Logic (Shared with global header)
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const html = document.documentElement;
            const isLight = html.classList.toggle('light-theme');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            themeBtn.textContent = isLight ? '🌙' : '☀️';
        });
        
        // Initial icon state
        if (document.documentElement.classList.contains('light-theme')) {
            themeBtn.textContent = '🌙';
        }
    }

    // SVG Gradient Injection for the Ring
    const svgNS = "http://www.w3.org/2000/svg";
    const defs = document.createElementNS(svgNS, 'defs');
    const gradient = document.createElementNS(svgNS, 'linearGradient');
    gradient.setAttribute('id', 'score-gradient');
    gradient.setAttribute('x1', '0%');
    gradient.setAttribute('y1', '100%');
    gradient.setAttribute('x2', '100%');
    gradient.setAttribute('y2', '0%');
    
    const stop1 = document.createElementNS(svgNS, 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('stop-color', 'var(--primary)');
    
    const stop2 = document.createElementNS(svgNS, 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('stop-color', 'var(--accent)');
    
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    document.querySelector('.score-ring').appendChild(defs);

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
            // Update UI with file name
            fileNameDisplay.textContent = file.name;
            
            // Hide standard dropzone content, show selected state
            Array.from(dropzone.children).forEach(child => {
                if(child.tagName !== 'INPUT') child.style.display = 'none';
            });
            dropzone.style.padding = 'var(--space-4)';
            selectedFileState.style.display = 'block';
            
            // Set resume step state as completed
            const stepResume = document.getElementById('step-resume');
            if (stepResume) stepResume.classList.add('completed');
            
            // Reset any previous analysis
            resetAnalysis();
        }
    }

    removeFileBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent clicking the dropzone again
        fileInput.value = ''; // Clear input
        
        // Restore dropzone UI
        Array.from(dropzone.children).forEach(child => {
            if(child.tagName !== 'INPUT') child.style.display = '';
        });
        dropzone.style.padding = 'var(--space-8) var(--space-4)';
        selectedFileState.style.display = 'none';
        
        // Remove completed state
        const stepResume = document.getElementById('step-resume');
        if (stepResume) stepResume.classList.remove('completed');
        
        resetAnalysis();
    });

    // --- Predefined AI Job Templates ---
    const jobTemplates = {
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
        
        // Initial population if empty
        if (!jobDescriptionInput.value.trim() && jobTemplates[roleSelect.value]) {
            jobDescriptionInput.value = jobTemplates[roleSelect.value];
            if (templateWarning) templateWarning.style.display = 'flex';
        }
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
            showElement.style.display = 'flex';
            // Force reflow to restart CSS keyframes
            void showElement.offsetWidth;
            showElement.classList.add('state-animate');
        }
    }

    function resetAnalysis() {
        switchState(emptyState, [scanningState, resultsContainer]);
        if (scanProgressBar) scanProgressBar.style.width = '0%';
        if (scoreValue) scoreValue.textContent = '0';
        if (scoreRingProgress) scoreRingProgress.style.strokeDashoffset = '339.29';
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

        // Start scanning UI
        switchState(scanningState, [emptyState, resultsContainer]);
        if (scanProgressBar) scanProgressBar.style.width = '20%';
        
        try {
            // Import Supabase to call Edge Function
            const db = await import('./supabase-client.js').then(m => m.getSupabaseClient());
            
            // Call the Edge Function
            const { data, error } = await db.functions.invoke('evaluate-resume', {
                body: {
                    resume_id: "temp_id_for_now", // TODO: Replace with actual uploaded DB resume ID
                    resume_text: "Extracted resume text goes here", // TODO: Replace with parsed PDF text
                    job_title: targetRole,
                    job_description: jdText
                }
            });

            // Handle AI Guardrail Validation Error (Step 0)
            if (error || (data && data.validation_error)) {
                const errorMessage = data?.validation_error || "The job description content does not seem to match the target role. Please paste a relevant job description.";
                
                // Show Red Error Box
                const redError = document.getElementById('ai-validation-error');
                const redErrorText = document.getElementById('ai-validation-error-text');
                const yellowWarning = document.getElementById('ai-template-warning');
                
                if (redError && redErrorText) {
                    redErrorText.textContent = errorMessage;
                    redError.style.display = 'flex';
                    if (yellowWarning) yellowWarning.style.display = 'none'; // Hide yellow box
                }
                
                resetAnalysis(); // Stop scanning animation
                return; // Stop the flow
            }

            // If Validation passes, simulate the rest of the progress bar
            let progress = 20;
            const scanInterval = setInterval(() => {
                progress += Math.random() * 15;
                if (progress > 100) progress = 100;
                if (scanProgressBar) scanProgressBar.style.width = `${progress}%`;
                
                if (progress === 100) {
                    clearInterval(scanInterval);
                    // Use actual Edge Function data to animate score
                    const finalScore = data?.original_ats_score || 82;
                    showResults(finalScore);
                }
            }, 300);

        } catch (err) {
            console.error("Analysis Error:", err);
            alert("An error occurred during analysis.");
            resetAnalysis();
        }
    });

    function showResults(finalScore = 82) {
        switchState(resultsContainer, [scanningState, emptyState]);
        
        // Hide Red/Yellow warnings on success
        const redError = document.getElementById('ai-validation-error');
        if (redError) redError.style.display = 'none';
        
        // Animate Score
        if (scoreValue && scoreRingProgress) animateScore(finalScore);
    }

    function animateScore(targetScore) {
        let currentScore = 0;
        const duration = 1500; // ms
        const intervalTime = 20;
        const steps = duration / intervalTime;
        const increment = targetScore / steps;
        
        // 339.29 is the circumference of r=54 circle
        const circumference = 339.29; 
        
        const counter = setInterval(() => {
            currentScore += increment;
            if (currentScore >= targetScore) {
                currentScore = targetScore;
                clearInterval(counter);
            }
            
            // Update Number
            scoreValue.textContent = Math.round(currentScore);
            
            // Update Ring Offset
            const offset = circumference - (currentScore / 100) * circumference;
            scoreRingProgress.style.strokeDashoffset = offset;
            
        }, intervalTime);
    }
});
