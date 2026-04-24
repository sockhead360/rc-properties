import HomeAddressBar from "./HomeAddressBar";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[523px] overflow-hidden bg-rc-navy-dark">
      <div
        className="absolute inset-0 bg-cover bg-[position:70%_center] sm:bg-center"
        style={{ backgroundImage: "url('/images/hero-banner.png')" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1280px] px-5 py-[58px] text-center sm:px-10 lg:px-[76px] lg:text-left">
        <div className="mx-auto max-w-[690px] lg:mx-0">
          <h1 className="text-[48px] font-extrabold leading-[1.08] tracking-[-0.055em] text-white sm:text-[70px] lg:text-[78px]">
            Sell Your House
            <br />
            Fast for Cash.{" "}
            <span className="relative inline-block -rotate-3 font-serif text-[0.82em] font-bold italic tracking-[-0.04em] text-rc-light-blue">
              Fast.
              <span className="absolute -bottom-1 left-3 h-1.5 w-[84%] -rotate-2 rounded-full bg-rc-gold" />
            </span>
          </h1>

          <p className="mt-6 text-[23px] font-extrabold leading-tight text-white">
            No repairs. No fees. No hassle.
          </p>
          <p className="mt-3 text-[27px] font-extrabold leading-tight text-rc-gold">
            We Buy Houses for Cash. Fast.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-[520px] lg:mx-0">
          <HomeAddressBar />
        </div>
      </div>
    </section>
  );
}
