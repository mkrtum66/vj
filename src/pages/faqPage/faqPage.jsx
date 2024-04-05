import React from 'react';
import './faqPage.scss';

import { Container } from 'react-bootstrap';

const FaqPage = () => {
  return (
    <div className="faqPage page-wrapper">
      <Container>
        <h2>Frequently Asked Questions (FAQ)</h2>
        <p>Last Updated: 09/06/2023</p>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">1. What services do you offer?</p>
          <p>
            VJ GLASS & MOLDINGS INC. provides a range of glass services, including installations,
            repairs, replacements, consultations, and custom glass solutions. Whether you need a new
            glass fixture or repairs to an existing one, we have you covered.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">
            2. How can I request a free estimate?
          </p>
          <p>
            Requesting a free estimate is easy! You can contact us directly through phone or email
            to schedule an appointment.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">
            3. Is the estimate truly free, and am I obligated to proceed with the services?
          </p>
          <p>
            Yes, our estimates are completely free, and there is no obligation to proceed with our
            services. We believe in transparency, and the estimate is provided to help you make an
            informed decision about your glass project.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">
            4. How are your service quotes determined?
          </p>
          <p>
            Our service quotes are based on a thorough assessment of your project's requirements.
            Factors such as the type of glass, scope of work, and materials needed are considered.
            Any adjustments to the initial quote will be communicated and agreed upon before
            proceeding.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">
            5. Can I schedule a consultation to discuss my project in detail?
          </p>
          <p>
            Absolutely! We encourage you to schedule a consultation to discuss your project in
            detail. This allows us to understand your specific requirements, answer any questions
            you may have, and provide tailored solutions to meet your needs.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">6. What areas do you serve?</p>
          <p>
            We proudly serves in California. Contact us to inquire about services in your location.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">
            7. How long does it take to complete a glass installation or repair?
          </p>
          <p>
            The duration of a project depends on its complexity and scope. We provide estimated
            timelines during the consultation or after assessing your project. Rest assured, we
            strive for efficient and timely completion.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">
            8. Do you offer warranty on your services?
          </p>
          <p>
            Yes, we stand by the quality of our workmanship. Our services may come with a warranty,
            and specific details will be provided in the service agreement. Feel free to ask about
            warranty terms during the consultation.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">
            9. What types of glass do you work with?
          </p>
          <p>
            We work with a variety of glass types, including clear glass, tempered glass, laminated
            glass, and custom-designed glass. Our experts can guide you in choosing the right type
            for your specific needs.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">
            10. How do I get in touch with VJ GLASS & MOLDINGS INC.?
          </p>
          <p>
            You can contact us via phone or email. Visit the "Contact Us" page for detailed contact
            information.
          </p>
        </div>
        <div className="my-5">
          <p>
            Have more questions? Feel free to reach out to us! We are here to assist you with all
            your glass-related inquiries and projects.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default FaqPage;
