import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const role = formData.get("role");
    const resumeFile = formData.get("resume") as File | null;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // e.g. Gmail SMTP
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER, // your email
        pass: process.env.SMTP_PASS, // your app password
      },
    });

    let mailOptions: any = {
      from: `"Ankiom Careers" <${process.env.SMTP_USER}>`,
      to: "info@ankiom.com",
      subject: `New Job Application for ${role}`,
      text: `
New Application for ${role}:

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
      `,
    };

    // ✅ Add attachment if available
    if (resumeFile) {
      const arrayBuffer = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      mailOptions.attachments = [
        {
          filename: resumeFile.name,
          content: buffer,
        },
      ];
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
