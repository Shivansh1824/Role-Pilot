document.addEventListener('DOMContentLoaded', () => {
    // --- Supabase Init & Role Selection ---
    const initSupabaseSession = async () => {
        try {
            const db = await import('./supabase-client.js').then(m => m.getSupabaseClient());
            const { data: { session }, error } = await db.auth.getSession();
            if (error || !session) return;
            
            const { data: profile } = await db
                .from('profiles')
                .select('target_role, avatar_url, full_name')
                .eq('id', session.user.id)
                .maybeSingle();

            if (profile) {
                // Set target role dropdown
                if (profile.target_role) {
                    const roleSelect = document.getElementById('target-role-select');
                    if (roleSelect) {
                        let optionExists = Array.from(roleSelect.options).some(opt => opt.value === profile.target_role);
                        if (!optionExists) {
                            roleSelect.add(new Option(profile.target_role, profile.target_role));
                        }
                        roleSelect.value = profile.target_role;
                    }
                }
                
                // Set avatar/initials
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
        } catch (err) {
            console.error("Supabase Init Error:", err);
        }
    };
    initSupabaseSession();

    // DOM Elements
    const dropzone = document.getElementById('resume-dropzone');
    const fileInput = document.getElementById('file-input');
    const selectedFileState = document.getElementById('selected-file-state');
    const fileNameDisplay = document.getElementById('selected-file-name');
    const removeFileBtn = document.getElementById('remove-file-btn');
    const analyzeBtn = document.getElementById('analyze-btn');
    
    // Analysis Panels
    const emptyState = document.getElementById('empty-analysis-state');
    const scanningState = document.getElementById('scanning-state');
    const resultsContainer = document.getElementById('results-container');
    const scanProgressBar = document.getElementById('scan-progress-bar');
    
    // Score Elements
    const scoreValue = document.getElementById('score-value');
    const scoreRingProgress = document.getElementById('score-ring-progress');
    const scoreCard = document.querySelector('.score-card');

    // Theme Toggle Logic (Shared with global header)
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const html = document.documentElement;
            const isLight = html.classList.toggle('light-theme');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            themeBtn.textContent = isLight ? '🌙' : '☀️';
        });
        
        // Initial icon state
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
    document.querySelector('.score-ring').appendChild(defs);

    // --- File Drag and Drop Logic ---

    const preventDefaults = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, preventDefaults, false);
    });

    ['dragenter', 'dragover'].forEach(eventName => {
        dropzone.addEventListener(eventName, () => {
            dropzone.classList.add('dragover');
        }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, () => {
            dropzone.classList.remove('dragover');
        }, false);
    });

    dropzone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files);
    });

    dropzone.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', function() {
        handleFiles(this.files);
    });

    function handleFiles(files) {
        if (files.length > 0) {
            const file = files[0];
            // Update UI with file name
            fileNameDisplay.textContent = file.name;
            
            // Hide standard dropzone content, show selected state
            Array.from(dropzone.children).forEach(child => {
                if(child.tagName !== 'INPUT') child.style.display = 'none';
            });
            dropzone.style.padding = 'var(--space-4)';
            selectedFileState.style.display = 'block';
            
            // Set resume step state as completed
            const stepResume = document.getElementById('step-resume');
            if (stepResume) stepResume.classList.add('completed');
            
            // Reset any previous analysis
            resetAnalysis();
        }
    }

    removeFileBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent clicking the dropzone again
        fileInput.value = ''; // Clear input
        
        // Restore dropzone UI
        Array.from(dropzone.children).forEach(child => {
            if(child.tagName !== 'INPUT') child.style.display = '';
        });
        dropzone.style.padding = 'var(--space-8) var(--space-4)';
        selectedFileState.style.display = 'none';
        
        // Remove completed state
        const stepResume = document.getElementById('step-resume');
        if (stepResume) stepResume.classList.remove('completed');
        
        resetAnalysis();
    });

    // Reactive listener for Job Description step
    const jobDescriptionInput = document.getElementById('job-description');
    if (jobDescriptionInput) {
        const toggleJobStep = () => {
            const stepJob = document.getElementById('step-job');
            if (stepJob) {
                if (jobDescriptionInput.value.trim().length > 0) {
                    stepJob.classList.add('completed');
                } else {
                    stepJob.classList.remove('completed');
                }
            }
        };
        jobDescriptionInput.addEventListener('input', toggleJobStep);
        // Initial load check
        toggleJobStep();
    }

    // --- Analysis Simulation Logic ---

    function switchState(showElement, hideElements = []) {
        hideElements.forEach(el => {
            if (el) {
                el.style.display = 'none';
                el.classList.remove('state-animate');
            }
        });
        if (showElement) {
            showElement.style.display = 'flex';
            // Force reflow to restart CSS keyframes
            void showElement.offsetWidth;
            showElement.classList.add('state-animate');
        }
    }

    function resetAnalysis() {
        switchState(emptyState, [scanningState, resultsContainer]);
        if (scanProgressBar) scanProgressBar.style.width = '0%';
        if (scoreValue) scoreValue.textContent = '0';
        if (scoreRingProgress) scoreRingProgress.style.strokeDashoffset = '339.29';
    }

    analyzeBtn.addEventListener('click', () => {
        // Validate inputs (simulate)
        const isFileUploaded = selectedFileState && selectedFileState.style.display === 'block';
        if (!isFileUploaded) {
            alert('Please upload your resume first.');
            return;
        }

        const jdText = document.getElementById('job-description').value;
        if (!jdText.trim()) {
            alert('Please paste a target job description first.');
            document.getElementById('job-description').focus();
            return;
        }

        // Start scanning
        switchState(scanningState, [emptyState, resultsContainer]);
        
        // Simulate progress bar
        let progress = 0;
        const scanInterval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 100) progress = 100;
            if (scanProgressBar) scanProgressBar.style.width = `${progress}%`;
            
            if (progress === 100) {
                clearInterval(scanInterval);
                setTimeout(showResults, 500);
            }
        }, 300);
    });

    function showResults() {
        switchState(resultsContainer, [scanningState, emptyState]);
        
        // Animate Score to 82%
        if (scoreValue && scoreRingProgress) animateScore(82);
    }

    function animateScore(targetScore) {
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
            
            // Update Number
            scoreValue.textContent = Math.round(currentScore);
            
            // Update Ring Offset
            const offset = circumference - (currentScore / 100) * circumference;
            scoreRingProgress.style.strokeDashoffset = offset;
            
        }, intervalTime);
    }
});
