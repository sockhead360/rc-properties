import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageSquareText, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You - RC Properties",
  description:
    "Thanks for submitting your property information to RC Properties.",
};

export default function ThankYouPage() {
  return (
    <section className="relative overflow-hidden bg-rc-navy-dark px-5 py-20 text-white sm:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(124,183,232,0.24),transparent_32%),linear-gradient(135deg,#081F3F_0%,#0E2F5A_100%)]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-rc-gold text-rc-navy-dark shadow-lg">
          <CheckCircle2 size={46} strokeWidth={2.4} />
        </div>

        <h1 className="mt-8 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
          Thank You for Submitting
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
          We&apos;ll give you a call ASAP. If we can&apos;t get ahold of you on
          a phone call, we&apos;ll send a follow-up text.
        </p>

        <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/8 p-6 text-left shadow-sm">
            <Phone size={30} className="text-rc-light-blue" />
            <h2 className="mt-4 text-lg font-extrabold">Watch for Our Call</h2>
            <p className="mt-2 text-sm leading-6 text-white/75">
              A member of RC Properties will review your information and reach
              out directly.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/8 p-6 text-left shadow-sm">
            <MessageSquareText size={30} className="text-rc-light-blue" />
            <h2 className="mt-4 text-lg font-extrabold">Text Follow-Up</h2>
            <p className="mt-2 text-sm leading-6 text-white/75">
              If the call does not connect, we&apos;ll follow up by text so you
              know it&apos;s us.
            </p>
          </div>
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-3 rounded-md bg-rc-gold px-7 py-4 font-bold text-black transition-colors hover:bg-gold-dark"
        >
          Back to Home
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}
