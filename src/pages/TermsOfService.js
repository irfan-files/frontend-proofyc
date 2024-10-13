import React from "react";

const TermsOfService = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
      <p className="text-gray-700 mb-4">Effective Date: 13 October 2024</p>

      <p className="mb-4">
        Welcome to Creator Hub (“we,” “our,” or “us”). By using our website and
        services, you agree to comply with and be bound by these Terms of
        Service. Please read the following terms carefully. If you do not agree
        with these terms, you may not use our website.
      </p>

      <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing or using Creator Hub, you confirm that you understand,
        agree to, and accept all terms and conditions outlined in this document.
        These Terms of Service constitute a binding legal agreement between you
        and us.
      </p>

      <h2 className="text-2xl font-semibold mb-2">2. Eligibility</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          Be at least 18 years of age or have the consent of a legal guardian.
        </li>
        <li>Have a valid Google account.</li>
        <li>
          Be the rightful owner or have authorized control of the YouTube
          channel that you verify through our platform.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">3. Account Verification</h2>
      <p className="mb-4">
        <strong>Google Login:</strong> Our service uses Google’s OAuth protocol
        to allow you to log in securely using your Google account. By logging in
        through Google, you confirm that you are the authorized owner of the
        account and that the information provided is accurate and current.
      </p>
      <p className="mb-4">
        <strong>YouTube Channel Ownership Verification:</strong> After logging
        in with Google, we use YouTube API v3 to temporarily access your YouTube
        channel information. This is done to confirm that you own or have
        control over the channel. No personal information is stored, collected,
        or shared beyond this verification process.
      </p>

      <h2 className="text-2xl font-semibold mb-2">4. User Responsibilities</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Accurate Information:</strong> You are responsible for
          providing accurate, current, and complete information during the
          Google login and verification process.
        </li>
        <li>
          <strong>Lawful Use:</strong> You agree to use our website only for
          lawful purposes. You may not use the service for any illegal activity,
          including, but not limited to, impersonation, fraud, or
          misrepresentation of YouTube channel ownership.
        </li>
        <li>
          <strong>Compliance with Third-Party Terms:</strong> You agree to
          comply with the terms and policies of third-party services used within
          our platform, including Google and YouTube. For details on Google’s
          terms, visit{" "}
          <a href="https://policies.google.com/terms" className="text-blue-600">
            Google Terms of Service
          </a>
          .
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">5. Prohibited Conduct</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          Unauthorized Access: You may not attempt to gain unauthorized access
          to any part of our service, including circumventing the login or
          verification processes.
        </li>
        <li>
          Data Manipulation: You may not attempt to alter or falsify YouTube
          channel information during the verification process.
        </li>
        <li>
          Abuse of Service: You may not use our service to harm, disable, or
          disrupt the operations of our website or any third-party services we
          rely on.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">6. Service Availability</h2>
      <p className="mb-4">
        We strive to keep our website and services running smoothly, but we
        cannot guarantee 100% uptime. We may suspend or discontinue the service
        at any time without prior notice for maintenance or other reasons.
      </p>
      <p className="mb-4">
        <strong>Modification of Services:</strong> We reserve the right to
        modify, update, or discontinue any aspect of our services without prior
        notice. This may include changing or removing features, implementing new
        features, or limiting the availability of the service.
      </p>

      <h2 className="text-2xl font-semibold mb-2">7. Privacy and Data Use</h2>
      <p className="mb-4">
        We value your privacy. Please refer to our{" "}
        <a href="/privacy-policy" className="text-blue-600">
          Privacy Policy
        </a>{" "}
        to understand how we handle your information. In summary:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>We do not collect, store, or share any personal information.</li>
        <li>
          Google login is used solely for verifying ownership of your YouTube
          channel.
        </li>
        <li>
          We do not retain any data after the verification process is complete.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">8. Third-Party Services</h2>
      <p className="mb-4">
        We rely on third-party services such as Google and YouTube to provide
        essential features of our platform:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Google Sign-In:</strong> By logging in with your Google
          account, you agree to Google’s terms of service and privacy policies.
          We are not responsible for the practices or policies of Google.
        </li>
        <li>
          <strong>YouTube API v3:</strong> We use YouTube’s API to verify your
          ownership of a YouTube channel. You are responsible for ensuring that
          your use of our service complies with YouTube’s terms and conditions.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">
        9. Limitation of Liability
      </h2>
      <p className="mb-4">
        To the maximum extent permitted by law, Creator Hub and its affiliates,
        partners, and employees will not be liable for any direct, indirect,
        incidental, consequential, or punitive damages arising out of or related
        to your use of the service.
      </p>
      <p className="mb-4">
        This includes, but is not limited to, any damages resulting from:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Unauthorized access to or alteration of your data.</li>
        <li>
          Any issues with third-party services (e.g., Google or YouTube) used in
          conjunction with our platform.
        </li>
        <li>Any downtime or unavailability of our service.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">
        10. Disclaimer of Warranties
      </h2>
      <p className="mb-4">
        Our service is provided on an “as-is” and “as-available” basis. We make
        no warranties, express or implied, regarding the functionality,
        reliability, or availability of the service. We do not guarantee that:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>The service will meet your specific requirements.</li>
        <li>The service will be uninterrupted or error-free.</li>
        <li>
          The verification process will always successfully confirm ownership.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">11. Indemnification</h2>
      <p className="mb-4">
        You agree to indemnify and hold Creator Hub harmless from any claims,
        damages, losses, liabilities, and expenses arising out of or related to
        your use of the service, including any claims related to a breach of
        these Terms of Service.
      </p>

      <h2 className="text-2xl font-semibold mb-2">12. Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate your access to the service
        at any time if we believe that you have violated these Terms of Service
        or engaged in prohibited conduct.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        13. Changes to These Terms
      </h2>
      <p className="mb-4">
        We may update or revise these Terms of Service at any time without prior
        notice. The updated terms will be posted on our website with a revised
        “Effective Date.” By continuing to use the service after changes are
        made, you agree to be bound by the updated terms.
      </p>

      <h2 className="text-2xl font-semibold mb-2">14. Governing Law</h2>
      <p className="mb-4">
        These Terms of Service are governed by and construed in accordance with
        the laws of Indonesia, without regard to its conflict of law principles.
      </p>

      <h2 className="text-2xl font-semibold mb-2">15. Contact Information</h2>
      <p className="mb-4">
        If you have any questions or concerns regarding these Terms of Service,
        please contact us at akbarwijayaok@gmail.com.
      </p>
    </div>
  );
};

export default TermsOfService;
