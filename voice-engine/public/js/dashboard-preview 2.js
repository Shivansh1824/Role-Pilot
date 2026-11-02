document.addEventListener('DOMContentLoaded', () => {
    // ─── TAB SWITCHING LOGIC ───────────────────────────────────────────────
    const tabs = document.querySelectorAll('.nav-tab');
    const panes = document.querySelectorAll('.dashboard-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const targetId = tab.getAttribute('data-target');
            const targetPane = document.getElementById(targetId);
            if (targetPane) targetPane.classList.add('active');

            if (e.isTrusted && typeof stopAutoPlay === 'function') {
                stopAutoPlay();
            }
        });
    });

    // ─── INTERACTIVE TRACK SELECTOR (Tech, Product, Sales, HR) ────────────
    const trackPills = document.querySelectorAll('.demo-track-pill');
    const panelRosterContainer = document.getElementById('demo-roster-display');
    const dialogueSpeaker = document.getElementById('demo-active-speaker');
    const dialogueText = document.getElementById('demo-active-speech');

    const TRACK_DATA = {
        tech: {
            roster: [
                { name: 'David', role: 'Hiring Manager (Chair)', cls: 'ava-david' },
                { name: 'Alex', role: 'Technical Lead', cls: 'ava-alex' },
                { name: 'Mark', role: 'Product Manager', cls: 'ava-mark' }
            ],
            speaker: '[Alex (Technical Lead)]',
            text: '"Let\'s analyze write contention in your PostgreSQL microservice. How did you structure your transaction isolation and connection pooling to prevent deadlocks?"'
        },
        product: {
            roster: [
                { name: 'David', role: 'Hiring Manager (Chair)', cls: 'ava-david' },
                { name: 'Mark', role: 'Product Lead', cls: 'ava-mark' },
                { name: 'Alex', role: 'Technical Lead', cls: 'ava-alex' }
            ],
            speaker: '[Mark (Product Lead)]',
            text: '"If latency spikes to 800ms during peak checkout hours, how do you balance caching aggressively against product inventory consistency for high-value SKUs?"'
        },
        sales: {
            roster: [
                { name: 'David', role: 'Hiring Manager (Chair)', cls: 'ava-david' },
                { name: 'Marcus', role: 'Sales Director', cls: 'ava-marcus' },
                { name: 'Sean', role: 'VP of Sales', cls: 'ava-sean' }
            ],
            speaker: '[Marcus (Sales Director)]',
            text: '"Walk me through your MEDDIC qualification process when a 6-figure enterprise deal stalls at security review in the final two weeks of the quarter."'
        },
        hr: {
            roster: [
                { name: 'David', role: 'Hiring Manager (Chair)', cls: 'ava-david' },
                { name: 'Sam', role: 'Culture Lead', cls: 'ava-sam' },
                { name: 'Ethan', role: 'HR Director', cls: 'ava-ethan' }
            ],
            speaker: '[Ethan (HR Director)]',
            text: '"How do you navigate mediation when a senior principal engineer and an engineering manager have an irreconcilable conflict on delivery commitments?"'
        }
    };

    if (trackPills.length > 0 && panelRosterContainer) {
        trackPills.forEach(pill => {
            pill.addEventListener('click', () => {
                trackPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                const selectedTrack = pill.getAttribute('data-track') || 'tech';
                const data = TRACK_DATA[selectedTrack];
                if (!data) return;

                // Update roster avatars
                panelRosterContainer.innerHTML = data.roster.map(r => `
                    <div class="panelist-row">
                        <div class="panelist-mini-avatar ${r.cls}">${r.name.slice(0, 2)}</div>
                        <div class="panelist-info-text">
                            <span class="panelist-name-role">${r.name} • ${r.role}</span>
                        </div>
                    </div>
                `).join('');

                // Update speech dialogue
                if (dialogueSpeaker) dialogueSpeaker.textContent = data.speaker;
                if (dialogueText) dialogueText.textContent = data.text;
            });
        });
    }

    // ─── INTERACTIVE BARGE-IN SIMULATION ──────────────────────────────────
    const triggerBargeinBtn = document.getElementById('trigger-bargein-demo');
    const bargeinStatus = document.getElementById('bargein-live-status');
    const bargeinYieldTag = document.getElementById('bargein-yield-tag');
    const bargeinVoiceWave = document.getElementById('bargein-wave');

    if (triggerBargeinBtn && bargeinStatus) {
        triggerBargeinBtn.addEventListener('click', () => {
            triggerBargeinBtn.disabled = true;
            bargeinStatus.innerHTML = '<span style="color:#ef4444;"><i class="fa-solid fa-microphone"></i> Candidate speaking mid-sentence...</span>';
            if (bargeinVoiceWave) bargeinVoiceWave.style.opacity = '1';

            setTimeout(() => {
                bargeinStatus.innerHTML = '<span style="color:#34d399;"><i class="fa-solid fa-bolt"></i> 160ms VAD Triggered • Alex Yielded Instantly</span>';
                if (bargeinYieldTag) {
                    bargeinYieldTag.style.display = 'inline-block';
                    bargeinYieldTag.classList.add('animate-pulse');
                }

                setTimeout(() => {
                    bargeinStatus.innerHTML = '<span style="color:var(--text-muted);"><i class="fa-solid fa-circle-check"></i> Turn smoothly handed over to Candidate</span>';
                    triggerBargeinBtn.disabled = false;
                }, 1800);
            }, 600);
        });
    }

    // ─── DASHBOARD AUTO-PLAY FEATURE ──────────────────────────────────────
    const dashboardPreview = document.querySelector('.dashboard-preview-window');
    const cursor = document.querySelector('.simulated-cursor');
    let autoPlayInterval;
    let currentTabIndex = 0;
    let isUserInteracted = false;

    const stopAutoPlay = () => {
        isUserInteracted = true;
        clearInterval(autoPlayInterval);
        if (cursor) cursor.style.opacity = '0';
    };

    if (dashboardPreview && tabs.length > 0 && cursor) {
        setTimeout(() => {
            if (!isUserInteracted) cursor.style.opacity = '1';
        }, 1000);

        const simulateClick = (index) => {
            if (isUserInteracted) return;
            const targetTab = tabs[index];
            if (!targetTab) return;
            const tabRect = targetTab.getBoundingClientRect();
            const containerRect = dashboardPreview.getBoundingClientRect();

            const top = tabRect.top - containerRect.top + (tabRect.height / 2);
            const left = tabRect.left - containerRect.left + (tabRect.width / 2);

            cursor.style.top = `${top}px`;
            cursor.style.left = `${left}px`;

            setTimeout(() => {
                if (isUserInteracted) return;
                cursor.style.transform = 'scale(0.8)';
                targetTab.click();

                setTimeout(() => {
                    if (isUserInteracted) return;
                    cursor.style.transform = 'scale(1)';
                    cursor.style.top = `${top + 30}px`;
                    cursor.style.left = `${left + 30}px`;
                }, 200);
            }, 800);
        };

        const startAutoPlay = () => {
            autoPlayInterval = setInterval(() => {
                currentTabIndex = (currentTabIndex + 1) % tabs.length;
                simulateClick(currentTabIndex);
            }, 5500);
        };

        dashboardPreview.addEventListener('mouseenter', stopAutoPlay);
        dashboardPreview.addEventListener('touchstart', stopAutoPlay);
        startAutoPlay();
    }
});
