// Role-Pilot Candidate Dashboard Controller
// Strictly Light Theme, Modular, Rich Card System & Full Transcript Modal

const SCORECARDS_DATA = [
    {
        id: "1",
        category: "systems",
        title: "Full-Stack Systems Architecture Panel",
        track: "Full-Stack & Systems",
        trackIcon: "fa-solid fa-laptop-code",
        trackGradient: "linear-gradient(90deg, #7c3aed, #6366f1)",
        badgeBg: "rgba(124, 58, 237, 0.1)",
        badgeColor: "#7c3aed",
        date: "Jun 12, 2026",
        duration: "24 mins",
        score: 91,
        verdict: "Strong Hire",
        verdictBg: "rgba(16, 185, 129, 0.12)",
        verdictColor: "#059669",
        consensus: "3/3 Committee Consensus",
        panelistsRoster: [
            { initials: "DC", name: "David Chen", role: "Staff Architect", color: "#7c3aed" },
            { initials: "AR", name: "Alex Rivera", role: "Hiring Mgr", color: "#0284c7" },
            { initials: "MV", name: "Marcus Vance", role: "Bar Raiser", color: "#d97706" }
        ],
        rubricMini: [
            { label: "STAR Structure", val: 94, color: "#06b6d4" },
            { label: "Systems Scale & Concurrency", val: 92, color: "#7c3aed" },
            { label: "Voice Cadence & Fluency", val: 95, color: "#f59e0b" }
        ],
        highlightQuote: "When pressed on WebSocket reconnect backoff and memory footprint during regional failovers, Shivansh broke down the jittered exponential backoff strategy with remarkable clarity.",
        quoteAuthor: "David Chen (Staff Architect)",
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
        category: "product",
        title: "Strategic Product & Execution Panel",
        track: "Product Architecture",
        trackIcon: "fa-solid fa-cubes",
        trackGradient: "linear-gradient(90deg, #06b6d4, #0284c7)",
        badgeBg: "rgba(6, 182, 212, 0.1)",
        badgeColor: "#0891b2",
        date: "Jun 08, 2026",
        duration: "19 mins",
        score: 86,
        verdict: "Hire",
        verdictBg: "rgba(6, 182, 212, 0.12)",
        verdictColor: "#0284c7",
        consensus: "2/2 Committee Consensus",
        panelistsRoster: [
            { initials: "MD", name: "Mark Davis", role: "Staff Product Lead", color: "#0891b2" },
            { initials: "MV", name: "Marcus Vance", role: "Bar Raiser", color: "#d97706" }
        ],
        rubricMini: [
            { label: "Product Sense & Vision", val: 88, color: "#06b6d4" },
            { label: "Cross-Functional Alignment", val: 85, color: "#0284c7" },
            { label: "Clarity of Thought", val: 89, color: "#7c3aed" }
        ],
        highlightQuote: "He mapped telemetry signals directly to user friction points, showing high maturity in product telemetry instrumentation and customer retention focus.",
        quoteAuthor: "Mark Davis (Staff Product Lead)",
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
        category: "systems",
        title: "Enterprise Cloud & Security Panel",
        track: "Enterprise Cloud & Infra",
        trackIcon: "fa-solid fa-cloud-bolt",
        trackGradient: "linear-gradient(90deg, #10b981, #059669)",
        badgeBg: "rgba(16, 185, 129, 0.1)",
        badgeColor: "#059669",
        date: "Jun 03, 2026",
        duration: "22 mins",
        score: 89,
        verdict: "Strong Hire",
        verdictBg: "rgba(16, 185, 129, 0.12)",
        verdictColor: "#059669",
        consensus: "2/2 Committee Consensus",
        panelistsRoster: [
            { initials: "DC", name: "David Chen", role: "Staff Cloud Architect", color: "#10b981" },
            { initials: "MV", name: "Marcus Vance", role: "Bar Raiser", color: "#d97706" }
        ],
        rubricMini: [
            { label: "Zero-Trust Architecture", val: 92, color: "#10b981" },
            { label: "Cost & Auto-Scaling", val: 88, color: "#059669" },
            { label: "Disaster Recovery", val: 89, color: "#06b6d4" }
        ],
        highlightQuote: "Explained automated secret rotation and mTLS between microservices with surgical accuracy, balancing strict zero-trust with low inter-service latency.",
        quoteAuthor: "David Chen (Staff Cloud Architect)",
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
        category: "leadership",
        title: "Leadership & Behavioral Culture Panel",
        track: "Leadership & Culture",
        trackIcon: "fa-solid fa-people-group",
        trackGradient: "linear-gradient(90deg, #f59e0b, #d97706)",
        badgeBg: "rgba(245, 158, 11, 0.1)",
        badgeColor: "#d97706",
        date: "May 28, 2026",
        duration: "18 mins",
        score: 84,
        verdict: "Hire",
        verdictBg: "rgba(245, 158, 11, 0.12)",
        verdictColor: "#d97706",
        consensus: "2/2 Committee Consensus",
        panelistsRoster: [
            { initials: "AR", name: "Alex Rivera", role: "Hiring Manager", color: "#0284c7" },
            { initials: "MD", name: "Mark Davis", role: "VP People & Culture", color: "#d97706" }
        ],
        rubricMini: [
            { label: "Mentorship & Growth", val: 88, color: "#f59e0b" },
            { label: "Conflict Resolution", val: 84, color: "#ea580c" },
            { label: "Culture Alignment", val: 85, color: "#7c3aed" }
        ],
        highlightQuote: "Described coaching an engineer through a difficult outage with constructive feedback rather than blame, exemplifying high psychological safety.",
        quoteAuthor: "Alex Rivera (Hiring Manager)",
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

    // 3. Render Visual Scorecard Cards Grid
    const scorecardsGrid = document.getElementById('scorecards-grid');
    const filterButtons = document.querySelectorAll('.scorecard-filter-btn');
    let currentScorecard = SCORECARDS_DATA[0];
    let activeModalTab = 'feedback';
    let currentFilter = 'all';

    function renderScorecards(filter = 'all') {
        if (!scorecardsGrid) return;

        const filtered = filter === 'all' 
            ? SCORECARDS_DATA 
            : SCORECARDS_DATA.filter(item => item.category === filter);

        scorecardsGrid.innerHTML = filtered.map(item => `
            <article class="scorecard-visual-card" style="--card-track-gradient: ${item.trackGradient};">
                <!-- Top Track Header -->
                <div class="card-top-header">
                    <span class="card-track-badge" style="background: ${item.badgeBg}; color: ${item.badgeColor};">
                        <i class="${item.trackIcon}"></i> ${item.track}
                    </span>
                    <span class="card-date-duration">
                        <i class="fa-regular fa-calendar"></i> ${item.date} &bull; ${item.duration}
                    </span>
                </div>

                <!-- Session Title -->
                <div class="card-title-group">
                    <h3>${item.title}</h3>
                </div>

                <!-- Score Hero Banner -->
                <div class="card-score-banner">
                    <div class="card-score-num-box">
                        <span class="card-score-big">${item.score}</span>
                        <span class="card-score-denom">/100</span>
                    </div>
                    <div style="text-align: right;">
                        <span class="card-verdict-tag" style="background: ${item.verdictBg}; color: ${item.verdictColor};">
                            <i class="fa-solid fa-circle-check"></i> ${item.verdict}
                        </span>
                        <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 3px; font-weight: 600;">
                            ${item.consensus}
                        </div>
                    </div>
                </div>

                <!-- Panelists Roster Row -->
                <div class="card-panelists-roster">
                    <span class="roster-label">Committee Evaluators</span>
                    <div class="roster-chips">
                        ${item.panelistsRoster.map(p => `
                            <span class="roster-panelist-chip">
                                <span class="roster-avatar-circle" style="background: ${p.color};">${p.initials}</span>
                                <span>${p.name} <span style="color: var(--text-muted); font-size: 0.7rem;">(${p.role})</span></span>
                            </span>
                        `).join('')}
                    </div>
                </div>

                <!-- Rubric Mini Progress Meters -->
                <div class="card-rubric-meters">
                    ${item.rubricMini.map(r => `
                        <div class="submetric-item">
                            <div class="submetric-labels">
                                <span>${r.label}</span>
                                <span style="font-weight: 700;">${r.val}%</span>
                            </div>
                            <div class="submetric-track-bar">
                                <div class="submetric-fill-bar" style="width: ${r.val}%; background: ${r.color};"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- Highlight Executive Quote -->
                <div class="card-quote-box">
                    <i class="fa-solid fa-quote-left" style="opacity: 0.4; margin-right: 4px;"></i> "${item.highlightQuote}"
                    <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 4px; font-weight: 600; text-align: right;">
                        &mdash; ${item.quoteAuthor}
                    </div>
                </div>

                <!-- Action CTA -->
                <button class="btn btn-primary-gradient view-scorecard-card-btn" data-id="${item.id}">
                    <span>View Full Scorecard & Transcript</span>
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
            </article>
        `).join('');

        // Attach click listeners to "View Scorecard" buttons
        scorecardsGrid.querySelectorAll('.view-scorecard-card-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                const found = SCORECARDS_DATA.find(s => s.id === id);
                if (found) {
                    openScorecardModal(found);
                }
            });
        });
    }

    // Filter Buttons Interaction
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter') || 'all';
            renderScorecards(currentFilter);
        });
    });

    renderScorecards(currentFilter);

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
            modalContentArea.innerHTML = `
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

            if (window.location.hash && window.location.hash.includes('access_token')) {
                history.replaceState(null, '', window.location.pathname + window.location.search);
            }
            
            const { data: profile } = await db
                .from('profiles')
                .select('username, avatar_url, full_name, target_role, experience_level')
                .eq('id', session.user.id)
                .maybeSingle();

            if (!profile || !profile.username || !profile.avatar_url || !profile.target_role || !profile.experience_level) {
                window.location.href = 'form.html';
                return;
            }
            
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
