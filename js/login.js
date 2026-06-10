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
        group.style.display = 'block';
        group.style.height = 'auto';
        group.style.opacity = '1';
        group.style.overflow = 'visible';
    }
    if (input) {
        input.setAttribute('required', 'true');
        input.setAttribute('tabindex', '0');
    }
}

// Collapse a group element
function collapseGroup(group, input) {
    if (group) {
        group.style.display = 'none';
        group.style.opacity = '0';
        group.style.height = '0';
        group.style.overflow = 'hidden';
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
    
    // Always show password if an email is valid enough to proceed, 
    // but we can collapse it if we are fully resetting.
    if (checkedEmail) {
        expandGroup(passwordGroup, passwordInput);
    } else {
        collapseGroup(passwordGroup, passwordInput);
    }
    
    if (isSignUp) {
        if (authTitle) authTitle.innerHTML = 'Create Account';
        if (authSubtitle) authSubtitle.textContent = "Welcome! We didn't find an account for this email. Let's create one.";
        if (authSubmitBtn) {
            const span = authSubmitBtn.querySelector('span');
            if (span) span.textContent = 'Create Account';
        }
        if (authSwitchText) authSwitchText.textContent = 'Already have an account?';
        if (authSwitchAction) authSwitchAction.textContent = 'Sign in';
        
        expandGroup(nameGroup, nameInput);
    } else {
        if (authTitle) authTitle.innerHTML = 'Welcome to Role<span>Pilot</span>';
        if (authSubtitle) authSubtitle.textContent = checkedEmail ? 'Welcome back! Enter your password to sign in.' : 'Sign in to access your AI career navigator.';
        if (authSubmitBtn) {
            const span = authSubmitBtn.querySelector('span');
            if (span) span.textContent = checkedEmail ? 'Sign In' : 'Continue';
        }
        if (authSwitchText) authSwitchText.textContent = "Don't have an account?";
        if (authSwitchAction) authSwitchAction.textContent = 'Create one';
        
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
    emailInput.addEventListener('input', debounce(checkUserStatus, 600));
    emailInput.addEventListener('blur', checkUserStatus);
}

/* --- Form Submission Actions --- */
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!db) return;

    hideAlert();
    const email = emailInput.value.trim().toLowerCase();
    
    // If the password field isn't visible yet, we're still checking the email
    if (passwordGroup.style.display === 'none') {
        emailInput.focus();
        emailInput.blur(); // Force a check
        return;
    }

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
                    // Redirect to the separate OTP page
                    window.location.href = 'otp.html?email=' + encodeURIComponent(email);
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
                    .select('username, avatar_url')
                    .eq('id', user.id)
                    .maybeSingle();

                if (profile && profile.username && profile.avatar_url) {
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
