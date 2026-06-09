document.addEventListener('DOMContentLoaded', () => {
    // Tab Switching Logic
    const tabs = document.querySelectorAll('.nav-tab');
    const panes = document.querySelectorAll('.dashboard-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            // Remove active class from all
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            // Add active class to clicked
            tab.classList.add('active');
            const targetId = tab.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
            
            // If it's a real user click, stop auto-play
            if (e.isTrusted && typeof stopAutoPlay === 'function') {
                stopAutoPlay();
            }
        });
    });

    // Dashboard Auto-Play Feature
    const dashboardPreview = document.querySelector('.dashboard-preview-window');
    const cursor = document.querySelector('.simulated-cursor');
    let autoPlayInterval;
    let currentTabIndex = 0;
    let isUserInteracted = false;

    const stopAutoPlay = () => {
        isUserInteracted = true;
        clearInterval(autoPlayInterval);
        if (cursor) {
            cursor.style.opacity = '0'; // Hide cursor when user takes over
        }
    };

    if (dashboardPreview && tabs.length > 0 && cursor) {
        // Show cursor initially
        setTimeout(() => {
            if (!isUserInteracted) cursor.style.opacity = '1';
        }, 1000);

        const simulateClick = (index) => {
            if (isUserInteracted) return;

            const targetTab = tabs[index];
            
            // Move cursor to tab
            const tabRect = targetTab.getBoundingClientRect();
            const containerRect = dashboardPreview.getBoundingClientRect();
            
            // Calculate relative position based on container
            const top = tabRect.top - containerRect.top + (tabRect.height / 2);
            const left = tabRect.left - containerRect.left + (tabRect.width / 2);
            
            cursor.style.top = `${top}px`;
            cursor.style.left = `${left}px`;
            
            // Simulate click down effect on cursor
            setTimeout(() => {
                if (isUserInteracted) return;
                cursor.style.transform = 'scale(0.8)';
                targetTab.click(); // Trigger actual tab switch logic
                
                // Release click
                setTimeout(() => {
                    if (isUserInteracted) return;
                    cursor.style.transform = 'scale(1)';
                    // Move cursor slightly away after clicking to not obscure the active tab
                    cursor.style.top = `${top + 40}px`;
                    cursor.style.left = `${left + 40}px`;
                }, 200);
                
            }, 800); // 800ms matches the CSS transition duration
        };

        const startAutoPlay = () => {
            autoPlayInterval = setInterval(() => {
                currentTabIndex = (currentTabIndex + 1) % tabs.length;
                simulateClick(currentTabIndex);
            }, 4500); // 4.5 seconds per tab
            
            // Initial click after 2 seconds
            setTimeout(() => {
                if (!isUserInteracted) {
                    currentTabIndex = (currentTabIndex + 1) % tabs.length;
                    simulateClick(currentTabIndex);
                }
            }, 2000);
        };

        // Stop on any interaction
        dashboardPreview.addEventListener('mouseenter', stopAutoPlay);
        dashboardPreview.addEventListener('touchstart', stopAutoPlay);

        startAutoPlay();
    }

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
