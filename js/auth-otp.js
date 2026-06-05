import { getSupabaseClient } from './supabase-client.js';

// DOM Elements
const alertBox = document.getElementById('alert-box');
const alertIcon = document.getElementById('alert-icon');
const alertMessage = document.getElementById('alert-message');
const authError = document.getElementById('auth-error');

const emailScreen = document.getElementById('email-screen');

const emailForm = document.getElementById('email-form');
const nameGroup = document.getElementById('name-group');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const emailSuggestion = document.getElementById('email-suggestion');
const suggestionLink = document.getElementById('suggestion-link');
const sendOtpBtn = document.getElementById('send-otp-btn');
const sendOtpSpinner = document.getElementById('send-otp-spinner');

const authTitle = document.getElementById('auth-title');
const authSubtitle = document.getElementById('auth-subtitle');
const authSwitchText = document.getElementById('auth-switch-text');
const authSwitchAction = document.getElementById('auth-switch-action');
const googleSigninBtn = document.getElementById('google-signin-btn');

let isSignUp = false;
let checkedEmail = '';
let isChecking = false;
let activeCheckPromise = null;

// Debounce helper to avoid slamming the database on every keystroke
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
    let minDistance = 3; // Maximum 2 differences allowed

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

// Layout Toggle Helper
function updateFormLayout(signUpState) {
    isSignUp = signUpState;
    if (isSignUp) {
        if (authTitle) authTitle.innerHTML = 'Create Account';
        if (authSubtitle) authSubtitle.textContent = "Welcome! We didn't find an account for this email. Let's create one.";
        if (sendOtpBtn) {
            const span = sendOtpBtn.querySelector('span');
            if (span) span.textContent = 'Create Account';
        }
        if (authSwitchText) authSwitchText.textContent = 'Already have an account?';
        if (authSwitchAction) authSwitchAction.textContent = 'Sign in';
        
        if (nameGroup) nameGroup.classList.add('expanded');
        if (nameInput) {
            nameInput.setAttribute('required', 'true');
            nameInput.setAttribute('tabindex', '0');
        }
    } else {
        if (authTitle) authTitle.innerHTML = 'Welcome to Role<span>Pilot</span>';
        if (authSubtitle) authSubtitle.innerHTML = 'Sign in to access your<br>AI career navigator.';
        if (sendOtpBtn) {
            const span = sendOtpBtn.querySelector('span');
            if (span) span.textContent = 'Sign In';
        }
        if (authSwitchText) authSwitchText.textContent = "Don't have an account?";
        if (authSwitchAction) authSwitchAction.textContent = 'Create one';
        
        if (nameGroup) nameGroup.classList.remove('expanded');
        if (nameInput) {
            nameInput.removeAttribute('required');
            nameInput.setAttribute('tabindex', '-1');
            nameInput.value = '';
        }
    }
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
        sendOtpBtn.disabled = true;
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
            
            if (exists) {
                if (authSubtitle) authSubtitle.textContent = 'Welcome back! Enter your password to sign in.';
            } else {
                if (authSubtitle) authSubtitle.textContent = "Welcome! We didn't find an account for this email. Let's create one.";
            }

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

// Header Sign In Button functionality
const headerSignInBtn = document.getElementById('header-signin-btn');
if (headerSignInBtn) {
    headerSignInBtn.addEventListener('click', () => {
        if (emailInput) {
            emailInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => emailInput.focus(), 300);
        }
    });
}

/* --- Form Submission Actions --- */
emailForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!db) return;

    hideAlert();
    const email = emailInput.value.trim().toLowerCase();
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
        sendOtpBtn.disabled = true;
        const originalText = sendOtpBtn.querySelector('span').textContent;
        sendOtpBtn.querySelector('span').textContent = 'Verifying...';
        
        try {
            await activeCheckPromise;
        } catch (err) {
            console.error("Error waiting for user status check:", err);
        } finally {
            sendOtpBtn.disabled = false;
            sendOtpBtn.querySelector('span').textContent = originalText;
        }
    }

    executeAuth();

    async function executeAuth() {
        sendOtpBtn.disabled = true;
        sendOtpSpinner.style.display = 'block';

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
                sendOtpBtn.disabled = false;
                sendOtpSpinner.style.display = 'none';
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
                    window.location.href = 'dashboard.html';
                } else {
                    window.location.href = 'form.html';
                }
            } catch (error) {
                showAlert('error', error.message || 'Failed to sign in. Please check your credentials.');
            } finally {
                sendOtpBtn.disabled = false;
                sendOtpSpinner.style.display = 'none';
            }
        }
    }
});

// Manual Switch Link Click Listener
if (authSwitchAction) {
    authSwitchAction.addEventListener('click', (e) => {
        e.preventDefault();
        hideAlert();
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
