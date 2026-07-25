import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // AI Twin Endpoint using Gemini API
  app.post('/api/ai-twin', async (req, res) => {
    try {
      const { prompt } = req.body;
      if (!prompt || typeof prompt !== 'string') {
        res.status(400).json({ error: 'Valid prompt is required' });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Fallback response if GEMINI_API_KEY is not set yet
        res.json({
          reply:
            "I'm Sanjeev's AI Twin! Sanjeev is a Creative Developer & Growth Strategist with 3,387+ LinkedIn followers, high-density Figma UI design skills, and MERN stack engineering expertise. Feel free to reach out directly via iamheresanjeev@gmail.com or +91 8668045519!",
        });
        return;
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
        config: {
          systemInstruction:
            "You are Sanjeev's AI Twin for his Vice Neon Portfolio app. Sanjeev M is a Creative Developer & Growth Strategist with 3,387+ LinkedIn followers (+21.8/day growth rate), 41+ recruiter searches/week, and CEO engagement from Raphael Buck (McKinsey). His featured project is 'Victor Academy' (15+ Figma screen student internship tracker). Other key live projects include 'FindBack Web Startup' (findback-84.vercel.app — hyperlocal lost and found network with Google Auth, 3-table database, and interactive satellite mapping), 'PCAS Student Portal', 'E-Commerce Platform', and 'Video Production Reel' (50+ edits in CapCut/Premiere). He is an intern at NoviTech R&D and a freelance designer. Maintain a confident, high-tech, helpful, and professional vice-neon engineering persona. Keep answers concise (1-3 scannable paragraphs max).",
          temperature: 0.7,
        },
      });

      res.json({ reply: response.text || 'No response text generated.' });
    } catch (err) {
      console.error('Error in /api/ai-twin:', err);
      res.json({
        reply:
          "Sanjeev M is a Creative Developer & Growth Strategist with 3,387+ LinkedIn followers, active R&D experience at NoviTech, and a rich portfolio spanning the Victor Academy Internship Tracker, PCAS Student Portal, and MERN backend architectures.",
      });
    }
  });

  // Vite middleware for development vs static serve for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
