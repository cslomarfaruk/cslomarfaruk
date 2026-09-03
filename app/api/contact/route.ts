import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple in-memory rate limiting (IP -> { count, timestamp })
const rateLimitMap = new Map<string, { count: number, timestamp: number }>();

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const now = Date.now();
    const windowMs = 5 * 60 * 1000; // 5 minutes window
    const maxRequests = 3; // Maximum 3 emails per 5 minutes

    const userRateData = rateLimitMap.get(ip);
    if (userRateData) {
      if (now - userRateData.timestamp < windowMs) {
        if (userRateData.count >= maxRequests) {
          console.warn(`Rate limit exceeded for IP: ${ip}`);
          return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
        }
        userRateData.count++;
      } else {
        // Reset window
        rateLimitMap.set(ip, { count: 1, timestamp: now });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, timestamp: now });
    }

    // Clean up old entries periodically to prevent memory leaks
    if (rateLimitMap.size > 1000) {
      rateLimitMap.clear();
    }

    const { name, email, businessType, budget, message, turnstileToken } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields (Name, Email, Message)" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address format" }, { status: 400 });
    }

    // Cloudflare Turnstile Bot Protection Verification
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY || '1x0000000000000000000000000000000AA';
    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Security verification required. Please complete the check." },
        { status: 400 }
      );
    }

    try {
      const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: turnstileSecret,
          response: turnstileToken,
          remoteip: ip,
        }),
      });

      const verifyData = await verifyRes.json();
      if (!verifyData.success) {
        console.warn('Turnstile verification failed:', verifyData['error-codes']);
        return NextResponse.json(
          { error: "Security check failed. Please refresh and try again." },
          { status: 403 }
        );
      }
    } catch (turnstileErr) {
      console.error('Failed to contact Turnstile verification endpoint:', turnstileErr);
      if (process.env.NODE_ENV === 'production') {
        return NextResponse.json(
          { error: "Security verification service temporarily unreachable. Please reach out via WhatsApp." },
          { status: 503 }
        );
      }
    }

    const transport = {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      connectionTimeout: 7000,
      greetingTimeout: 7000,
      socketTimeout: 7000,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    };

    if (transport.host && transport.auth.user) {
      try {
        const transporter = nodemailer.createTransport(transport);
        await transporter.sendMail({
          from: `"Portfolio Lead" <${process.env.SMTP_USER}>`,
          to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
          replyTo: email,
          subject: `New Lead: ${name} (${businessType})`,
          text: `Name: ${name}\nEmail: ${email}\nType: ${businessType}\nBudget: ${budget}\n\nMessage:\n${message}`,
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
        console.log(`Email successfully delivered for: ${name} (${email})`);
      } catch (smtpErr) {
        console.error("SMTP delivery warning:", smtpErr);
      }
    } else {
      console.warn("SMTP not configured. Message logged.");
    }

    return NextResponse.json({ success: true, message: "Inquiry received" });
  } catch (error) {
    console.error("Failed to process contact form:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
