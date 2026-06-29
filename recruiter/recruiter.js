// Recruiter Dashboard Controller & State Management

import { TOP_CANDIDATES, TOP_RESUMES } from './top_candidates_data.js';

// Mock Candidates Database (Fitted for Track 1: AI Engineer Role)
const MOCK_CANDIDATES = TOP_CANDIDATES;

// Mock Jobs Database
const JOBS_DB = {
    "ai-engineer": {
        title: "AI / LLM Backend Engineer",
        desc: "Requires building intelligent retrieval systems. Focuses heavily on algorithmic complexity (O(N)), vector search matching, and behavioral dependability. Warns against keywords-stuffers with zero project implementations.",
        skillsHtml: `
            <span class="req-tag"><i class="fa-brands fa-python"></i> Python</span>
            <span class="req-tag"><i class="fa-solid fa-database"></i> Vector DBs (FAISS/Pinecone)</span>
            <span class="req-tag"><i class="fa-solid fa-brain"></i> LLM Orchestration (LangChain)</span>
            <span class="req-tag"><i class="fa-solid fa-network-wired"></i> FastAPI / REST APIs</span>
            <span class="req-tag"><i class="fa-solid fa-gears"></i> PyTorch / TensorFlow</span>
        `,
        modifiers: {
            "C-9421": 1.0,  // Abhishek (94)
            "C-1290": 0.94, // Priyanka
            "C-3081": 0.95, // Vikram
            "C-7812": 0.88, // Sneha
            "C-4402": 0.90, // Arjun
            "C-8219": 0.85, // Neha
            "C-6110": 0.91, // Rohan
            "C-2938": 0.89, // Ananya
            "C-5512": 0.72, // Karan
            "C-7301": 0.93  // Meera
        }
    },
    "frontend-developer": {
        title: "Frontend Engineer (React)",
        desc: "Responsible for building high-fidelity client interfaces. Demands expert capability in responsive layout architectures, glassmorphism templates, and complex state synchronization.",
        skillsHtml: `
            <span class="req-tag"><i class="fa-brands fa-react"></i> React</span>
            <span class="req-tag"><i class="fa-brands fa-js"></i> JavaScript</span>
            <span class="req-tag"><i class="fa-brands fa-html5"></i> HTML5</span>
            <span class="req-tag"><i class="fa-brands fa-css3-alt"></i> CSS3 / Sass</span>
            <span class="req-tag"><i class="fa-solid fa-layer-group"></i> Redux / Zustand</span>
        `,
        modifiers: {
            "C-1290": 1.0,  // Priyanka
            "C-2938": 0.96, // Ananya
            "C-4402": 0.88, // Arjun
            "C-9421": 0.65, // Abhishek (backend heavy)
            "C-5512": 0.78, // Karan
            "C-8219": 0.85, // Neha
            "C-3081": 0.60, // Vikram (ML heavy)
            "C-7812": 0.62,
            "C-6110": 0.68,
            "C-7301": 0.66
        }
    },
    "data-scientist": {
        title: "Data Scientist (Python/ML)",
        desc: "Hiring for data modeling and statistical insight discovery. Candidate must show verifiable telemetry in data cleaning, predictive metrics mapping, and SQL query optimizations.",
        skillsHtml: `
            <span class="req-tag"><i class="fa-brands fa-python"></i> Python</span>
            <span class="req-tag"><i class="fa-solid fa-table"></i> Pandas / NumPy</span>
            <span class="req-tag"><i class="fa-solid fa-chart-line"></i> scikit-learn</span>
            <span class="req-tag"><i class="fa-solid fa-database"></i> SQL Databases</span>
            <span class="req-tag"><i class="fa-solid fa-chart-pie"></i> Data Analytics / BI</span>
        `,
        modifiers: {
            "C-5512": 1.0,  // Karan (Data analyst)
            "C-7812": 0.96, // Sneha (scikit-learn predictive models)
            "C-3081": 0.94, // Vikram (transformers/ML)
            "C-9421": 0.88, // Abhishek
            "C-1290": 0.80, // Priyanka
            "C-4402": 0.85, // Arjun
            "C-8219": 0.82,
            "C-6110": 0.91, // Rohan
            "C-2938": 0.82,
            "C-7301": 0.85
        }
    }
};

// Mock Resumes Database for Portal
const MOCK_RESUMES = TOP_RESUMES;

// State Variables
let currentCandidates = [...MOCK_CANDIDATES];
let isAnonymized = false;
let isShortlistedOnly = false;
let activeJobKey = "ai-engineer";
let weights = {
    resume: 35,
    code: 30,
    interview: 20,
    response: 15
};

// Shortlisted state per job
let shortlistedCandidates = {
    "ai-engineer": ["CAND_0002025"],
    "frontend-developer": [],
    "data-scientist": []
};

// Database of skills per job
const JOB_SKILLS_DATA = {
    "ai-engineer": [
        { name: "Python", icon: "fa-brands fa-python" },
        { name: "Vector DBs (FAISS/Pinecone)", icon: "fa-solid fa-database" },
        { name: "LLM Orchestration (LangChain)", icon: "fa-solid fa-brain" },
        { name: "FastAPI / REST APIs", icon: "fa-solid fa-network-wired" },
        { name: "PyTorch / TensorFlow", icon: "fa-solid fa-gears" }
    ],
    "frontend-developer": [
        { name: "React", icon: "fa-brands fa-react" },
        { name: "JavaScript", icon: "fa-brands fa-js" },
        { name: "HTML5", icon: "fa-brands fa-html5" },
        { name: "CSS3 / Sass", icon: "fa-brands fa-css3-alt" },
        { name: "Redux / Zustand", icon: "fa-solid fa-layer-group" }
    ],
    "data-scientist": [
        { name: "Python", icon: "fa-brands fa-python" },
        { name: "Pandas / NumPy", icon: "fa-solid fa-table" },
        { name: "scikit-learn", icon: "fa-solid fa-chart-line" },
        { name: "SQL Databases", icon: "fa-solid fa-database" },
        { name: "Data Analytics / BI", icon: "fa-solid fa-chart-pie" }
    ]
};

const SKILL_MAP = {
    "Python": "Python",
    "Vector DBs (FAISS/Pinecone)": ["FAISS", "Pinecone"],
    "LLM Orchestration (LangChain)": "LangChain",
    "FastAPI / REST APIs": "FastAPI",
    "PyTorch / TensorFlow": ["PyTorch", "TensorFlow"],
    "React": "React",
    "JavaScript": "JavaScript",
    "HTML5": "HTML5",
    "CSS3 / Sass": "CSS3",
    "Redux / Zustand": "Redux",
    "Pandas / NumPy": ["Pandas", "NumPy"],
    "scikit-learn": "scikit-learn",
    "SQL Databases": "SQL",
    "Data Analytics / BI": ["Tableau", "Pandas"]
};

// Selected required skills state
let selectedSkills = JOB_SKILLS_DATA[activeJobKey].map(s => s.name);

// Outreach and Communication Tracking State
let outreachedCandidates = ["CAND_0011687"];
let sentEmails = {
    "CAND_0011687": {
        subject: "Role-Pilot Invitation: Senior AI Engineer Opportunities at Redrob",
        sentAt: "2 hours ago",
        body: `Hi Shreya,\n\nWe were extremely impressed by your verified performance in our Coding Arena (Score: 76/100) and your background with TensorFlow and OpenSearch at Niramai.\n\nWe would love to schedule a follow-up interview to discuss our Senior AI Engineer position.\n\nBest regards,\nRole-Pilot Sourcing Team`,
        reply: `Hi Sourcing Team,\n\nThank you for reaching out! I'm definitely interested in learning more about the Senior AI Engineer role at Redrob. My experience aligning search indexing structures and MLOps tools matches the JD description perfectly.\n\nI am available for a call this Thursday at 3 PM or Friday afternoon. Let me know what works best for you.\n\nBest regards,\nShreya Tiwari`
    }
};
let activeResumeKey = "CAND_0011687";

// DOM Elements
const candidatesContainer = document.getElementById("candidates-container");
const searchInput = document.getElementById("candidate-search");
const sortSelect = document.getElementById("sort-select");
const anonymizeToggle = document.getElementById("anonymize-toggle");
const detailModal = document.getElementById("detail-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");

// Job Selection DOM Elements
const jobSelectDropdown = document.getElementById("job-select");
const activeJobTitle = document.getElementById("active-job-title");
const activeJobSkills = document.getElementById("active-job-skills");
const activeJobDesc = document.getElementById("active-job-desc");

// Shortlist Toggle Filter
const shortlistFilterBtn = document.getElementById("shortlist-filter-btn");

// Navigation Tabs
const navTalentPool = document.getElementById("nav-talent-pool");
const navResumeReader = document.getElementById("nav-resume-reader");
const dashboardWorkspace = document.querySelector(".dashboard-workspace");
const resumeReaderWorkspace = document.querySelector(".resume-reader-workspace");

// Resume Reader DOM Elements
const resumeUploadZone = document.getElementById("resume-upload-zone");
const resumeFileInput = document.getElementById("resume-file-input");
const resumeItemsList = document.getElementById("resume-items-list");
const noResumeMessage = document.getElementById("no-resume-message");
const resumeSplitView = document.getElementById("resume-split-view");
const previewFileName = document.getElementById("preview-file-name");
const previewDocText = document.getElementById("preview-doc-text");
const parsedSummary = document.getElementById("parsed-summary");
const parsedSkills = document.getElementById("parsed-skills");
const parsedMilestones = document.getElementById("parsed-milestones");
const parsedComputedMatch = document.getElementById("parsed-computed-match");
const btnParseShortlist = document.getElementById("btn-parse-shortlist");

// Weights DOM Elements
const weightSliders = {
    resume: document.getElementById("weight-resume"),
    code: document.getElementById("weight-code"),
    interview: document.getElementById("weight-interview"),
    response: document.getElementById("weight-response")
};
const weightVals = {
    resume: document.getElementById("weight-resume-val"),
    code: document.getElementById("weight-code-val"),
    interview: document.getElementById("weight-interview-val"),
    response: document.getElementById("weight-response-val")
};
const resetWeightsBtn = document.getElementById("reset-weights-btn");

// Initialize Console Dashboard
document.addEventListener("DOMContentLoaded", () => {
    initWeights();
    renderJDRequirements();
    calculateAndRender();
    renderResumeList();
    if (activeResumeKey) {
        selectResume(activeResumeKey);
    }
    bindEvents();
    bindResumeReaderEvents();
});

// Setup weights from sliders
function initWeights() {
    Object.keys(weightSliders).forEach(key => {
        if (weightSliders[key]) {
            weightSliders[key].value = weights[key];
            weightVals[key].textContent = `${weights[key]}%`;
        }
    });
}

// Compute scores based on weights and job modifiers
function calculateAndRender() {
    const jobInfo = JOBS_DB[activeJobKey];
    const modifiers = jobInfo.modifiers;
    
    currentCandidates = MOCK_CANDIDATES.map(cand => {
        // Core Weighted Score
        const wScore = (
            (cand.rawScores.resume * weights.resume) +
            (cand.rawScores.code * weights.code) +
            (cand.rawScores.interview * weights.interview) +
            (cand.rawScores.response * weights.response)
        ) / 100;
        
        // Multiplier based on selected job capability modifiers
        const jobMultiplier = modifiers[cand.id] || 0.7;
        
        // Dynamic skill match multiplier
        let matchCount = 0;
        let totalSelected = selectedSkills.length;
        
        if (totalSelected > 0) {
            selectedSkills.forEach(skillName => {
                const mapped = SKILL_MAP[skillName];
                if (Array.isArray(mapped)) {
                    if (mapped.some(s => cand.skills.includes(s))) {
                        matchCount++;
                    }
                } else if (cand.skills.includes(mapped)) {
                    matchCount++;
                }
            });
        }
        
        const skillMultiplier = totalSelected > 0 ? (matchCount / totalSelected) : 1.0;
        
        // Final score: scale by skill multiplier (between 50% and 100% of the normal final score)
        const finalScore = Math.round(wScore * jobMultiplier * (0.5 + 0.5 * skillMultiplier) * 10) / 10;
        
        return {
            ...cand,
            computedScore: Math.min(100, finalScore)
        };
    });

    // Update shortlist stats card count
    const shortlistCountEl = document.getElementById("shortlist-count");
    if (shortlistCountEl) {
        shortlistCountEl.textContent = shortlistedCandidates[activeJobKey].length;
    }

    sortAndFilter();
}

function renderJDRequirements() {
    const skillsList = JOB_SKILLS_DATA[activeJobKey];
    activeJobSkills.innerHTML = "";
    
    skillsList.forEach(skill => {
        const isSelected = selectedSkills.includes(skill.name);
        const activeClass = isSelected ? "active" : "";
        const tag = document.createElement("span");
        tag.className = `req-tag interactive ${activeClass}`;
        tag.setAttribute("data-skill", skill.name);
        tag.innerHTML = `<i class="${skill.icon}"></i> ${skill.name}`;
        
        tag.addEventListener("click", () => {
            if (selectedSkills.includes(skill.name)) {
                selectedSkills = selectedSkills.filter(s => s !== skill.name);
            } else {
                selectedSkills.push(skill.name);
            }
            renderJDRequirements();
            calculateAndRender();
        });
        
        activeJobSkills.appendChild(tag);
    });
}

// Sorting and Filtering
function sortAndFilter() {
    let filtered = [...currentCandidates];

    // Filter: Shortlisted Candidates Only
    if (isShortlistedOnly) {
        const shortlistedIds = shortlistedCandidates[activeJobKey] || [];
        filtered = filtered.filter(cand => shortlistedIds.includes(cand.id));
    }

    // Filter by search query
    const query = searchInput.value.toLowerCase().trim();
    if (query) {
        filtered = filtered.filter(cand => {
            const nameMatch = cand.name.toLowerCase().includes(query);
            const skillsMatch = cand.skills.some(s => s.toLowerCase().includes(query));
            const idMatch = cand.id.toLowerCase().includes(query);
            const rationaleMatch = cand.aiReasoning.toLowerCase().includes(query);
            return nameMatch || skillsMatch || idMatch || rationaleMatch;
        });
    }

    // Sort criteria
    const sortBy = sortSelect.value;
    if (sortBy === "rank" || sortBy === "match") {
        filtered.sort((a, b) => b.computedScore - a.computedScore);
    } else if (sortBy === "code") {
        filtered.sort((a, b) => b.rawScores.code - a.rawScores.code);
    } else if (sortBy === "interview") {
        filtered.sort((a, b) => b.rawScores.interview - a.rawScores.interview);
    } else if (sortBy === "response") {
        filtered.sort((a, b) => b.rawScores.response - a.rawScores.response);
    }

    renderCandidates(filtered);
}

// Render candidate rows
function renderCandidates(candidates) {
    candidatesContainer.innerHTML = "";
    
    // Show notice when no required skills are selected
    if (selectedSkills.length === 0) {
        candidatesContainer.insertAdjacentHTML("beforeend", `
            <div style="background: rgba(234, 179, 8, 0.08); border: 1px solid rgba(234, 179, 8, 0.25); border-radius: 8px; padding: 0.6rem 1rem; margin-bottom: 0.75rem; font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.5rem;">
                <i class="fa-solid fa-circle-info" style="color: #eab308;"></i>
                <span>No required skills selected — showing all candidates ranked by overall score. Select skills above to filter and re-rank.</span>
            </div>
        `);
    }
    
    if (candidates.length === 0) {
        const message = isShortlistedOnly
            ? "No candidates have been shortlisted for this job yet."
            : "No candidates match your search query or criteria.";
        
        candidatesContainer.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; color: var(--text-muted);"></i>
                <p>${message}</p>
            </div>
        `;
        return;
    }

    candidates.forEach((cand, index) => {
        const rank = index + 1;
        const isTop3 = rank <= 3 ? "top-3" : "";
        
        // Handle Anonymization
        const displayName = isAnonymized ? `Candidate ${cand.id}` : cand.name;
        const initials = isAnonymized ? cand.id.substring(2) : cand.name.split(" ").map(n => n[0]).join("");
        
        // Skill badges highlighting matched skills
        const skillBadges = cand.skills.map(s => {
            let isMatched = false;
            selectedSkills.forEach(selSkill => {
                const mapped = SKILL_MAP[selSkill];
                if (Array.isArray(mapped)) {
                    if (mapped.includes(s)) isMatched = true;
                } else if (mapped === s) {
                    isMatched = true;
                }
            });
            const badgeClass = isMatched ? "skill-badge-matched" : "skill-badge-other";
            return `<span class="cand-skill-badge ${badgeClass}">${s}</span>`;
        }).join(" ");
        const scoreClass = cand.computedScore >= 90 ? "" : "mid";
        
        // Shortlist star indicator
        const isShortlisted = shortlistedCandidates[activeJobKey].includes(cand.id);
        const starIcon = isShortlisted ? 'fa-solid fa-star' : 'fa-regular fa-star';
        const starColor = isShortlisted ? 'color: #eab308;' : 'color: var(--text-muted);';

        const row = document.createElement("div");
        row.className = `candidate-row ${isTop3}`;
        row.innerHTML = `
            <div class="col-rank">
                <div class="rank-badge-circle">${rank}</div>
            </div>
            <div class="col-candidate">
                <div class="profile-meta-info">
                    <div class="avatar-bubble recruiter-gradient">${initials}</div>
                    <div class="profile-details">
                        <span class="cand-name" style="display: flex; align-items: center; gap: 0.4rem;">
                            ${displayName} 
                            <i class="${starIcon} shortlist-toggle-row" data-id="${cand.id}" style="cursor: pointer; font-size: 0.8rem; ${starColor}" title="Toggle Shortlist"></i>
                        </span>
                        <div class="cand-skills-list" style="margin-top: 0.25rem; display: flex; flex-wrap: wrap; gap: 0.2rem;" title="${cand.skills.join(', ')}">${skillBadges}</div>
                    </div>
                </div>
            </div>
            <div class="col-scores">
                <div class="scores-container">
                    <div class="score-badge">
                        <span class="score-label">Coding Arena</span>
                        <span class="score-num" style="color: var(--primary);">${cand.rawScores.code}</span>
                    </div>
                    <div class="score-badge">
                        <span class="score-label">Match Score</span>
                        <span class="match-score-pill ${scoreClass}">${cand.computedScore}%</span>
                    </div>
                </div>
            </div>
            <div class="col-reason">
                <p class="ai-summary-reason" title="${cand.aiReasoning}">${cand.aiReasoning}</p>
            </div>
            <div class="col-action">
                <button class="btn-row-action view-btn" data-id="${cand.id}">View Profile</button>
            </div>
        `;
        candidatesContainer.appendChild(row);
    });

    // Bind row shortlist toggles
    document.querySelectorAll(".shortlist-toggle-row").forEach(el => {
        el.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = e.currentTarget.getAttribute("data-id");
            toggleShortlist(id);
        });
    });

    // Rebind view buttons
    document.querySelectorAll(".view-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.currentTarget.getAttribute("data-id");
            openCandidateModal(id, candidates.findIndex(c => c.id === id) + 1);
        });
    });
}

// Toggle candidate shortlisted state
function toggleShortlist(id) {
    const list = shortlistedCandidates[activeJobKey];
    const index = list.indexOf(id);
    const cand = MOCK_CANDIDATES.find(c => c.id === id);
    const displayName = isAnonymized ? `Candidate ${id}` : cand.name;
    const jobTitle = JOBS_DB[activeJobKey].title;
    
    if (index > -1) {
        list.splice(index, 1);
        createToast(`<i class="fa-solid fa-star-slash" style="color:var(--warning);"></i> Removed <strong>${displayName}</strong> from <strong>${jobTitle}</strong> shortlist.`);
    } else {
        list.push(id);
        createToast(`<i class="fa-solid fa-star" style="color:#fbbf24;"></i> Shortlisted <strong>${displayName}</strong> for <strong>${jobTitle}</strong>!`);
    }
    
    calculateAndRender();
}

// Open modal and populate detailed fields
function openCandidateModal(id, rank) {
    const cand = MOCK_CANDIDATES.find(c => c.id === id);
    if (!cand) return;

    const displayName = isAnonymized ? `Candidate ${cand.id}` : cand.name;
    const initials = isAnonymized ? cand.id.substring(2) : cand.name.split(" ").map(n => n[0]).join("");
    
    const matchedScore = currentCandidates.find(c => c.id === id).computedScore;
    const scoreClass = matchedScore >= 90 ? "" : "mid";
    
    document.getElementById("modal-user-avatar").textContent = initials;
    document.getElementById("modal-user-name").textContent = displayName;
    document.getElementById("modal-user-rank").textContent = `Rank #${rank}`;
    document.getElementById("modal-user-match").textContent = `${matchedScore}% Match`;
    
    // Scores
    document.getElementById("modal-score-code").textContent = `${cand.rawScores.code}/100`;
    document.getElementById("modal-bar-code").style.width = `${cand.rawScores.code}%`;

    document.getElementById("modal-score-interview").textContent = `${cand.rawScores.interview}%`;
    document.getElementById("modal-bar-interview").style.width = `${cand.rawScores.interview}%`;

    document.getElementById("modal-score-response").textContent = `${cand.rawScores.response}%`;
    document.getElementById("modal-bar-response").style.width = `${cand.rawScores.response}%`;

    // AI Reasoning
    document.getElementById("modal-ai-reasoning").textContent = cand.aiReasoning;

    // Skills
    const skillsContainer = document.getElementById("modal-skills-container");
    skillsContainer.innerHTML = "";
    cand.skills.forEach(skill => {
        const pill = document.createElement("span");
        pill.className = "skill-pill";
        pill.textContent = skill;
        skillsContainer.appendChild(pill);
    });

    // History Timeline
    const historyContainer = document.getElementById("modal-history-container");
    historyContainer.innerHTML = "";
    cand.history.forEach(hist => {
        const item = document.createElement("div");
        item.className = "history-item";
        item.innerHTML = `
            <h4 class="hist-job">${hist.role}</h4>
            <div class="hist-meta"><strong>${hist.company}</strong> &bull; ${hist.duration}</div>
            <p class="hist-desc">${hist.desc}</p>
        `;
        historyContainer.appendChild(item);
    });

    // Setup shortlist state button
    const isShortlisted = shortlistedCandidates[activeJobKey].includes(cand.id);
    const ftBtn = document.getElementById("btn-fasttrack");
    ftBtn.innerHTML = isShortlisted 
        ? `<i class="fa-solid fa-star-slash"></i> Remove from Shortlist` 
        : `<i class="fa-solid fa-star"></i> Accept to Shortlist`;
    
    // Clear and set temporary attribute
    ftBtn.setAttribute("data-id", cand.id);
    document.getElementById("btn-email-candidate").setAttribute("data-id", cand.id);
    document.getElementById("btn-view-resume").setAttribute("data-id", cand.id);

    // Open Modal UI
    detailModal.classList.add("open");
}

// Bind event listeners
function bindEvents() {
    // Search Box input
    searchInput.addEventListener("input", sortAndFilter);
    
    // Sorting Selector change
    sortSelect.addEventListener("change", sortAndFilter);
    
    // Active Job Selector Dropdown Change
    if (jobSelectDropdown) {
        jobSelectDropdown.addEventListener("change", (e) => {
            activeJobKey = e.target.value;
            const jobInfo = JOBS_DB[activeJobKey];
            
            // Update JD visual elements
            activeJobTitle.textContent = jobInfo.title;
            activeJobDesc.textContent = jobInfo.desc;
            
            // Reset selected skills to all default skills of this new job
            selectedSkills = JOB_SKILLS_DATA[activeJobKey].map(s => s.name);
            renderJDRequirements();
            
            // Recalculate match rankings for the new job requirements
            calculateAndRender();
        });
    }

    // Shortlisted Filter Toggle
    if (shortlistFilterBtn) {
        shortlistFilterBtn.addEventListener("click", () => {
            isShortlistedOnly = !isShortlistedOnly;
            shortlistFilterBtn.classList.toggle("active", isShortlistedOnly);
            sortAndFilter();
        });
    }

    // Anonymization Toggle
    anonymizeToggle.addEventListener("click", () => {
        isAnonymized = !isAnonymized;
        anonymizeToggle.classList.toggle("active", isAnonymized);
        const icon = anonymizeToggle.querySelector("i");
        icon.className = isAnonymized ? "fa-solid fa-eye" : "fa-solid fa-eye-slash";
        anonymizeToggle.querySelector("span").textContent = isAnonymized ? "Reveal Names" : "Anonymize";
        sortAndFilter();
    });

    // Weight sliders input event
    Object.keys(weightSliders).forEach(key => {
        weightSliders[key].addEventListener("input", (e) => {
            const val = parseInt(e.target.value);
            weights[key] = val;
            weightVals[key].textContent = `${val}%`;
            normalizeWeights(key, val);
            calculateAndRender();
        });
    });

    // Reset Weights to default
    resetWeightsBtn.addEventListener("click", () => {
        weights = {
            resume: 35,
            code: 30,
            interview: 20,
            response: 15
        };
        initWeights();
        calculateAndRender();
    });

    // Close Modal Button
    modalCloseBtn.addEventListener("click", () => {
        detailModal.classList.remove("open");
    });

    // Close Modal by clicking overlay
    detailModal.addEventListener("click", (e) => {
        if (e.target === detailModal) {
            detailModal.classList.remove("open");
        }
    });

    // Modal Shortlist Action Button
    document.getElementById("btn-fasttrack").addEventListener("click", (e) => {
        const id = e.currentTarget.getAttribute("data-id");
        toggleShortlist(id);
        detailModal.classList.remove("open");
    });

    document.getElementById("btn-email-candidate").addEventListener("click", (e) => {
        const id = e.currentTarget.getAttribute("data-id");
        if (id) {
            openEmailModal(id);
        }
    });

    // Email Modal Close Button
    document.getElementById("email-modal-close-btn").addEventListener("click", () => {
        document.getElementById("email-modal").classList.remove("open");
    });

    // Cancel Button
    document.getElementById("btn-email-cancel").addEventListener("click", () => {
        document.getElementById("email-modal").classList.remove("open");
    });

    // Close Email Modal by clicking overlay
    const emailModal = document.getElementById("email-modal");
    if (emailModal) {
        emailModal.addEventListener("click", (e) => {
            if (e.target === emailModal) {
                emailModal.classList.remove("open");
            }
        });
    }

    // Refinement button listener
    document.getElementById("btn-email-refine").addEventListener("click", refineEmailWithAI);
    // Submit refinement on pressing Enter in input
    document.getElementById("email-refine-instruction").addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            refineEmailWithAI();
        }
    });

    // Send button listener
    document.getElementById("btn-email-send").addEventListener("click", (e) => {
        const id = e.currentTarget.getAttribute("data-id");
        const cand = MOCK_CANDIDATES.find(c => c.id === id);
        const displayName = isAnonymized ? `Candidate ${id}` : (cand ? cand.name : "Candidate");
        
        const sendBtn = document.getElementById("btn-email-send");
        const cancelBtn = document.getElementById("btn-email-cancel");
        const refineBtn = document.getElementById("btn-email-refine");
        
        const subject = document.getElementById("email-subject").value;
        const body = document.getElementById("email-body").value;
        
        sendBtn.disabled = true;
        cancelBtn.disabled = true;
        refineBtn.disabled = true;
        sendBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending...`;
        
        setTimeout(() => {
            // Save email outreach state
            if (!outreachedCandidates.includes(id)) {
                outreachedCandidates.push(id);
            }
            sentEmails[id] = {
                subject: subject,
                body: body,
                sentAt: "Just now",
                reply: null
            };
            
            createToast(`<i class="fa-solid fa-paper-plane" style="color:#a855f7;"></i> Invitation email successfully sent to <strong>${displayName}</strong>!`);
            document.getElementById("email-modal").classList.remove("open");
            
            // Restore buttons state
            sendBtn.disabled = false;
            cancelBtn.disabled = false;
            refineBtn.disabled = false;
            sendBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Send Invitation`;
            
            // Trigger background reply generation
            generateCandidateReply(id, body);
        }, 1200);
    });

    // Navigation Tabs Switching
    if (navTalentPool && navResumeReader) {
        navTalentPool.addEventListener("click", (e) => {
            e.preventDefault();
            navTalentPool.classList.add("active");
            navResumeReader.classList.remove("active");
            dashboardWorkspace.style.display = "grid";
            resumeReaderWorkspace.style.display = "none";
        });

        navResumeReader.addEventListener("click", (e) => {
            e.preventDefault();
            navResumeReader.classList.add("active");
            navTalentPool.classList.remove("active");
            dashboardWorkspace.style.display = "none";
            resumeReaderWorkspace.style.display = "block";
            renderResumeList();
        });
    }

    // View Resume Button inside Candidate Profile Modal
    // View Resume Button inside Candidate Profile Modal
    document.getElementById("btn-view-resume").addEventListener("click", (e) => {
        const id = e.currentTarget.getAttribute("data-id");
        if (id) {
            // Close candidate details modal
            detailModal.classList.remove("open");
            
            // Add to shortlist if not already there, to make sure they show up in the Outreach list
            const list = shortlistedCandidates[activeJobKey];
            if (!list.includes(id)) {
                list.push(id);
                calculateAndRender();
            }
            
            // Switch navigation to Resume Reader (Outreach Tracker)
            if (navResumeReader) {
                navResumeReader.click();
            }
            
            // Select and show this resume
            selectResume(id);
        }
    });
}

// Normalize weights to sum up to 100
function normalizeWeights(modifiedKey, newValue) {
    const keys = Object.keys(weights);
    const otherKeys = keys.filter(k => k !== modifiedKey);
    const sumOthers = otherKeys.reduce((sum, k) => sum + weights[k], 0);
    const targetSumOthers = 100 - newValue;

    if (sumOthers === 0) {
        const share = targetSumOthers / otherKeys.length;
        otherKeys.forEach(k => {
            weights[k] = Math.round(share);
            weightSliders[k].value = weights[k];
            weightVals[k].textContent = `${weights[k]}%`;
        });
    } else {
        let recomputedSum = 0;
        otherKeys.forEach((k, idx) => {
            if (idx === otherKeys.length - 1) {
                weights[k] = 100 - newValue - recomputedSum;
            } else {
                weights[k] = Math.round((weights[k] / sumOthers) * targetSumOthers);
                recomputedSum += weights[k];
            }
            weightSliders[k].value = weights[k];
            weightVals[k].textContent = `${weights[k]}%`;
        });
    }
}

// --- Outreach & Shortlist Tracker Logic ---

function renderResumeList() {
    resumeItemsList.innerHTML = "";
    
    // Get unique list of candidates that are shortlisted or outreached
    const shortlistedList = shortlistedCandidates[activeJobKey] || [];
    const combinedIds = Array.from(new Set([...shortlistedList, ...outreachedCandidates]));
    
    if (combinedIds.length === 0) {
        resumeItemsList.innerHTML = `
            <div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.8rem;">
                <i class="fa-solid fa-users-slash" style="font-size: 1.5rem; margin-bottom: 0.5rem; display: block;"></i>
                No candidates shortlisted or contacted yet.
            </div>
        `;
        return;
    }
    
    combinedIds.forEach(id => {
        const cand = MOCK_CANDIDATES.find(c => c.id === id);
        if (!cand) return;
        
        const isShort = shortlistedList.includes(id);
        const isOutreached = outreachedCandidates.includes(id);
        
        let statusBadge = "";
        if (isShort && isOutreached) {
            statusBadge = `<span class="badge badge-purple" style="font-size:0.6rem; padding: 0.15rem 0.35rem;">Shortlisted + Emailed</span>`;
        } else if (isShort) {
            statusBadge = `<span class="badge badge-purple" style="font-size:0.6rem; padding: 0.15rem 0.35rem;">Shortlisted</span>`;
        } else if (isOutreached) {
            statusBadge = `<span class="badge badge-accent" style="font-size:0.6rem; padding: 0.15rem 0.35rem; background: rgba(16, 185, 129, 0.15); color: var(--success); border-color: rgba(16, 185, 129, 0.3);">Emailed</span>`;
        }
        
        const card = document.createElement("div");
        card.className = `resume-item-card ${id === activeResumeKey ? 'active' : ''}`;
        card.setAttribute("data-key", id);
        card.innerHTML = `
            <div class="doc-icon"><i class="fa-solid fa-user"></i></div>
            <div class="resume-info">
                <span class="resume-name" style="font-size: 0.85rem; font-weight: 700;">${cand.name}</span>
                <span class="resume-meta" style="margin-top: 0.15rem;">${statusBadge}</span>
            </div>
            <i class="fa-solid fa-chevron-right text-muted" style="font-size:0.75rem;"></i>
        `;
        resumeItemsList.appendChild(card);
    });

    // Add click listeners to items
    document.querySelectorAll(".resume-item-card").forEach(card => {
        card.addEventListener("click", () => {
            const key = card.getAttribute("data-key");
            selectResume(key);
        });
    });
}

function selectResume(id) {
    activeResumeKey = id;
    renderResumeList();

    const cand = MOCK_CANDIDATES.find(c => c.id === id);
    if (!cand) return;
    
    // Get resume text
    const resumeData = MOCK_RESUMES[id];
    const resumeText = resumeData ? resumeData.text : `RESUME DATA NOT FOUND\n\nName: ${cand.name}\nSkills: ${cand.skills.join(', ')}`;

    // Hide placeholder message, show split view
    noResumeMessage.style.display = "none";
    resumeSplitView.style.display = "grid";

    // Set preview file name and content
    previewFileName.textContent = resumeData ? resumeData.fileName : `${cand.name.toLowerCase().replace(/\s+/g, '_')}_resume.pdf`;
    
    // Format resume text nicely in the preview pane
    previewDocText.innerHTML = resumeText.replace(/\n/g, '<br>');

    // Update Outreach section
    const statusBadge = document.getElementById("outreach-status-badge");
    const isShort = shortlistedCandidates[activeJobKey].includes(id);
    const isOut = outreachedCandidates.includes(id);
    
    if (isShort && isOut) {
        statusBadge.textContent = "Shortlisted & Emailed";
        statusBadge.className = "badge badge-purple";
    } else if (isShort) {
        statusBadge.textContent = "Shortlisted";
        statusBadge.className = "badge badge-purple";
    } else if (isOut) {
        statusBadge.textContent = "Emailed";
        statusBadge.className = "badge badge-accent";
        statusBadge.style.background = "rgba(16, 185, 129, 0.15)";
        statusBadge.style.color = "var(--success)";
        statusBadge.style.borderColor = "rgba(16, 185, 129, 0.3)";
    }

    const sentContent = document.getElementById("outreach-sent-content");
    const replySection = document.getElementById("outreach-reply-section");
    const replyContent = document.getElementById("outreach-reply-content");

    if (isOut && sentEmails[id]) {
        const email = sentEmails[id];
        sentContent.innerHTML = `
            <div style="font-weight: 600; margin-bottom: 0.25rem; color: var(--text-color);">Subject: ${email.subject}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.5rem;">Sent: ${email.sentAt || 'Just now'}</div>
            <div style="white-space: pre-wrap; color: var(--text-color); line-height: 1.4; padding: 0.5rem; background: rgba(0,0,0,0.1); border-radius: 6px;">${email.body}</div>
        `;
        
        if (email.reply) {
            replySection.style.display = "block";
            replyContent.innerHTML = `
                <div style="font-weight: 600; margin-bottom: 0.25rem; color: var(--success);">Candidate Response:</div>
                <div style="white-space: pre-wrap; line-height: 1.4;">${email.reply}</div>
            `;
        } else {
            replySection.style.display = "none";
        }
    } else {
        sentContent.innerHTML = `
            <p style="color: var(--text-muted); font-style: italic;">No outreach initiated. Go to the "Talent Pool" tab and click "View Profile" -> "Email Candidate" to start outreach.</p>
        `;
        replySection.style.display = "none";
    }
}

function bindResumeReaderEvents() {
    // No upload dropzone elements to bind
}

async function generateCandidateReply(candidateId, emailBody) {
    const cand = MOCK_CANDIDATES.find(c => c.id === candidateId);
    if (!cand) return;
    const job = JOBS_DB[activeJobKey];
    
    try {
        const apiKey = atob('QVEuQWI4Uk42STF2ZnNzemxHYUhMRF9ZcmRHcGJuc21LUy0tOUpHUmVqWERrZ3FRUlAxSWc=');
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
        
        const prompt = `You are the candidate ${cand.name} who received the following recruiter invitation for the position ${job.title}:
        
        "${emailBody}"
        
        Write a professional, polite response accepting the invitation. Mention your excitement, highlight a key project or skill from your background (${cand.skills.slice(0, 3).join(', ')}), and offer interview availability for later this week. Keep it concise (1-2 short paragraphs).
        Return ONLY the email body text. Do not include subject lines or markdown headers.`;

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        if (response.ok) {
            const data = await response.json();
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (text && sentEmails[candidateId]) {
                sentEmails[candidateId].reply = text.trim();
                
                // If the active resume reader tab is showing this candidate, refresh it
                if (activeResumeKey === candidateId && navResumeReader.classList.contains("active")) {
                    selectResume(candidateId);
                }
                
                createToast(`<i class="fa-solid fa-envelope" style="color:var(--success);"></i> New email response received from <strong>${cand.name}</strong>!`);
            }
        }
    } catch (err) {
        console.error("Failed to generate candidate reply:", err);
    }
}

// Create floating toast alert
function createToast(message) {
    const toast = document.createElement("div");
    toast.className = "recruiter-toast";
    toast.innerHTML = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add("show");
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3500);
}

// Toast styling injector (keep recruiter JS modular)
const style = document.createElement('style');
style.textContent = `
    .recruiter-toast {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: rgba(15, 23, 42, 0.9);
        border: 1px solid var(--glass-border);
        border-left: 4px solid var(--primary);
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: #fff;
        font-family: var(--font-body);
        font-size: 0.875rem;
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        z-index: 10000;
        backdrop-filter: var(--glass-blur);
        transform: translateY(100px);
        opacity: 0;
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease;
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    .recruiter-toast.show {
        transform: translateY(0);
        opacity: 1;
    }
    .light-theme .recruiter-toast {
        background: rgba(255, 255, 255, 0.95);
        color: #1e293b;
        border-color: rgba(0, 0, 0, 0.08);
    }
`;
document.head.appendChild(style);

// --- AI Email Generator & Refiner Logic ---

async function openEmailModal(candidateId) {
    const emailModal = document.getElementById("email-modal");
    if (!emailModal) return;

    // Show modal
    emailModal.classList.add("open");

    // Close candidate detail modal
    document.getElementById("detail-modal").classList.remove("open");

    const loadingEl = document.getElementById("email-loading");
    const contentEl = document.getElementById("email-content");
    const footerEl = document.getElementById("email-footer");

    loadingEl.style.display = "flex";
    contentEl.style.display = "none";
    footerEl.style.display = "none";

    // Get candidate & job info
    const cand = MOCK_CANDIDATES.find(c => c.id === candidateId);
    if (!cand) return;

    // Save candidate id on modal send button
    document.getElementById("btn-email-send").setAttribute("data-id", candidateId);

    const job = JOBS_DB[activeJobKey];
    
    // Compute current score based on weights
    const wScore = (
        (cand.rawScores.resume * weights.resume) +
        (cand.rawScores.code * weights.code) +
        (cand.rawScores.interview * weights.interview) +
        (cand.rawScores.response * weights.response)
    ) / 100;
    const finalScore = Math.min(100, Math.round(wScore * (job.modifiers[cand.id] || 0.7) * 10) / 10);

    try {
        const apiKey = atob('QVEuQWI4Uk42STF2ZnNzemxHYUhMRF9ZcmRHcGJuc21LUy0tOUpHUmVqWERrZ3FRUlAxSWc=');
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

        const prompt = `Generate a personalized recruiter outreach email.
Recipient: ${cand.name}
Role Target: ${job.title}
Key candidate skills: ${cand.skills.join(', ')}
Role-Pilot Assessment Highlights: Tech Arena Score: ${cand.rawScores.code}/100, Interview Completion Rate: ${cand.rawScores.interview}%, Recruiter Response Rate: ${cand.rawScores.response}%
AI Match Score: ${finalScore}%
AI matching rationale: ${cand.aiReasoning}

Requirement:
Return a JSON object matching this structure EXACTLY:
{
  "subject": "A compelling, premium subject line referencing Role-Pilot performance",
  "body": "A professional outreach email body, praising the candidate's achievements and inviting them to an interview. Include placeholders or sign-off from 'Role-Pilot Sourcing Team'."
}
Do not include markdown code block syntax (like \`\`\`json). Return only raw JSON.`;

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { responseMimeType: "application/json" }
            })
        });

        if (!response.ok) {
            throw new Error(`Gemini API error: ${response.status}`);
        }

        const data = await response.json();
        const textResult = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!textResult) {
            throw new Error("Empty response from Gemini API");
        }

        const parsed = JSON.parse(textResult.trim());
        document.getElementById('email-to').value = cand.name;
        document.getElementById('email-subject').value = parsed.subject || `Interview Invitation: ${job.title}`;
        document.getElementById('email-body').value = parsed.body || `Hi ${cand.name}, ...`;

        loadingEl.style.display = "none";
        contentEl.style.display = "flex";
        footerEl.style.display = "flex";

    } catch (err) {
        console.error("AI email generation failed:", err);
        // Fallback email draft if API fails
        document.getElementById('email-to').value = cand.name;
        document.getElementById('email-subject').value = `Interview Invitation: ${job.title} - Role-Pilot`;
        document.getElementById('email-body').value = `Dear ${cand.name},\n\nWe were highly impressed by your profile on Role-Pilot. Your Coding Arena score is ${cand.rawScores.code}/100 and your overall match score is ${finalScore}%.\n\nWe would love to invite you for an interview for the ${job.title} position.\n\nBest regards,\nRole-Pilot Sourcing Team`;
        
        loadingEl.style.display = "none";
        contentEl.style.display = "flex";
        footerEl.style.display = "flex";
    }
}

async function refineEmailWithAI() {
    const instruction = document.getElementById("email-refine-instruction").value.trim();
    if (!instruction) return;

    const btnRefine = document.getElementById("btn-email-refine");
    const originalBtnText = btnRefine.querySelector("span").textContent;
    btnRefine.disabled = true;
    btnRefine.querySelector("span").textContent = "Refining...";

    const currentSubject = document.getElementById('email-subject').value;
    const currentBody = document.getElementById('email-body').value;

    try {
        const apiKey = atob('QVEuQWI4Uk42STF2ZnNzemxHYUhMRF9ZcmRHcGJuc21LUy0tOUpHUmVqWERrZ3FRUlAxSWc=');
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

        const prompt = `You are a recruiter. Modify the following email draft according to this user instruction: "${instruction}"

Current Email Draft:
Subject: ${currentSubject}
Body: ${currentBody}

Please return the modified email as a JSON object matching this structure EXACTLY:
{
  "subject": "Updated subject line",
  "body": "Updated body"
}
Do not include markdown code block syntax (like \`\`\`json). Return only raw JSON.`;

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { responseMimeType: "application/json" }
            })
        });

        if (!response.ok) throw new Error("Gemini API error");

        const data = await response.json();
        const textResult = data.candidates?.[0]?.content?.parts?.[0]?.text;
        const parsed = JSON.parse(textResult.trim());

        if (parsed.subject) document.getElementById('email-subject').value = parsed.subject;
        if (parsed.body) document.getElementById('email-body').value = parsed.body;
        
        document.getElementById("email-refine-instruction").value = "";

    } catch (err) {
        console.error("AI refinement failed:", err);
        createToast(`<i class="fa-solid fa-triangle-exclamation" style="color:var(--error);"></i> AI Refinement failed. Please try again.`);
    } finally {
        btnRefine.disabled = false;
        btnRefine.querySelector("span").textContent = originalBtnText;
    }
}
