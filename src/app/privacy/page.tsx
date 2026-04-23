import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms of Use – RC Properties",
  description:
    "RC Properties privacy policy and terms of use. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative flex min-h-[300px] items-center overflow-hidden bg-rc-navy-dark py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-400">Last updated: May 10, 2024</p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="bg-white py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-sm sm:prose max-w-none text-gray-700 space-y-8">

            <p>
              RC Properties (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and
              is committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, and disclose information when
              you visit our website or submit a form or contact us.
            </p>

            <div>
              <h2 className="text-base font-bold text-gray-900 mb-2">
                1. Information We Collect
              </h2>
              <p>
                We collect information you provide directly to us, such as your
                name, email address, phone number, and property address when you
                fill out a form or contact us on our site. We may also
                automatically collect certain information about your device,
                browser, and usage patterns through cookies and similar
                technologies.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-gray-900 mb-2">
                2. How We Use Your Information
              </h2>
              <p>
                We use the information we collect to respond to your inquiries,
                provide offers, and communicate with you about our services. We
                will never sell your information.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-gray-900 mb-2">
                3. Information Sharing
              </h2>
              <p>
                We do not sell or share your personal information with third
                parties for their marketing purposes. We may share information
                with trusted service providers who help us operate our business,
                as required by law, or to protect our rights.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-gray-900 mb-2">
                4. Your Choices
              </h2>
              <p>
                You may request to access, update, or delete your information at
                any time by contacting us at{" "}
                <a
                  href="mailto:info@rcproperties.com"
                  className="text-sky hover:underline"
                >
                  info@rcproperties.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-gray-900 mb-2">
                5. Cookies
              </h2>
              <p>
                We use cookies to enhance your browsing experience. You can
                disable cookies in your browser settings at any time.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-gray-900 mb-2">
                6. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
                <a
                  href="mailto:info@rcproperties.com"
                  className="text-sky hover:underline"
                >
                  info@rcproperties.com
                </a>{" "}
                or (410) 260-9157.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* Terms of Use */}
      <section id="terms" className="bg-white py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
            Terms of Use
          </h1>
          <p className="text-sm text-gray-400 mb-8">Last updated: May 10, 2024</p>

          <div className="prose prose-sm sm:prose max-w-none text-gray-700 space-y-8">
            <p>
              By accessing or using the RC Properties website, you agree to
              be bound by these Terms of Use. If you do not agree, please do
              not use our site.
            </p>

            <div>
              <h2 className="text-base font-bold text-gray-900 mb-2">
                1. Use of Site
              </h2>
              <p>
                This website is provided for informational purposes only. You
                agree to use it only for lawful purposes and in a way that does
                not infringe on the rights of others.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-gray-900 mb-2">
                2. No Guarantees
              </h2>
              <p>
                Submitting your information does not guarantee an offer or the
                purchase of your property. All offers are subject to evaluation
                and are made at our discretion.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-gray-900 mb-2">
                3. Intellectual Property
              </h2>
              <p>
                All content on this site, including text, graphics, and logos,
                is the property of RC Properties and may not be reproduced
                without written permission.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-gray-900 mb-2">
                4. Limitation of Liability
              </h2>
              <p>
                RC Properties is not liable for any damages arising from your
                use of this website or reliance on any information provided
                herein.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-gray-900 mb-2">
                5. Changes to Terms
              </h2>
              <p>
                We reserve the right to update these Terms at any time. Continued
                use of the site after changes are posted constitutes your
                acceptance of the new terms.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-gray-900 mb-2">
                6. Governing Law
              </h2>
              <p>
                These Terms are governed by the laws of the State of North
                Carolina, without regard to its conflict of law provisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
