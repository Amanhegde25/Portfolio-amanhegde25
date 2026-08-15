import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const website = typeof body.website === "string" ? body.website.trim() : "";

    if (website) {
      return NextResponse.json({ error: "Submission rejected" }, { status: 400 });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
    }

    if (name.length > 100 || email.length > 200 || message.length > 5000) {
      return NextResponse.json({ error: "Message is too long." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO || user;

    if (!user || !pass) {
      console.error("SMTP credentials are not configured.");
      return NextResponse.json({ error: "Server is not configured to send mail." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `You received a new message from your portfolio:\n\nName: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;background:#0a0a12;color:#e8e8f2;padding:32px;border-radius:12px;max-width:560px;margin:auto;">
          <h2 style="margin:0 0 20px;color:#a5b4fc;">New portfolio message</h2>
          <table style="border-collapse:collapse;width:100%;font-size:15px;">
            <tr><td style="padding:6px 0;color:#9a9ab0;width:90px;">Name</td><td style="padding:6px 0;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:6px 0;color:#9a9ab0;">Email</td><td style="padding:6px 0;font-weight:600;">${email}</td></tr>
          </table>
          <p style="margin:20px 0 8px;color:#9a9ab0;">Message</p>
          <div style="background:#141424;border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:16px;white-space:pre-wrap;">${message}</div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json({ error: "Could not send your message. Please try again." }, { status: 500 });
  }
}