// src/pages/PrivacyPolicy.js

import React from "react";

function PrivacyPolicy() {
  return (
    <div className="privacy-policy container mx-auto p-8 text-gray-800 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-indigo-600">
        Privacy Policy
      </h1>

      <p className="mb-8 text-lg leading-relaxed">
        This Privacy Policy describes how we handle your personal information
        for our services. By using our services, you consent to our collection,
        use, disclosure, and retention of your personal information as described
        in this Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mb-4 hover:text-indigo-500 transition-colors duration-300">
        Information We Collect
      </h2>
      <p className="mb-6">
        We collect the following types of information from you:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li className="hover:underline transition-all duration-300">
          Personal Identification Information (name, email address, phone
          number, etc.)
        </li>
        <li className="hover:underline transition-all duration-300">
          Usage Data (browser type, IP address, pages you visit, etc.)
        </li>
        <li className="hover:underline transition-all duration-300">
          Cookies and tracking technologies
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 hover:text-indigo-500 transition-colors duration-300">
        How We Use Your Information
      </h2>
      <p className="mb-6">We may use the information we collect from you to:</p>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li className="hover:underline transition-all duration-300">
          Provide, maintain, and improve our services
        </li>
        <li className="hover:underline transition-all duration-300">
          Personalize your experience
        </li>
        <li className="hover:underline transition-all duration-300">
          Communicate with you
        </li>
        <li className="hover:underline transition-all duration-300">
          Monitor usage and analyze trends
        </li>
        <li className="hover:underline transition-all duration-300">
          Comply with legal obligations
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 hover:text-indigo-500 transition-colors duration-300">
        How We Share Your Information
      </h2>
      <p className="mb-6">
        We do not sell or rent your personal information to third parties for
        their marketing purposes without your explicit consent. We may share
        your information with:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li className="hover:underline transition-all duration-300">
          Service providers who assist us in running our services
        </li>
        <li className="hover:underline transition-all duration-300">
          Authorities, if required by law or necessary to protect our rights
        </li>
        <li className="hover:underline transition-all duration-300">
          Third-party platforms for authentication and login purposes (e.g.,
          OAuth)
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 hover:text-indigo-500 transition-colors duration-300">
        Your Data Protection Rights
      </h2>
      <p className="mb-6">You have the right to:</p>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li className="hover:underline transition-all duration-300">
          Access, correct, or delete your personal data
        </li>
        <li className="hover:underline transition-all duration-300">
          Withdraw consent for data processing
        </li>
        <li className="hover:underline transition-all duration-300">
          File a complaint with a data protection authority
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 hover:text-indigo-500 transition-colors duration-300">
        Cookies
      </h2>
      <p className="mb-6">
        Our website uses cookies to enhance your experience. You can control the
        use of cookies through your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mb-4 hover:text-indigo-500 transition-colors duration-300">
        Changes to This Policy
      </h2>
      <p className="mb-6">
        We may update this Privacy Policy from time to time. When we do, we will
        notify you by updating the date at the top of this page.
      </p>

      <h2 className="text-2xl font-semibold mb-4 hover:text-indigo-500 transition-colors duration-300">
        Contact Us
      </h2>
      <p className="mb-6">
        If you have any questions about this Privacy Policy, please contact us
        at: 
        <strong className="text-indigo-600">akbarwijayaok@gmail.com</strong>
        <strong className="text-indigo-600">irfanimogiri@gmail.com</strong>
      </p>

      <div className="text-center mt-8">
        <a
          href="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
