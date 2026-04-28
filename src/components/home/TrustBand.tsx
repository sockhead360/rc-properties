import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function TrustBand() {
  return (
    <section className="bg-[#BFDDF6] py-[20px]">
      <div className="mx-auto grid max-w-[1020px] items-center gap-6 px-5 md:grid-cols-[116px_1fr_auto]">
        <ShieldCheck
          size={88}
          strokeWidth={1.8}
          className="mx-auto text-white md:mx-0"
        />
        <div className="text-center md:text-left">
          <h2 className="text-[27px] font-extrabold tracking-[-0.035em] text-rc-navy-dark">
            A Local Company You Can Trust
          </h2>
          <p className="mt-1 max-w-[620px] text-[16px] leading-6 text-rc-navy-dark">
            We&apos;re committed to providing a fair offer and a smooth experience
            from start to finish.
          </p>
        </div>
        <Link
          href="/contact"
          className="mx-auto flex min-h-[66px] w-full max-w-[295px] items-center justify-center gap-8 rounded-md bg-rc-gold px-8 text-lg font-bold text-black transition-colors hover:bg-gold-dark md:mx-0"
        >
          Get Free Quote
          <ArrowRight size={25} strokeWidth={2.2} />
        </Link>
      </div>
    </section>
  );
}
