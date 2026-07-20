import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { portfolioData } from './src/lib/data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Servir archivos estáticos del frontend de Vite
app.use(express.static(path.join(__dirname, 'dist')));

// Inicializar GoogleGenAI (usa process.env.GEMINI_API_KEY por defecto)
const ai = new GoogleGenAI({});

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    const systemInstruction = `
      You are an AI assistant for a Senior Software Developer named Andres Rivera. 
      You act as a representative on his portfolio website.
      Your goal is to answer questions about Andres, his experience, projects, skills, and background.
      Keep answers concise, professional, but slightly futuristic and tech-savvy.
      If asked something unrelated to Andres/tech, politely redirect back to his qualifications.
      
      Here is his background data:
      ${JSON.stringify(portfolioData, null, 2)}
    `;

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Transfer-Encoding', 'chunked');

    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-2.1-flash',
      contents: messages,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    for await (const chunk of responseStream) {
      if (chunk.text) {
        res.write(chunk.text);
      }
    }
    res.end();

  } catch (error) {
    console.error('Error generating chat:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: error.message });
    } else {
      res.end();
    }
  }
});

// Cualquier otra ruta sirve el index.html de Vite
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
