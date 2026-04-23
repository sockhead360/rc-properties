import { Suspense } from "react";
import { HandHeart, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us – RC Properties",
  description:
    "Contact RC Properties to get a free cash offer on your home. We serve Charlotte, Concord, Gastonia, Mooresville, and surrounding areas.",
};

const serviceAreas = [
  "Charlotte",
  "Concord",
  "Gastonia",
  "Mooresville",
  "Huntersville",
  "Matthews",
  "Mint Hill",
  "Pineville",
  "Kannapolis",
  "Monroe",
  "Belmont",
  "Indian Trail",
  "Harrisburg",
  "Rock Hill, SC",
  "And more…",
];

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative flex min-h-[300px] items-center overflow-hidden bg-rc-navy-dark py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-5 flex justify-center">
            <div className="relative">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-rc-light-blue/15 ring-1 ring-white/10">
                <HandHeart
                  size={40}
                  strokeWidth={1.8}
                  className="text-rc-light-blue"
                />
              </div>
              <div className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full bg-rc-gold text-rc-navy-dark shadow-sm">
                <MessageCircle size={18} strokeWidth={2.4} />
              </div>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Contact Us
          </h1>
          <p className="text-base text-gray-300">
            We&apos;re here to help. Reach out anytime.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-5">
                  <a
                    href="tel:4102609157"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-sky-light flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-sky" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium mb-0.5">
                        Call or Text
                      </p>
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-sky transition-colors">
                        (410) 260-9157
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@rcproperties.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-sky-light flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-sky" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium mb-0.5">
                        Email Us
                      </p>
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-sky transition-colors">
                        info@rcproperties.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-sky-light flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-sky" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium mb-0.5">
                        Location
                      </p>
                      <p className="text-sm font-semibold text-gray-900">
                        Charlotte, NC
                      </p>
                      <p className="text-xs text-gray-400">
                        We buy houses throughout Charlotte and surrounding areas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 mb-3">
                  Our Service Area
                </h3>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <Suspense fallback={<div className="text-sm text-gray-400">Loading form…</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
