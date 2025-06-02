import React from "react";

const Terms = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 py-10 px-4 flex flex-col items-center">
      <div className="max-w-5xl w-full bg-white/90 rounded-3xl shadow-2xl p-8 md:p-12 animate-fade-in-up">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-2 text-center tracking-tight">
          Terms of Service
        </h1>
        <p className="text-gray-600 text-base mb-6 text-center">
          Last updated: June 2025
        </p>
        <div className="prose prose-blue max-w-none text-gray-700 font-serif">
          <h2 className="font-bold mt-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using this website, you agree to be bound by these
            Terms of Service and all applicable laws and regulations. If you do
            not agree with any part of these terms, you may not use our
            services.
          </p>
          <h2 className="font-bold mt-4">2. Use of the Website</h2>
          <ul class="list-disc pl-6 mb-5">
            <li>You must be at least 13 years old to use this website.</li>
            <li>
              You agree not to misuse the website or help anyone else do so.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account information.
            </li>
          </ul>
          <h2 className="font-bold mt-4">3. Intellectual Property</h2>
          <p>
            All content, trademarks, logos, and intellectual property on this
            website are the property of their respective owners. You may not
            copy, reproduce, or distribute any content without permission.
          </p>
          <h2 className="font-bold mt-4">4. User Content</h2>
          <ul class="list-disc pl-6 mb-5">
            <li>
              You retain ownership of any content you submit, but grant us a
              license to use, display, and distribute it as part of the website.
            </li>
            <li>
              You are responsible for the legality and appropriateness of your
              content.
            </li>
          </ul>
          <h2 className="font-bold mt-4">5. Prohibited Activities</h2>
          <ul class="list-disc pl-6 mb-5">
            <li>Do not upload malicious code, spam, or offensive content.</li>
            <li>
              Do not attempt to gain unauthorized access to the website or its
              users’ data.
            </li>
            <li>Do not violate any applicable laws or regulations.</li>
          </ul>
          <h2 className="font-bold mt-4">6. Disclaimer</h2>
          <p>
            This website is provided "as is" without warranties of any kind. We
            do not guarantee the accuracy, completeness, or reliability of any
            content.
          </p>
          <h2 className="font-bold mt-4">7. Limitation of Liability</h2>
          <p>
            We are not liable for any damages arising from your use of the
            website, including but not limited to direct, indirect, incidental,
            or consequential damages.
          </p>
          <h2 className="font-bold mt-4">8. Changes to Terms</h2>
          <p>
            We may update these Terms of Service at any time. Changes will be
            posted on this page with an updated date. Continued use of the
            website means you accept the new terms.
          </p>
          <h2 className="font-bold mt-4">9. Contact</h2>
          <p>
            If you have any questions about these Terms of Service, please
            contact us at{" "}
            <a href="mailto:your@email.com" className="text-blue-700 underline">
              your@email.com
            </a>
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

export default Terms;
