import Layout from "../components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="mb-4 text-sm text-gray-500">
          Effective Date: June 24, 2025
        </p>
        <p className="mb-8 text-sm text-gray-500">
          Last Updated: June 24, 2025
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            1. Information We Collect
          </h2>
          <p className="mb-2">
            We collect personal information like your name, email, and messages
            you submit. We also collect non-personal data such as your IP
            address, browser type, and the pages you visit on our site.
          </p>
          <p>
            We may use cookies to enhance your experience. You can disable them
            in your browser settings.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To operate and maintain our blog</li>
            <li>To respond to your comments or queries</li>
            <li>To send newsletters (if you subscribed)</li>
            <li>To improve our content and design</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            3. Sharing of Information
          </h2>
          <p>
            We do not sell or trade your personal information. We may share
            aggregated analytics data or comply with legal obligations when
            necessary.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            4. Your Rights & Choices
          </h2>
          <p>
            You may request access, correction, or deletion of your personal
            data. To do so, please contact us at{" "}
            <a
              href="mailto:support@inspireblog.com"
              className="text-blue-600 underline"
            >
              support@inspireblog.com
            </a>
            .
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Third-Party Links</h2>
          <p>
            We may link to external sites. We are not responsible for their
            content or privacy practices. Please review their policies.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Security</h2>
          <p>
            We use reasonable measures to protect your data but cannot guarantee
            complete security for internet-based services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">7. Children’s Privacy</h2>
          <p>
            This blog is not intended for children under 13. We do not knowingly
            collect information from children.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">8. Policy Updates</h2>
          <p>
            We may update this Privacy Policy at any time. Changes will be
            posted here with an updated effective date.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
          <p>
            Have questions? Contact us at{" "}
            <a
              href="mailto:support@inspireblog.com"
              className="text-blue-600 underline"
            >
              support@inspireblog.com
            </a>
            .
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
