import { getSupabaseClient } from './supabase-client.js';

// DOM Elements
const alertBox = document.getElementById('alert-box');
const alertIcon = document.getElementById('alert-icon');
const alertMessage = document.getElementById('alert-message');
const authError = document.getElementById('auth-error');

const loginForm = document.getElementById('login-form');
const nameGroup = document.getElementById('name-group');
const passwordGroup = document.getElementById('password-group');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const passwordToggle = document.getElementById('password-toggle');
const emailSuggestion = document.getElementById('email-suggestion');
const suggestionLink = document.getElementById('suggestion-link');
const authSubmitBtn = document.getElementById('auth-submit-btn');
const authSpinner = document.getElementById('auth-spinner');
const loginAuthCard = document.getElementById('login-auth-card');

const authTitle = document.getElementById('auth-title');
const authSubtitle = document.getElementById('auth-subtitle');
const authSwitchText = document.getElementById('auth-switch-text');
const authSwitchAction = document.getElementById('auth-switch-action');
const googleSigninBtn = document.getElementById('google-signin-btn');

let isSignUp = false;
let checkedEmail = '';
let isChecking = false;
let activeCheckPromise = null;

// Debounce helper
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Popular email providers
const POPULAR_DOMAINS = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com'];

// Helper function to calculate Levenshtein distance
function getLevenshteinDistance(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitution
                    matrix[i][j - 1] + 1,     // insertion
                    matrix[i - 1][j] + 1      // deletion
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

function checkEmailTypos(email) {
    if (!emailSuggestion || !suggestionLink) return null;
    
    const parts = email.split('@');
    if (parts.length !== 2) {
        emailSuggestion.style.display = 'none';
        return null;
    }

    const username = parts[0];
    const domain = parts[1].toLowerCase();

    if (POPULAR_DOMAINS.includes(domain)) {
        emailSuggestion.style.display = 'none';
        return null;
    }

    let closestDomain = null;
    let minDistance = 3;

    for (const popDomain of POPULAR_DOMAINS) {
        const distance = getLevenshteinDistance(domain, popDomain);
        if (distance < minDistance) {
            minDistance = distance;
            closestDomain = popDomain;
        }
    }

    if (closestDomain) {
        suggestionLink.textContent = `${username}@${closestDomain}`;
        emailSuggestion.style.display = 'block';
        return `${username}@${closestDomain}`;
    } else {
        emailSuggestion.style.display = 'none';
        return null;
    }
}

// Expand a group element
function expandGroup(group, input) {
    if (group) {
        group.classList.add('expanded');
        group.removeAttribute('style'); // Clear any residual inline styles
    }
    if (input) {
        input.setAttribute('required', 'true');
        input.setAttribute('tabindex', '0');
    }
}

// Collapse a group element
function collapseGroup(group, input) {
    if (group) {
        group.classList.remove('expanded');
        group.removeAttribute('style'); // Clear any residual inline styles
    }
    if (input) {
        input.removeAttribute('required');
        input.setAttribute('tabindex', '-1');
        input.value = '';
    }
}

// Layout Toggle Helper
function updateFormLayout(signUpState) {
    isSignUp = signUpState;
    
    // Password is now always visible by default
    
    if (isSignUp) {
        if (authTitle) authTitle.innerHTML = 'Create Account';
        if (authSubtitle) authSubtitle.textContent = 'Welcome! We didn\'t find an account for this email. Let\'s create one.';
        if (authSubmitBtn) authSubmitBtn.querySelector('span').textContent = 'Create Account';
        if (authSwitchText) authSwitchText.textContent = 'Already have an account?';
        if (authSwitchAction) authSwitchAction.textContent = 'Sign In';
        if (loginAuthCard) loginAuthCard.classList.add('expanded-mode');
        
        expandGroup(nameGroup, nameInput);
    } else {
        if (authTitle) authTitle.innerHTML = 'Welcome to Role<span>Pilot</span>';
        if (authSubtitle) authSubtitle.textContent = checkedEmail ? 'Welcome back! Enter your password to sign in.' : 'Sign in to access your AI career navigator.';
        if (authSubmitBtn) {
            const span = authSubmitBtn.querySelector('span');
            if (span) span.textContent = checkedEmail ? 'Sign In' : 'Continue';
        }
        if (authSwitchText) authSwitchText.textContent = 'Don\'t have an account?';
        if (authSwitchAction) authSwitchAction.textContent = 'Sign Up';
        if (loginAuthCard) loginAuthCard.classList.remove('expanded-mode');
        
        collapseGroup(nameGroup, nameInput);
    }
}

// Password toggle visibility
if (passwordToggle) {
    passwordToggle.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        const icon = passwordToggle.querySelector('i');
        if (type === 'text') {
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
}

// Helper: Show custom alert banner
function showAlert(type, message) {
    alertBox.className = `alert-box ${type}`;
    alertMessage.textContent = message;
    
    if (type === 'success') {
        alertIcon.className = 'fa-solid fa-circle-check alert-icon';
    } else {
        alertIcon.className = 'fa-solid fa-triangle-exclamation alert-icon';
    }
    
    alertBox.style.display = 'flex';
}

// Helper: Hide alert banner
function hideAlert() {
    alertBox.style.display = 'none';
}

// Initialize Supabase Client
let db = null;
async function initDb() {
    try {
        db = await getSupabaseClient();
        
        // Check if user is already logged in to prevent showing login screen
        const { data: { session }, error: sessionError } = await db.auth.getSession();
        if (session && !sessionError) {
            // Hide body to prevent any flicker of the blur screen
            document.body.style.display = 'none';
            const { data: profile } = await db
                .from('profiles')
                .select('username, avatar_url, target_role, experience_level')
                .eq('id', session.user.id)
                .maybeSingle();
                
            if (profile && profile.username && profile.avatar_url && profile.target_role && profile.experience_level) {
                window.location.href = 'index.html#live-dashboard';
            } else {
                window.location.href = 'form.html';
            }
            return;
        }

        // Check for prefilled email in URL
        const urlParams = new URLSearchParams(window.location.search);
        const prefilledEmail = urlParams.get('email');
        if (prefilledEmail && emailInput) {
            emailInput.value = prefilledEmail;
            checkUserStatus(); // Trigger status check immediately
        }
    } catch (e) {
        showAlert('error', `Database initialization error: ${e.message}`);
        authSubmitBtn.disabled = true;
    }
}
initDb();

// Suggestion click listener
if (emailSuggestion) {
    emailSuggestion.addEventListener('click', () => {
        const suggestedEmail = suggestionLink.textContent;
        if (suggestedEmail) {
            emailInput.value = suggestedEmail;
            emailSuggestion.style.display = 'none';
            emailInput.classList.remove('error');
            if (authError) authError.style.display = 'none';
            hideAlert();
            checkUserStatus();
        }
    });
}

// Dynamic email lookup function
async function checkUserStatus() {
    if (!db) return null;
    const email = emailInput.value.trim();

    if (!email) {
        resetToSignIn();
        emailInput.classList.remove('error');
        if (authError) authError.style.display = 'none';
        hideAlert();
        if (emailSuggestion) emailSuggestion.style.display = 'none';
        return null;
    }

    checkEmailTypos(email);

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        if (email.length >= 3) {
            if (authError) {
                authError.innerHTML = 'Please enter a valid email address<br>(e.g., you@example.com).';
                authError.style.display = 'block';
            }
            emailInput.classList.add('error');
        }
        resetToSignIn();
        return null;
    }

    emailInput.classList.remove('error');
    if (authError) authError.style.display = 'none';
    hideAlert();

    // Prevent checking again if this email has already been validated or is in progress
    if (email.toLowerCase() === checkedEmail.toLowerCase()) {
        return activeCheckPromise;
    }

    checkedEmail = email;
    isChecking = true;

    activeCheckPromise = (async () => {
        try {
            const { data, error } = await db
                .from('profiles')
                .select('id')
                .eq('email', email.toLowerCase())
                .maybeSingle();

            isChecking = false;

            if (error) {
                console.error("Failed to query user status:", error);
                return; 
            }

            const exists = !!data;
            updateFormLayout(!exists);

        } catch (err) {
            console.error(err);
            isChecking = false;
        }
    })();

    return activeCheckPromise;
}

// Clean up reset function
function resetToSignIn() {
    checkedEmail = '';
    activeCheckPromise = null;
    updateFormLayout(false);
}

// Check triggers
if (emailInput) {
    emailInput.addEventListener('input', debounce(checkUserStatus, 300));
    emailInput.addEventListener('blur', checkUserStatus);
}

/* --- Form Submission Actions --- */
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!db) return;

    hideAlert();
    const email = emailInput.value.trim().toLowerCase();
    
    // Continue logic

    const password = passwordInput.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        if (authError) {
            authError.innerHTML = 'Please enter a valid email address<br>(e.g., you@example.com).';
            authError.style.display = 'block';
        }
        emailInput.classList.add('error');
        emailInput.focus();
        return;
    } else {
        emailInput.classList.remove('error');
        if (authError) authError.style.display = 'none';
    }

    if (isChecking && activeCheckPromise) {
        authSubmitBtn.disabled = true;
        const originalText = authSubmitBtn.querySelector('span').textContent;
        authSubmitBtn.querySelector('span').textContent = 'Verifying...';
        
        try {
            await activeCheckPromise;
        } catch (err) {
            console.error("Error waiting for user status check:", err);
        } finally {
            authSubmitBtn.disabled = false;
            authSubmitBtn.querySelector('span').textContent = originalText;
        }
    }

    executeAuth();

    async function executeAuth() {
        authSubmitBtn.disabled = true;
        authSpinner.style.display = 'block';

        if (isSignUp) {
            const fullName = nameInput.value.trim();
            
            if (password.length < 6) {
                if (authError) {
                    authError.innerHTML = 'Password must be at least 6 characters.';
                    authError.style.display = 'block';
                }
                passwordInput.classList.add('error');
                passwordInput.focus();
                authSubmitBtn.disabled = false;
                authSpinner.style.display = 'none';
                return;
            } else {
                passwordInput.classList.remove('error');
            }

            try {
                const { data, error } = await db.auth.signUp({
                    email: email,
                    password: password,
                    options: {
                        data: {
                            full_name: fullName
                        }
                    }
                });

                if (error) throw error;

                if (data && data.session) {
                    window.location.href = 'form.html';
                } else {
                    // Show dynamic 8-digit OTP screen inside the card
                    loginForm.style.display = 'none';
                    
                    const elementsToHide = ['.auth-switch', '.divider', '.auth-header', '#google-signin-btn', '#alert-box'];
                    elementsToHide.forEach(selector => {
                        const el = document.querySelector(selector);
                        if (el) el.style.display = 'none';
                    });
                    
                    const successState = document.createElement('div');
                    successState.style.textAlign = 'center';
                    successState.style.padding = '1rem 0';
                    successState.style.animation = 'verifyFadeIn 0.5s ease-out forwards';
                    successState.innerHTML = `
                        <style>
                            @keyframes verifyFadeIn {
                                from { opacity: 0; transform: translateY(10px); }
                                to { opacity: 1; transform: translateY(0); }
                            }
                            .otp-input-container {
                                display: flex;
                                justify-content: center;
                                gap: 0.5rem;
                                margin: 1.5rem 0;
                            }
                            .otp-field {
                                width: 2.2rem;
                                height: 3rem;
                                font-size: 1.35rem;
                                font-weight: 700;
                                text-align: center;
                                background: rgba(0, 0, 0, 0.2);
                                border: 1px solid rgba(255, 255, 255, 0.1);
                                border-radius: 10px;
                                color: #ffffff;
                                outline: none;
                                transition: all 0.2s ease;
                            }
                            .otp-field:focus {
                                background: rgba(0, 0, 0, 0.3);
                                border-color: var(--primary);
                                box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.15);
                            }
                            
                            :root.light-theme .otp-field {
                                background: #ffffff;
                                border: 1px solid rgba(0, 0, 0, 0.15);
                                color: #0f172a;
                            }
                            :root.light-theme .otp-field:focus {
                                background: #ffffff;
                                border-color: var(--primary);
                                box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.1);
                            }
                            
                            .otp-subtitle {
                                color: var(--text-secondary);
                                line-height: 1.5;
                                font-size: 0.9rem;
                                margin: 0;
                            }
                            .otp-subtitle strong {
                                color: var(--text-primary);
                                font-weight: 600;
                            }
                            
                            .otp-envelope {
                                font-size: 3rem; 
                                margin-bottom: 1rem;
                                color: var(--text-primary);
                            }
                            :root.light-theme .otp-envelope {
                                filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
                            }

                            .otp-error-msg {
                                color: var(--error);
                                font-size: 0.85rem;
                                margin-top: 0.5rem;
                                display: none;
                            }
                        </style>
                        <div class="otp-envelope">✉️</div>
                        <h3 style="margin-bottom: 0.5rem; color: var(--primary); font-size: 1.35rem; font-weight: 700;">Verify Your Account</h3>
                        <p class="otp-subtitle">
                            We sent an 8-digit confirmation code to <br><strong style="font-weight: 600;">${email}</strong>.
                        </p>
                        
                        <div class="otp-input-container">
                            <input type="text" maxlength="1" class="otp-field" pattern="[0-9]" inputmode="numeric" required autocomplete="off">
                            <input type="text" maxlength="1" class="otp-field" pattern="[0-9]" inputmode="numeric" required autocomplete="off">
                            <input type="text" maxlength="1" class="otp-field" pattern="[0-9]" inputmode="numeric" required autocomplete="off">
                            <input type="text" maxlength="1" class="otp-field" pattern="[0-9]" inputmode="numeric" required autocomplete="off">
                            <input type="text" maxlength="1" class="otp-field" pattern="[0-9]" inputmode="numeric" required autocomplete="off">
                            <input type="text" maxlength="1" class="otp-field" pattern="[0-9]" inputmode="numeric" required autocomplete="off">
                            <input type="text" maxlength="1" class="otp-field" pattern="[0-9]" inputmode="numeric" required autocomplete="off">
                            <input type="text" maxlength="1" class="otp-field" pattern="[0-9]" inputmode="numeric" required autocomplete="off">
                        </div>
                        
                        <div id="otp-error" class="otp-error-msg"></div>
                        
                        <button id="verify-submit-btn" type="button" class="btn" style="margin-top: 1rem; width: 100%;"><span>Verify & Sign In</span></button>
                        
                        <p style="margin-top: 1.5rem; font-size: 0.85rem; color: var(--text-muted);">
                            Didn't receive the code? <a href="#" id="verify-back-link" style="color: var(--primary); text-decoration: none; font-weight: 600;">Back to Sign In</a>
                        </p>
                    `;
                    
                    loginForm.parentElement.appendChild(successState);
                    
                    const otpFields = document.querySelectorAll('.otp-field');
                    const verifyBtn = document.getElementById('verify-submit-btn');
                    const verifyBtnSpan = verifyBtn.querySelector('span');
                    const otpError = document.getElementById('otp-error');
                    const backLink = document.getElementById('verify-back-link');
                    
                    // Automatic focus shifting behavior
                    otpFields.forEach((field, index) => {
                        if (index === 0) field.focus();
                        
                        field.addEventListener('input', (e) => {
                            field.value = field.value.replace(/[^0-9]/g, '');
                            if (field.value.length === 1 && index < otpFields.length - 1) {
                                otpFields[index + 1].focus();
                            }
                        });
                        
                        field.addEventListener('keydown', (e) => {
                            if (e.key === 'Backspace' && field.value.length === 0 && index > 0) {
                                otpFields[index - 1].focus();
                            }
                        });
                    });
                    
                    // Verify logic
                    verifyBtn.addEventListener('click', async (e) => {
                        e.preventDefault();
                        let token = "";
                        otpFields.forEach(field => { token += field.value; });
                        
                        if (token.length !== 8) {
                            otpError.textContent = "Please enter all 8 digits of the verification code.";
                            otpError.style.display = 'block';
                            return;
                        }
                        
                        otpError.style.display = 'none';
                        verifyBtn.disabled = true;
                        verifyBtnSpan.textContent = 'Verifying...';
                        
                        try {
                            const { data: verifyData, error: verifyError } = await db.auth.verifyOtp({
                                email,
                                token,
                                type: 'signup'
                            });
                            
                            verifyBtn.disabled = false;
                            verifyBtnSpan.textContent = 'Verify & Sign In';
                            
                            if (verifyError) {
                                otpError.textContent = verifyError.message || "Invalid verification code.";
                                otpError.style.display = 'block';
                                otpFields.forEach(field => field.style.borderColor = 'var(--error)');
                            } else {
                                successState.style.display = 'none';
                                window.location.href = 'form.html';
                            }
                        } catch (err) {
                            verifyBtn.disabled = false;
                            verifyBtnSpan.textContent = 'Verify & Sign In';
                            otpError.textContent = "An error occurred. Please try again.";
                            otpError.style.display = 'block';
                        }
                    });
                    
                    if (backLink) {
                        backLink.addEventListener('click', (e) => {
                            e.preventDefault();
                            window.location.reload();
                        });
                    }
                }
            } catch (error) {
                showAlert('error', error.message || 'Failed to sign up. Please try again.');
            } finally {
                authSubmitBtn.disabled = false;
                authSpinner.style.display = 'none';
            }
        } else {
            try {
                const { data, error } = await db.auth.signInWithPassword({
                    email: email,
                    password: password
                });

                if (error) throw error;

                const user = data.user;
                if (!user) throw new Error("User session not found");

                const { data: profile } = await db
                    .from('profiles')
                    .select('username, avatar_url, target_role, experience_level')
                    .eq('id', user.id)
                    .maybeSingle();

                if (profile && profile.username && profile.avatar_url && profile.target_role && profile.experience_level) {
                    window.location.href = 'index.html#live-dashboard';
                } else {
                    window.location.href = 'form.html';
                }
            } catch (error) {
                showAlert('error', error.message || 'Failed to sign in. Please check your credentials.');
            } finally {
                authSubmitBtn.disabled = false;
                authSpinner.style.display = 'none';
            }
        }
    }
});

// Manual Switch Link Click Listener
if (authSwitchAction) {
    authSwitchAction.addEventListener('click', (e) => {
        e.preventDefault();
        hideAlert();
        
        // Ensure email is "checked" so password field stays open during switch
        if (!checkedEmail) {
            checkedEmail = emailInput.value.trim() || 'temp@example.com'; 
        }
        
        updateFormLayout(!isSignUp);
    });
}

// Google Sign-In event listener
if (googleSigninBtn) {
    googleSigninBtn.addEventListener('click', async () => {
        if (!db) return;
        hideAlert();
        try {
            const { error } = await db.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: window.location.origin + '/form.html'
                }
            });
            if (error) throw error;
        } catch (error) {
            showAlert('error', error.message || 'Failed to initialize Google Sign In.');
        }
    });
}
