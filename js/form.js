import { getSupabaseClient } from './supabase-client.js';

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Initialize Supabase Client & Auth Guard
    let db = null;
    let user = null;

    try {
        db = await getSupabaseClient();
        const { data: userData, error: authError } = await db.auth.getUser();
        
        if (authError || !userData || !userData.user) {
            window.location.href = 'index.html';
            return;
        }
        
        user = userData.user;
    } catch (e) {
        console.error("Database connection failed:", e);
        window.location.href = 'index.html';
        return;
    }

    // 2. Fetch profile to check if already complete
    try {
        const { data: profile } = await db
            .from('profiles')
            .select('username, avatar_url, full_name')
            .eq('id', user.id)
            .maybeSingle();

        if (profile && profile.username && profile.avatar_url) {
            window.location.href = 'dashboard.html';
            return;
        }

        // Pre-fill full name if metadata contains it
        if (user.user_metadata && user.user_metadata.full_name) {
            document.getElementById('onboarding-name').value = user.user_metadata.full_name;
        } else if (profile && profile.full_name) {
            document.getElementById('onboarding-name').value = profile.full_name;
        }
    } catch (err) {
        console.warn("Could not retrieve current profile metadata:", err);
    }

    // 3. Define Form DOM Elements
    const form = document.getElementById('onboarding-form');
    const nameInput = document.getElementById('onboarding-name');
    const usernameInput = document.getElementById('onboarding-username');
    const usernameStatus = document.getElementById('username-status');
    const avatarGrid = document.getElementById('avatar-grid');
    const selectedAvatarInput = document.getElementById('selected-avatar');
    const submitBtn = document.getElementById('onboarding-submit');
    const spinner = document.getElementById('onboarding-spinner');
    
    const roleDropdown = document.getElementById('role-dropdown');
    const roleDropdownSelected = document.getElementById('role-dropdown-selected');
    const roleDropdownOptions = document.getElementById('role-dropdown-options');
    const selectedRoleInput = document.getElementById('selected-role');

    const selectedExperienceInput = document.getElementById('selected-experience');
    const experienceCards = document.querySelectorAll('.experience-card');

    const skillsInput = document.getElementById('skills-input');
    const skillsWrapper = document.getElementById('skills-wrapper');
    const signoutBtn = document.getElementById('onboarding-signout-btn');

    let skillsList = [];
    let isUsernameValid = false;

    // 4. Generate 12 Sleek Avatars (Dicebear + Gradient Fallback)
    const avatarsInfo = [
        { grad: ['hsl(263, 70%, 50%)', 'hsl(190, 90%, 50%)'], icon: 'fa-user-tie' },
        { grad: ['hsl(340, 80%, 50%)', 'hsl(20, 90%, 55%)'], icon: 'fa-user-ninja' },
        { grad: ['hsl(142, 70%, 45%)', 'hsl(190, 90%, 50%)'], icon: 'fa-user-astronaut' },
        { grad: ['hsl(210, 80%, 50%)', 'hsl(263, 70%, 50%)'], icon: 'fa-laptop-code' },
        { grad: ['hsl(45, 90%, 50%)', 'hsl(15, 90%, 50%)'], icon: 'fa-user-graduate' },
        { grad: ['hsl(300, 70%, 50%)', 'hsl(263, 70%, 50%)'], icon: 'fa-robot' },
        { grad: ['hsl(200, 80%, 50%)', 'hsl(142, 70%, 45%)'], icon: 'fa-rocket' },
        { grad: ['hsl(160, 80%, 40%)', 'hsl(190, 90%, 50%)'], icon: 'fa-compass' },
        { grad: ['hsl(10, 80%, 50%)', 'hsl(340, 80%, 55%)'], icon: 'fa-brain' },
        { grad: ['hsl(280, 70%, 50%)', 'hsl(340, 80%, 50%)'], icon: 'fa-microscope' },
        { grad: ['hsl(180, 70%, 40%)', 'hsl(263, 70%, 50%)'], icon: 'fa-seedling' },
        { grad: ['hsl(60, 85%, 45%)', 'hsl(142, 70%, 45%)'], icon: 'fa-chart-line' }
    ];

    const generateAvatarsGrid = () => {
        avatarGrid.innerHTML = '';
        avatarsInfo.forEach((avatar, index) => {
            const seed = `RolePilot_${user.id}_${index + 1}`;
            // Dicebear personas library
            const dicebearUrl = `https://api.dicebear.com/7.x/personas/svg?seed=${seed}&backgroundColor=transparent`;
            
            const div = document.createElement('div');
            div.className = 'avatar-option';
            div.style.position = 'relative';
            div.innerHTML = `
                <div class="avatar-fallback" style="width: 100%; height: 100%; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 1.5rem; background: linear-gradient(135deg, ${avatar.grad[0]}, ${avatar.grad[1]});">
                    <i class="fa-solid ${avatar.icon}"></i>
                </div>
                <img src="${dicebearUrl}" alt="Avatar ${index + 1}" style="position: absolute; width: calc(100% - 8px); height: calc(100% - 8px); top: 4px; left: 4px; z-index: 2; opacity: 0; transition: opacity 0.3s; object-fit: contain;" onload="this.style.opacity=1;">
            `;

            div.addEventListener('click', () => {
                document.querySelectorAll('.avatar-option').forEach(el => el.classList.remove('selected'));
                div.classList.add('selected');
                selectedAvatarInput.value = dicebearUrl; // store URL as profile avatar_url
                validateForm();
            });

            avatarGrid.appendChild(div);
        });
    };
    generateAvatarsGrid();

    // 5. Populate Custom Roles Dropdown
    const careerRoles = [
        { id: 'frontend', name: 'Frontend Engineer', icon: 'fa-code' },
        { id: 'backend', name: 'Backend Engineer', icon: 'fa-server' },
        { id: 'fullstack', name: 'Full Stack Developer', icon: 'fa-layer-group' },
        { id: 'data_scientist', name: 'Data Scientist', icon: 'fa-brain' },
        { id: 'product_manager', name: 'Product Manager', icon: 'fa-compass' },
        { id: 'ui_ux_designer', name: 'UI/UX Designer', icon: 'fa-palette' },
        { id: 'devops', name: 'DevOps Engineer', icon: 'fa-cloud' },
        { id: 'mobile_developer', name: 'Mobile Developer', icon: 'fa-mobile-screen-button' },
        { id: 'qa_engineer', name: 'QA Engineer', icon: 'fa-bug' },
        { id: 'security_analyst', name: 'Cybersecurity Analyst', icon: 'fa-shield-halved' }
    ];

    const populateRoles = () => {
        roleDropdownOptions.innerHTML = '';
        careerRoles.forEach(role => {
            const item = document.createElement('div');
            item.className = 'dropdown-item';
            item.innerHTML = `
                <div class="role-icon-small">
                    <i class="fa-solid ${role.icon}"></i>
                </div>
                <span>${role.name}</span>
            `;
            item.addEventListener('click', () => {
                roleDropdownSelected.innerHTML = `
                    <div style="display:flex; align-items:center; gap:12px;">
                        <i class="fa-solid ${role.icon}" style="color:var(--primary);"></i>
                        <span>${role.name}</span>
                    </div>
                `;
                selectedRoleInput.value = role.name;
                roleDropdown.classList.remove('open');
                validateForm();
            });
            roleDropdownOptions.appendChild(item);
        });
    };
    populateRoles();

    roleDropdownSelected.addEventListener('click', () => {
        roleDropdown.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (!roleDropdown.contains(e.target)) {
            roleDropdown.classList.remove('open');
        }
    });

    // 6. Experience level selector mapping
    experienceCards.forEach(card => {
        card.addEventListener('click', () => {
            experienceCards.forEach(el => el.classList.remove('selected'));
            card.classList.add('selected');
            selectedExperienceInput.value = card.dataset.level;
            validateForm();
        });
    });

    // 7. Interactive Key Skills Tagging
    const renderSkillTags = () => {
        // Clear existing tags but preserve the input element itself
        const tags = skillsWrapper.querySelectorAll('.skill-tag');
        tags.forEach(tag => tag.remove());

        skillsList.forEach((skill, idx) => {
            const tag = document.createElement('div');
            tag.className = 'skill-tag';
            tag.innerHTML = `
                <span>${skill}</span>
                <i class="fa-solid fa-xmark" data-index="${idx}"></i>
            `;
            // Remove tag listener
            tag.querySelector('i').addEventListener('click', (e) => {
                const indexToRemove = parseInt(e.target.dataset.index);
                skillsList.splice(indexToRemove, 1);
                renderSkillTags();
            });
            skillsWrapper.insertBefore(tag, skillsInput);
        });
    };

    skillsInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            const value = skillsInput.value.trim().replace(/[^a-zA-Z0-9+#.\s]/g, '');
            if (value && !skillsList.includes(value)) {
                skillsList.push(value);
                renderSkillTags();
            }
            skillsInput.value = '';
        }
    });

    // 8. Username Check Uniqueness Debounced
    let usernameTimeout;
    
    const checkUsernameAvailability = async () => {
        const val = usernameInput.value.trim().toLowerCase().replace(/[^a-z0-9_]/g, '');
        usernameInput.value = val;

        if (val.length < 3) {
            usernameStatus.textContent = 'Username must be at least 3 characters.';
            usernameStatus.className = 'input-status-msg error';
            isUsernameValid = false;
            validateForm();
            return;
        }

        usernameStatus.textContent = 'Checking availability...';
        usernameStatus.className = 'input-status-msg';

        try {
            const { data, error } = await db
                .from('profiles')
                .select('username')
                .eq('username', val)
                .maybeSingle();

            if (error) throw error;

            if (data) {
                // Taken
                const alternative = val + Math.floor(Math.random() * 100);
                usernameStatus.innerHTML = `Taken. Try: <span id="suggested-username" style="text-decoration:underline; cursor:pointer; font-weight:700;">${alternative}</span>`;
                usernameStatus.className = 'input-status-msg error';
                isUsernameValid = false;
                
                // Allow user to click alternative
                document.getElementById('suggested-username').addEventListener('click', () => {
                    usernameInput.value = alternative;
                    checkUsernameAvailability();
                });
            } else {
                // Available
                usernameStatus.textContent = 'Username is available!';
                usernameStatus.className = 'input-status-msg success';
                isUsernameValid = true;
            }
        } catch (e) {
            console.error("Error checking username:", e);
            usernameStatus.textContent = 'Connection error checking availability.';
            usernameStatus.className = 'input-status-msg error';
            isUsernameValid = false;
        }
        validateForm();
    };

    usernameInput.addEventListener('input', () => {
        clearTimeout(usernameTimeout);
        isUsernameValid = false;
        validateForm();
        usernameTimeout = setTimeout(checkUsernameAvailability, 500);
    });

    // Auto-generate username from name once name is typed
    nameInput.addEventListener('blur', () => {
        if (!usernameInput.value && nameInput.value.trim()) {
            const draft = nameInput.value.trim().toLowerCase().replace(/[^a-z0-9]/g, '_').slice(0, 15);
            usernameInput.value = draft;
            checkUsernameAvailability();
        }
    });

    nameInput.addEventListener('input', validateForm);

    // 9. Validation helper
    function validateForm() {
        const isNameEntered = nameInput.value.trim().length > 0;
        const isAvatarSelected = selectedAvatarInput.value.length > 0;
        const isRoleSelected = selectedRoleInput.value.length > 0;
        const isExperienceSelected = selectedExperienceInput.value.length > 0;

        if (isNameEntered && isAvatarSelected && isRoleSelected && isExperienceSelected && isUsernameValid) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    }

    // 10. Form submission to database
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (submitBtn.disabled) return;

        submitBtn.disabled = true;
        spinner.style.display = 'block';

        const profileData = {
            full_name: nameInput.value.trim(),
            username: usernameInput.value.trim().toLowerCase(),
            avatar_url: selectedAvatarInput.value,
            target_role: selectedRoleInput.value,
            experience_level: selectedExperienceInput.value,
            skills: skillsList,
            updated_at: new Date().toISOString()
        };

        try {
            const { error } = await db
                .from('profiles')
                .update(profileData)
                .eq('id', user.id);

            if (error) throw error;

            // Direct to dashboard
            window.location.href = 'dashboard.html';

        } catch (error) {
            console.error("Profile submit error:", error);
            alert("Failed to save profile onboarding: " + (error.message || error));
            submitBtn.disabled = false;
            spinner.style.display = 'none';
        }
    });

    // 11. Onboarding Cancel & Sign Out
    if (signoutBtn) {
        signoutBtn.addEventListener('click', async () => {
            signoutBtn.innerHTML = 'Signing out...';
            try {
                await db.auth.signOut();
            } catch (err) {
                console.error("Sign out error:", err);
            }
            // Clear local cached sessions
            for (let key in localStorage) {
                if (key.startsWith('sb-')) {
                    localStorage.removeItem(key);
                }
            }
            window.location.href = 'index.html';
        });
    }
});
