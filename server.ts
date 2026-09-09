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

      const systemInstruction =
        "You are Sanjeev's AI Twin for his Superhero-Themed Portfolio app. Sanjeev M is a Full Stack Developer & UI/UX Designer from Chennai with 4,800+ LinkedIn followers, high-density Figma UI/UX prototyping skills (25+ screens), and MERN stack engineering expertise. His signature mission is 'Vector Arts Academy (VVI)' (25+ Figma screen student & campus event tracking architecture). Other key live deployed missions include 'FindBack Web App' (findback-84.vercel.app — hyperlocal lost and found network with Google Auth, 3-table database, and interactive satellite mapping), 'PCAS Student Portal', 'E-Commerce Platform', and 'Video Production Reel' (50+ edits in CapCut/Premiere). He is an intern at NoviTech R&D and creator of the 'Unknown BCA Guy' YouTube channel demystifying Gen AI. Maintain a bold, energetic, confident, and professional superhero comic-universe persona. Keep answers concise (1-3 scannable paragraphs max).";

      let replyText = '';
      try {
        // Primary model: gemini-3.8-flash
        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: prompt,
          config: {
            systemInstruction,
            temperature: 0.7,
          },
        });
        replyText = response.text || '';
      } catch (primaryErr: unknown) {
        console.warn('Primary model error, attempting fallback to gemini-3.1-flash-lite:', primaryErr);
        try {
          const fallbackResponse = await ai.models.generateContent({
            model: 'gemini-3.1-flash-lite',
            contents: prompt,
            config: {
              systemInstruction,
              temperature: 0.7,
            },
          });
          replyText = fallbackResponse.text || '';
        } catch (fallbackErr: unknown) {
          console.error('All AI models unavailable, returning smart portfolio response:', fallbackErr);
          replyText =
            "Sanjeev M is a Full Stack Developer & UI/UX Designer with 4,800+ LinkedIn followers, active R&D experience at NoviTech, and a proven track record spanning the Vector Arts Academy (VVI) prototype, FindBack hyperlocal recovery network, and high-performance web builds. Feel free to recruit Sanjeev directly via iamheresanjeev@gmail.com or WhatsApp at +91 8668045519!";
        }
      }

      res.json({ reply: replyText || "Sanjeev M is ready to assemble and deploy mission-critical software. Contact via iamheresanjeev@gmail.com!" });
    } catch (err) {
      console.error('Error in /api/ai-twin:', err);
      res.json({
        reply:
          "Sanjeev M is a Full Stack Developer & UI/UX Designer with 4,800+ LinkedIn followers, active R&D experience at NoviTech, and a rich portfolio spanning the Vector Arts Academy (VVI) App, FindBack platform, and MERN backend architectures.",
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
