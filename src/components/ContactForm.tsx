"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

function normalizePhone(phone: string) {
  return phone.replace(/\D/g, "");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidOptionalPhone(phone: string) {
  const normalized = normalizePhone(phone);
  return normalized.length === 0 || normalized.length === 10;
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialAddress = searchParams.get("address") ?? "";
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: initialAddress,
    message: "",
    nonMarketingConsent: false,
    marketingConsent: false,
    termsAccepted: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const formIsValid =
    form.name.trim().length > 1 &&
    isValidOptionalPhone(form.phone) &&
    isValidEmail(form.email);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitError("");
  }

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.checked });
    setSubmitError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError("");

    if (!formIsValid || submitting) {
      setSubmitError(
        "Enter your name, a valid email, and use a 10-digit mobile number if you provide one."
      );
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: normalizePhone(form.phone),
          phoneDisplay: form.phone.trim(),
          email: form.email.trim(),
          address: form.address.trim(),
          message: form.message.trim(),
          nonMarketingConsent: form.nonMarketingConsent,
          marketingConsent: form.marketingConsent,
          termsAccepted: form.termsAccepted,
          source: "contact",
        }),
      });

      if (!response.ok) {
        throw new Error("Contact submission failed");
      }

      router.push("/thank-you");
    } catch {
      setSubmitError(
        "We could not submit the form. Please call or text (410) 260-9157."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Enter your full name"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky/40 focus:border-sky transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Mobile Number (Optional)
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="(410) 260-9157"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky/40 focus:border-sky transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="you@email.com"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky/40 focus:border-sky transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Property Address (Optional)
        </label>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Enter your property address"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky/40 focus:border-sky transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          How can we help you?
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us a little about your situation..."
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky/40 focus:border-sky transition resize-none"
        />
      </div>

      <div className="space-y-3 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="nonMarketingConsent"
            checked={form.nonMarketingConsent}
            onChange={handleCheckboxChange}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-sky focus:ring-sky"
          />
          <span>
            I agree to receive non-marketing SMS messages from 680 South
            Marketing Group, LLC DBA RC Properties regarding responses to my
            requests, cash offer updates, property evaluation notifications,
            process updates, closing coordination, reminders and customer
            support communications. Message frequency may vary. Reply
            &ldquo;HELP&rdquo; for assistance or &ldquo;STOP&rdquo; to
            unsubscribe. Standard message and data rates may apply.
          </span>
        </label>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="marketingConsent"
            checked={form.marketingConsent}
            onChange={handleCheckboxChange}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-sky focus:ring-sky"
          />
          <span>
            I agree to receive marketing SMS messages from 680 South Marketing
            Group, LLC DBA RC Properties regarding promotional offers,
            discounts, and related marketing communications. Message frequency
            may vary. Reply &ldquo;HELP&rdquo; for assistance or
            &ldquo;STOP&rdquo; to unsubscribe. Standard message and data rates
            may apply.
          </span>
        </label>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={form.termsAccepted}
            onChange={handleCheckboxChange}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-sky focus:ring-sky"
          />
          <span>
            By checking this box, I accept the{" "}
            <Link href="/privacy" className="font-semibold text-sky hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy#terms"
              className="font-semibold text-sky hover:underline"
            >
              Terms of Services
            </Link>
            .
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={!formIsValid || submitting}
        className="w-full bg-gold hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-55 text-white font-semibold py-3.5 rounded-lg transition-colors"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>
      {submitError && (
        <p className="text-center text-sm font-semibold text-red-600">
          {submitError}
        </p>
      )}
    </form>
  );
}
