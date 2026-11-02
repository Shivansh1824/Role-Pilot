# Nova and interview voice debugging — 3 November 2026

## Confirmed findings

- Before replacement, direct Google API calls using each configured credential (`GEMINI_API_KEY`, `_NOVA`, `_INTERVIEW`, `_APP`) return HTTP 401 / UNAUTHENTICATED. This was checked with both model discovery and minimal text generation, without logging key values.
- Both hosted endpoints, `https://voice-engine-kappa.vercel.app/api/setup-agent-llm` and `/api/interview-agent-llm`, returned HTTP 200 SSE containing only the assistant role, a stop chunk and `[DONE]`; no reply text was generated.
- Both implementations caught every provider failure and then completed an empty success stream. This explains the silent response after transcription. The initial greeting is configured separately in the Agora invite, so it does not establish Gemini availability.
- Supporting onboarding state parsing, role classification, resume OCR and interview evaluation also depend on these rejected Gemini credentials.
- Local invite routes fall back to the hosted reply URL without `PUBLIC_URL` or `TUNNEL_URL`. Changing local credentials does not update hosted credentials.

## Local changes

- Added a shared Gemini voice handler for Nova and the interview panel. Invalid input returns 400; missing keys return 503; failed or empty generations return 502. HTTP 200 streaming begins only after actual reply text is available.
- Kept key/model fallback before output, stable SSE identifiers and normal OpenAI completion framing. An interrupted partial reply cannot be concatenated with another generation.
- Added a user-facing Nova pipeline error message, `pnpm run doctor:ai` for live credential/generation checks, and offline voice regression checks.
- Updated stale API contract checks to match the existing separate RTC/RTM token response and multi-agent stop request contract. Token generation behavior was not changed.

## Verification

Passed: full ESLint (existing warnings, zero errors), standard TypeScript checking, API contract checks, and voice response regression checks.

The initial live AI diagnostic failed all four original keys with HTTP 401. A full `verify`/production build could not be completed reliably: this checkout contains cloud-offloaded files and previously duplicated generated `.next` declarations. These environmental limitations are separate from the confirmed provider failure. A full spoken RTC session has not been verified.

## Required restoration

The local Gemini credentials have now been replaced. Update the hosted Vercel project's environment with the validated credentials as well. Restart local Next.js or redeploy Vercel after updating the appropriate environment. Deploy the local code changes to enable the corrected hosted error handling. Run `pnpm run doctor:ai`, then check a complete Nova conversation, transition into the panel, follow-up interview replies and final evaluation. Never share key values in chat or commit them.

## Credential replacement follow-up

All five newly supplied credentials successfully generated text through the Gemini API. Four are configured locally in the existing shared, NOVA, INTERVIEW and APP slots; the fifth remains unused. No key values are included in this report or tracked files.

Live checks using the application route handlers and the real invite prompts passed:

- Nova generated nonempty replies to two onboarding turns, including compound role/experience/resume/difficulty input.
- The interview committee generated a tagged, relevant follow-up question from the candidate's previous answer.
- Onboarding state parsing extracted the target role; role resolution selected the tech track.
- Resume extraction succeeded with a synthetic text resume.
- Interview evaluation generated a numerical score from a synthetic multi-turn transcript.

The replacement diagnostic passes for all four configured credentials. Offline API and voice regressions pass. These tests do not exercise browser microphone capture, cloud RTC/STT/TTS transport, or the hosted deployment. The hosted credentials and monorepo build settings have been updated; production endpoint validation follows deployment.

A separate Next.js route-validation failure was fixed by moving `createChatCompletionsHandler` into an adjacent helper file; API routes cannot export arbitrary test factories. Standard TypeScript and the affected lint/API checks pass after the fix.

Final follow-up validation: `pnpm run verify` passes, including doctor, lint (existing warnings), standard type checking, API contracts, voice regressions and the Next.js production build. Earlier build/environment limitations have been resolved for this validation run. Browser audio transport and the hosted environment remain unverified.

Compiled HTTP smoke checks also passed for both streaming reply endpoints (nonempty text and `[DONE]`), plus HTTP 200 for the onboarding and interview pages.
