import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Force Node.js runtime (required for Nodemailer)
export const runtime = "nodejs";

// Create a singleton transporter (shared between calls)
let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: "ankiom.com",
      port: 587,
      secure: false, // use STARTTLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      pool: true,            
      maxConnections: 1,      
      maxMessages: 3,         
      rateLimit: 1,          
      socketTimeout: 30_000,  
    });
  }
  return transporter;
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const mailOptions = {
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    const transporter = getTransporter();
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "✅ Message sent successfully!",
    });
  } catch (err: any) {
    console.error("SMTP Error:", err);
    return NextResponse.json(
      { success: false, message: "⚠️ Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
