import { ChevronRight, ClipboardList, Handshake, House } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: House,
    title: "Tell Us About Your House",
    text: "Enter your address and a few details about your property.",
  },
  {
    number: "2",
    icon: ClipboardList,
    title: "Get Your Cash Offer",
    text: "We'll review the details and send you a fair, no-obligation cash offer.",
  },
  {
    number: "3",
    icon: Handshake,
    title: "Close and Get Paid",
    text: "Accept the offer, pick your closing date, and get paid.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-rc-soft-bg py-[24px]">
      <div className="mx-auto max-w-[1080px] px-5">
        <h2 className="text-center text-[31px] font-extrabold tracking-[-0.035em] text-rc-navy-dark sm:text-[35px]">
          Our Simple 3-Step Process
        </h2>

        <div className="mt-4 grid items-center gap-5 md:grid-cols-[1fr_44px_1fr_44px_1fr]">
          {steps.map(({ number, icon: Icon, title, text }, index) => (
            <div key={title} className="contents">
              <article className="relative min-h-[200px] rounded-[10px] border border-gray-200 bg-white px-7 pb-5 pt-6 text-center shadow-sm">
                <span className="absolute left-5 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-rc-light-blue text-lg font-extrabold text-white">
                  {number}
                </span>
                <Icon
                  size={74}
                  strokeWidth={1.7}
                  className="mx-auto mb-3 text-rc-light-blue"
                />
                <h3 className="text-lg font-extrabold leading-tight text-rc-navy-dark">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] leading-6 text-rc-navy-dark">
                  {text}
                </p>
              </article>

              {index < steps.length - 1 && (
                <ChevronRight
                  size={36}
                  strokeWidth={1.8}
                  className="mx-auto hidden text-rc-light-blue md:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
