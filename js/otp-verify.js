import { getSupabaseClient } from './supabase-client.js';

// DOM Elements
const alertBox = document.getElementById('alert-box');
const alertIcon = document.getElementById('alert-icon');
const alertMessage = document.getElementById('alert-message');

const otpScreen = document.getElementById('otp-screen');
const successScreen = document.getElementById('success-screen');

const otpForm = document.getElementById('otp-form');
const otpInputs = document.querySelectorAll('.otp-digit');
const verifyOtpBtn = document.getElementById('verify-otp-btn');
const verifyOtpSpinner = document.getElementById('verify-otp-spinner');
const backBtn = document.getElementById('back-btn');
const displayEmail = document.getElementById('display-email');
const continueBtn = document.getElementById('continue-btn');

let db = null;
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

function resetOtpGrid() {
    otpInputs.forEach(input => {
        input.value = '';
    });
    verifyOtpBtn.disabled = true;
    setTimeout(() => otpInputs[0].focus(), 100);
}

function checkOtpCompletion() {
    let completed = true;
    otpInputs.forEach(input => {
        if (!input.value) completed = false;
    });
    verifyOtpBtn.disabled = !completed;
}

function getOtpCode() {
    let code = '';
    otpInputs.forEach(input => {
        code += input.value;
    });
    return code;
}

// Setup input listeners
otpInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        input.value = input.value.replace(/[^0-9]/g, '');
        if (input.value && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }
        checkOtpCompletion();
    });

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

    input.addEventListener('keypress', (e) => {
        if (e.key < '0' || e.key > '9') {
            e.preventDefault();
        }
    });
});

otpInputs[0].addEventListener('paste', (e) => {
    e.preventDefault();
    const pastedData = (e.clipboardData || window.clipboardData).getData('text').trim();
    const digits = pastedData.replace(/[^0-9]/g, '').slice(0, 8);
    
    if (digits.length > 0) {
        digits.split('').forEach((char, idx) => {
            if (otpInputs[idx]) {
                otpInputs[idx].value = char;
            }
        });
        const nextFocusIndex = Math.min(digits.length, otpInputs.length - 1);
        otpInputs[nextFocusIndex].focus();
        checkOtpCompletion();
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    // 1. Get email from query parameter
    const urlParams = new URLSearchParams(window.location.search);
    targetEmail = urlParams.get('email');
    
    if (!targetEmail) {
        window.location.href = 'index.html';
        return;
    }
    
    displayEmail.textContent = targetEmail;

    // 2. Initialize database
    try {
        db = await getSupabaseClient();
    } catch (error) {
        console.error("Failed to connect to Supabase:", error);
        showAlert('error', 'Database connection failed.');
    }
    
    // Auto-focus first input
    resetOtpGrid();
});

// Verify Entered OTP
otpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!db || !targetEmail) return;

    hideAlert();
    const token = getOtpCode();

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

        const { data: profile } = await db
            .from('profiles')
            .select('username, avatar_url')
            .eq('id', user.id)
            .maybeSingle();

        let redirectUrl = 'form.html';
        if (profile && profile.username && profile.avatar_url) {
            redirectUrl = 'index.html#live-dashboard';
        }

        continueBtn.dataset.redirect = redirectUrl;
        
        // Switch screens visually in the card
        otpScreen.classList.remove('active');
        successScreen.classList.add('active');

        // Automatically redirect to onboarding/dashboard after 1.2s for a premium UX
        setTimeout(() => {
            window.location.href = redirectUrl;
        }, 1200);

    } catch (error) {
        showAlert('error', error.message || 'Invalid verification code.');
        resetOtpGrid();
    } finally {
        verifyOtpBtn.disabled = false;
        verifyOtpSpinner.style.display = 'none';
    }
});

// Back to Email Screen
backBtn.addEventListener('click', () => {
    backBtn.disabled = true;
    backBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Loading...';
    window.location.href = `index.html?email=${encodeURIComponent(targetEmail)}`;
});

// Continue Action
continueBtn.addEventListener('click', () => {
    const redirectUrl = continueBtn.dataset.redirect || 'form.html';
    window.location.href = redirectUrl;
});
