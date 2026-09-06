// Role-Pilot Candidate Dashboard Controller
// Strictly Light Theme, Modular, Scorecards & Full Transcript Modal

const SCORECARDS_DATA = [
    {
        id: "1",
        title: "Full-Stack Systems Architecture Panel",
        track: "Full-Stack & Systems",
        date: "Jun 12, 2026",
        duration: "24 mins",
        score: 91,
        verdict: "Strong Hire",
        panelistsText: "David Chen (Staff Architect) &bull; Alex Rivera (Hiring Mgr) &bull; Marcus Vance (Bar Raiser)",
        panelists: [
            {
                name: "David Chen",
                role: "Staff Systems Architect",
                score: "93/100",
                verdict: "Strong Hire",
                feedback: "Demonstrated master-level intuition on distributed consensus, cache invalidation race conditions, and database sharding. Handled live pushback on read replicas exceptionally well.",
                quote: "When pressed on WebSocket reconnect backoff and memory footprint during regional failovers, Shivansh broke down the jittered exponential backoff strategy with remarkable clarity."
            },
            {
                name: "Alex Rivera",
                role: "Hiring Manager",
                score: "90/100",
                verdict: "Hire",
                feedback: "High engineering empathy and delivery focus. Clearly understood developer velocity trade-offs and maintenance costs versus microservices premature splitting.",
                quote: "Shivansh articulated how technical debt impacts sprint velocity and proposed realistic milestone-based refactoring phases."
            },
            {
                name: "Marcus Vance",
                role: "Staff Bar Raiser",
                score: "90/100",
                verdict: "Strong Hire",
                feedback: "Maintained poise during stress questioning. No defensive posture; embraced architectural edge cases with curiosity and structured problem-solving.",
                quote: "Exceptional composure when I challenged his schema design. He paused, analyzed the bottleneck, and iterated on the spot without hesitation."
            }
        ],
        rubrics: [
            { category: "STAR Behavioral Structure", score: "94%", note: "Crisp Situation framing with quantified Results and business impact metrics." },
            { category: "System Scale & Trade-offs", score: "92%", note: "Explicitly compared Redis pub/sub vs Kafka event bus operational overheads." },
            { category: "Agora Real-Time Voice Cadence", score: "95%", note: "Direct, confident vocal delivery with sub-250ms conversational latency." }
        ],
        transcript: [
            { speaker: "David Chen (Staff Architect)", type: "panelist", time: "00:15", text: "Welcome Shivansh. Today we are designing the real-time notification engine for 10 million concurrent active users. How would you structure connection pooling and message broker routing?" },
            { speaker: "Candidate (Shivansh)", type: "candidate", time: "00:42", text: "Thank you, David. To achieve resilient concurrency at 10M connections, I would decouple edge stateful WebSocket termination nodes from backend event dispatchers. We can deploy Envoy edge gateways as connection terminators, streaming raw events into partitioned Kafka topics with a distributed Redis cluster maintaining ephemeral user connection maps." },
            { speaker: "David Chen (Staff Architect)", type: "panelist", time: "02:10", text: "What happens during a sudden thundering herd reconnection if an edge node drops 200,000 sockets simultaneously?" },
            { speaker: "Candidate (Shivansh)", type: "candidate", time: "02:35", text: "We mitigate that through client-side full jitter exponential backoff with randomized seed delays, alongside leaky-bucket rate limiting at the API gateway layer to prevent downstream database saturation." },
            { speaker: "Marcus Vance (Bar Raiser)", type: "panelist", time: "05:18", text: "Tell me about a time an architectural decision you advocated for caused an unforeseen production incident. How did you handle stakeholder communication?" },
            { speaker: "Candidate (Shivansh)", type: "candidate", time: "05:50", text: "In my previous role, we rolled out aggressive query caching without considering cross-region replication lag, causing stale checkout balances for about 18 minutes. I immediately declared a P1 incident, reverted the cache TTL to zero, and kept engineering leads updated every 5 minutes on our war room channel." },
            { speaker: "Alex Rivera (Hiring Mgr)", type: "panelist", time: "12:30", text: "That level of transparent ownership is exactly what our engineering culture values." }
        ]
    },
    {
        id: "2",
        title: "Strategic Product & Execution Panel",
        track: "Product Architecture",
        date: "Jun 08, 2026",
        duration: "19 mins",
        score: 86,
        verdict: "Hire",
        panelistsText: "Mark Davis (Staff Product Lead) &bull; Marcus Vance (Bar Raiser)",
        panelists: [
            {
                name: "Mark Davis",
                role: "Staff Product Lead",
                score: "87/100",
                verdict: "Hire",
                feedback: "Strong customer-backwards prioritization framework. Evaluated feature trade-offs based on user cohort retention rather than superficial vanity metrics.",
                quote: "He mapped telemetry signals directly to user friction points, showing high maturity in product telemetry instrumentation."
            },
            {
                name: "Marcus Vance",
                role: "Staff Bar Raiser",
                score: "85/100",
                verdict: "Hire",
                feedback: "Good structured thinking when defining success KPIs. Pushed back effectively against ambiguous product requirements.",
                quote: "Asked sharp clarifying questions before committing to an execution roadmap."
            }
        ],
        rubrics: [
            { category: "Product Sense & Vision", score: "88%", note: "Formulated clear north-star customer metrics and MVP boundaries." },
            { category: "Cross-Functional Alignment", score: "85%", note: "Demonstrated empathy between engineering capacity and product release deadlines." },
            { category: "Clarity of Thought", score: "89%", note: "Structured answers with concise top-line conclusions first." }
        ],
        transcript: [
            { speaker: "Mark Davis (Staff Product)", type: "panelist", time: "00:20", text: "Suppose our executive leadership wants to double our enterprise feature set this quarter, but technical debt is causing a 12% sprint failure rate. How do you manage this roadmap conflict?" },
            { speaker: "Candidate (Shivansh)", type: "candidate", time: "00:55", text: "I would categorize technical debt items by business blast radius: bugs that degrade reliability and churn customers versus internal developer friction. I'd propose allocating 25% of each sprint capacity specifically to high-risk stability fixes, presenting leadership with data on how reliability directly preserves ARR." },
            { speaker: "Marcus Vance (Bar Raiser)", type: "panelist", time: "04:10", text: "How would you measure whether that 25% allocation actually delivered business value after 60 days?" },
            { speaker: "Candidate (Shivansh)", type: "candidate", time: "04:40", text: "By tracking mean time to recovery (MTTR), customer-reported incident count, and sprint velocity variance before and after the fixes." }
        ]
    },
    {
        id: "3",
        title: "Enterprise Cloud & Security Panel",
        track: "Enterprise Cloud & Infra",
        date: "Jun 03, 2026",
        duration: "22 mins",
        score: 89,
        verdict: "Strong Hire",
        panelistsText: "David Chen (Staff Architect) &bull; Marcus Vance (Bar Raiser)",
        panelists: [
            {
                name: "David Chen",
                role: "Staff Cloud Architect",
                score: "91/100",
                verdict: "Strong Hire",
                feedback: "Deep understanding of zero-trust network architectures, IAM role principle of least privilege, and multi-region failover automation.",
                quote: "Explained automated secret rotation and mTLS between microservices with surgical accuracy."
            },
            {
                name: "Marcus Vance",
                role: "Staff Bar Raiser",
                score: "87/100",
                verdict: "Hire",
                feedback: "Strong incident response philosophy. Understood post-mortem blame-free culture and root cause remediation.",
                quote: "Addressed disaster recovery RTO and RPO trade-offs without skipping security compliance."
            }
        ],
        rubrics: [
            { category: "Cloud Security & Zero-Trust", score: "92%", note: "Mastery over KMS encryption at rest and in transit." },
            { category: "Cost & Resource Optimization", score: "88%", note: "Outlined spot instance lifecycle management and auto-scaling triggers." }
        ],
        transcript: [
            { speaker: "David Chen (Staff Cloud)", type: "panelist", time: "00:30", text: "How would you enforce strict least-privilege access across 50 microservices running on Kubernetes across AWS multi-accounts?" },
            { speaker: "Candidate (Shivansh)", type: "candidate", time: "01:05", text: "I would enforce IAM Roles for Service Accounts (IRSA) with fine-grained temporary STS credentials, combined with Istio service mesh for mutual TLS and Kubernetes NetworkPolicies for namespace isolation." }
        ]
    },
    {
        id: "4",
        title: "Leadership & Behavioral Culture Panel",
        track: "Leadership & Culture",
        date: "May 28, 2026",
        duration: "18 mins",
        score: 84,
        verdict: "Hire",
        panelistsText: "Alex Rivera (Hiring Mgr) &bull; Mark Davis (VP People & Culture)",
        panelists: [
            {
                name: "Alex Rivera",
                role: "Hiring Manager",
                score: "85/100",
                verdict: "Hire",
                feedback: "Great mentorship philosophy. Demonstrated how he leveled up junior engineers through systematic 1-on-1 code walkthroughs and psychological safety.",
                quote: "Described coaching an engineer through a difficult outage with constructive feedback rather than blame."
            },
            {
                name: "Mark Davis",
                role: "VP People & Culture",
                score: "83/100",
                verdict: "Hire",
                feedback: "Aligned with collaborative engineering values. Handles interpersonal conflict with active listening.",
                quote: "Expressed genuine passion for building inclusive and high-autonomy teams."
            }
        ],
        rubrics: [
            { category: "Mentorship & Team Growth", score: "88%", note: "Concrete examples of onboarding junior engineers to production autonomy." },
            { category: "Constructive Conflict Resolution", score: "84%", note: "De-escalated cross-team roadmap tensions diplomatically." }
        ],
        transcript: [
            { speaker: "Mark Davis (VP People)", type: "panelist", time: "00:25", text: "Tell me about a time you strongly disagreed with a senior colleague on a critical technical direction. How did you resolve it?" },
            { speaker: "Candidate (Shivansh)", type: "candidate", time: "00:58", text: "We disagreed on whether to migrate our legacy monolith to microservices versus modular monolith. I proposed a 2-day proof of concept comparing build complexity, deployment overhead, and database isolation. The empirical data showed a modular monolith gave us 90% of the isolation benefits with zero network hop latency, resolving the debate amicably." }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Profile Dropdown Toggle
    const profileTrigger = document.getElementById('profile-trigger');
    const profileDropdown = document.getElementById('profile-dropdown');
    
    if (profileTrigger && profileDropdown) {
        profileTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            profileDropdown.classList.toggle('show');
        });
        
        document.addEventListener('click', (e) => {
            if (!profileDropdown.contains(e.target) && e.target !== profileTrigger) {
                profileDropdown.classList.remove('show');
            }
        });
    }

    // 2. Mobile Hamburger Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const appHeader = document.querySelector('.app-header');
    
    if (mobileMenuBtn && appHeader) {
        mobileMenuBtn.addEventListener('click', () => {
            appHeader.classList.toggle('mobile-nav-active');
            const icon = mobileMenuBtn.querySelector('i');
            if (appHeader.classList.contains('mobile-nav-active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 3. Render Scorecards List
    const scorecardsContainer = document.getElementById('scorecards-list');
    let currentScorecard = SCORECARDS_DATA[0];
    let activeModalTab = 'feedback';

    function renderScorecards() {
        if (!scorecardsContainer) return;
        scorecardsContainer.innerHTML = SCORECARDS_DATA.map(item => `
            <div class="scorecard-card-row">
                <div class="scorecard-main-info">
                    <h3 class="scorecard-title">${item.title}</h3>
                    <div class="scorecard-meta-line">
                        <span><i class="fa-regular fa-calendar" style="color: var(--primary);"></i> ${item.date}</span>
                        <span>&bull;</span>
                        <span><i class="fa-regular fa-clock"></i> ${item.duration}</span>
                        <span>&bull;</span>
                        <span><i class="fa-solid fa-users"></i> ${item.panelistsText}</span>
                    </div>
                </div>
                <div class="scorecard-score-block">
                    <div class="scorecard-numeric-badge">
                        <div class="scorecard-big-number">${item.score}<span style="font-size: 0.9rem; color: var(--text-muted);">/100</span></div>
                        <div class="scorecard-verdict-tag">${item.verdict}</div>
                    </div>
                    <button class="btn btn-secondary-outline btn-sm view-scorecard-btn" data-id="${item.id}">
                        <i class="fa-solid fa-file-lines" style="margin-right: 4px;"></i> View Scorecard
                    </button>
                </div>
            </div>
        `).join('');

        // Attach click listeners to "View Scorecard" buttons
        document.querySelectorAll('.view-scorecard-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                const found = SCORECARDS_DATA.find(s => s.id === id);
                if (found) {
                    openScorecardModal(found);
                }
            });
        });
    }

    renderScorecards();

    // 4. Modal Interactions
    const modalBackdrop = document.getElementById('scorecard-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalTitle = document.getElementById('modal-panel-title');
    const modalSubtitle = document.getElementById('modal-panel-subtitle');
    const modalContentArea = document.getElementById('modal-content-area');
    const modalTabBtns = document.querySelectorAll('.modal-tab-btn');

    function openScorecardModal(scorecard) {
        currentScorecard = scorecard;
        activeModalTab = 'feedback';
        modalTitle.textContent = scorecard.title;
        modalSubtitle.innerHTML = `Conducted on ${scorecard.date} &bull; Duration: ${scorecard.duration} &bull; Committee Consensus: <strong>${scorecard.verdict} (${scorecard.score}/100)</strong>`;

        // Reset tabs
        modalTabBtns.forEach(btn => {
            if (btn.getAttribute('data-tab') === 'feedback') {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        renderModalBody();
        modalBackdrop.classList.add('active');
        modalBackdrop.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeScorecardModal() {
        modalBackdrop.classList.remove('active');
        modalBackdrop.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeScorecardModal);
    }

    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) {
                closeScorecardModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
            closeScorecardModal();
        }
    });

    // Tab buttons inside modal
    modalTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modalTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeModalTab = btn.getAttribute('data-tab');
            renderModalBody();
        });
    });

    function renderModalBody() {
        if (!modalContentArea || !currentScorecard) return;

        if (activeModalTab === 'feedback') {
            // Rubrics & Panelist evaluations
            modalContentArea.innerHTML = `
                <!-- Rubric Badges Summary -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; margin-bottom: 8px;">
                    ${currentScorecard.rubrics.map(r => `
                        <div style="background: rgba(124, 58, 237, 0.04); border: 1px solid rgba(124, 58, 237, 0.1); border-radius: 12px; padding: 12px 14px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                                <span style="font-weight: 700; font-size: 0.85rem; color: var(--text-primary);">${r.category}</span>
                                <span style="font-weight: 800; font-size: 0.9rem; color: var(--primary);">${r.score}</span>
                            </div>
                            <p style="margin: 0; font-size: 0.78rem; color: var(--text-muted); line-height: 1.4;">${r.note}</p>
                        </div>
                    `).join('')}
                </div>

                <h4 style="font-size: 1rem; font-weight: 800; margin: 10px 0 6px 0; color: var(--text-primary); display: flex; align-items: center; gap: 8px;">
                    <i class="fa-solid fa-user-group" style="color: var(--primary);"></i> Panelist Evaluations & Direct Feedback
                </h4>

                ${currentScorecard.panelists.map(p => `
                    <div class="panelist-eval-block">
                        <div class="panelist-eval-header">
                            <div class="panelist-eval-name">
                                <i class="fa-solid fa-circle-user" style="color: var(--primary); font-size: 1.2rem;"></i>
                                <span>${p.name} <span style="font-size: 0.8rem; font-weight: 500; color: var(--text-muted);">(${p.role})</span></span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <span style="font-weight: 800; font-size: 0.95rem; color: var(--text-primary);">${p.score}</span>
                                <span style="font-size: 0.72rem; font-weight: 700; color: var(--success); background: rgba(16, 185, 129, 0.12); padding: 2px 8px; border-radius: 12px;">${p.verdict}</span>
                            </div>
                        </div>
                        <p style="margin: 0; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">${p.feedback}</p>
                        <div class="eval-quote-box">
                            <i class="fa-solid fa-quote-left" style="opacity: 0.4; margin-right: 6px;"></i> "${p.quote}"
                        </div>
                    </div>
                `).join('')}
            `;
        } else {
            // Full chronological transcript
            modalContentArea.innerHTML = `
                <div class="transcript-stream">
                    ${currentScorecard.transcript.map(msg => `
                        <div class="transcript-message-bubble ${msg.type}">
                            <div class="transcript-bubble-meta">
                                <span>${msg.type === 'panelist' ? '<i class="fa-solid fa-user-tie"></i>' : '<i class="fa-solid fa-microphone"></i>'} ${msg.speaker}</span>
                                <span>&bull;</span>
                                <span>${msg.time}</span>
                            </div>
                            <div style="color: var(--text-primary);">${msg.text}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
    }

    // 5. Supabase Initialization Hook
    const initSupabaseSession = async () => {
        try {
            const db = await import('./supabase-client.js').then(m => m.getSupabaseClient());
            
            const { data: { session }, error } = await db.auth.getSession();
            if (error || !session) {
                window.location.href = 'login.html';
                return;
            }

            // Clean OAuth access_token hash from address bar if present
            if (window.location.hash && window.location.hash.includes('access_token')) {
                history.replaceState(null, '', window.location.pathname + window.location.search);
            }
            
            // Fetch profile data
            const { data: profile } = await db
                .from('profiles')
                .select('username, avatar_url, full_name, target_role, experience_level')
                .eq('id', session.user.id)
                .maybeSingle();

            if (!profile || !profile.username || !profile.avatar_url || !profile.target_role || !profile.experience_level) {
                window.location.href = 'form.html';
                return;
            }
            
            // Populate user details:
            const fullName = profile.full_name || session.user.user_metadata?.full_name || "User";
            const firstName = fullName.split(' ')[0];
            const initials = fullName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
            
            const firstnameEl = document.getElementById('user-firstname');
            if (firstnameEl) firstnameEl.textContent = firstName;
            
            const triggerEl = document.getElementById('profile-trigger');
            if (triggerEl) {
                if (profile.avatar_url && profile.avatar_url !== 'custom_placeholder') {
                    triggerEl.innerHTML = `<img src="${profile.avatar_url}" style="width:100%; height:100%; border-radius:50%; object-fit:contain;" alt="${firstName}">`;
                } else {
                    triggerEl.textContent = initials;
                }
            }
            
            const subtitleEl = document.getElementById('greeting-subtitle');
            if (subtitleEl) {
                subtitleEl.innerHTML = `Target Role: ${profile.target_role} &bull; Current Level: ${profile.experience_level.charAt(0).toUpperCase() + profile.experience_level.slice(1)}`;
            }

            // Handle Logout
            const logoutBtn = document.getElementById('logout-btn');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', async (e) => {
                    e.preventDefault();
                    await db.auth.signOut();
                    window.location.href = 'index.html';
                });
            }
            
            console.log("Supabase session successfully initialized on Dashboard.");
        } catch (err) {
            console.error("Supabase Init Error:", err);
            window.location.href = 'login.html';
        }
    };
    
    initSupabaseSession();
});
