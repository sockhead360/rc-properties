import { NextResponse } from "next/server";

const LEAD_NOTIFICATION_EMAIL = "christian.nold@gmail.com";

interface LeadPayload {
  name?: string;
  address?: string;
  email?: string;
  message?: string;
  phone?: string;
  phoneDisplay?: string;
  nonMarketingConsent?: boolean;
  marketingConsent?: boolean;
  termsAccepted?: boolean;
  source?: "cash-offer" | "contact";
}

function normalizePhone(phone: string) {
  return phone.replace(/\D/g, "");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidLead(payload: LeadPayload) {
  const name = payload.name?.trim() ?? "";
  const address = payload.address?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";
  const phone = normalizePhone(payload.phone ?? "");
  const source = payload.source ?? "cash-offer";

  if (!isValidEmail(email) || (phone.length > 0 && phone.length !== 10)) {
    return false;
  }

  if (source === "cash-offer") {
    return address.length > 4 && payload.termsAccepted === true;
  }

  return name.length > 1 || address.length > 4 || message.length > 1;
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
      { error: "Required fields are missing or invalid" },
      { status: 400 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.LEAD_FROM_EMAIL ?? "RC Properties <onboarding@resend.dev>";
  const address = payload.address?.trim() ?? "";
  const email = payload.email!.trim();
  const name = payload.name?.trim() ?? "";
  const message = payload.message?.trim() ?? "";
  const phone = normalizePhone(payload.phone ?? "");
  const phoneDisplay = payload.phoneDisplay?.trim() || phone || "Not provided";
  const nonMarketingConsent = payload.nonMarketingConsent === true;
  const marketingConsent = payload.marketingConsent === true;
  const termsAccepted = payload.termsAccepted === true;
  const source = payload.source ?? "cash-offer";
  const safeName = escapeHtml(name || "Not provided");
  const safeAddress = escapeHtml(address || "Not provided");
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message || "Not provided");
  const safePhoneDisplay = escapeHtml(phoneDisplay);
  const safeNonMarketingConsent = nonMarketingConsent ? "Yes" : "No";
  const safeMarketingConsent = marketingConsent ? "Yes" : "No";
  const safeTermsAccepted = termsAccepted ? "Yes" : "No";
  const sourceLabel =
    source === "contact" ? "Contact page form" : "Homepage cash offer form";

  if (!resendApiKey) {
    console.warn("Lead received but RESEND_API_KEY is not configured", {
      address,
      email,
      phone,
      nonMarketingConsent,
      marketingConsent,
      termsAccepted,
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
      subject:
        source === "contact"
          ? "New RC Properties contact form submission"
          : "New RC Properties cash offer request",
      text: [
        "New RC Properties lead",
        "",
        `Source: ${sourceLabel}`,
        `Name: ${name || "Not provided"}`,
        `Property address: ${address || "Not provided"}`,
        `Mobile: ${phoneDisplay}`,
        `Email: ${email}`,
        `Message: ${message || "Not provided"}`,
        `Non-marketing SMS consent: ${safeNonMarketingConsent}`,
        `Marketing SMS consent: ${safeMarketingConsent}`,
        `Privacy Policy and Terms of Services accepted: ${safeTermsAccepted}`,
        "",
        "Follow up ASAP. If the lead does not answer a phone call, send a follow-up text.",
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.5;">
          <h1 style="color: #0E2F5A;">New RC Properties lead</h1>
          <p><strong>Source:</strong> ${escapeHtml(sourceLabel)}</p>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Property address:</strong> ${safeAddress}</p>
          <p><strong>Mobile:</strong> ${safePhoneDisplay}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong> ${safeMessage}</p>
          <p><strong>Non-marketing SMS consent:</strong> ${safeNonMarketingConsent}</p>
          <p><strong>Marketing SMS consent:</strong> ${safeMarketingConsent}</p>
          <p><strong>Privacy Policy and Terms of Services accepted:</strong> ${safeTermsAccepted}</p>
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
