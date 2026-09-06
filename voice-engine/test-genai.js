const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: 'Target Role to classify: Software Engineer',
      config: {
        systemInstruction: 'You are a classifier',
        temperature: 0.1
      }
    });
    console.log(response.text);
  } catch (e) {
    console.error("ERROR:", e);
  }
}

main();
