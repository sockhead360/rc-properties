import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  Banknote,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Handshake,
  HelpCircle,
  Home,
  MessageCircleQuestion,
  PersonStanding,
  Sparkles,
  Wrench,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works - RC Properties",
  description:
    "Compare selling on the market with an agent versus getting a direct cash offer from RC Properties in the Charlotte metro area.",
};

const comparisonRows = [
  {
    label: "Commissions / Fees",
    market: "6% on average is paid by you, the seller",
    cash: "No commissions or agent fees when you sell directly to RC Properties for cash",
  },
  {
    label: "Who Pays Closing Costs?",
    market: "2% on average is paid by you, the seller",
    cash: "RC Properties covers the standard closing costs",
  },
  {
    label: "Inspection & Buyer Contingency",
    market: "Yes, sales can fall through after inspections or buyer delays",
    cash: "No lender contingency and a much lower chance of the sale falling through",
  },
  {
    label: "Appraisal Needed",
    market: "Yes, the sale is often subject to appraisal",
    cash: "No appraisal needed for a direct cash sale",
  },
  {
    label: "Average Days Until Sold",
    market: "+/- 91 days, plus time to close after accepting an offer",
    cash: "Can close in as little as 7 days",
  },
  {
    label: "Number of Showings",
    market: "Multiple showings, open houses, and buyer appointments",
    cash: "1, just us",
  },
  {
    label: "Closing Date",
    market: "30 to 60+ days after accepting the buyer's offer",
    cash: "The date of your choice",
  },
  {
    label: "Who Pays For Repairs?",
    market: "Often negotiated during the inspection period",
    cash: "We buy as-is and handle repairs after closing",
  },
];

const sellingOptions = [
  {
    title: "Selling On The Market With An Agent",
    icon: Home,
    text: "Selling on the market can make sense when your main goal is trying to get the highest possible retail price. The tradeoff is that you may need to prepare the home, handle showings, negotiate repairs, wait on the buyer's process, and pay commissions and closing costs from your proceeds.",
    detail:
      "In the Charlotte metro market, this route can take time. While the house is listed and under contract, you may still be paying the mortgage, taxes, insurance, utilities, lawn care, and maintenance.",
  },
  {
    title: "Selling Directly To RC Properties For Cash",
    icon: Handshake,
    text: "A direct cash sale is built for speed, certainty, and convenience. You do not need to clean, repair, stage, or host repeated showings. We review the property, make a cash offer, and let you choose the closing date that works for you.",
    detail:
      "If you accept our offer, there are no commissions, no agent fees, no standard closing costs paid by you, and no lender appraisal process slowing things down.",
  },
];

const benefits = [
  {
    icon: Clock3,
    title: "Close In As Little As 7 Days",
    text: "From offer to close and cash in your hand, we can move quickly when timing matters. That helps you avoid more utility payments, taxes, insurance, mortgage payments, and the stress of holding a property longer than necessary.",
  },
  {
    icon: Wrench,
    title: "Sell As-Is",
    text: "Do not worry about fixing, cleaning, staging, or showing your house again and again. We buy houses in the Charlotte metro area in all kinds of condition, from clean and move-in ready to complete fixer-upper projects.",
  },
  {
    icon: BadgeDollarSign,
    title: "No Fees Or Closing Costs",
    text: "When you sell directly to RC Properties for cash, we cover the standard closing costs. What we offer is what you get, minus any mortgage payoff or other liens tied to the property.",
  },
  {
    icon: CheckCircle2,
    title: "Certainty And Peace Of Mind",
    text: "Traditional sales can fall apart because of inspections, appraisals, or buyer hesitation. A direct cash sale gives you a cleaner path and a closing date you can plan around.",
  },
];

const cashOfferHighlights = [
  {
    icon: BadgeDollarSign,
    title: "No commissions or fees",
    text: "Keep more of your offer without agent commissions.",
  },
  {
    icon: Clock3,
    title: "Close in as little as 7 days",
    text: "Move quickly when timing matters.",
  },
  {
    icon: Wrench,
    title: "No repairs needed",
    text: "Sell as-is without fixing or cleaning.",
  },
  {
    icon: CheckCircle2,
    title: "Choose your closing date",
    text: "Close on the timeline that works for you.",
  },
];

export default function HowItWorksPage() {
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
            <MessageCircleQuestion
              size={34}
              strokeWidth={1.8}
              className="absolute -right-2 top-3 text-rc-gold"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block">
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white/6 ring-1 ring-white/10">
            <PersonStanding
              size={74}
              strokeWidth={1.5}
              className="text-rc-light-blue"
            />
            <Sparkles
              size={30}
              strokeWidth={1.9}
              className="absolute -left-1 top-5 text-rc-gold"
            />
          </div>
        </div>

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <div className="mx-auto mb-5 flex items-center justify-center gap-3 lg:hidden">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/8">
              <HelpCircle size={26} className="text-rc-light-blue" />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/8">
              <PersonStanding size={28} className="text-rc-light-blue" />
            </div>
          </div>
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.26em] text-rc-light-blue">
            Compare Your Options
          </p>
          <h1 className="text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">
            Market Sale vs. Cash Offer
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Welcome to our guide for comparing your home-selling options in the
            Charlotte metro market. Even when homes are moving, it is important
            to evaluate your choices carefully so you can sell efficiently,
            confidently, and on the timeline that works for you.
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rc-light-blue">
                Flexible Solutions
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-rc-navy-dark sm:text-4xl">
                Work the numbers and see which way helps you get there.
              </h2>
              <p className="mt-5 text-base leading-8 text-rc-muted">
                RC Properties gives you a direct cash offer alternative to the traditional market sale. Instead of preparing the house, scheduling showings, waiting on the buyer&apos;s process, and negotiating repairs, you can choose a cleaner path with fewer moving parts.
              </p>
              <p className="mt-4 text-base leading-8 text-rc-muted">
                If you sell to us for cash, we may not offer full retail value,
                but we provide benefits the traditional route often cannot:
                speed, certainty, no repairs, no showings, and fewer costs.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rc-soft-bg">
                  <Banknote size={28} className="text-rc-light-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-rc-navy-dark">
                    Cash Offer Benefits
                  </h3>
                  <p className="text-sm text-rc-muted">
                    Built for speed, certainty, and less hassle.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {cashOfferHighlights.map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-gray-200 bg-rc-soft-bg p-5"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                      <Icon
                        size={26}
                        className="text-rc-light-blue"
                        strokeWidth={2}
                      />
                    </div>
                    <h4 className="text-sm font-extrabold text-rc-navy-dark">
                      {title}
                    </h4>
                    <p className="mt-2 text-xs leading-5 text-rc-muted">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-rc-soft-bg py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-rc-navy-dark sm:text-4xl">
              Compare Your Selling Options
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-rc-muted">
              Here is a straightforward look at selling on the market with an agent versus selling directly to RC Properties for cash.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-rc-navy-dark text-white">
                    <th className="w-[28%] px-5 py-4 font-extrabold">
                      Selling Factor
                    </th>
                    <th className="w-[34%] px-5 py-4 font-extrabold">
                      Selling On The Market
                    </th>
                    <th className="w-[38%] bg-rc-navy px-5 py-4 font-extrabold">
                      Cash Offer From RC Properties
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr
                      key={row.label}
                      className={index % 2 === 0 ? "bg-white" : "bg-rc-soft-bg"}
                    >
                      <th className="border-t border-gray-200 px-5 py-4 font-extrabold text-rc-navy-dark">
                        {row.label}
                      </th>
                      <td className="border-t border-gray-200 px-5 py-4 text-rc-muted">
                        {row.market}
                      </td>
                      <td className="border-t border-gray-200 px-5 py-4 font-semibold text-rc-navy-dark">
                        {row.cash}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-rc-muted">
            *An inspection contingency gives a buyer time to inspect the
            property and potentially back out or renegotiate if repairs are
            needed. Other buyer contingencies can also allow a buyer to back out
            if their purchase cannot move forward or if the home does not
            appraise for the needed value.
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {sellingOptions.map(({ title, icon: Icon, text, detail }) => (
              <article
                key={title}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-rc-soft-bg">
                  <Icon size={30} className="text-rc-light-blue" />
                </div>
                <h2 className="text-xl font-extrabold text-rc-navy-dark">
                  {title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-rc-muted">{text}</p>
                <p className="mt-4 text-sm leading-7 text-rc-muted">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rc-navy-dark py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-9 text-center">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.24em] text-rc-light-blue">
              Direct Cash Sale Benefits
            </p>
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl">
              A streamlined process built around your goals.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-3xl border border-white/10 bg-white/8 p-6"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-rc-light-blue/15">
                  <Icon size={30} className="text-rc-light-blue" />
                </div>
                <h3 className="text-xl font-extrabold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-rc-soft-bg">
            <FileCheck2 size={34} className="text-rc-light-blue" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-rc-navy-dark sm:text-4xl">
            Is it right for you?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-rc-muted">
            When you add up the time saved, the no-hassle experience, and the
            money saved on commissions, fees, repairs, and holding costs, a
            direct sale can be the best viable option for many Charlotte metro
            homeowners. If it is not the right fit, we will be direct about that
            too.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-rc-muted">
            If speed, convenience, and certainty matter more than going through the traditional listing process, a direct cash offer from RC Properties may be the better fit.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-md bg-rc-gold px-7 py-4 font-bold text-black transition-colors hover:bg-gold-dark"
            >
              Get My Cash Offer
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-md border-2 border-rc-light-blue px-7 py-3.5 font-bold text-rc-navy transition-colors hover:bg-rc-soft-bg"
            >
              Contact Us
              <Sparkles size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#BFDDF6] py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 px-5 text-center sm:px-8 md:flex-row md:text-left">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/70">
              <Banknote size={30} className="text-rc-navy" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-rc-navy-dark">
                No repairs. No fees. No pressure.
              </h2>
              <p className="mt-1 text-sm leading-6 text-rc-navy-dark">
                Get a clear offer and decide what works for you.
              </p>
            </div>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-md bg-rc-gold px-7 py-4 font-bold text-black transition-colors hover:bg-gold-dark"
          >
            Start Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
