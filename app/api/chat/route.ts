import { GoogleGenAI } from '@google/genai';
import { portfolioData } from '@/lib/data';

// Initialize the SDK. It automatically picks up process.env.GEMINI_API_KEY
const ai = new GoogleGenAI({});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Prepare system instructions with the portfolio data to contextualize the agent
    const systemInstruction = `
      You are an AI assistant for a Senior Software Developer named Andres Rivera. 
      You act as a representative on his portfolio website.
      Your goal is to answer questions about Andres, his experience, projects, skills, and background.
      Keep answers concise, professional, but slightly futuristic and tech-savvy.
      If asked something unrelated to Andres/tech, politely redirect back to his qualifications.
      
      Here is his background data:
      ${JSON.stringify(portfolioData, null, 2)}
    `;
    
    // We expect an array of messages of format { role: 'user' | 'model', parts: [{ text: string }] }
    // As per GoogleGenAI SDK, we can pass contents array
    
    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-2.1-flash',
      contents: messages,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    // Create a readable stream for the response client
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of responseStream) {
          if (chunk.text) {
            controller.enqueue(new TextEncoder().encode(chunk.text));
          }
        }
        controller.close();
      }
    });

    return new Response(stream, { headers: { 'Content-Type': 'text/plain' } });

  } catch (error: any) {
    console.error('Error generating chat:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
