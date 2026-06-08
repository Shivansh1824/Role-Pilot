document.addEventListener('DOMContentLoaded', () => {
    // Tab Switching Logic
    const tabs = document.querySelectorAll('.nav-tab');
    const panes = document.querySelectorAll('.dashboard-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            // Add active class to clicked
            tab.classList.add('active');
            const targetId = tab.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // ATS Auto-Tailor Simulation
    const optimizeBtn = document.getElementById('optimize-resume-btn');
    if (optimizeBtn) {
        optimizeBtn.addEventListener('click', () => {
            const atsPath = document.getElementById('ats-progress-path');
            const scoreNum = document.getElementById('ats-score-num');
            const feedbackItems = document.querySelectorAll('.feedback-item');
            
            optimizeBtn.disabled = true;
            optimizeBtn.innerHTML = '<div class="spinner" style="display:block; margin: 0 auto;"></div>';
            
            // Add scanning laser effect
            const laser = document.querySelector('.scan-laser');
            if(laser) laser.style.display = 'block';

            setTimeout(() => {
                if(laser) laser.style.display = 'none';
                
                // Animate score from 62 to 96
                let currentScore = 62;
                const targetScore = 96;
                const interval = setInterval(() => {
                    currentScore += 2;
                    if (currentScore >= targetScore) {
                        currentScore = targetScore;
                        clearInterval(interval);
                    }
                    scoreNum.textContent = currentScore;
                    
                    // Update circle stroke
                    // Formula: stroke-dashoffset = 100 - score
                    const offset = 100 - currentScore;
                    atsPath.style.strokeDashoffset = offset;
                    
                    if(currentScore > 80) {
                        atsPath.style.stroke = 'var(--success)';
                        scoreNum.style.color = 'var(--success)';
                    }
                }, 50);

                // Change feedback
                feedbackItems.forEach(item => item.style.display = 'none');
                const atsFeedback = document.querySelector('.ats-feedback');
                if(atsFeedback) {
                    atsFeedback.innerHTML = `
                        <div class="feedback-item success" style="color: var(--success);"><i class="fa-solid fa-circle-check"></i> Added React & Node.js keywords</div>
                        <div class="feedback-item success" style="color: var(--success);"><i class="fa-solid fa-circle-check"></i> Optimized impact verbs (e.g., 'Spearheaded')</div>
                    `;
                }

                optimizeBtn.innerHTML = '<i class="fa-solid fa-check"></i> Optimized';
                optimizeBtn.style.background = 'var(--success)';
            }, 1500);
        });
    }

    // Coding Arena Run & Submit Simulation
    const runCodeBtn = document.getElementById('run-code-btn');
    const xpToast = document.getElementById('xp-toast');
    const userLbXp = document.getElementById('user-lb-xp');
    const userLbRank = document.getElementById('user-lb-rank');
    
    if (runCodeBtn) {
        runCodeBtn.addEventListener('click', () => {
            runCodeBtn.disabled = true;
            runCodeBtn.innerHTML = '<div class="spinner" style="display:block; margin: 0 auto; border-top-color: white;"></div>';
            
            setTimeout(() => {
                runCodeBtn.innerHTML = '<i class="fa-solid fa-check-double"></i> All Tests Passed!';
                
                // Show XP Toast
                if(xpToast) {
                    xpToast.classList.add('show');
                    setTimeout(() => {
                        xpToast.classList.remove('show');
                    }, 3000);
                }

                // Update global XP counter
                const topXpEl = document.querySelector('.user-xp');
                if (topXpEl) topXpEl.innerHTML = '<i class="fa-solid fa-star"></i> 2,500 XP (Level 12)';
                if (userLbXp) userLbXp.innerHTML = '2,500 XP';
                if (userLbRank) {
                    userLbRank.innerHTML = '<i class="fa-solid fa-caret-up" style="color:var(--success)"></i> 138';
                }
                
                setTimeout(() => {
                    runCodeBtn.disabled = false;
                    runCodeBtn.innerHTML = '<i class="fa-solid fa-play"></i> Run & Submit';
                }, 4000);
            }, 1200);
        });
    }
});
