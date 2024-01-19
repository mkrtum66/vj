import React from 'react';
import './privacyPolicyPage.scss';

import { Container } from 'react-bootstrap';

const PrivacyPolicyPage = () => {
  return (
    <div className="privacyPolicyPage page-wrapper">
      <Container>
        <h2>Privacy Policy</h2>
        <p>Last Updated: 09/06/2023</p>
        <p>
          At <span className="fw-bold">VJ GLASS & MOLDINGS</span>, we are committed to ensuring the
          privacy and security of your personal information. This Privacy Policy outlines how we
          collect, use, disclose, and safeguard your data when you visit our website or engage with
          our glass services.
        </p>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">1. Information We Collect:</p>
          <p>
            <span className="fw-bold">a. Personal Information:</span>When you request our services
            or interact with our website, we may collect personal information such as your name,
            contact details, and address.
          </p>
          <p>
            <span className="fw-bold">b. Non-Personal Information:</span>We may gather non-personal
            information, including but not limited to browser details, IP addresses, and device
            information, to enhance your browsing experience.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">2. How We Use Your Information:</p>
          <p>
            <span className="fw-bold">a. Service Delivery:</span>Your personal information is used
            to provide the glass services you have requested, including estimates, measurements,
            installations, and customer support.
          </p>
          <p>
            <span className="fw-bold">b. Communication:</span>We may use your contact information to
            communicate with you about your project, respond to inquiries, and provide updates
            related to our services.
          </p>
          <p>
            <span className="fw-bold">c. Improving User Experience:</span>Non-personal information
            helps us analyze website usage patterns, allowing us to enhance our website, services,
            and user experience.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">3. Information Sharing:</p>
          <p>
            <span className="fw-bold">a. Third-Party Service Providers:</span>We may share necessary
            information with trusted third-party service providers involved in delivering our
            services, such as contractors and delivery services.
          </p>
          <p>
            <span className="fw-bold">b. Legal Compliance:</span>We may disclose your information to
            comply with legal obligations, enforce our policies, or respond to lawful requests from
            authorities.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">4. Security Measures:</p>
          <p>
            We employ industry-standard security measures to protect your information from
            unauthorized access, disclosure, alteration, or destruction.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">5. Cookies and Tracking:</p>
          <p>
            Our website may use cookies and similar tracking technologies to enhance user
            experience. You can modify your browser settings to control cookie preferences.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">6. Your Choices:</p>
          <p>
            You have the right to review, update, or delete your personal information. Contact us if
            you wish to exercise these rights.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">7. Changes to Privacy Policy:</p>
          <p>
            We reserve the right to update our Privacy Policy. Any changes will be reflected on this
            page, and we recommend checking periodically for updates.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">8. Contact Us:</p>
          <p>
            If you have any questions or concerns regarding our Privacy Policy, please contact us at
            <a href="mailto:vjglassmirrors@yahoo.com">
              <span> vjglassmirrors@yahoo.com</span>
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicyPage;
