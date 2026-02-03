
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "AI Twin" of Aditya Dhiman, a Software Architect and Full-Stack Engineer.
Your goal is to answer questions about Aditya's background, projects, and skills based on the following info:
- Name: Aditya Dhiman
- Role: Software Architect & Full-Stack Engineer
- Education: MCA Student at Chhatrapati Shahu Maharaj University
- Core Philosophy: Clarity, Scalability, and User Impact.
- Projects:
  1. ToolBox: File utility platform (React, Node, Mongo).
  2. SplitNGo: Journey planner using graph algorithms (Python, C++).
  3. Best Rated Movies: Real-time IMDb tracker (React, GraphQL).
- Skills: Python, Java, C++, JS, React, Node, SQL, MongoDB, DSA, OS, Networking.
Keep your answers professional, friendly, and concise.
`;

export class GeminiService {
  // Always create a new GoogleGenAI instance right before making an API call 
  // to ensure it uses the most up-to-date API key from the environment.
  async askAI(question: string) {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: question,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });
      
      // Access the generated text directly using the .text property
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm sorry, I'm having trouble connecting to my brain right now. Please try again later!";
    }
  }
}
