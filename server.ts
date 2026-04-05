import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createServer() {
  const app = express();

  app.use(express.json());

  // Contact API Route using Resend
  app.post("/api/contact", async (req, res) => {
    const { name, email, whatsapp, service, budget, message } = req.body;

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");
      return res.status(500).json({ error: "Email service is not configured" });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Inter', sans-serif; background-color: #0d1117; color: #c9d1d9; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #161b22; border: 1px solid #30363d; border-radius: 8px; overflow: hidden; }
            .header { background-color: #2ea043; padding: 20px; text-align: center; color: #ffffff; }
            .header h1 { margin: 0; font-size: 24px; letter-spacing: 1px; }
            .content { padding: 30px; }
            .field { margin-bottom: 20px; border-bottom: 1px solid #30363d; padding-bottom: 10px; }
            .label { font-size: 12px; color: #8b949e; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; font-family: monospace; }
            .value { font-size: 16px; color: #ffffff; font-weight: 500; }
            .message-box { background-color: #0d1117; border: 1px solid #30363d; padding: 15px; border-radius: 4px; margin-top: 10px; line-height: 1.6; }
            .footer { padding: 20px; text-align: center; font-size: 12px; color: #8b949e; border-top: 1px solid #30363d; }
            .accent { color: #2ea043; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Portfolio Inquiry</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Client Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}" style="color: #58a6ff; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">WhatsApp</div>
                <div class="value">${whatsapp}</div>
              </div>
              <div class="field">
                <div class="label">Requested Service</div>
                <div class="value accent">${service}</div>
              </div>
              <div class="field">
                <div class="label">Budget Range</div>
                <div class="value">${budget}</div>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              Sent from <span class="accent">robin.bro</span> Portfolio Terminal<br>
              ${new Date().toLocaleString()}
            </div>
          </div>
        </body>
      </html>
    `;

    try {
      const { data, error } = await resend.emails.send({
        // alaminrobin.com is verified in Resend, so we can use it as the 'from' address.
        from: 'Portfolio Contact <contact@alaminrobin.com>',
        to: ['admin@alaminrobin.com'],
        subject: `New Portfolio Message from ${name}: ${service}`,
        replyTo: email,
        html: htmlTemplate,
      });

      if (error) {
        console.error("Resend API Error:", error);
        return res.status(400).json({ 
          error: error.message || "Failed to send email via Resend",
          details: error 
        });
      }

      res.status(200).json({ message: "Email sent successfully", id: data?.id });
    } catch (err) {
      console.error("Server Error during email sending:", err);
      res.status(500).json({ 
        error: "Internal Server Error", 
        message: err instanceof Error ? err.message : String(err) 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  return app;
}

if (process.env.NODE_ENV !== "production" && import.meta.url === `file://${process.argv[1]}`) {
  const PORT = 3000;
  createServer().then((app) => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  });
}
