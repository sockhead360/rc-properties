import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "RC Properties made selling our house so easy. We got a fair cash offer in less than 24 hours and closed on our timeline.",
    author: "Sarah M., Charlotte, NC",
    image: "/images/testimonials/sarah-m.png",
  },
  {
    quote:
      "No repairs, no showings, no stress. They handled everything and we walked away with cash.",
    author: "James T., Concord, NC",
    image: "/images/testimonials/james-t.png",
  },
  {
    quote:
      "Professional, honest, and local. I highly recommend RC Properties to anyone needing to sell fast.",
    author: "Lisa P., Gastonia, NC",
    image: "/images/testimonials/lisa-p.png",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-rc-navy-dark py-[18px]">
      <div className="mx-auto max-w-[1014px] px-5">
        <h2 className="text-center text-[28px] font-extrabold tracking-[-0.035em] text-white sm:text-[32px]">
          What Homeowners Are Saying
        </h2>

        <div className="mt-5 grid gap-8 md:grid-cols-3">
          {testimonials.map(({ quote, author, image }) => (
            <article
              key={author}
              className="flex min-h-[250px] flex-col items-center rounded-lg bg-white px-8 py-6 text-center shadow-sm"
            >
              <Image
                src={image}
                alt={author}
                width={72}
                height={72}
                className="mb-3 h-[72px] w-[72px] rounded-full border-4 border-rc-soft-bg object-cover shadow-sm"
              />
              <p className="mb-3 text-[13px] font-bold text-rc-navy-dark">
                {author}
              </p>
              <div className="mb-2 flex justify-center gap-0.5 text-rc-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <p className="flex-1 text-[14px] leading-6 text-rc-text">
                &ldquo;{quote}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
