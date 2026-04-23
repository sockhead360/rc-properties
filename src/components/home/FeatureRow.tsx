import {
  CalendarDays,
  CircleDollarSign,
  MapPin,
  Wrench,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  text: string;
}

const features: Feature[] = [
  {
    icon: Wrench,
    title: "No Repairs",
    text: "Sell as-is. We buy houses in any condition.",
  },
  {
    icon: CircleDollarSign,
    title: "No Fees",
    text: "No commissions or hidden fees. Ever.",
  },
  {
    icon: CalendarDays,
    title: "Close on Your Timeline",
    text: "You choose the closing date that works for you.",
  },
  {
    icon: MapPin,
    title: "Local Buyers",
    text: "We're a local company that cares about our community.",
  },
];

export default function FeatureRow() {
  return (
    <section className="bg-white py-[25px]">
      <div className="mx-auto max-w-[1080px] px-5">
        <div className="grid gap-y-9 md:grid-cols-4 md:divide-x md:divide-gray-200">
          {features.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="flex min-h-[165px] flex-col items-center px-7 text-center"
            >
              <Icon
                size={65}
                strokeWidth={1.75}
                className="mb-4 text-rc-light-blue"
              />
              <h2 className="text-lg font-extrabold text-rc-navy-dark">
                {title}
              </h2>
              <p className="mt-3 max-w-[190px] text-[15px] leading-6 text-rc-navy-dark">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
