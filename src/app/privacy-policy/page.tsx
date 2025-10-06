
export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <p>
            Monica`s Nature ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
          </p>

          <h2 className="text-2xl font-bold mt-8">1. Information We Collect</h2>
          <p>
            We may collect personal information that you provide directly to us through the itinerary planning form, contact forms, or email communications. This information may include:
          </p>
          <ul>
            <li><strong>Personal Identifiers:</strong> Name, email address, phone number, country of residence.</li>
            <li><strong>Travel Information:</strong> Destinations, travel dates, companion details, travel preferences, interests, and budget.</li>
            <li><strong>Communications:</strong> Any correspondence you send to us.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Design, plan, and book your personalized travel itinerary.</li>
            <li>Communicate with you about your travel plans and our services.</li>
            <li>Process payments and manage your booking.</li>
            <li>Improve our website and services.</li>
            <li>Comply with legal obligations.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">3. Sharing Your Information</h2>
          <p>
            We do not sell your personal information. We may share your information with third parties only in the following situations:
          </p>
          <ul>
            <li><strong>Service Providers:</strong> With hotels, airlines, tour operators, and other partners necessary to book and fulfill your travel arrangements.</li>
            <li><strong>Legal Requirements:</strong> If required by law, such as to comply with a subpoena or other legal process.</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8">4. Data Security</h2>
          <p>
            We implement administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
          </p>

          <h2 className="text-2xl font-bold mt-8">5. Your Data Rights (GDPR)</h2>
          <p>
            If you are a resident of the European Economic Area (EEA), you have certain data protection rights. We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data. Your rights include:
          </p>
          <ul>
            <li>The right to access, update or delete the information we have on you.</li>
            <li>The right of rectification.</li>
            <li>The right to object.</li>
            <li>The right of restriction.</li>
            <li>The right to data portability.</li>
            <li>The right to withdraw consent.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">6. Cookies</h2>
          <p>
            Our website may use cookies to enhance your experience. Cookies are small data files stored on your browser. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
          </p>

          <h2 className="text-2xl font-bold mt-8">7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>

          <h2 className="text-2xl font-bold mt-8">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:legal@monicasnature.com">legal@monicasnature.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
