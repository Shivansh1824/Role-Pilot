# Role-Pilot Project Status Report: Work Completed Till Now
**Date:** June 12, 2026

This document provides a comprehensive log of the front-end pages, assets, design systems, database schemas, secure storage buckets, and AI microservices integrated into the **Role-Pilot** platform.

---

## 1. Frontend Architecture & Pages

The client-side interface is built using standard, performant HTML5, vanilla JavaScript modules, and a unified CSS layout engine.

| Page | Filename | Description / Features | Status |
| :--- | :--- | :--- | :--- |
| **Landing Page** | `index.html` | Premium glassmorphic hero page featuring high-conversion CTAs, trust matrices, interactive FAQ accordions, and fully responsive header/footer sections. | Completed |
| **Authentication Screen** | `login.html` | Secure entrance with clean dark/light theme options, direct validation, and inline dynamic 8-digit OTP inputs (no external redirects). | Completed |
| **Candidate Dashboard** | `dashboard.html` | High-fidelity console containing user hero welcome, career roadmap tracker, session histories, ATS upload stats, and a floating TruGen AI Mentor widget. | Completed |
| **Onboarding Form** | `form.html` | Profile onboarding card incorporating visual Cropper.js modal for custom avatar uploads, custom role/skills selectors, and interactive AI-driven validation widgets. | Completed |
| **About Us** | `about.html` | Static responsive page detailing the project's career readiness vision and team architecture. | Completed |
| **Privacy Policy** | `privacy.html` | Compliant user privacy disclosure document matching standard layout styles. | Completed |
| **Terms of Service** | `terms.html` | Standardized user terms and rules governing platform utilization. | Completed |
| **Cookie Policy** | `cookies.html` | Browser cookie tracking disclosures built on the standard style layout. | Completed |

---

## 2. Onboarding Form Validation & UX Constraints

We have built strict username and skills validations into the client-side onboarding experience:

### A. Username Rules
* **HTML5 Pattern Validation:** Added a `pattern="^[a-zA-Z_][a-zA-Z0-9_]{2,}$"` attribute and tooltip hints to prevent invalid username registration natively.
* **JavaScript Event Handlers:**
  * Blocks usernames starting with numbers (`/^[0-9]/.test(val)`) with the message: *"Username cannot start with a number."*
  * Blocks usernames consisting of only digits (`/^[0-9]+$/.test(val)`) with the message: *"Username cannot be only numbers."*
  * Refined name-blur auto-generation to strip leading numbers and underscores from drafts.

### B. Mandatory Fields & Validation Flow
* Removed `(Optional)` from the Key Skills input.
* Updated `validateForm()` to ensure that at least one skill tag is entered (`skillsList.length > 0`) before enabling the onboarding submission button.
* Form validation is called dynamically whenever a tag is added or deleted, giving instant button state feedback.

---

## 3. Shared Assets & Design Systems

*   **Design Token Config (`css/style.css`):** Core stylesheet outlining glassmorphic templates (`backdrop-filter`), typography configurations (Outfit/Inter via Google Fonts), animations, layouts, and variables for light/dark theme switches.
*   **Theme Manager (`js/theme.js`):** Script placed inline in the `<head>` of all pages to prevent theme flickering (FOUC) by checking the current theme state in `localStorage` prior to render.
*   **Asset Bundles (`images/` & icons):** Styled avatars for profiles, vector logotypes, and FontAwesome SVG kits embedded directly into layouts.

### Modal Design & Contrast Adjustments
Created specific, theme-adaptive CSS variables to solve glassmorphic overlay contrast conflicts in light/dark themes:
* **Variables Defined:** `--modal-bg`, `--modal-row-bg`, and `--modal-text-original`.
* **Container Styling:** Modal containers now use `--modal-bg` (96% opaque white in light theme, 92% opaque navy-grey in dark theme) to maintain perfect readability on overlay backdrops.
* **Text Contrast:** Original skill text matches `--modal-text-original` (high-contrast grey in both modes).

---

## 4. Database Infrastructure (Supabase)

Local database schemas are migrated directly to the remote Supabase project under the `ginni` branch.

### Table Relational Schema
1.  **`profiles`**: Contains core user identities (usernames, target career roles, experience metrics, skill lists, and avatar metadata).
2.  **`resumes`**: Configured to hold **1-to-many** relationships, enabling a single profile to manage multiple uploaded resumes. Tracks:
    *   `id` (Primary Key)
    *   `user_id` (Foreign Key linked to `auth.users`)
    *   `file_url` (Link pointing to the secure private storage bucket)
    *   `title` (Resume name)
    *   `is_primary` (Flag pointing to the active candidate resume)
3.  **`resume_evaluations`**: Tracks AI analysis records. Points to `resumes` via `resume_id` and tracks ATS scores, matched/missing skills, refined resumes, and feedback metrics.

### Applied Migration Scripts (`supabase/migrations/`)
*   `20260611065355_create_resumes_tables.sql`: Migrated profile columns, established `resumes` and `resume_evaluations` constraints, and configured Row Level Security (RLS).
*   `20260611075856_create_storage_buckets.sql`: Formulated the file storage layout, declaring policies and storage structures.

---

## 5. Secure File Storage Configuration

We utilize native Supabase Storage buckets secured through strict RLS policies to maintain user security:

1.  **`avatars` (Public Bucket):** Stores public user avatar pictures. Reads are globally permitted to display user stats on leaderboards, but edits are restricted strictly to the authenticated creator. Integrated with a frontend visual cropper (`Cropper.js`) for perfect 1:1 ratio circular avatars and dynamically spawns premium grid tiles upon upload.
2.  **`resumes` (Private Bucket):** Stores sensitive PDF/Docx files. Access is locked down. Downloads, edits, and deletions are only possible for the authenticated user who uploaded the resume. URLs expire after a short duration (via signed URLs).

---

## 6. Artificial Intelligence Services (Google Gemini)

AI features are processed server-side through **Supabase Edge Functions** to hide API keys from client browsers and prevent CORS issues.

### A. Resume Evaluation (`evaluate-resume`)
*   **Model Version:** **Gemini 3.5 Flash**
*   **Logic:** Binds `GEMINI_API_KEY` to evaluate ATS scores, matched/missing skills, and output a refined markdown resume based on target role parameters.

### B. Skill Normalization & Validation (`skill-checker`)
*   **Model Version:** **Gemini 2.5 Flash / Flash Lite** (with reasoning capability set to `MEDIUM`).
*   **Logic:**
    *   Accepts raw user skills array, filters out predefined values, and sends custom words to Gemini for evaluation.
    *   Checks if words represent valid career skills, fixes spelling/capitalization mistakes, and expands abbreviations.
*   **Frontend Integration:**
    *   **AI Warning Block:** Displays a custom dashed card with a glowing sparkles AI icon when invalid skills are submitted: *"AI Verification Detected Gaps: The highlighted tags do not match recognized professional skills."*
    *   **AI Calibration Dialog:** Displays the glowing sparkles AI icon and a refined text prompt: *"Our AI engine calibrated your custom skills to align with global recruitment & ATS benchmarks."*

---

## 7. Code Security & Repository Cleanups

*   **Excluded Stale files:** Deleted defunct scripts (`js/auth-otp.js`, `js/otp-verify.js`) and stale HTML assets (`otp.html`) to simplify bundle volumes.
*   **Git Resolution:** Modified the root `.gitignore` to track database migrations and functions in the cloud pipeline while ignoring cache nodes, making the workspace 100% production-ready.
