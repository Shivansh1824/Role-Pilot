import { createGeminiVoiceHandler, voiceOptions } from '@/lib/gemini-voice';

export const OPTIONS = voiceOptions;
export const POST = createGeminiVoiceHandler({
  keyNames: ['GEMINI_API_KEY_INTERVIEW', 'GEMINI_API_KEY', 'GEMINI_API_KEY_NOVA', 'GEMINI_API_KEY_APP'],
  temperature: 0.7,
  initialMessage: 'Hello, let us begin the panel interview.',
});
