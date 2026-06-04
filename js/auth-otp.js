import { getSupabaseClient } from './supabase-client.js';

// DOM Elements
const alertBox = document.getElementById('alert-box');
const alertIcon = document.getElementById('alert-icon');
const alertMessage = document.getElementById('alert-message');

const emailScreen = document.getElementById('email-screen');
const otpScreen = document.getElementById('otp-screen');
const successScreen = document.getElementById('success-screen');

const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('email-input');
const sendOtpBtn = document.getElementById('send-otp-btn');
const sendOtpSpinner = document.getElementById('send-otp-spinner');

const otpForm = document.getElementById('otp-form');
const otpInputs = document.querySelectorAll('.otp-digit');
const verifyOtpBtn = document.getElementById('verify-otp-btn');
const verifyOtpSpinner = document.getElementById('verify-otp-spinner');
const backBtn = document.getElementById('back-btn');
const displayEmail = document.getElementById('display-email');
const continueBtn = document.getElementById('continue-btn');

let targetEmail = '';

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
    } catch (e) {
        showAlert('error', `Database initialization error: ${e.message}`);
        sendOtpBtn.disabled = true;
    }
}
initDb();

// Header Sign In Button functionality
const headerSignInBtn = document.getElementById('header-signin-btn');
if (headerSignInBtn) {
    headerSignInBtn.addEventListener('click', () => {
        if (emailInput) {
            emailInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Add a small delay before focusing to allow scrolling
            setTimeout(() => emailInput.focus(), 300);
        }
    });
}

/* --- Screen Navigation --- */

function showScreen(screen) {
    hideAlert();
    emailScreen.classList.remove('active');
    otpScreen.classList.remove('active');
    successScreen.classList.remove('active');
    
    screen.classList.add('active');
}

/* --- 8-Digit OTP Input Grid Enhancements (Premium UX) --- */

// Focus the first OTP box when entering the OTP screen
function resetOtpGrid() {
    otpInputs.forEach(input => {
        input.value = '';
    });
    verifyOtpBtn.disabled = true;
    setTimeout(() => otpInputs[0].focus(), 100);
}

otpInputs.forEach((input, index) => {
    // 1. Move focus to next input on digit entry
    input.addEventListener('input', (e) => {
        // Allow only numeric input
        input.value = input.value.replace(/[^0-9]/g, '');
        
        if (input.value && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }
        checkOtpCompletion();
    });

    // 2. Handle backspaces to go to previous input
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            if (!input.value && index > 0) {
                otpInputs[index - 1].value = '';
                otpInputs[index - 1].focus();
            } else {
                input.value = '';
            }
            checkOtpCompletion();
        }
    });

    // 3. Prevent letters and other characters
    input.addEventListener('keypress', (e) => {
        if (e.key < '0' || e.key > '9') {
            e.preventDefault();
        }
    });
});

// 4. Handle paste events dynamically (distribute code)
otpInputs[0].addEventListener('paste', (e) => {
    e.preventDefault();
    const pastedData = (e.clipboardData || window.clipboardData).getData('text').trim();
    
    // Filter only digits
    const digits = pastedData.replace(/[^0-9]/g, '').slice(0, 8);
    
    if (digits.length > 0) {
        digits.split('').forEach((char, idx) => {
            if (otpInputs[idx]) {
                otpInputs[idx].value = char;
            }
        });
        
        // Focus the appropriate input
        const nextFocusIndex = Math.min(digits.length, otpInputs.length - 1);
        otpInputs[nextFocusIndex].focus();
        
        checkOtpCompletion();
    }
});

// Enable/Disable "Verify & Continue" button based on fill status
function checkOtpCompletion() {
    let completed = true;
    otpInputs.forEach(input => {
        if (!input.value) completed = false;
    });
    verifyOtpBtn.disabled = !completed;
}

// Gather the 8 digit OTP value
function getOtpCode() {
    let code = '';
    otpInputs.forEach(input => {
        code += input.value;
    });
    return code;
}

/* --- Form Actions --- */

// Request OTP Send
emailForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!db) return;

    hideAlert();
    targetEmail = emailInput.value.trim().toLowerCase();
    
    // Loading animation
    sendOtpBtn.disabled = true;
    sendOtpSpinner.style.display = 'block';

    try {
        const { error } = await db.auth.signInWithOtp({
            email: targetEmail,
            options: {
                // Ensure email confirmation redirect works
                emailRedirectTo: window.location.origin
            }
        });

        if (error) throw error;

        // Transition to OTP verification screen
        displayEmail.textContent = targetEmail;
        showScreen(otpScreen);
        resetOtpGrid();
        showAlert('success', 'OTP code sent! Please check your mailbox.');

    } catch (error) {
        showAlert('error', error.message || 'Failed to send OTP code. Please try again.');
    } finally {
        sendOtpBtn.disabled = false;
        sendOtpSpinner.style.display = 'none';
    }
});

// Verify Entered OTP
otpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!db || !targetEmail) return;

    hideAlert();
    const token = getOtpCode();

    // Loading animation
    verifyOtpBtn.disabled = true;
    verifyOtpSpinner.style.display = 'block';

    try {
        let authData = null;
        const { data, error } = await db.auth.verifyOtp({
            email: targetEmail,
            token: token,
            type: 'signup'
        });

        if (error) {
            // If signup verification fails, fall back to testing magiclink type (common in email OTP setups)
            const fallbackResult = await db.auth.verifyOtp({
                email: targetEmail,
                token: token,
                type: 'magiclink'
            });
            if (fallbackResult.error) throw error;
            authData = fallbackResult.data;
        } else {
            authData = data;
        }

        const user = authData.user;
        if (!user) throw new Error("Auth user session not found");

        // Query profile to see if username and avatar are completed
        const { data: profile, error: profileError } = await db
            .from('profiles')
            .select('username, avatar_url')
            .eq('id', user.id)
            .maybeSingle();

        let redirectUrl = 'form.html';
        if (profile && profile.username && profile.avatar_url) {
            redirectUrl = 'dashboard.html';
        }

        // Attach redirect target URL to continue button metadata
        continueBtn.dataset.redirect = redirectUrl;

        // Show Success screen
        showScreen(successScreen);

    } catch (error) {
        showAlert('error', error.message || 'Invalid verification code. Please check your email and try again.');
        resetOtpGrid();
    } finally {
        verifyOtpBtn.disabled = false;
        verifyOtpSpinner.style.display = 'none';
    }
});

// Back to Email Screen
backBtn.addEventListener('click', () => {
    showScreen(emailScreen);
});

// Continue Action
continueBtn.addEventListener('click', () => {
    const redirectUrl = continueBtn.dataset.redirect || 'form.html';
    window.location.href = redirectUrl;
});
