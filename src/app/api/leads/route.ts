import { NextResponse } from "next/server";

const LEAD_NOTIFICATION_EMAIL = "christian.nold@gmail.com";

interface LeadPayload {
  address?: string;
  email?: string;
  phone?: string;
  phoneDisplay?: string;
}

function normalizePhone(phone: string) {
  return phone.replace(/\D/g, "");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidLead(payload: LeadPayload) {
  const address = payload.address?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const phone = normalizePhone(payload.phone ?? "");

  return address.length > 4 && isValidEmail(email) && phone.length === 10;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!isValidLead(payload)) {
    return NextResponse.json(
      { error: "Address, valid email, and 10-digit phone are required" },
      { status: 400 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.LEAD_FROM_EMAIL ?? "RC Properties <onboarding@resend.dev>";
  const address = payload.address!.trim();
  const email = payload.email!.trim();
  const phone = normalizePhone(payload.phone!);
  const phoneDisplay = payload.phoneDisplay?.trim() || phone;
  const safeAddress = escapeHtml(address);
  const safeEmail = escapeHtml(email);
  const safePhoneDisplay = escapeHtml(phoneDisplay);

  if (!resendApiKey) {
    console.warn("Lead received but RESEND_API_KEY is not configured", {
      address,
      email,
      phone,
    });

    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, emailSent: false });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [LEAD_NOTIFICATION_EMAIL],
      reply_to: email,
      subject: "New RC Properties cash offer request",
      text: [
        "New RC Properties lead",
        "",
        `Property address: ${address}`,
        `Phone: ${phoneDisplay}`,
        `Email: ${email}`,
        "",
        "Follow up ASAP. If the lead does not answer a phone call, send a follow-up text.",
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.5;">
          <h1 style="color: #0E2F5A;">New RC Properties lead</h1>
          <p><strong>Property address:</strong> ${safeAddress}</p>
          <p><strong>Phone:</strong> ${safePhoneDisplay}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p>Follow up ASAP. If the lead does not answer a phone call, send a follow-up text.</p>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Resend email failed", errorText);

    return NextResponse.json(
      { error: "Email notification failed" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, emailSent: true });
}
