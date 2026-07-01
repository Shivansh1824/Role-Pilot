document.addEventListener('DOMContentLoaded', async () => {
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
