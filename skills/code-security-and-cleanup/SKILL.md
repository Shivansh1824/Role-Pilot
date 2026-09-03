---
name: code-security-and-cleanup
description: >
  Professional-grade code audit, secret scanning, OWASP security hardening, and dead code removal
  for modern polyglot projects (TypeScript/JavaScript, Python, Go, Rust, PHP). Performs baseline
  measurement, AST-aware dead code detection, exposed secret scanning (Supabase, OpenAI, Gemini, AWS,
  Stripe), LLM & API security hardening, and surgical removal with git safety. Produces executive-ready
  reports with risk matrices and before/after scorecards. Use this skill whenever the user mentions
  dead code, unused imports, technical debt cleanup, security audit, code hygiene, pre-delivery audit,
  bundle size reduction, code bloat, or wants to clean up after completing a feature.
---

# Pre-Delivery Code Audit & Dead Code Removal

You are a Principal Software Engineer performing a comprehensive code audit. Your
deliverables are executive-ready: every finding is substantiated with evidence, every
removal is safe and atomic, and the final report demonstrates measurable improvement.

This skill produces two outputs:
1. **Surgical cleanup** — Verified dead code removed in safe, atomic git commits.
2. **Professional audit report** — A stakeholder-facing document with risk matrices,
   before/after metrics, and actionable recommendations.

The workflow has 8 phases (0-7). Each phase builds on the previous. Do not skip phases
— the measurement and reporting phases are what separate professional work from casual deletion.

---

## Phase 0: Baseline Measurement

Before touching anything, capture the current state. Without a "before" snapshot,
you cannot demonstrate improvement — and improvement you cannot measure does not exist
to stakeholders.

1. **Lines of code** — Count by language (`.ts/.tsx`, `.js/.jsx`, `.py`, `.go`, `.php`) using `wc -l` or `cloc`
2. **Function/method count** — Grep for `function `, `def `, `func `, `const .* = \(` declarations
3. **Bundle size** — If `package.json` exists with a build script, record the output size of `dist/` or `build/`
4. **File count** — Total source files in scope
5. **Git reference point** — Record current branch and commit hash as the "before" marker

Store these values as your **Baseline Snapshot**. You will compare against them in Phase 7.

```
BASELINE SNAPSHOT:
- TS/JS lines: [X]
- Python / Go / PHP lines: [X]
- Function count: [X]
- Bundle size: [X] KB (if applicable)
- Source files: [X]
- Git ref: [branch] @ [short-hash]
```

---

## Phase 1: Contextual Scope Mapping

Define the blast radius — what code is in play and what depends on it.

### 1.1 Direct Targets
Files modified in the current session or specified by the user. Use conversation
history and `git diff` to identify these.

### 1.2 Shadow Targets
Files that *reference* the modified code — callers, importers, template includes.
Run targeted greps for function names, class names, and hook identifiers found in direct targets.

### 1.3 Dependency Ripple
- **PHP**: Files sharing hooks, global functions, or class inheritance chains
- **JS**: Files importing from the same modules, event listeners on shared DOM elements
- **CSS**: Selectors targeting the same elements or using shared custom properties

### 1.4 Build Graph (if applicable)
If `webpack.config.*`, `vite.config.*`, or `package.json` with bundler config exists:
- Identify entry points
- Trace the dependency tree from entry points
- Unused modules that no entry point reaches are dead by definition

### 1.5 Feature Flags & Conditional Logic
Identify feature flags, environment checks, or conditional includes. A flag that has
been at 100% rollout for 30+ days (or whose feature shipped permanently) means the
alternate branch is dead code.

---

## Phase 2: AST-Aware Deep Analysis

Categorize every finding with high confidence. The dual-category system protects you
from false positives while ensuring verified waste gets removed.

### Category A: Verified Dead (100% Certainty — Safe to Auto-Remove)

| Type | Detection Method |
|------|-----------------|
| Commented-out logic | Blocks of code in comments (not JSDoc/PHPDoc) |
| Unreferenced variables | Declared but never read in any execution path |
| Orphaned functions/methods | Zero callers across the entire project |
| Unused imports/requires | Import statements with no reference to the imported symbol |
| Unreachable code | Code after `return`, `throw`, `exit`, `die`, unconditional `break` |
| Dead CSS selectors | Selectors with no matching HTML elements in any template |
| Stale feature flags | Flags permanently enabled; the "off" branch is dead |
| Duplicate logic | Identical functions in different files (consolidation target) |

### Category B: Suspicious / Dynamic (Requires Human Review)

| Type | Why It's Risky |
|------|---------------|
| Dynamic invocations | `call_user_func`, `$$variable`, computed property access, `eval()` |
| Constructed hook/event names | Names built from variables (e.g., `do_action("prefix_" . $slug)`) |
| Global/exported functions | May have external consumers (plugins, APIs, third-party code) |
| Magic methods & reflection | `__call`, `__get`, `ReflectionClass` usage hides references |
| Config-referenced strings | Code referenced only in config files or environment variables |

### The "Proper Search" Protocol

When investigating a potentially dead identifier:
1. Search for the **full name** across the project
2. Search for **partial fragments** (e.g., for `theme_header_main`, also search `theme_header_`)
3. Search for the name as a **string literal** (it might be called dynamically)
4. Check **configuration files** (JSON, YAML, .env) for references
5. If you cannot prove it dead after these 4 searches, it goes to Category B

---

## Phase 3: Security Audit (OWASP & Secret Scanning Integration)

Dead code is not inert — it's still executable attack surface. An unused endpoint with
SQL injection is just as exploitable as an active one. This phase catches security debt
hiding in dead and live code alike.

### Critical Severity
- **Hardcoded secrets**: API keys and tokens in source files or tracked `.env` files:
  - Supabase `service_role` secrets (`eyJh...`)
  - OpenAI / Anthropic / Gemini API keys (`sk-...`, `AIzaSy...`)
  - Cloud provider credentials (AWS `AKIA...`, GCP service accounts, Azure keys)
  - Payment credentials (Stripe `sk_live_...`, `rk_live_...`)
- **Exposed debug endpoints**: `phpinfo()`, test routes with elevated bypasses, unauthenticated admin routes
- **Debug output in production paths**: `var_dump()`, `console.log(sensitiveData)` with auth tokens or PII

### High Severity
- **LLM Application Vulnerabilities (OWASP Top 10 for LLMs)**:
  - Unsanitized inputs concatenated directly into system/user prompts (Prompt Injection vectors)
  - Insecure output handling (rendering raw LLM markdown with unsanitized HTML/JS via `innerHTML` or `dangerouslySetInnerHTML`)
  - Arbitrary tool execution without validation of arguments generated by LLMs
- **Unsanitized input in dead handlers**: Orphaned REST/RPC endpoints accepting raw query params or body payloads
- **XSS vectors**: Unescaped output (`innerHTML` with user data, unescaped template interpolations)
- **SQL injection**: Raw queries without prepared statements or parameterized RPC calls
- **Serverless / Edge SSRF**: Edge functions fetching untrusted user-supplied URLs without IP/domain allowlisting

### Medium Severity
- **Missing authentication**: Routes/endpoints without auth checks or RLS policies (e.g. Supabase tables missing RLS)
- **CSRF gaps**: Form handlers without state/nonce verification
- **Overly permissive permissions**: Sensitive files with world-writable permissions
- **Stale dependencies**: Packages with known high/critical CVEs

### Low Severity
- **Verbose error messages**: Internal stack traces or database schema errors leaked to client responses
- **Leftover TODO/FIXME**: Unresolved security warnings or temporary bypasses

For complete detection patterns and grep commands, read `references/owasp-checklist.md`.

---

## Phase 4: Complexity Analysis

Quantify the maintainability improvement your cleanup will achieve. These metrics
transform "I removed some code" into "I reduced complexity by 23% and improved the
maintainability index from 62 to 78."

### 4.1 Cyclomatic Complexity
Count decision points per function: `if`, `else if`, `case`, `for`, `while`, `foreach`,
`catch`, `&&`, `||`, ternary `?`.

| Score | Rating | Action |
|-------|--------|--------|
| 1-10 | Good | No action needed |
| 11-20 | Concerning | Flag for potential simplification |
| 21+ | High risk | Recommend refactoring in the report |

### 4.2 Coupling Analysis
For each file in scope, count:
- **Afferent coupling (Ca)**: How many other files depend on this file
- **Efferent coupling (Ce)**: How many files this file depends on
- **Instability (I)**: Ce / (Ca + Ce) — closer to 1 = more unstable

Dead code removal reduces Ce for files that imported unused modules.

### 4.3 Function Length
Flag functions exceeding 50 lines. After dead branch removal, recalculate — many
functions shrink naturally when dead conditions are removed.

### 4.4 Maintainability Index (Simplified)
Estimate using: `171 - 5.2 * ln(Volume) - 0.23 * CC - 16.2 * ln(LOC)`

| Score | Rating | Color |
|-------|--------|-------|
| 85+ | Highly maintainable | Green |
| 65-84 | Moderately maintainable | Yellow |
| <65 | Difficult to maintain | Red |

### 4.5 Duplication Ratio
Percentage of logic duplicated across files. Each duplicate is a consolidation
opportunity — extract to a shared utility or module.

For formulas and manual calculation methods, read `references/metrics-definitions.md`.

---

## Phase 5: Professional Audit Report

Generate the complete report BEFORE executing any changes. This is your deliverable —
it must be clear enough for a non-technical stakeholder to understand the value and
risk of the proposed cleanup.

### Section 1: Executive Summary

3-5 sentences covering: what was audited, total findings, projected improvement, and
confidence level. Written for a manager who will skim, not read.

### Section 2: Verified Cleanup Manifest (Category A)

Numbered action list. Each entry follows this format:
```
[N]. [ACTION] `identifier` in `file:line-range`
     Reason: [one-line justification with evidence]
```

Actions: `REMOVE` | `CONSOLIDATE` | `DELETE` | `INLINE`

Group by file for readability. This is the list of changes that WILL be executed
in Phase 6 (unless the user objects).

### Section 3: Risk Matrix (Category B)

| # | Finding | Risk | Impact | Effort | Recommendation |
|---|---------|------|--------|--------|----------------|
| 1 | `func()` in file.php:L45 | Medium | May break plugin X | 10 min | Verify with plugin registry |
| 2 | ... | ... | ... | ... | ... |

- **Risk**: Critical / High / Medium / Low
- **Impact**: What breaks if wrongly removed
- **Effort**: Time to safely verify or remove
- **Recommendation**: Specific next action

### Section 4: Security Findings

Same risk-matrix format as Section 3, but tagged with OWASP category (e.g., `[A03:Injection]`).
Security findings that overlap with dead code get priority in Phase 6 execution.

For exact templates and formatting, read `references/report-templates.md`.

---

## Phase 6: Git-Safe Execution

After the report is presented and the user approves, execute the cleanup with full
rollback safety. Every change must be individually revertible.

### 6.1 Branch Strategy
Create a dedicated branch: `cleanup/dead-code-YYYY-MM-DD` from current HEAD.
This keeps the cleanup isolated and reviewable as a single PR.

### 6.2 Execution Order (Safest First)
1. Commented-out code (zero risk)
2. Unused imports/requires (caught immediately by any build/lint)
3. Unreferenced variables (low risk)
4. Orphaned functions (medium risk — verify no dynamic calls)
5. Consolidate duplicates (medium risk — behavior must be identical)
6. Dead CSS selectors (low risk, but verify visually if possible)
7. Security-flagged dead code (high priority, verify auth context)

### 6.3 Atomic Commits
One commit per logical group. Commit message format:
```
chore(cleanup): [action] [what]

[one-line reason this code is dead, with evidence]
```

### 6.4 Post-Removal Verification
After EACH commit:
1. Grep for every removed identifier across the project — catch missed references
2. If a build pipeline exists, run it — confirm no import/require errors
3. If tests exist, run them — confirm no regressions
4. If a reference appears in a string, template, or config — investigate before proceeding

### 6.5 Safety Rules
- Never force-push
- Never skip pre-commit hooks
- Never delete files without checking git blame for recent activity
- If verification fails, revert the commit immediately and move the item to Category B

---

## Phase 7: Impact Report & Prevention

### Part A: Before/After Scorecard

| Metric | Before | After | Delta | % Change |
|--------|--------|-------|-------|----------|
| PHP Lines | X | Y | -Z | -N% |
| JS Lines | X | Y | -Z | -N% |
| Function Count | X | Y | -Z | -N% |
| Avg Cyclomatic Complexity | X | Y | -Z | -N% |
| Bundle Size (KB) | X | Y | -Z | -N% |
| Security Issues Found | X | 0 | -X | -100% |
| Maintainability Index | X | Y | +Z | +N% |
| Duplication Ratio | X% | Y% | -Z% | — |

### Part B: Executive Statement

One paragraph, copy-paste ready for a status update or PR description:
```
This audit removed [X] lines of dead code across [Y] files, reducing
average cyclomatic complexity by [Z]%, eliminating [N] security
vulnerabilities, and improving the maintainability index from [X] to [Y].
Bundle size reduced by [X] KB ([N]% improvement). [X] suspicious items
flagged for team review in the attached risk matrix.
```

### Part C: Prevention Recommendations

Based on what was found, recommend systemic fixes so this debt doesn't accumulate again:

1. **Linting rules**: `eslint no-unused-vars` (error, not warn), `no-unreachable`, `no-console` for production. PHPStan at level 5+ for PHP unused detection.
2. **Bundle budgets**: Set a size threshold in bundler config — fail the build if exceeded by >5%.
3. **Feature flag lifecycle**: Create a cleanup ticket when creating a flag. After 30 days at 100%, the flag must be removed or justified.
4. **PR review gate**: Add "no dead code introduced" as a checklist item in your PR template.
5. **Scheduled audits**: Run this skill quarterly, or after every major feature ships.
6. **Tool recommendations**: Knip (JS unused exports), PHPStan (PHP dead code), SonarQube (both), Webpack Bundle Analyzer (bundle size).

---

## Safety Principles

- **Surgical Changes**: Touch only what you must. Mention pre-existing dead code, but do NOT delete it without explicit user permission.
- **Clean Up Your Own Mess**: Remove any imports, variables, or functions that your changes made unused.
- **No Orthogonal Edits**: Do not reformat adjacent code, rename variables, or refactor unrelated architecture.
- **Git Commit Attribution**: Never include AI assistant names (e.g. Antigravity, Gemini, Claude) in git commit messages or contributor lists.
- **Report Before Execute**: Never modify code before the user reviews findings. Phase 5 comes before Phase 6 for a reason.
- **Atomic Reversibility**: Every commit must be individually revertible via `git revert <hash>` without affecting other cleanup work.
- **Security Is Never Optional**: Even if dead code "works fine," exposed secrets and debug endpoints must be addressed. These are not Category B — they are urgent.
- **When in Doubt, Category B**: It is better to flag a suspicious finding for human review than to break production. Professional judgment means knowing when NOT to act.
- **Documentation Travels With Code**: If you remove a function, remove its docblock. If you move logic, move the documentation with it.
