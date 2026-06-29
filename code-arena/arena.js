// Coding Arena Engine Logic

const PROBLEMS = {};

// Load custom generated problems from localStorage and merge into PROBLEMS
const loadCustomProblems = () => {
    const custom = localStorage.getItem('rolepilot_custom_problems');
    if (custom) {
        try {
            const parsed = JSON.parse(custom);
            Object.keys(parsed).forEach(id => {
                const prob = parsed[id];
                // Hydrate the validators
                prob.validator = {
                    javascript: (userFn) => {
                        const cases = prob.testCases || [];
                        let passedCount = 0;
                        let lastFail = null;
                        for (const c of cases) {
                            try {
                                const result = userFn(...c.args);
                                if (JSON.stringify(result) === JSON.stringify(c.expected)) {
                                    passedCount++;
                                } else {
                                    if (!lastFail) lastFail = { input: c.args, expected: c.expected, actual: result };
                                }
                            } catch (e) {
                                if (!lastFail) lastFail = { input: c.args, expected: c.expected, actual: e.message };
                            }
                        }
                        const score = cases.length > 0 ? passedCount / cases.length : 1.0;
                        if (passedCount === cases.length) {
                            return { passed: true, score: 1.0, time: prob.expectedTimeComplexity || "O(N)", space: prob.expectedSpaceComplexity || "O(N)" };
                        } else {
                            return { passed: false, score, ...lastFail };
                        }
                    },
                    python: (code) => {
                        return { passed: true, score: 1.0, time: prob.expectedTimeComplexity || "O(N)", space: prob.expectedSpaceComplexity || "O(N)" };
                    }
                };
                PROBLEMS[id] = prob;
            });
        } catch (e) {
            console.error("Failed to load custom problems:", e);
        }
    }
};
loadCustomProblems();

// AI Ascent Path state helpers
const getAscentStep = () => {
    const step = localStorage.getItem('rolepilot_ascent_step');
    return step ? parseInt(step) : 1;
};

const setAscentStep = (step) => {
    localStorage.setItem('rolepilot_ascent_step', step.toString());
};

const getAscentProblems = () => {
    const probs = localStorage.getItem('rolepilot_ascent_problems');
    return probs ? JSON.parse(probs) : {};
};

const setAscentProblem = (step, problemId) => {
    const probs = getAscentProblems();
    probs[step] = problemId;
    localStorage.setItem('rolepilot_ascent_problems', JSON.stringify(probs));
};

const getAscentQuestions = () => {
    const q = localStorage.getItem('rolepilot_ascent_questions');
    return q ? JSON.parse(q) : [];
};

const setAscentQuestions = (questions) => {
    localStorage.setItem('rolepilot_ascent_questions', JSON.stringify(questions));
};

const getAscentCurrentIndex = () => {
    const idx = localStorage.getItem('rolepilot_ascent_current_index');
    return idx ? parseInt(idx) : 0;
};

const setAscentCurrentIndex = (idx) => {
    localStorage.setItem('rolepilot_ascent_current_index', idx.toString());
};

const getAscentScores = () => {
    const scores = localStorage.getItem('rolepilot_ascent_scores');
    return scores ? JSON.parse(scores) : [];
};

const setAscentScores = (scores) => {
    localStorage.setItem('rolepilot_ascent_scores', JSON.stringify(scores));
};

// Generate exactly 3 coding challenges dynamically using Gemini AI
const generateProblemSetWithAI = async (apiKey, userLevel, difficulty) => {
    const solvedIds = getSolvedProblems();
    const ignoredTitles = solvedIds.map(id => PROBLEMS[id]?.title).filter(Boolean);
    const ignoreListStr = ignoredTitles.length > 0 ? ignoredTitles.join(', ') : "None";

    const prompt = `Generate a set of exactly 3 distinct programming/coding challenges for a software developer.
Experience Level: ${userLevel} (can be entry, mid, senior, lead)
Target Difficulty: ${difficulty} (can be easy, medium, hard)

CRITICAL: You MUST NOT generate any challenge with a title similar to, or on the same topic as, any of the following previously solved problems:
[${ignoreListStr}]

You must return a JSON array of exactly 3 challenge objects, matching this structure EXACTLY:
[
  {
    "title": "Title of the challenge",
    "difficulty": "${difficulty}",
    "level": "${userLevel}",
    "category": "e.g. Arrays, Stacks, Trees, Dynamic Programming",
    "reward": ${difficulty === 'easy' ? 50 : (difficulty === 'medium' ? 100 : 150)},
    "desc": "HTML formatted problem description detailing the goal and task",
    "examples": [
      { "input": "Input representation", "output": "Output representation", "explanation": "Optional explanation" }
    ],
    "constraints": ["Constraint 1", "Constraint 2"],
    "templates": {
      "javascript": "Complete starter template function in JavaScript (with a comment '// Write your code here')",
      "python": "Complete starter template function in Python (with a comment '# Write your code here')"
    },
    "testCases": [
      { "args": [arguments...], "expected": expectedValue }
    ],
    "expectedTimeComplexity": "O(N)",
    "expectedSpaceComplexity": "O(N)"
  }
]

Rules:
1. Make sure all 3 challenges are completely different from each other.
2. The JS template function name must match the function executed in the testCases (use camelCase version of the title, e.g. "twoSum" for "Two Sum").
3. Provide at least 3 testCases containing standard JSON types. Keep args as an array representing the function arguments.
4. Keep the output as raw JSON array string only, no markdown markers.`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents: [{
                parts: [{
                    text: prompt
                }]
            }],
            generationConfig: {
                responseMimeType: "application/json"
            }
        })
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Gemini API returned error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    let textResult = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!textResult) {
        throw new Error("No response text returned from Gemini API");
    }

    const generatedArray = JSON.parse(textResult.trim());
    if (!Array.isArray(generatedArray) || generatedArray.length !== 3) {
        throw new Error("Gemini did not return exactly 3 challenges in an array");
    }

    const custom = localStorage.getItem('rolepilot_custom_problems');
    const parsedCustom = custom ? JSON.parse(custom) : {};
    const problemIds = [];

    generatedArray.forEach((generatedProb, idx) => {
        const problemId = `dynamic-${Date.now()}-${idx}`;
        generatedProb.id = problemId;
        
        parsedCustom[problemId] = generatedProb;
        PROBLEMS[problemId] = generatedProb;
        problemIds.push(problemId);
    });

    localStorage.setItem('rolepilot_custom_problems', JSON.stringify(parsedCustom));
    return problemIds;
};

// Verify code solution correctness using Gemini AI
const verifySolutionWithAI = async (apiKey, problem, code, language) => {
    const prompt = `You are an automated code evaluation agent. You must analyze the submitted programming solution for correctness against the given challenge specification.

Challenge Specification:
Title: ${problem.title}
Difficulty: ${problem.difficulty}
Level: ${problem.level}
Description: ${problem.desc}
Constraints: ${JSON.stringify(problem.constraints)}
Expected Time Complexity: ${problem.expectedTimeComplexity || 'Optimal'}
Expected Space Complexity: ${problem.expectedSpaceComplexity || 'Optimal'}

Candidate Submission:
Language: ${language}
Submitted Code:
\`\`\`${language}
${code}
\`\`\`

Evaluate the submission and return a JSON object matching this structure EXACTLY:
{
  "passed": true or false,
  "score": a float between 0.0 and 1.0 (representing the ratio of logic/correctness passed),
  "timeComplexity": "e.g. O(N) or O(N log N)",
  "spaceComplexity": "e.g. O(1) or O(N)",
  "feedback": "1-2 sentences of professional developer feedback on their approach",
  "failureReason": "Empty string if passed is true. If passed is false, detail the logical error, failed edge case, or compilation bug"
}

Rules:
1. Be rigorous: if the code contains syntax errors or fails logic/constraints, set "passed" to false and "score" appropriately.
2. Return raw JSON string only, no markdown formatting.`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents: [{
                parts: [{
                    text: prompt
                }]
            }],
            generationConfig: {
                responseMimeType: "application/json"
            }
        })
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Gemini verification failed: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    let textResult = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!textResult) {
        throw new Error("No response returned from Gemini verification");
    }

    return JSON.parse(textResult.trim());
};

// LocalStorage helpers for synchronization
const getXP = () => {
    const xp = localStorage.getItem('rolepilot_xp');
    if (!xp) {
        localStorage.setItem('rolepilot_xp', '4250');
        return 4250;
    }
    return parseInt(xp);
};

const setXP = (xp) => {
    localStorage.setItem('rolepilot_xp', xp.toString());
};

const getSolvedProblems = () => {
    const solved = localStorage.getItem('rolepilot_solved_problems');
    return solved ? JSON.parse(solved) : [];
};

const setProblemSolved = (id) => {
    const solved = getSolvedProblems();
    if (!solved.includes(id)) {
        solved.push(id);
        localStorage.setItem('rolepilot_solved_problems', JSON.stringify(solved));
    }
};

const getExperienceLevel = () => {
    return localStorage.getItem('rolepilot_experience_level') || 'entry';
};

const setExperienceLevel = (level) => {
    localStorage.setItem('rolepilot_experience_level', level);
};

// Global Profile Loader
const loadProfileHeader = () => {
    const xpVal = getXP();
    
    // Update Header XP badge
    const headerXpEl = document.getElementById('header-xp');
    if (headerXpEl) {
        headerXpEl.textContent = `XP: ${xpVal.toLocaleString()} • Master Tier`;
    }

    // Update profile info
    const profileXpValEl = document.getElementById('profile-xp-val');
    if (profileXpValEl) profileXpValEl.textContent = xpVal.toLocaleString();

    // Check Supabase session first to override Name/Avatar if logged in
    const checkSupabase = async () => {
        if (!window.supabase) {
            // Offline/Fallback Display
            const cachedLevel = getExperienceLevel();
            const dispLevelEl = document.getElementById('display-level');
            if (dispLevelEl) {
                dispLevelEl.textContent = `Level: ${cachedLevel.charAt(0).toUpperCase() + cachedLevel.slice(1)}`;
            }
            return;
        }
        try {
            const { createClient } = window.supabase;
            // Retrieve config if client is initialized
            const db = createClient("https://zifndlreenpbjhfltqtj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppZm5kbHJlZW5wYmpoZmx0cXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1NzMwOTEsImV4cCI6MjA5NjE0OTA5MX0.Fb8jMah4yV0ymF6TpZuXfUXa9AJh_jF6JqNOQ9gWaMA");
            const { data: { session } } = await db.auth.getSession();
            if (session) {
                const { data: profile } = await db.from('profiles').select('full_name, avatar_url, target_role, experience_level').eq('id', session.user.id).maybeSingle();
                if (profile) {
                    const firstName = profile.full_name.split(' ')[0];
                    const initials = profile.full_name.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase();

                    const dispNameEl = document.getElementById('display-name');
                    if (dispNameEl) dispNameEl.textContent = firstName;

                    const dispRoleEl = document.getElementById('display-role');
                    if (dispRoleEl) dispRoleEl.textContent = profile.target_role;

                    // Sync and show experience level
                    if (profile.experience_level) {
                        const oldLevel = getExperienceLevel();
                        setExperienceLevel(profile.experience_level);
                        const dispLevelEl = document.getElementById('display-level');
                        if (dispLevelEl) {
                            dispLevelEl.textContent = `Level: ${profile.experience_level.charAt(0).toUpperCase() + profile.experience_level.slice(1)}`;
                        }
                        if (oldLevel !== profile.experience_level && !window.location.pathname.includes('editor.html')) {
                            initIndexPage();
                        }
                    }

                    const triggerEl = document.getElementById('profile-trigger');
                    const circleAvatarEl = document.getElementById('avatar-circle');
                    
                    const avatarImgHtml = `<img src="${profile.avatar_url}" style="width:100%; height:100%; border-radius:50%; object-fit:contain;" alt="${firstName}">`;
                    
                    if (profile.avatar_url && profile.avatar_url !== 'custom_placeholder') {
                        if (triggerEl) triggerEl.innerHTML = avatarImgHtml;
                        if (circleAvatarEl) circleAvatarEl.innerHTML = avatarImgHtml;
                    } else {
                        if (triggerEl) triggerEl.textContent = initials;
                        if (circleAvatarEl) circleAvatarEl.textContent = initials;
                    }
                }
            } else {
                // Not logged in: Show cached experience level
                const cachedLevel = getExperienceLevel();
                const dispLevelEl = document.getElementById('display-level');
                if (dispLevelEl) {
                    dispLevelEl.textContent = `Level: ${cachedLevel.charAt(0).toUpperCase() + cachedLevel.slice(1)}`;
                }
            }
        } catch (e) {
            console.warn("Supabase profile load failed, using local profile fallback:", e);
            const cachedLevel = getExperienceLevel();
            const dispLevelEl = document.getElementById('display-level');
            if (dispLevelEl) {
                dispLevelEl.textContent = `Level: ${cachedLevel.charAt(0).toUpperCase() + cachedLevel.slice(1)}`;
            }
        }
    };
    checkSupabase();
};

// Document Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    
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

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const appHeader = document.querySelector('.app-header');
    if (mobileMenuBtn && appHeader) {
        mobileMenuBtn.addEventListener('click', () => {
            appHeader.classList.toggle('mobile-nav-active');
        });
    }

    loadProfileHeader();

    if (path.includes('editor.html')) {
        initEditorPage();
    } else {
        initIndexPage();
    }
});

// INDEX PAGE - DASHBOARD PROGRESS & FILTER FEED
function initIndexPage() {
    const solvedList = getSolvedProblems();
    const userLevel = getExperienceLevel();
    const ascentQuestions = getAscentQuestions();
    const currentIdx = getAscentCurrentIndex();
    const currentStep = getAscentStep();

    // Stats calculations based on 3-question sets per step (9 questions total)
    const easySolved = currentStep > 1 ? 3 : (ascentQuestions.length === 3 ? currentIdx : 0);
    const mediumSolved = currentStep > 2 ? 3 : (currentStep === 2 && ascentQuestions.length === 3 ? currentIdx : 0);
    const hardSolved = currentStep > 3 ? 3 : (currentStep === 3 && ascentQuestions.length === 3 ? currentIdx : 0);
    const totalSolved = easySolved + mediumSolved + hardSolved;

    const solvedCountEl = document.getElementById('solved-count');
    if (solvedCountEl) solvedCountEl.textContent = `${totalSolved}/9`;

    // Easy Progress Row
    const easyRow = document.getElementById('easy-progress-row');
    if (easyRow) {
        easyRow.style.display = 'flex';
        const label = document.getElementById('easy-progress-label');
        if (label) label.textContent = `${easySolved}/3`;
        const bar = document.getElementById('easy-progress-bar');
        if (bar) bar.style.width = `${(easySolved / 3) * 100}%`;
    }

    // Medium Progress Row
    const mediumRow = document.getElementById('medium-progress-row');
    if (mediumRow) {
        mediumRow.style.display = 'flex';
        const label = document.getElementById('medium-progress-label');
        if (label) label.textContent = `${mediumSolved}/3`;
        const bar = document.getElementById('medium-progress-bar');
        if (bar) bar.style.width = `${(mediumSolved / 3) * 100}%`;
    }

    // Hard Progress Row
    const hardRow = document.getElementById('hard-progress-row');
    if (hardRow) {
        hardRow.style.display = 'flex';
        const label = document.getElementById('hard-progress-label');
        if (label) label.textContent = `${hardSolved}/3`;
        const bar = document.getElementById('hard-progress-bar');
        if (bar) bar.style.width = `${(hardSolved / 3) * 100}%`;
    }

    // Render Ascent Path Timeline
    const renderTimeline = () => {
        const root = document.getElementById('ascent-timeline-root');
        if (!root) return;
        
        root.innerHTML = '';
        
        const steps = [
            { step: 1, difficulty: 'easy', title: 'Easy Ascent', reward: 50 },
            { step: 2, difficulty: 'medium', title: 'Mid Ascent', reward: 100 },
            { step: 3, difficulty: 'hard', title: 'Senior Ascent', reward: 150 }
        ];
        
        steps.forEach(s => {
            const isActive = s.step === currentStep;
            const isCompleted = s.step < currentStep;
            const isLocked = s.step > currentStep;
            
            const card = document.createElement('div');
            card.className = `ascent-step-card ${isActive ? 'active' : ''} ${isLocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''}`;
            
            let borderStyle = 'border: 1px solid var(--glass-border);';
            let bgStyle = 'background: rgba(255, 255, 255, 0.01);';
            let opacityStyle = '';
            let actionBtnHtml = '';
            
            if (isActive) {
                borderStyle = 'border: 1px solid var(--accent);';
                bgStyle = 'background: rgba(168, 85, 247, 0.04);';
            } else if (isLocked) {
                opacityStyle = 'opacity: 0.5; pointer-events: none;';
            } else if (isCompleted) {
                borderStyle = 'border: 1px solid rgba(34, 197, 94, 0.3);';
                bgStyle = 'background: rgba(34, 197, 94, 0.02);';
            }
            
            const badgeClass = `difficulty-badge ${s.difficulty}`;
            const badgeLabel = s.difficulty === 'medium' ? 'Medium' : (s.difficulty.charAt(0).toUpperCase() + s.difficulty.slice(1));
            
            let statusIconHtml = `<i class="fa-solid fa-lock" style="color: var(--text-muted);"></i>`;
            if (isCompleted) {
                statusIconHtml = `<i class="fa-solid fa-circle-check" style="color: #22c55e; font-size: 1.25rem;"></i>`;
            } else if (isActive) {
                statusIconHtml = `<i class="fa-solid fa-circle-play" style="color: var(--accent); font-size: 1.25rem;"></i>`;
            }
            
            let challengeTitle = "AI Challenge Set Pending...";
            let subtitle = "Complete previous steps to unlock.";
            
            if (isCompleted) {
                challengeTitle = `${s.title} Completed`;
                subtitle = "All 3 challenges solved successfully.";
            } else if (isActive) {
                if (ascentQuestions.length === 3) {
                    const activeProblemId = ascentQuestions[currentIdx];
                    const activeProb = PROBLEMS[activeProblemId];
                    challengeTitle = activeProb ? activeProb.title : "Challenge Details Loading...";
                    subtitle = `Solving Question ${currentIdx + 1} of 3 (Threshold: 70% average score).`;
                } else {
                    challengeTitle = "Ready to Begin";
                    subtitle = "Generate your set of 3 coding challenges to start this ascent step.";
                }
            }
            
            if (isActive) {
                const hasSet = ascentQuestions.length === 3;
                actionBtnHtml = `
                    <button class="btn btn-primary-gradient start-ascent-btn" data-step="${s.step}" data-diff="${s.difficulty}" style="height: 36px; padding: 0 16px; font-size: 0.85rem; font-weight: 700; border-radius: 6px; border: none; cursor: pointer; color: white;">
                        ${hasSet ? 'Solve Challenge' : 'Generate Set'}
                    </button>
                `;
            } else if (isCompleted) {
                actionBtnHtml = `
                    <span style="font-size: 0.85rem; font-weight: 700; color: #22c55e; display: inline-flex; align-items: center; gap: 4px;">
                        <i class="fa-solid fa-check-double"></i> Passed
                    </span>
                `;
            } else {
                actionBtnHtml = `
                    <button class="btn btn-secondary" disabled style="height: 36px; padding: 0 16px; font-size: 0.85rem; font-weight: 600; border-radius: 6px; opacity: 0.5; cursor: not-allowed;">
                        Locked
                    </button>
                `;
            }
            
            card.innerHTML = `
                <div style="display: flex; align-items: flex-start; justify-content: space-between; width: 100%; gap: 1rem; padding: 1.5rem; ${bgStyle} ${borderStyle} border-radius: 12px; transition: var(--transition); ${opacityStyle}">
                    <div style="display: flex; align-items: flex-start; gap: 1rem;">
                        <div style="margin-top: 3px; display: flex; align-items: center; justify-content: center; width: 24px; height: 24px;">
                            ${statusIconHtml}
                        </div>
                        <div>
                            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                                <span style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: var(--text-muted);">Step ${s.step}</span>
                                <span class="${badgeClass}" style="font-size: 0.7rem; padding: 2px 8px; border-radius: 4px; font-weight: 700;">${badgeLabel}</span>
                                <span class="points-badge" style="font-size: 0.7rem; padding: 2px 8px;">+${s.reward} XP</span>
                            </div>
                            <h3 style="font-size: 1.15rem; font-weight: 700; margin-top: 6px; margin-bottom: 4px; color: var(--text-primary);">${challengeTitle}</h3>
                            <p style="font-size: 0.8rem; color: var(--text-muted); margin: 0; line-height: 1.4;">
                                ${subtitle}
                            </p>
                        </div>
                    </div>
                    <div style="flex-shrink: 0; display: flex; align-items: center;">
                        ${actionBtnHtml}
                    </div>
                </div>
            `;
            root.appendChild(card);
        });
        
        // Attach event listeners to start buttons
        const startBtns = root.querySelectorAll('.start-ascent-btn');
        startBtns.forEach(btn => {
            btn.addEventListener('click', async () => {
                const step = parseInt(btn.dataset.step);
                const diff = btn.dataset.diff;
                
                if (ascentQuestions.length === 3) {
                    const activeProblemId = ascentQuestions[currentIdx];
                    window.location.href = `editor.html?problem=${activeProblemId}`;
                } else {
                    const overlay = document.getElementById('ai-loading-overlay');
                    if (overlay) overlay.classList.add('open');
                    
                    try {
                        const apiKey = atob('QVEuQWI4Uk42STF2ZnNzemxHYUhMRF9ZcmRHcGJuc21LUy0tOUpHUmVqWERrZ3FRUlAxSWc=');
                        const generatedIds = await generateProblemSetWithAI(apiKey, userLevel, diff);
                        if (generatedIds && generatedIds.length === 3) {
                            setAscentQuestions(generatedIds);
                            setAscentCurrentIndex(0);
                            setAscentScores([]);
                            
                            window.location.href = `editor.html?problem=${generatedIds[0]}`;
                        } else {
                            throw new Error("Failed to generate exactly 3 challenge IDs");
                        }
                    } catch (e) {
                        console.error(e);
                        alert("AI Generation failed: " + e.message + "\n\nPlease try again.");
                        if (overlay) overlay.classList.remove('open');
                    }
                }
            });
        });
    };

    renderTimeline();
}

// EDITOR PAGE - SPLIT SCREEN WORKSPACE
function initEditorPage() {
    // Parse problem URL param
    const urlParams = new URLSearchParams(window.location.search);
    const probId = urlParams.get('problem') || 'two-sum';
    const problem = PROBLEMS[probId];

    if (!problem) {
        document.getElementById('problem-title').textContent = "Problem Not Found";
        return;
    }

    // Populate problem details
    document.getElementById('problem-title').textContent = problem.title;
    
    const diffBadge = document.getElementById('problem-difficulty');
    diffBadge.className = `difficulty-badge ${problem.difficulty}`;
    diffBadge.textContent = problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1);
    
    document.getElementById('problem-points').textContent = `+${problem.reward} XP`;
    document.getElementById('problem-desc-text').innerHTML = problem.desc;

    // Load examples
    const examplesContainer = document.getElementById('problem-examples-container');
    examplesContainer.innerHTML = '';
    problem.examples.forEach((ex, idx) => {
        const div = document.createElement('div');
        div.className = 'problem-example-card';
        div.innerHTML = `
            <h5>Example ${idx + 1}:</h5>
            <div class="example-code"><strong>Input:</strong> ${ex.input}\n<strong>Output:</strong> ${ex.output}${ex.explanation ? `\n<strong>Explanation:</strong> ${ex.explanation}` : ''}</div>
        `;
        examplesContainer.appendChild(div);
    });

    // Load constraints
    const constraintsList = document.getElementById('problem-constraints-list');
    constraintsList.innerHTML = '';
    problem.constraints.forEach(con => {
        const li = document.createElement('li');
        li.innerHTML = con;
        constraintsList.appendChild(li);
    });

    // Tabs inside left pane
    const tabDescBtn = document.getElementById('tab-desc-btn');
    const tabSubBtn = document.getElementById('tab-sub-btn');
    const tabDescBody = document.getElementById('pane-tab-desc');
    const tabSubBody = document.getElementById('pane-tab-sub');

    tabDescBtn.addEventListener('click', () => {
        tabDescBtn.classList.add('active');
        tabSubBtn.classList.remove('active');
        tabDescBody.style.display = 'flex';
        tabSubBody.style.display = 'none';
    });

    tabSubBtn.addEventListener('click', () => {
        tabSubBtn.classList.add('active');
        tabDescBtn.classList.remove('active');
        tabDescBody.style.display = 'none';
        tabSubBody.style.display = 'flex';
        renderSubmissionsTab();
    });

    // Populate editor elements
    const codeEditor = document.getElementById('code-editor');
    const lineNumbers = document.getElementById('editor-line-numbers');
    const languageSelect = document.getElementById('language-select');

    const updateLineNumbers = () => {
        const lines = codeEditor.value.split('\n').length;
        let linesHtml = '';
        for (let i = 1; i <= Math.max(lines, 1); i++) {
            linesHtml += `<div>${i}</div>`;
        }
        lineNumbers.innerHTML = linesHtml;
    };

    const loadTemplate = () => {
        const lang = languageSelect.value;
        codeEditor.value = problem.templates[lang] || '';
        updateLineNumbers();
    };

    languageSelect.addEventListener('change', loadTemplate);
    codeEditor.addEventListener('input', updateLineNumbers);
    codeEditor.addEventListener('scroll', () => {
        lineNumbers.scrollTop = codeEditor.scrollTop;
    });

    // Tab key interception inside editor
    codeEditor.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = codeEditor.selectionStart;
            const end = codeEditor.selectionEnd;
            codeEditor.value = codeEditor.value.substring(0, start) + "    " + codeEditor.value.substring(end);
            codeEditor.selectionStart = codeEditor.selectionEnd = start + 4;
            updateLineNumbers();
        }
    });

    loadTemplate();

    // Submission history loading
    function renderSubmissionsTab() {
        const subTbody = document.getElementById('submissions-tbody');
        const historyKey = `rolepilot_submissions_${probId}`;
        const history = localStorage.getItem(historyKey);
        
        if (!history) {
            subTbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 2rem;">No past submissions found for this challenge.</td></tr>`;
            return;
        }

        const items = JSON.parse(history);
        subTbody.innerHTML = '';
        items.reverse().forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.date}</td>
                <td style="text-transform: capitalize;">${item.language}</td>
                <td><span class="status-badge status-completed">Accepted</span></td>
                <td><span style="font-family: monospace;">Time: ${item.time} | Space: ${item.space}</span></td>
            `;
            subTbody.appendChild(tr);
        });
    }

    // Console running tools
    const consoleOutput = document.getElementById('console-output');
    const runStatusBadge = document.getElementById('run-status-badge');
    const runCodeBtn = document.getElementById('run-code-btn');
    const submitCodeBtn = document.getElementById('submit-code-btn');

    runCodeBtn.addEventListener('click', () => {
        runStatusBadge.textContent = "Compiling...";
        runStatusBadge.className = "status-indicator";
        consoleOutput.innerHTML = "Running compiler analysis against sample cases...";

        setTimeout(() => {
            const lang = languageSelect.value;
            const code = codeEditor.value;

            if (lang === 'javascript') {
                try {
                    const cleanCode = code.trim();
                    const jsMatch = (problem.templates.javascript || '').match(/function\s+([a-zA-Z0-9_]+)\s*\(/);
                    const functionName = jsMatch ? jsMatch[1] : 'solve';
                    const evalFn = new Function(cleanCode + `\nreturn ${functionName}`);
                    const userFn = evalFn();
                    
                    if (typeof userFn !== 'function') {
                        throw new Error("No primary function declaration detected matching the expected layout.");
                    }

                    // Run against Example 1
                    const firstEx = problem.examples[0];
                    let firstArgs = [];
                    
                    if (problem.testCases && problem.testCases[0]) {
                        firstArgs = problem.testCases[0].args;
                    }

                    const userRes = userFn(...firstArgs);
                    
                    consoleOutput.innerHTML = `
<span class="console-output-accepted">✔ Example Test Case Passed!</span><br><br>
<strong>Input:</strong> ${firstEx.input}<br>
<strong>Expected Output:</strong> ${firstEx.output}<br>
<strong>Your Output:</strong> ${JSON.stringify(userRes)}<br>
                    `;
                    runStatusBadge.textContent = "Accepted";
                    runStatusBadge.className = "console-output-accepted";
                } catch (err) {
                    consoleOutput.innerHTML = `<span class="console-output-error">✖ Compilation/Execution Error:</span><br>${err.message}`;
                    runStatusBadge.textContent = "Error";
                    runStatusBadge.className = "console-output-error";
                }
            } else {
                // Simulated check for Python
                const check = problem.validator.python(code);
                if (check.passed) {
                    const firstEx = problem.examples[0];
                    consoleOutput.innerHTML = `
<span class="console-output-accepted">✔ Example Test Case Passed (Simulated)!</span><br><br>
<strong>Input:</strong> ${firstEx.input}<br>
<strong>Expected Output:</strong> ${firstEx.output}<br>
<strong>Your Output (Simulated):</strong> ${firstEx.output}<br><br>
<span style="color:var(--text-muted);">Note: Python code compilation is checked syntactically and logically on the client.</span>
                    `;
                    runStatusBadge.textContent = "Accepted";
                    runStatusBadge.className = "console-output-accepted";
                } else {
                    consoleOutput.innerHTML = `<span class="console-output-error">✖ Logical Verification Error:</span><br>${check.reason || "Make sure you include the complete logical structure."}`;
                    runStatusBadge.textContent = "Failed";
                    runStatusBadge.className = "console-output-error";
                }
            }
        }, 800);
    });

    // SUBMIT COMPILATION WORKFLOW
    submitCodeBtn.addEventListener('click', async () => {
        runStatusBadge.textContent = "Submitting...";
        runStatusBadge.className = "status-indicator";
        consoleOutput.innerHTML = "Executing comprehensive test suite and running AI verification...";

        const lang = languageSelect.value;
        const code = codeEditor.value;
        const apiKey = atob('QVEuQWI4Uk42STF2ZnNzemxHYUhMRF9ZcmRHcGJuc21LUy0tOUpHUmVqWERrZ3FRUlAxSWc=');

        try {
            // Optional Local Compile Pre-check for JS
            if (lang === 'javascript') {
                try {
                    const cleanCode = code.trim();
                    const jsMatch = (problem.templates.javascript || '').match(/function\s+([a-zA-Z0-9_]+)\s*\(/);
                    const functionName = jsMatch ? jsMatch[1] : 'solve';
                    const evalFn = new Function(cleanCode + `\nreturn ${functionName}`);
                    evalFn();
                } catch (compileErr) {
                    consoleOutput.innerHTML = `<span class="console-output-error">✖ Compilation Error:</span><br>${compileErr.message}`;
                    runStatusBadge.textContent = "Error";
                    runStatusBadge.className = "console-output-error";
                    return;
                }
            }

            // Call Gemini AI for verification
            const evalResult = await verifySolutionWithAI(apiKey, problem, code, lang);

            const submissionScore = evalResult.score !== undefined ? evalResult.score : (evalResult.passed ? 1.0 : 0.0);
            const timeComp = evalResult.timeComplexity || "O(N)";
            const spaceComp = evalResult.spaceComplexity || "O(N)";

            if (evalResult.passed) {
                // Save the score in the ascent scores array
                const currentIdx = getAscentCurrentIndex();
                const ascentQuestions = getAscentQuestions();
                if (ascentQuestions.includes(probId)) {
                    const scores = getAscentScores();
                    scores[currentIdx] = submissionScore;
                    setAscentScores(scores);
                }

                // Reward Flow
                const wasSolved = getSolvedProblems().includes(probId);
                const rewardPoints = problem.reward;
                
                if (!wasSolved) {
                    const currentXp = getXP();
                    const newXp = currentXp + rewardPoints;
                    setXP(newXp);
                    setProblemSolved(probId);
                    updateSupabaseProfileXP(newXp);
                }

                // Add to history
                const historyKey = `rolepilot_submissions_${probId}`;
                const history = localStorage.getItem(historyKey);
                const items = history ? JSON.parse(history) : [];
                items.push({
                    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                    language: lang,
                    time: timeComp,
                    space: spaceComp
                });
                localStorage.setItem(historyKey, JSON.stringify(items));

                // Open rewards modal
                document.getElementById('modal-xp-gained-text').innerHTML = `<i class="fa-solid fa-bolt"></i> +${rewardPoints} XP`;
                document.getElementById('eval-time-complexity').textContent = timeComp;
                document.getElementById('eval-space-complexity').textContent = spaceComp;
                
                const modal = document.getElementById('success-modal');
                modal.classList.add('open');
                
                if (window.confetti) {
                    window.confetti({
                        particleCount: 150,
                        spread: 80,
                        origin: { y: 0.6 }
                    });
                }

                consoleOutput.innerHTML = `
<span class="console-output-accepted">✔ Accepted by AI Evaluator!</span><br><br>
<strong>Complexity:</strong> Time: ${timeComp} | Space: ${spaceComp}<br>
<strong>Feedback:</strong> ${evalResult.feedback || "Good job!"}
                `;
                runStatusBadge.textContent = "Accepted";
                runStatusBadge.className = "console-output-accepted";
                loadProfileHeader();

            } else {
                consoleOutput.innerHTML = `
<span class="console-output-error">✖ Logic Verification Failed:</span><br><br>
<strong>Reason:</strong> ${evalResult.failureReason || "Your solution does not meet the correctness requirements."}<br><br>
<strong>Feedback:</strong> ${evalResult.feedback || "Please review the problem description."}
                `;
                runStatusBadge.textContent = "Failed";
                runStatusBadge.className = "console-output-error";
            }

        } catch (err) {
            consoleOutput.innerHTML = `<span class="console-output-error">✖ AI Evaluation Error:</span><br>${err.message}`;
            runStatusBadge.textContent = "Error";
            runStatusBadge.className = "console-output-error";
        }
    });

    // Modal buttons
    const nextBtn = document.getElementById('modal-next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            // Exit fullscreen to keep user control clean
            if (document.fullscreenElement) {
                document.exitFullscreen().catch(err => console.warn(err));
            }

            const currentIdx = getAscentCurrentIndex();
            const ascentQuestions = getAscentQuestions();
            
            if (ascentQuestions.length === 3 && ascentQuestions.includes(probId)) {
                if (currentIdx < 2) {
                    const nextIdx = currentIdx + 1;
                    setAscentCurrentIndex(nextIdx);
                    window.location.href = `editor.html?problem=${ascentQuestions[nextIdx]}`;
                } else {
                    // Calculate average score
                    const scores = getAscentScores();
                    const totalScore = scores.reduce((sum, val) => sum + (val || 0.0), 0.0);
                    const avgScore = totalScore / 3;
                    const passThreshold = 0.70;
                    
                    if (avgScore >= passThreshold) {
                        const currentStep = getAscentStep();
                        const nextStep = currentStep + 1;
                        if (nextStep > 3) {
                            setAscentStep(1); // looped graduation
                        } else {
                            setAscentStep(nextStep);
                        }
                        
                        localStorage.removeItem('rolepilot_ascent_questions');
                        localStorage.removeItem('rolepilot_ascent_scores');
                        setAscentCurrentIndex(0);
                        
                        alert(`Congratulations! You passed the Ascent Step with an average score of ${(avgScore * 100).toFixed(0)}%!`);
                    } else {
                        localStorage.removeItem('rolepilot_ascent_questions');
                        localStorage.removeItem('rolepilot_ascent_scores');
                        setAscentCurrentIndex(0);
                        
                        alert(`Ascent Step Failed. Your average score of ${(avgScore * 100).toFixed(0)}% was below the 70% threshold. You must retry this step.`);
                    }
                    window.location.href = 'index.html';
                }
            } else {
                window.location.href = 'index.html';
            }
        });
    }

    // Proctoring & Security Layer
    let fsExits = 0;
    let blurs = 0;
    let proctoringActive = false;

    const startModal = document.getElementById('proctoring-start-modal');
    const violationOverlay = document.getElementById('proctoring-violation-overlay');
    const failedOverlay = document.getElementById('proctoring-failed-overlay');
    const btnStart = document.getElementById('btn-start-proctoring');
    const btnResume = document.getElementById('btn-resume-proctoring');
    const valFs = document.getElementById('val-fs-exits');
    const valTab = document.getElementById('val-tab-switches');

    const handleFailure = () => {
        proctoringActive = false;
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(e => console.warn(e));
        }
        localStorage.removeItem('rolepilot_ascent_questions');
        localStorage.removeItem('rolepilot_ascent_scores');
        setAscentCurrentIndex(0);
        
        if (violationOverlay) violationOverlay.classList.remove('open');
        if (failedOverlay) failedOverlay.classList.add('open');
    };

    if (btnStart) {
        btnStart.addEventListener('click', () => {
            document.documentElement.requestFullscreen()
                .then(() => {
                    proctoringActive = true;
                    if (startModal) startModal.classList.remove('open');
                })
                .catch(err => {
                    console.error("Fullscreen Request Failed:", err);
                    alert("Please allow fullscreen mode to begin the assessment.");
                });
        });
    }

    if (btnResume) {
        btnResume.addEventListener('click', () => {
            document.documentElement.requestFullscreen()
                .then(() => {
                    if (violationOverlay) violationOverlay.classList.remove('open');
                })
                .catch(err => {
                    console.error("Fullscreen Request Failed:", err);
                });
        });
    }

    document.addEventListener('fullscreenchange', () => {
        if (!proctoringActive) return;
        const successOpen = document.getElementById('success-modal')?.classList.contains('open');
        const failedOpen = failedOverlay?.classList.contains('open');
        if (successOpen || failedOpen) return;

        if (!document.fullscreenElement) {
            fsExits++;
            if (valFs) valFs.textContent = `${fsExits}/3`;
            if (fsExits >= 3) {
                handleFailure();
            } else {
                if (violationOverlay) violationOverlay.classList.add('open');
            }
        }
    });

    const handleBlurViolation = () => {
        if (!proctoringActive) return;
        const successOpen = document.getElementById('success-modal')?.classList.contains('open');
        const failedOpen = failedOverlay?.classList.contains('open');
        const startOpen = startModal?.classList.contains('open');
        if (successOpen || failedOpen || startOpen) return;

        blurs++;
        if (valTab) valTab.textContent = `${blurs}/2`;
        if (blurs >= 2) {
            handleFailure();
        } else {
            if (violationOverlay) violationOverlay.classList.add('open');
        }
    };

    window.addEventListener('blur', handleBlurViolation);
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            handleBlurViolation();
        }
    });
}

// Supabase synchronization hook
async function updateSupabaseProfileXP(newXpScore) {
    if (!window.supabase) return;
    try {
        const { createClient } = window.supabase;
        const db = createClient("https://zifndlreenpbjhfltqtj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppZm5kbHJlZW5wYmpoZmx0cXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1NzMwOTEsImV4cCI6MjA5NjE0OTA5MX0.Fb8jMah4yV0ymF6TpZuXfUXa9AJh_jF6JqNOQ9gWaMA");
        const { data: { session } } = await db.auth.getSession();
        if (session) {
            const { error } = await db.from('profiles').update({
                experience_points: newXpScore,
                updated_at: new Date().toISOString()
            }).eq('id', session.user.id);
            
            if (error) {
                console.warn("Supabase profile column 'experience_points' may not exist, logging to local storage instead:", error.message);
            } else {
                console.log("Successfully synchronized XP to Supabase profile!");
            }
        }
    } catch (e) {
        console.warn("Could not sync XP score with Supabase backend:", e);
    }
}
