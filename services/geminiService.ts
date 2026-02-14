import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `You are the virtual assistant for SecureVista Consulting (Pty) Ltd, a South African firm specializing in POPIA compliance and cybersecurity for SMEs.
Your goal is to help potential clients understand basic compliance concepts and the services SecureVista offers.
The services are:
1. POPIA Compliance Services (Readiness assessments, data mapping, policies) - Price: R5,000 – R25,000.
2. Basic Cybersecurity Health Checks (Password review, antivirus, firewall checks) - Price: R3,000 – R15,000.
3. Monthly Compliance & Security Support (Subscription) - Price: R1,000 – R5,000/month.

Key Value Propositions: Affordable, practical, non-technical approach, simplified for SMEs.

Guidelines:
- Keep answers concise and helpful.
- If a user asks specifically about pricing or assessments, encourage them to book a "Free Initial Consultation" using the contact form.
- Use South African English (e.g., 'organisation' instead of 'organization' if applicable, but standard English is fine).
- Do not provide legal advice, but rather "compliance guidance".
- Be professional yet friendly.
`;

export const sendMessageToGemini = async (history: { role: string; parts: { text: string }[] }[], message: string): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview'; 
    
    // We construct a chat session for each message to simplify state management in this demo,
    // passing the recent history manually if needed, or just using generateContent for single turn 
    // if we don't strictly need long session memory. 
    // However, ai.chats.create is better for conversation.
    
    // Mapping our simplified history to the SDK format if needed, 
    // but for this simple widget, we will just use a chat session that persists in the component 
    // or instantiate a new one with history.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the secure server right now. Please try again later.";
  }
};
