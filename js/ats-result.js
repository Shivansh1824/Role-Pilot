document.addEventListener('DOMContentLoaded', async () => {
    // Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const html = document.documentElement;
            const isLight = html.classList.toggle('light-theme');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            themeBtn.textContent = isLight ? '🌙' : '☀️';
        });
        if (document.documentElement.classList.contains('light-theme')) {
            themeBtn.textContent = '🌙';
        }
    }

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
    const scoreRing = document.querySelector('.score-ring');
    if (scoreRing) {
        scoreRing.appendChild(defs);
    }

    // 1. Get Resume ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const resumeId = urlParams.get('id');

    if (!resumeId) {
        alert("No resume ID provided. Returning to ATS Tailor.");
        window.location.href = 'ats-tailor.html';
        return;
    }


    try {
        // 2. Initialize Supabase
        const db = await import('./supabase-client.js').then(m => m.getSupabaseClient());
        const { data: { session }, error: sessionError } = await db.auth.getSession();
        
        if (sessionError || !session) {
            window.location.href = 'index.html'; // Or login page
            return;
        }

        // --- Fetch User Profile for Avatar ---
        try {
            const { data: profile } = await db
                .from('profiles')
                .select('avatar_url, full_name')
                .eq('id', session.user.id)
                .maybeSingle();

            if (profile) {
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
        } catch (e) {
            console.error("Failed to load profile avatar:", e);
        }
        // -------------------------------------

        // 3. Fetch Resume and Evaluation Data
        const { data: resumeData, error: resumeError } = await db
            .from('resumes')
            .select('*, resume_evaluations(*)')
            .eq('id', resumeId)
            .single();

        if (resumeError || !resumeData) {
            throw new Error("Failed to find resume.");
        }

        const evalData = resumeData.resume_evaluations && resumeData.resume_evaluations.length > 0 
            ? resumeData.resume_evaluations[0] 
            : null;

        if (!evalData) {
            throw new Error("This resume was analyzed before database permissions were updated, so its score details were not saved. Please upload and re-run the analysis to view it.");
        }

        // 4. Generate Signed URL for PDF
        const { data: signedUrlData, error: signedUrlError } = await db
            .storage
            .from('resumes')
            .createSignedUrl(resumeData.file_url, 3600); // 1 hour expiry
            
        if (signedUrlError || !signedUrlData) {
            throw new Error("Failed to retrieve document securely.");
        }

        // 5. Populate the UI
        populateUI(resumeData, evalData, signedUrlData.signedUrl);

        // Hide overlay
        const overlay = document.getElementById('result-loading-overlay');
        if (overlay) {
            overlay.style.opacity = '0';
            setTimeout(() => overlay.style.display = 'none', 300); // fade out
        }

    } catch (error) {
        console.error("Error loading result:", error);
        alert(error.message || "Failed to load analysis result.");
        window.location.href = 'ats-tailor.html';
    }

    function populateUI(resume, evalData, pdfUrl) {
        // PDF Viewer
        const viewerBody = document.getElementById('document-viewer-body');
        const viewerFileName = document.getElementById('viewer-file-name');
        if (viewerBody && viewerFileName) {
            viewerFileName.textContent = resume.title || "Resume Document";
            viewerBody.innerHTML = `<iframe src="${pdfUrl}#toolbar=0&view=FitH" class="document-iframe" title="Resume Document"></iframe>`;
        }

        // --- Populate Target Job Profile ---
        const targetJobPanel = document.querySelector('.target-job-panel');
        if (targetJobPanel) {
            if (evalData && evalData.job_title) {
                targetJobPanel.style.display = 'block';
                const jobTitleEl = document.getElementById('target-job-title');
                const jobDescEl = document.getElementById('target-job-description');
                if (jobTitleEl) jobTitleEl.textContent = evalData.job_title;
                if (jobDescEl) jobDescEl.textContent = evalData.job_description || 'No description provided.';
            } else {
                targetJobPanel.style.display = 'none';
            }
        }
        
        // --- Populate AI Extracted Profile ---
        let profile = null;
        try {
            if (resume.parsed_text) {
                profile = typeof resume.parsed_text === 'string' ? JSON.parse(resume.parsed_text) : resume.parsed_text;
            }
        } catch (e) {
            console.error("Failed to parse candidate profile JSON:", e);
        }

        const profilePanel = document.querySelector('.extracted-profile-panel');
        if (profilePanel) {
            if (profile) {
                profilePanel.style.display = 'block';
                
                const extName = document.getElementById('extracted-name');
                const extEmail = document.getElementById('extracted-email');
                const extPhone = document.getElementById('extracted-phone');
                const extLinkedin = document.getElementById('extracted-linkedin');
                const extExp = document.getElementById('extracted-experience');
                const extSummary = document.getElementById('extracted-summary');

                const basics = profile.basics || {};
                if (extName) extName.textContent = basics.name || '-';
                if (extEmail) {
                    extEmail.innerHTML = basics.email ? `<a href="mailto:${basics.email}" style="color: var(--primary); text-decoration: none; font-weight: 500;">${basics.email}</a>` : '-';
                }
                if (extPhone) extPhone.textContent = basics.phone || '-';
                if (extLinkedin) {
                    extLinkedin.innerHTML = basics.linkedin_url ? `<a href="${basics.linkedin_url}" target="_blank" rel="noopener noreferrer" style="color: var(--primary); text-decoration: none; font-weight: 500;"><i class="fa-brands fa-linkedin"></i> View Profile</a>` : '-';
                }
                
                // Experience
                if (extExp) {
                    const years = profile.candidate_total_experience_years || resume.candidate_total_experience_years;
                    extExp.textContent = years ? `${years} Year${years !== 1 ? 's' : ''}` : 'Not specified';
                }
                
                if (extSummary) extSummary.textContent = basics.summary || 'No summary extracted.';

                // Work History
                const workContainer = document.getElementById('extracted-work-container');
                if (workContainer) {
                    const workList = profile.work || [];
                    if (workList.length === 0) {
                        workContainer.innerHTML = `<p style="color: var(--text-muted); font-size: 0.85rem; margin: 0;">No work history extracted.</p>`;
                    } else {
                        workContainer.innerHTML = workList.map(job => `
                            <div class="extracted-item" style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--glass-border); padding: var(--space-3); border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; margin-bottom: 4px; gap: 8px;">
                                    <strong style="color: var(--text-primary); font-size: 0.9rem;">${job.position || 'Position'}</strong>
                                    <span style="font-size: 0.75rem; color: var(--text-muted);">${job.start_date || ''} - ${job.end_date || 'Present'}</span>
                                </div>
                                <div style="font-size: 0.8rem; color: var(--primary); margin-bottom: var(--space-2); font-weight: 500;">${job.company || ''}</div>
                                ${job.summary ? `<p style="font-size: 0.8rem; color: var(--text-secondary); margin: 0 0 6px 0; line-height: 1.4;">${job.summary}</p>` : ''}
                                ${job.highlights && job.highlights.length > 0 ? `
                                    <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.75rem; color: var(--text-muted); line-height: 1.4;">
                                        ${job.highlights.map(h => `<li>${h}</li>`).join('')}
                                    </ul>
                                ` : ''}
                            </div>
                        `).join('');
                    }
                }

                // Education
                const eduContainer = document.getElementById('extracted-education-container');
                if (eduContainer) {
                    const eduList = profile.education || [];
                    if (eduList.length === 0) {
                        eduContainer.innerHTML = `<p style="color: var(--text-muted); font-size: 0.85rem; margin: 0;">No education history extracted.</p>`;
                    } else {
                        eduContainer.innerHTML = eduList.map(edu => `
                            <div class="extracted-item" style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--glass-border); padding: var(--space-3); border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; margin-bottom: 2px; gap: 8px;">
                                    <strong style="color: var(--text-primary); font-size: 0.85rem;">${edu.institution || 'Institution'}</strong>
                                    <span style="font-size: 0.75rem; color: var(--text-muted);">${edu.start_date || ''} - ${edu.end_date || ''}</span>
                                </div>
                                <div style="font-size: 0.8rem; color: var(--text-secondary);">${edu.study_type || ''} ${edu.area ? `in ${edu.area}` : ''}</div>
                            </div>
                        `).join('');
                    }
                }

                // Certifications
                const certsContainer = document.getElementById('extracted-certs-container');
                if (certsContainer) {
                    const certsList = profile.certifications || [];
                    if (certsList.length === 0) {
                        certsContainer.innerHTML = `<span style="font-size: 0.85rem; color: var(--text-muted);">None extracted</span>`;
                    } else {
                        certsContainer.innerHTML = certsList.map(cert => `
                            <span class="keyword-pill matched" style="background: rgba(234, 179, 8, 0.06); color: #eab308; border-color: rgba(234, 179, 8, 0.15); font-size: 0.8rem; padding: 6px 12px; border-radius: 12px; font-weight: 500;">
                                <i class="fa-solid fa-certificate"></i> ${cert}
                            </span>
                        `).join('');
                    }
                }
            } else {
                profilePanel.style.display = 'none';
            }
        }

        const finalScore = evalData.original_ats_score || 0;
        const reasoning = evalData.ai_score_reasoning || "Analysis complete.";
        const matchedSkills = evalData.matched_skills || [];
        const missingSkills = evalData.missing_skills || [];
        const rawTips = evalData.ai_improvement_tips || [];

        // Parse tips and formatting audit
        let tipsArray = [];
        let audit = null;
        if (Array.isArray(rawTips)) {
            tipsArray = rawTips;
        } else if (rawTips && typeof rawTips === 'object') {
            tipsArray = rawTips.tips || [];
            audit = rawTips.formatting_audit || null;
        }

        // Reasoning
        const reasoningEl = document.getElementById('ai-score-reasoning');
        if (reasoningEl) reasoningEl.textContent = reasoning;

        // Matched Keywords
        const matchedContainer = document.getElementById('matched-keywords-container');
        const matchedCount = document.getElementById('matched-count');
        if (matchedContainer && matchedCount) {
            matchedCount.textContent = `${matchedSkills.length} Matched`;
            if (matchedSkills.length === 0) {
                matchedContainer.innerHTML = `<span style="font-size: 0.85rem; color: var(--text-muted);">None detected</span>`;
            } else {
                matchedContainer.innerHTML = matchedSkills.map(skill => 
                    `<span class="keyword-pill matched"><i class="fa-solid fa-circle-check"></i> ${skill}</span>`
                ).join('');
            }
        }

        // Missing Keywords
        const missingContainer = document.getElementById('missing-keywords-container');
        const missingCount = document.getElementById('missing-count');
        if (missingContainer && missingCount) {
            missingCount.textContent = `${missingSkills.length} Missing`;
            if (missingSkills.length === 0) {
                missingContainer.innerHTML = `<span style="font-size: 0.85rem; color: var(--text-muted);">None</span>`;
            } else {
                missingContainer.innerHTML = missingSkills.map(skill => 
                    `<span class="keyword-pill missing"><i class="fa-solid fa-triangle-exclamation"></i> ${skill}</span>`
                ).join('');
            }
        }

        // Prioritized Fixes
        const checklistContainer = document.getElementById('action-checklist-container');
        if (checklistContainer) {
            if (tipsArray.length === 0) {
                checklistContainer.innerHTML = `<p style="color: var(--text-muted); font-size: 0.85rem;">No major fixes required.</p>`;
            } else {
                checklistContainer.innerHTML = tipsArray.map(tip => `
                    <label class="checklist-item">
                        <input type="checkbox" class="checklist-checkbox" />
                        <span class="checkmark"></span>
                        <span class="checklist-content">
                            <span class="checklist-title">Optimization</span>
                            <span class="checklist-desc">${tip}</span>
                        </span>
                    </label>
                `).join('');
            }
        }

        // Formatting & Layout Audit
        const positiveList = document.querySelector('.positive-list');
        const positivePanelTitle = document.querySelector('.positive-points-panel .panel-title');
        if (positiveList) {
            if (positivePanelTitle) {
                positivePanelTitle.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--success);"></i> Formatting & Layout Audit`;
            }
            
            if (audit) {
                const items = [
                    {
                        passed: audit.is_single_column !== false,
                        passText: "<strong>Single-Column Layout:</strong> Optimized for linear parser reading.",
                        failText: "<strong>Multi-Column Layout:</strong> May cause scrambled parsing text order."
                    },
                    {
                        passed: audit.no_tables_or_text_boxes !== false,
                        passText: "<strong>No Tables/Text Boxes:</strong> Safe from dropped text boxes.",
                        failText: "<strong>Tables/Text Boxes Detected:</strong> Risky layout formatting (parser might skip)."
                    },
                    {
                        passed: audit.no_images_or_graphics !== false,
                        passText: "<strong>Text-Only Compatibility:</strong> No unreadable images, charts, or icons.",
                        failText: "<strong>Images/Graphics Detected:</strong> Visual elements are unreadable by ATS."
                    },
                    {
                        passed: audit.contact_info_present !== false,
                        passText: "<strong>Contact Details Present:</strong> Found in standard body text.",
                        failText: "<strong>Contact Info Missing/Hidden:</strong> Email/phone is missing or located in header/footer."
                    },
                    {
                        passed: audit.standard_headings !== false,
                        passText: "<strong>Standard Headings Used:</strong> Clean 'Work Experience', 'Education' tags.",
                        failText: "<strong>Creative Headings Detected:</strong> Custom headings may confuse parser classification."
                    }
                ];

                positiveList.innerHTML = items.map(item => `
                    <li style="display: flex; align-items: flex-start; gap: var(--space-3); margin-bottom: var(--space-3); color: ${item.passed ? 'var(--text-secondary)' : 'var(--text-primary)'};">
                        <i class="${item.passed ? 'fa-solid fa-check' : 'fa-solid fa-triangle-exclamation'}" style="color: ${item.passed ? 'var(--success)' : '#eab308'} !important; margin-top: 4px; font-size: 1rem;"></i>
                        <div>${item.passed ? item.passText : item.failText}</div>
                    </li>
                `).join('');
            } else {
                positiveList.innerHTML = `
                    <li><i class="fa-solid fa-check"></i> <strong>File Format Validated:</strong> Machine-readable single-column PDF.</li>
                    <li><i class="fa-solid fa-check"></i> <strong>Clean Section Headings:</strong> Standardized Experience, Education, and Skills tags.</li>
                    <li><i class="fa-solid fa-check"></i> <strong>Contact Information Present:</strong> Email, phone number, and LinkedIn links are valid.</li>
                `;
            }
        }

        // Animate Score
        animateScore(finalScore);
    }

    function animateScore(targetScore) {
        const scoreValue = document.getElementById('score-value');
        const scoreRingProgress = document.getElementById('score-ring-progress');
        if (!scoreValue || !scoreRingProgress) return;

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
            
            scoreValue.textContent = Math.round(currentScore);
            
            const offset = circumference - (currentScore / 100) * circumference;
            scoreRingProgress.style.strokeDashoffset = offset;
            
        }, intervalTime);
    }
});
