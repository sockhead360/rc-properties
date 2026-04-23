import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  HeartHandshake,
  Quote,
  ShieldCheck,
  Star,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews - RC Properties",
  description:
    "Read reviews from homeowners who worked with RC Properties in the Charlotte metro area.",
};

const featuredPhotos = [
  {
    src: "/images/reviews/customer-sign-1.jpg",
    alt: "Happy RC Properties customer holding a sold sign",
  },
  {
    src: "/images/reviews/customer-sign-2.jpg",
    alt: "RC Properties customer holding a sold sign",
  },
  {
    src: "/images/reviews/customer-sign-3.jpg",
    alt: "Homeowner with RC Properties sold sign",
  },
];

const reviews = [
  {
    author: "William & Kelley",
    title: "They Gave Us Peace of Mind",
    text: "Such a great company to do business with. Right away we felt very comfortable with the walkthroughs, offer, and closing. Ryan gave us peace of mind since we had relocated out of state. Highly recommend.",
  },
  {
    author: "Amy Kenna Davis",
    title: "Professional & Honest",
    text: "I reached out to RC Properties to see what we could do with our home based on our circumstances. Ryan was great to talk to. He was professional, honest, and offered us great advice. Even if you are unsure what to do, I would recommend reaching out to see what advice they can offer.",
  },
  {
    author: "Kayle K.",
    title: "My Go-To For Real Estate",
    text: "Ryan and his team have been my go-to for any real estate question or issue that I have had. Ryan has always been very helpful and able to explain things in a way I could understand.",
  },
  {
    author: "Michael R.",
    title: "Very Impressed",
    text: "Ryan will go out of his way to help anyone. Very impressed with the community he has built. Highly recommend.",
  },
  {
    author: "Maria L.",
    title: "Highly Recommend",
    text: "Ryan has been an incredible person to work with. He values people and works with you to overcome challenges while sharing his unique perspective. I am very fortunate that Ryan and I crossed paths and am excited to continue that relationship in the future.",
  },
  {
    author: "Michael C.",
    title: "Genuinely Helpful",
    text: "Ryan helped motivate us to move a piece of property that we had been sitting on for years. When I reached out for help, he replied within minutes. I received a phone call full of information, but more than that, he was genuinely helpful. This felt personal. He wanted to help.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <section className="relative flex min-h-[300px] items-center overflow-hidden bg-rc-navy-dark py-16">
        <div className="pointer-events-none absolute left-8 top-1/2 hidden -translate-y-1/2 lg:block">
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white/6 ring-1 ring-white/10">
            <Star
              size={72}
              strokeWidth={1.6}
              className="text-rc-light-blue"
            />
            <Quote
              size={34}
              strokeWidth={1.8}
              className="absolute -right-2 top-3 text-rc-gold"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block">
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white/6 ring-1 ring-white/10">
            <HeartHandshake
              size={74}
              strokeWidth={1.5}
              className="text-rc-light-blue"
            />
            <ShieldCheck
              size={32}
              strokeWidth={1.9}
              className="absolute -left-1 top-5 text-rc-gold"
            />
          </div>
        </div>

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <div className="mx-auto mb-5 flex items-center justify-center gap-3 lg:hidden">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/8">
              <Star size={26} className="text-rc-light-blue" />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/8">
              <Camera size={26} className="text-rc-light-blue" />
            </div>
          </div>
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.26em] text-rc-light-blue">
            Real Homeowner Reviews
          </p>
          <h1 className="text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">
            What Homeowners Say About RC Properties
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">
            We work with homeowners throughout the Charlotte metro area who want
            a simpler, more certain way to sell. Here are a few words from
            people who trusted our team.
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {featuredPhotos.map((photo) => (
              <div
                key={photo.src}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={1024}
                  height={1024}
                  className="aspect-square h-full w-full object-cover"
                  priority={photo.src.endsWith("1.jpg")}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rc-soft-bg py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-9 text-center">
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-rc-navy-dark sm:text-4xl">
              Homeowners Who Felt Heard, Helped, And Respected
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-rc-muted">
              Every situation is different. Our goal is to be clear, honest, and
              useful from the first conversation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.author}
                className="flex min-h-[320px] flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex gap-0.5 text-rc-gold">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={18}
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <Quote size={30} className="shrink-0 text-rc-light-blue" />
                </div>
                <h3 className="text-xl font-extrabold text-rc-navy-dark">
                  {review.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-rc-muted">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="mt-5 text-sm font-extrabold text-rc-navy-dark">
                  - {review.author}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#BFDDF6] py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 px-5 text-center sm:px-8 md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-rc-navy-dark">
              Want to see what your house could sell for?
            </h2>
            <p className="mt-2 text-sm leading-6 text-rc-navy-dark">
              Get a no-pressure cash offer from RC Properties and decide if it
              works for you.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-md bg-rc-gold px-7 py-4 font-bold text-black transition-colors hover:bg-gold-dark"
          >
            Get My Cash Offer
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
