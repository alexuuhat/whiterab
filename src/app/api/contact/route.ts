import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body as {
      name?: string;
      email?: string;
      company?: string;
      service?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        {
          error:
            "Telegram is not configured. Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID."
        },
        { status: 500 }
      );
    }

    const textLines = [
      "📥 New contact request from White RAB website",
      "",
      `👤 Name: ${name}`,
      `📧 Email: ${email}`,
      company ? `🏢 Organization: ${company}` : undefined,
      service ? `🎯 Primary interest: ${service}` : undefined,
      "",
      "📝 Message:",
      message
    ].filter(Boolean);

    const text = textLines.join("\n");

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const res = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown"
      })
    });

    if (!res.ok) {
      const data = (await res.json().catch(() => null)) as { description?: string } | null;
      throw new Error(data?.description || "Failed to send Telegram message.");
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}

