import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms of Services - RC Properties",
  description:
    "RC Properties privacy policy and terms of services for website visitors and SMS communications.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative flex min-h-[300px] items-center overflow-hidden bg-rc-navy-dark py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-2 text-3xl font-extrabold text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-400">Last updated: April 28, 2026</p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-gray-700">
            <p>
              680 South Marketing Group, LLC DBA RC Properties,
              (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;) respects your privacy and is committed to
              protecting it through this Privacy Policy. This policy explains
              how we collect, use, disclose, and safeguard your information when
              you visit https://www.rcpropertiesnc.com/ or engage with our
              services, including SMS communications.
            </p>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900">
                1. Information We Collect
              </h2>
              <p>We may collect the following information:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Personal Information: Name, email address, phone number,
                  mailing address.
                </li>
                <li>
                  Mobile Information: Phone number provided for SMS
                  communications.
                </li>
                <li>
                  Usage Data: IP address, browser type, pages visited, time
                  spent on pages.
                </li>
                <li>Cookies &amp; Tracking Data: See Section 6 below.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900">
                2. How We Use Your Information
              </h2>
              <p>We use your information to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Provide and manage our services</li>
                <li>Communicate with you regarding your account or inquiries</li>
                <li>Send SMS messages you have opted into</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900">
                3. SMS Communications &amp; Consent
              </h2>
              <p>
                By providing your mobile phone number and opting in, you
                expressly consent to receive automated and non-automated SMS
                messages from 680 South Marketing Group, LLC DBA RC Properties,
                including but not limited to:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Customer support messages</li>
                <li>Service updates and notifications</li>
                <li>Appointment reminders</li>
                <li>Promotional and marketing messages</li>
              </ul>
              <p className="mt-3">Message Frequency: May vary.</p>
              <p>Message &amp; Data Rates: Standard message and data rates may apply.</p>
              <p>
                Opt-Out: You may opt out at any time by replying STOP to any
                message. Reply HELP for assistance.
              </p>
              <p>
                Consent Not Required for Purchase: Your consent to receive SMS
                messages is not a condition of purchasing any goods or services.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900">
                4. Sharing of Information
              </h2>
              <p>
                We do not sell or rent your personal information. We may share
                information with:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Service providers assisting us in operating our business</li>
                <li>Legal authorities if required by law</li>
              </ul>
              <p className="mt-3">
                No mobile information will be shared with third
                parties/affiliates for marketing/promotional purposes. All other
                categories exclude text messaging originator opt-in data and
                consent; this information will not be shared with any third
                parties.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900">
                5. Data Security
              </h2>
              <p>
                We implement reasonable administrative, technical, and physical
                safeguards designed to protect your information. However, no
                method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900">
                6. Cookies &amp; Tracking Technologies
              </h2>
              <p>We use cookies and similar tracking technologies to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Analyze website traffic and usage</li>
                <li>Improve user experience</li>
                <li>Understand user behavior</li>
              </ul>
              <p className="mt-3">
                You may control cookie settings through your browser
                preferences. Disabling cookies may affect website functionality.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900">
                7. Your Rights &amp; Choices
              </h2>
              <p>You have the right to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Access, correct, or delete your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw SMS consent at any time by replying STOP</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, contact us using the information
                below.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900">
                8. Children&apos;s Privacy
              </h2>
              <p>
                Our services are not intended for individuals under the age of
                18. We do not knowingly collect information from minors.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900">
                9. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or our SMS
                practices, contact us at:
              </p>
              <p className="mt-3">
                Email:{" "}
                <a
                  href="mailto:info@rcproperties.com"
                  className="font-semibold text-sky hover:underline"
                >
                  info@rcproperties.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-100" />

      <section id="terms" className="bg-white py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Terms of Services
          </h1>
          <p className="mb-8 text-sm text-gray-400">
            Last updated: April 28, 2026
          </p>

          <div className="space-y-8 text-gray-700">
            <p>
              By accessing or using our website and services, including SMS
              communications, you agree to these Terms of Use.
            </p>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900">
                1. SMS Program Description
              </h2>
              <p>
                680 South Marketing Group, LLC DBA RC Properties, offers SMS
                messaging programs that may include:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Account notifications</li>
                <li>Customer support communications</li>
                <li>Appointment reminders</li>
                <li>Promotional offers and updates where consent is provided</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900">
                2. Opt-In &amp; Opt-Out
              </h2>
              <p>
                By opting into our SMS program, you agree to receive text
                messages as described above.
              </p>
              <p className="mt-3">Opt-Out: Reply STOP at any time to unsubscribe.</p>
              <p>
                Help: Reply HELP or contact:{" "}
                <a
                  href="mailto:info@rcproperties.com"
                  className="font-semibold text-sky hover:underline"
                >
                  info@rcproperties.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900">
                3. Message Frequency &amp; Costs
              </h2>
              <p>
                Message frequency may vary. Message and data rates may apply
                depending on your carrier plan.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900">
                4. Carrier Disclaimer
              </h2>
              <p>Wireless carriers are not liable for delayed or undelivered messages.</p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900">
                5. Eligibility (18+)
              </h2>
              <p>You must be at least 18 years old to participate in our SMS programs.</p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900">
                6. Customer Support
              </h2>
              <p>For SMS-related support, contact:</p>
              <p className="mt-3">
                Email:{" "}
                <a
                  href="mailto:info@rcproperties.com"
                  className="font-semibold text-sky hover:underline"
                >
                  info@rcproperties.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900">
                7. Privacy Policy
              </h2>
              <p>
                Your participation in our SMS program is subject to our Privacy
                Policy. By opting in, you agree to the collection and use of
                information as described therein.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900">
                8. Modifications
              </h2>
              <p>
                We reserve the right to modify these Terms at any time.
                Continued use of the services constitutes acceptance of updated
                Terms.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900">
                9. Governing Law
              </h2>
              <p>These Terms are governed by the laws of the United States.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
