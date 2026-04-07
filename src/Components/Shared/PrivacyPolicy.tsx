import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 py-10 px-4 flex flex-col items-center">
      <div className="max-w-5xl w-full bg-white/90 rounded-3xl shadow-2xl p-8 md:p-12 animate-fade-in-up">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-2 text-center tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-base mb-6 text-center">
          Last updated: June 2025
        </p>
        <div className="prose prose-blue max-w-none text-gray-700 font-serif">
          <div className="mb-4">
            <h2 className="font-bold">1. Introduction</h2>
            <p>
              We value your privacy and are committed to protecting your
              personal information. This Privacy Policy explains how we collect,
              use, and safeguard your data when you use our website.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="font-bold">2. Information We Collect</h2>
            <ul className="list-disc pl-6 mb-5">
              <li>
                <strong>Personal Information:</strong> Such as your name, email
                address, or contact details when you fill out forms or interact
                with our services.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our
                website, including IP address, browser type, and pages visited.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="font-bold">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-5">
              <li>To provide and maintain our services</li>
              <li>To improve user experience</li>
              <li>To communicate with you about updates or offers</li>
              <li>To ensure security and prevent fraud</li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="font-bold">4. Cookies</h2>
            <p>
              We may use cookies and similar tracking technologies to enhance
              your browsing experience. You can control cookies through your
              browser settings.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="font-bold">5. Third-Party Services</h2>
            <p>
              We may use third-party services (such as analytics tools) that
              collect, monitor, and analyze usage data. These providers have
              their own privacy policies.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="font-bold">6. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your
              information. However, no method of transmission over the Internet
              is 100% secure.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="font-bold">7. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal
              information. Contact us if you wish to exercise these rights.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="font-bold">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated date.
            </p>
          </div>
          <h2 className="font-bold">9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <Link
              href="mailto:nurulazam.dev@gmail.com"
              className="text-blue-700 underline"
            >
              nurulazam.dev@gmail.com
            </Link>
            .
          </p>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s both;
        }
      `}</style>
    </section>
  );
};

export default PrivacyPolicy;
