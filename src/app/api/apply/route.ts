import nodemailer from "nodemailer";
import formidable from "formidable";
import { Readable } from "stream";

export const config = {
  api: { bodyParser: false },
};
export const runtime = "nodejs";

// Convert Web Request → Node.js readable stream
async function toNodeStream(req: Request): Promise<NodeJS.ReadableStream> {
  const body = await req.arrayBuffer();
  const readable = Readable.from(Buffer.from(body));
  // @ts-ignore
  readable.headers = Object.fromEntries(req.headers);
  return readable;
}

export async function POST(req: Request): Promise<Response> {
  const nodeReq = await toNodeStream(req);

  return new Promise((resolve) => {
    const form = formidable({
      multiples: false,
      uploadDir: "/tmp",
      keepExtensions: true,
    });

    form.parse(nodeReq as any, async (err, fields, files) => {
      if (err) {
        console.error("❌ Form parse error:", err);
        return resolve(
          new Response(JSON.stringify({ error: "Form parsing failed" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          })
        );
      }

      try {
        const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
        const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;
        const role = Array.isArray(fields.role) ? fields.role[0] : fields.role;
        const file: any = Array.isArray(files.resume) ? files.resume[0] : files.resume;

        if (!file || !name || !email) {
          console.log("⚠️ Missing fields:", { name, email, file });
          return resolve(
            new Response(JSON.stringify({ error: "Missing required fields" }), {
              status: 400,
              headers: { "Content-Type": "application/json" },
            })
          );
        }

        const transporter = nodemailer.createTransport({
          service: "Gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: `"Ankiom Careers" <${process.env.EMAIL_USER}>`,
          to: "careers@ankiom.com",
          subject: `New Application: ${role || "General"} - ${name}`,
          text: `New candidate applied:\n\nName: ${name}\nEmail: ${email}\nRole: ${role}`,
          attachments: [
            {
              filename: file.originalFilename || "resume.pdf",
              path: file.filepath,
            },
          ],
        });

        console.log("✅ Email sent successfully");

        return resolve(
          new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          })
        );
      } catch (error) {
        console.error("❌ Error sending email:", error);
        return resolve(
          new Response(JSON.stringify({ error: "Email sending failed" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          })
        );
      }
    });
  });
}
