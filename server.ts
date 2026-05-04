import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Trust Traefik reverse proxy for accurate rate limiting
  app.set("trust proxy", 1);

  // Security Middleware
  app.use(helmet({
    contentSecurityPolicy: false, // Set to false to allow Vite dev server, in prod configure CSP properly
  }));

  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: { error: "Too many requests from this IP, please try again after 15 minutes." }
  });
  app.use(limiter);

  app.use(cors({
    origin: process.env.NODE_ENV === 'production' ? 'https://devcsl.tech' : '*',
    methods: ['GET', 'POST']
  }));
  app.use(express.json({ limit: '10kb' })); // Prevent large payload attacks

  // Contact Form API
  app.post("/api/contact", async (req, res) => {
    const { name, email, businessType, budget, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields (Name, Email, Message)" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email address format" });
    }

    // SMTP Config
    const transport = {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    };

    // Only attempt to send if SMTP is configured
    if (transport.host && transport.auth.user) {
      try {
        const transporter = nodemailer.createTransport(transport);
        
        await transporter.sendMail({
          from: `"Portfolio Lead" <${process.env.SMTP_USER}>`,
          to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
          replyTo: email,
          subject: `New Lead: ${name} (${businessType})`,
          text: `
            Name: ${name}
            Email: ${email}
            Type: ${businessType}
            Budget: ${budget}
            
            Message:
            ${message}
          `,
          html: `
            <div style="font-family: sans-serif; padding: 30px; border: 1px solid #10b981; border-radius: 20px; background-color: #f9fafb;">
              <h2 style="color: #10b981; margin-top: 0;">New Inquiry: DEV CSL</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Category:</strong> ${businessType}</p>
              <p><strong>Budget Range:</strong> ${budget}</p>
              <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; background: #fff; padding: 15px; border-radius: 10px;">${message}</p>
            </div>
          `,
        });

        console.log(`Email sent for lead: ${name} (${email})`);
      } catch (err) {
        console.error("Failed to send email:", err);
      }
    } else {
      console.warn("SMTP not configured. Skipping email sending.");
    }

    // Always succeed from the user's perspective if we reached here
    res.json({ success: true, message: "Inquiry received" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
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

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch(console.error);
