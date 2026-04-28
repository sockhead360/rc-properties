import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import {
  ArrowRight,
  CircleDollarSign,
  HelpCircle,
  MessageCircleQuestion,
  ShieldQuestion,
  Wrench,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ – RC Properties",
  description:
    "Frequently asked questions about selling your house for cash with RC Properties in Charlotte, NC.",
};

const faqs = [
  {
    question: "How does your cash offer process work?",
    answer:
      "It's simple. You provide your property address and a few basic details. We evaluate your home — usually within 24 hours — and send you a fair, no-obligation cash offer. If you accept, you pick a closing date and we handle the rest.",
  },
  {
    question: "Do you buy houses in any condition?",
    answer:
      "Yes. We buy houses in all conditions — whether they need major repairs, have been damaged, are inherited properties, or are in otherwise difficult situations. You never have to clean, repair, or stage your home.",
  },
  {
    question: "Do I need to make any repairs?",
    answer:
      "No. We buy houses as-is. You don't need to fix anything before selling. We factor the home's current condition into our offer so you don't have to spend a dime on repairs.",
  },
  {
    question: "Are there any fees or commissions?",
    answer:
      "None. We don't charge commissions, closing costs, or hidden fees. The offer we make is the amount you walk away with.",
  },
  {
    question: "How fast can you close?",
    answer:
      "We can close in as little as 7 days if needed. But we're flexible — if you need more time to move or make arrangements, we'll work around your schedule.",
  },
  {
    question: "Do you pay closing costs?",
    answer:
      "Yes. We cover all standard closing costs. There are no surprise deductions at the closing table.",
  },
  {
    question: "Are you a real estate agent?",
    answer:
      "No. We are a direct cash buyer, not agents. We don't list your home on the MLS. We purchase it directly from you, which means no showings, no open houses, and no waiting on a buyer's process to come through.",
  },
  {
    question: "What if I'm behind on payments or facing foreclosure?",
    answer:
      "We've helped many homeowners in difficult property situations. If you're behind on payments or facing foreclosure, reach out as soon as possible. Time matters, and we'll do our best to move quickly.",
  },
  {
    question: "Is there any obligation when I request an offer?",
    answer:
      "No obligation whatsoever. Requesting an offer is completely free. You can review it, take your time, and decide without any pressure from us.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="relative flex min-h-[300px] items-center overflow-hidden bg-rc-navy-dark py-16">
        <div className="pointer-events-none absolute left-8 top-1/2 hidden -translate-y-1/2 lg:block">
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white/6 ring-1 ring-white/10">
            <HelpCircle
              size={72}
              strokeWidth={1.6}
              className="text-rc-light-blue"
            />
            <CircleDollarSign
              size={34}
              strokeWidth={1.8}
              className="absolute -right-2 top-3 text-rc-gold"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block">
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white/6 ring-1 ring-white/10">
            <MessageCircleQuestion
              size={74}
              strokeWidth={1.5}
              className="text-rc-light-blue"
            />
            <Wrench
              size={32}
              strokeWidth={1.9}
              className="absolute -left-1 top-5 text-rc-gold"
            />
          </div>
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto mb-5 flex items-center justify-center gap-3 lg:hidden">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/8">
              <HelpCircle size={26} className="text-rc-light-blue" />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/8">
              <ShieldQuestion size={27} className="text-rc-light-blue" />
            </div>
          </div>
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.26em] text-rc-light-blue">
            Clear Answers
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-white/80">
            Find answers to common questions about selling your home for cash.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-rc-soft-bg py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-extrabold text-rc-navy-dark mb-2">
            Still have questions? We&apos;re here to help.
          </h2>
          <p className="text-sm text-rc-muted mb-6">
            Reach out anytime and we&apos;ll get back to you quickly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-rc-gold hover:bg-gold-dark text-black font-bold px-7 py-3 rounded-md transition-colors"
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
