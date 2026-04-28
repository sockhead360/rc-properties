import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Handshake,
  HeartHandshake,
  Home,
  Lightbulb,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - RC Properties",
  description:
    "Learn about Christian and RC Properties, a local cash home buyer serving Charlotte, NC and surrounding areas.",
};

const values = [
  {
    icon: HeartHandshake,
    title: "Respect First",
    text: "Every seller deserves to be heard, treated fairly, and given clear options without pressure.",
  },
  {
    icon: Wrench,
    title: "Problem Solvers",
    text: "Inherited homes, repairs, timelines, tough situations: we focus on finding practical paths forward.",
  },
  {
    icon: ShieldCheck,
    title: "Do It The Right Way",
    text: "No runaround, no confusing process, and no games. Just direct communication from start to finish.",
  },
];

const team = [
  {
    name: "Christian",
    role: "Owner",
    photo: "/images/team/christian.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[300px] items-center overflow-hidden bg-rc-navy-dark py-16">
        <div className="pointer-events-none absolute left-8 top-1/2 hidden -translate-y-1/2 lg:block">
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white/6 ring-1 ring-white/10">
            <Users
              size={72}
              strokeWidth={1.6}
              className="text-rc-light-blue"
            />
            <Handshake
              size={34}
              strokeWidth={1.8}
              className="absolute -right-2 top-3 text-rc-gold"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block">
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white/6 ring-1 ring-white/10">
            <Home
              size={74}
              strokeWidth={1.5}
              className="text-rc-light-blue"
            />
            <Lightbulb
              size={32}
              strokeWidth={1.9}
              className="absolute -left-1 top-5 text-rc-gold"
            />
          </div>
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto mb-5 flex items-center justify-center gap-3 lg:hidden">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/8">
              <Users size={26} className="text-rc-light-blue" />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/8">
              <Home size={27} className="text-rc-light-blue" />
            </div>
          </div>
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.26em] text-rc-light-blue">
            About Our Team
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            About RC Properties
          </h1>
          <p className="text-white/80 text-base">
            A local company built to help homeowners solve real problems.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rc-light-blue">
              Built From The Ground Up
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-rc-navy-dark sm:text-4xl">
              Christian started RC Properties with the intention of doing it the
              right way.
            </h2>
            <p className="mt-5 text-base leading-8 text-rc-muted">
              RC Properties was built from the ground up around a simple idea:
              treat sellers with respect, communicate clearly, and be the
              ultimate problem solver when a house, timeline, or situation feels
              complicated.
            </p>
            <p className="mt-4 text-base leading-8 text-rc-muted">
              We buy houses throughout Charlotte and the surrounding metro area
              in all kinds of condition. Whether you are dealing with repairs,
              an inherited property, a difficult timeline, or just want a
              simpler way to sell, our goal is to make the process fair,
              straightforward, and low-pressure.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-3xl border border-gray-200 bg-rc-soft-bg p-6 text-center"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
                  <Icon size={30} className="text-rc-light-blue" />
                </div>
                <h3 className="text-lg font-extrabold text-rc-navy-dark">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-rc-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rc-soft-bg py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-rc-light-blue">
              Meet Our Team
            </p>
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-rc-navy-dark sm:text-4xl">
              The people behind RC Properties.
            </h2>
          </div>

          <div className="flex justify-center">
            {team.map(({ name, role, photo }) => (
              <article
                key={name}
                className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto mb-5 h-32 w-32 overflow-hidden rounded-full bg-rc-navy-dark ring-4 ring-white shadow-md">
                  <Image
                    src={photo}
                    alt={`${name} from RC Properties`}
                    width={256}
                    height={256}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-extrabold text-rc-navy-dark">
                  {name}
                </h3>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-rc-light-blue">
                  {role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#BFDDF6] py-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-between gap-5 px-4 text-center sm:px-6 lg:px-8 md:flex-row md:text-left">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/70">
              <ShieldCheck size={30} className="text-rc-navy" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-rc-navy-dark">
                Respect, clarity, and practical solutions.
              </h2>
              <p className="mt-1 text-sm leading-6 text-rc-navy-dark">
                Get a direct cash offer and decide if it works for you.
              </p>
            </div>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-md bg-rc-gold px-7 py-4 font-bold text-black transition-colors hover:bg-gold-dark"
          >
            Get a Cash Offer
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
