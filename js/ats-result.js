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
        const tips = evalData.ai_improvement_tips || [];

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
            if (tips.length === 0) {
                checklistContainer.innerHTML = `<p style="color: var(--text-muted); font-size: 0.85rem;">No major fixes required.</p>`;
            } else {
                checklistContainer.innerHTML = tips.map(tip => `
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
