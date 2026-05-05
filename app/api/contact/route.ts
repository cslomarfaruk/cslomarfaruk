import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, businessType, budget, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields (Name, Email, Message)" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address format" }, { status: 400 });
    }

    const transport = {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    };

    if (transport.host && transport.auth.user) {
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
      console.log(`Email sent for lead: ${name} (${email})`);
    } else {
      console.warn("SMTP not configured. Skipping email sending.");
    }

    return NextResponse.json({ success: true, message: "Inquiry received" });
  } catch (error) {
    console.error("Failed to process contact form:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
