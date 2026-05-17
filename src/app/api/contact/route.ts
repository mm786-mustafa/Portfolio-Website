import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function createTransport() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port: Number(port),
    secure: Number(port) === 465,
    auth: {
      user,
      pass,
    },
  });
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  const name = body?.name?.trim();
  const email = body?.email?.trim();
  const company = body?.company?.trim();
  const message = body?.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL ?? process.env.SMTP_USER;

  if (!recipient || !sender) {
    return NextResponse.json(
      {
        message:
          "Email delivery is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_TO_EMAIL.",
      },
      { status: 500 }
    );
  }

  const transport = createTransport();

  if (!transport) {
    return NextResponse.json(
      {
        message:
          "Email delivery is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_TO_EMAIL.",
      },
      { status: 500 }
    );
  }

  try {
    await transport.sendMail({
      from: `Portfolio Contact <${sender}>`,
      to: recipient,
      replyTo: email,
      subject: `Portfolio contact form submission from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company / Project: ${company || "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New portfolio contact submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company / Project:</strong> ${escapeHtml(company || "Not provided")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({
      message: "Thanks. Your details were received and emailed successfully.",
    });
  } catch (err) {
    // log the error server-side for debugging
    // include the message in the JSON response when running locally
    // to help diagnose SMTP problems faster
    // eslint-disable-next-line no-console
    console.error("contact: sendMail error", err);

    const devMessage =
      process.env.NODE_ENV === "production"
        ? "The email could not be sent right now. Please try again later."
        : String((err as Error)?.message ?? "Unknown error");

    return NextResponse.json(
      { message: devMessage },
      { status: 500 }
    );
  }
}