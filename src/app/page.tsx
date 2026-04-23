import FeatureRow from "@/components/home/FeatureRow";
import Hero from "@/components/home/Hero";
import ProcessSteps from "@/components/home/ProcessSteps";
import Testimonials from "@/components/home/Testimonials";
import TrustBand from "@/components/home/TrustBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureRow />
      <ProcessSteps />
      <Testimonials />
      <TrustBand />
    </>
  );
}
