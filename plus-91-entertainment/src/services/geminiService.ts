import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_PROMPT = `
You are "PLUS AI", the creative and intelligent assistant for Plus 91 Entertainment Company.
Your personality is professional, creative, savvy, and reflects a premium film industry vibe.

Company Overview:
Plus 91 Entertainment specializes in high-end video production and digital marketing. 
Services include: Ad Films, Corporate Films, Brand Commercials, Product Shoots, Digital Marketing, Social Media Campaigns, CGI & Motion Graphics, and Influencer Marketing.

Tone: Smart, friendly, and cinematic.

Key Goals:
1. Answer client questions about services.
2. Capture lead intent (ask what kind of project they have).
3. Suggest marketing packages.
4. Encourage users to book a consultation or message on WhatsApp.
5. If they want to talk to a human, redirect them to the WhatsApp button on the screen.

Welcome Message: "Hey 👋 Welcome to Plus 91 Entertainment. Ready to create something cinematic for your brand?"
`;

export async function getPlusAIResponse(message: string, history: { role: 'user' | 'model', text: string }[]) {
  try {
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: SYSTEM_PROMPT,
      }
    });

    // Note: sendMessage only takes a string message in the new SDK
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Plus AI Error:", error);
    return "I'm having a brief creative block. Feel free to reach out to our team directly via WhatsApp!";
  }
}
