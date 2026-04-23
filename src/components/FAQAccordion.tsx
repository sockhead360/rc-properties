"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white transition-colors"
          >
            <span className="text-sm sm:text-base font-extrabold text-rc-navy-dark pr-4">
              {item.question}
            </span>
            {openIndex === i ? (
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rc-light-blue text-white">
                <Minus size={17} />
              </span>
            ) : (
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rc-soft-bg text-rc-light-blue">
                <Plus size={17} />
              </span>
            )}
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5 text-sm text-rc-muted leading-relaxed border-t border-gray-100">
              <div className="pt-4">{item.answer}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
