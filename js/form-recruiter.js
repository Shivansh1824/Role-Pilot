import { getSupabaseClient } from './supabase-client.js';

document.addEventListener('DOMContentLoaded', async () => {
    const headerSigninBtn = document.getElementById('header-signin-btn');
    if (headerSigninBtn) headerSigninBtn.style.display = 'none';

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
        window.location.href = 'index.html';
        return;
    }

    try {
        const { data: profile } = await db
            .from('profiles')
            .select('username, avatar_url, target_role, experience_level')
            .eq('id', user.id)
            .maybeSingle();

        if (profile && profile.username && profile.avatar_url && profile.target_role === 'Recruiter') {
            window.location.href = 'dashboard-recruiter.html';
            return;
        }
    } catch (err) {}

    const form = document.getElementById('onboarding-form');
    const nameInput = document.getElementById('onboarding-name');
    const usernameInput = document.getElementById('onboarding-username');
    const companyInput = document.getElementById('onboarding-company');
    const jobTitleInput = document.getElementById('onboarding-job-title');
    const selectedExperienceInput = document.getElementById('selected-experience');
    const experienceCards = document.querySelectorAll('.experience-card');
    
    const avatarGrid = document.getElementById('avatar-grid');
    const selectedAvatarInput = document.getElementById('selected-avatar');
    const submitBtn = document.getElementById('onboarding-submit');
    const signoutBtn = document.getElementById('onboarding-signout-btn');
    const spinner = document.getElementById('onboarding-spinner');

    if (user.user_metadata && user.user_metadata.full_name) {
        nameInput.value = user.user_metadata.full_name;
    }

    // Auto username
    nameInput.addEventListener('blur', () => {
        if (!usernameInput.value && nameInput.value.trim()) {
            let draft = nameInput.value.trim().toLowerCase().replace(/[^a-z0-9]/g, '_').slice(0, 15);
            draft = draft.replace(/^[0-9_]+/, '');
            if (draft.length >= 3) {
                usernameInput.value = draft;
                validateForm();
            }
        }
    });

    const generateAvatarsGrid = () => {
        avatarGrid.innerHTML = '';
        for(let i=0; i<8; i++) {
            const seed = `Recruiter_${user.id}_${i}`;
            const dicebearUrl = `https://api.dicebear.com/7.x/personas/svg?seed=${seed}&backgroundColor=transparent`;
            const div = document.createElement('div');
            div.className = 'avatar-option';
            div.innerHTML = `<img src="${dicebearUrl}" alt="Avatar" style="width: 100%; height: 100%; object-fit: contain;">`;
            div.addEventListener('click', () => {
                document.querySelectorAll('.avatar-option').forEach(el => el.classList.remove('selected'));
                div.classList.add('selected');
                selectedAvatarInput.value = dicebearUrl;
                validateForm();
            });
            avatarGrid.appendChild(div);
        }
    };
    generateAvatarsGrid();

    experienceCards.forEach(card => {
        card.addEventListener('click', () => {
            experienceCards.forEach(el => el.classList.remove('selected'));
            card.classList.add('selected');
            selectedExperienceInput.value = card.dataset.level;
            validateForm();
        });
    });

    [nameInput, usernameInput, companyInput, jobTitleInput].forEach(el => {
        if(el) el.addEventListener('input', validateForm);
    });

    function validateForm() {
        const isValid = nameInput.value.trim() && 
                        usernameInput.value.trim() && 
                        companyInput.value.trim() && 
                        jobTitleInput.value.trim() && 
                        selectedAvatarInput.value && 
                        selectedExperienceInput.value;
        submitBtn.disabled = !isValid;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (submitBtn.disabled) return;
        submitBtn.disabled = true;
        if(spinner) spinner.style.display = 'block';

        const profileData = {
            full_name: nameInput.value.trim(),
            username: usernameInput.value.trim().toLowerCase(),
            avatar_url: selectedAvatarInput.value,
            target_role: 'Recruiter',
            experience_level: selectedExperienceInput.value,
            skills: [
                `Company: ${companyInput.value.trim()}`,
                `Title: ${jobTitleInput.value.trim()}`
            ],
            updated_at: new Date().toISOString()
        };

        try {
            const { error } = await db.from('profiles').update(profileData).eq('id', user.id);
            if (error) throw error;
            window.location.href = 'dashboard-recruiter.html';
        } catch (error) {
            console.error(error);
            alert("Failed to save profile: " + error.message);
            submitBtn.disabled = false;
            if(spinner) spinner.style.display = 'none';
        }
    });

    if (signoutBtn) {
        signoutBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            await db.auth.signOut();
            window.location.href = 'index.html';
        });
    }
});
