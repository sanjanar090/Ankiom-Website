import { ImapFlow } from "imapflow";

export const runtime = "nodejs";

export async function GET(): Promise<Response> {
  let client: ImapFlow | null = null;

  try {
    client = new ImapFlow({
      host: "ankiom.com",
      port: 993,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER || "",
        pass: process.env.EMAIL_PASS || "",
      },
    });

    await client.connect();
    const lock = await client.getMailboxLock("INBOX");

    let lastEmail: {
      from: string;
      subject: string;
      date: string;
    } | null = null;

    try {
      const status = (await client.status("INBOX", { messages: true })) as {
        messages: number;
      };

      if (status.messages && status.messages > 0) {
        const uid = status.messages;
        for await (const msg of client.fetch(`${uid}:*`, {
          envelope: true,
        })) {
          lastEmail = {
            from: msg.envelope?.from?.[0]?.address || "Unknown sender",
            subject: msg.envelope?.subject || "(No Subject)",
            date: msg.envelope?.date?.toISOString() || "",
          };
          break;
        }
      }
    } finally {
      lock.release();
    }

    await client.logout();

    return new Response(
      JSON.stringify({ success: true, lastEmail }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: unknown) {
    console.error("IMAP Error:", err);
    if (client) await client.logout().catch(() => {});
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to fetch last email.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
