import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-700 mb-4">Effective Date: 13 October 2024</p>
      <p className="mb-4">
        At Creator Hub, we respect and protect your privacy. This Privacy Policy
        outlines how we handle your information. Our website does not collect,
        store, or share any personal information from you. We use Google login
        solely for the purpose of verifying ownership of your YouTube channel,
        and no data is retained after this verification.
      </p>

      <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We do not collect or store any personal information from you at any
        point. Here’s how we handle data during the login and verification
        process:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Google Login Information: When you log in using your Google account,
          we request permission to access basic profile information (such as
          your Google user ID and email address) from Google solely to
          authenticate your identity.
        </li>
        <li>
          YouTube Channel Information: After you log in, we access your YouTube
          channel data via the YouTube API v3. This data is used temporarily to
          confirm that you are the rightful owner of the channel.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">
        2. How We Use Your Information
      </h2>
      <p className="mb-4">
        The information accessed during the login process is used for a single
        purpose: verifying ownership of your YouTube channel. Here’s how this
        works in detail:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Google Login for Authentication: When you choose to log in with your
          Google account, we direct you to Google’s OAuth system. OAuth is a
          secure protocol that allows us to verify your identity without storing
          your login credentials (e.g., your password). We do not have access to
          your password or other sensitive information.
        </li>
        <li>
          YouTube API for Channel Verification: After logging in, we temporarily
          retrieve public information from your YouTube channel (e.g., channel
          name, subscriber count, and channel ID) using the YouTube API v3. This
          information is used exclusively to verify that you are the legitimate
          owner of the channel. Once this verification is complete, the data is
          no longer retained or stored by us.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">
        3. Data Handling and Security
      </h2>
      <p className="mb-4">
        We prioritize your privacy and data security at every stage of the
        process:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          No Data Storage: We do not collect, store, or share any personal data
          from your Google account or YouTube channel. Once the verification
          process is complete, all the data accessed is discarded and is not
          retained on our systems.
        </li>
        <li>
          No Data Sharing: The information we access through Google and YouTube
          is not shared with any third parties or external services. The
          verification happens securely between our website and Google’s
          systems.
        </li>
        <li>
          Secure Authentication Process: The entire Google login process happens
          through a secure, encrypted connection using Google’s OAuth 2.0
          protocol. This ensures that your login information (such as passwords
          or tokens) is kept safe and secure.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">4. Third-Party Services</h2>
      <p className="mb-4">
        To ensure the highest level of security and functionality, we rely on
        the following third-party services:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Google Sign-In: We use Google’s OAuth service to allow you to log in
          securely. Google’s OAuth system ensures that we only access the
          necessary information for verifying your identity without storing
          sensitive data.
        </li>
        <li>
          YouTube API v3: We use YouTube’s API to retrieve publicly available
          information about your YouTube channel for the sole purpose of
          verifying ownership. We do not access or store any other personal
          information about your Google or YouTube account beyond what is
          required for this one-time verification.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">5. Security Measures</h2>
      <p className="mb-4">
        Although we do not store any data, we take security seriously:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          SSL Encryption: All data transmitted between your browser and Google’s
          servers during the login process is encrypted using Secure Socket
          Layer (SSL) technology. This ensures that your login information is
          protected during transmission.
        </li>
        <li>
          OAuth Security: OAuth 2.0, which is used by Google for the login
          process, is a robust authentication protocol that ensures your login
          credentials remain secure. We never see or store your password or
          sensitive account information.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">6. User Control Over Data</h2>
      <p className="mb-4">
        Since we do not collect or store any personal data, you maintain full
        control over your information. Here’s how:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          No Personal Data Storage: Your data remains with Google throughout the
          authentication process. We do not have access to your personal data
          after the verification is complete.
        </li>
        <li>
          Temporary Data Access: The YouTube channel data we retrieve is only
          accessed during the verification process and is discarded once the
          process is finished. We do not store any data on our servers.
        </li>
        <li>
          Transparency: The entire login process is transparent. You can view
          and manage what information Google shares during the OAuth login
          through your Google account settings.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">7. Your Privacy Rights</h2>
      <p className="mb-4">
        Since no data is collected or stored by us, you do not need to request
        access, rectification, or deletion of your data from us. You retain full
        control over your Google and YouTube account information through
        Google’s privacy controls.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        8. Changes to This Privacy Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or for legal and regulatory reasons. Any updates will
        be posted on this page with a revised "Effective Date." We encourage you
        to review this Privacy Policy regularly to stay informed about how we
        protect your privacy.
      </p>

      <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy or the way we handle
        your information, please feel free to contact us at [Insert Contact
        Information]. We are committed to maintaining transparency and
        protecting your privacy.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
