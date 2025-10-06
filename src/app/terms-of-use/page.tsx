
export default function TermsOfUsePage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Terms of Use
          </h1>
          <p className="text-muted-foreground">
            Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <p>
            Welcome to Monica`s Nature. These Terms of Use (&quot;Terms&quot;) govern your access to and use of our website and services. By using our website, you agree to be bound by these Terms.
          </p>

          <h2 className="text-2xl font-bold mt-8">1. Our Services</h2>
          <p>
            Monica`s Nature provides personalized travel planning services. We act as an intermediary to help you book accommodations, tours, flights, and other travel services. We are not a direct provider of these services.
          </p>

          <h2 className="text-2xl font-bold mt-8">2. User Responsibilities</h2>
          <p>
            By using our services, you agree to:
          </p>
          <ul>
            <li>Provide accurate and complete information during the planning process.</li>
            <li>Ensure you have valid passports, visas, and any required health documentation for your travel.</li>
            <li>Purchase comprehensive travel insurance, which we strongly recommend for all trips.</li>
            <li>Abide by the laws and customs of the destinations you visit.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">3. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and the custom itineraries we create, is the property of Monica`s Nature and is protected by copyright laws. Your custom itinerary is for your personal use only and may not be shared, sold, or reproduced without our written consent.
          </p>

          <h2 className="text-2xl font-bold mt-8">4. Limitation of Liability</h2>
          <p>
            Monica`s Nature is not liable for any injury, loss, damage, delay, or expense arising from the acts or omissions of third-party suppliers such as airlines, hotels, or tour operators. We are not responsible for events beyond our control, including but not limited to natural disasters, political unrest, or travel restrictions (force majeure). Our maximum liability for any claim arising from our services is limited to the amount paid to us for the service in question.
          </p>
          
          <h2 className="text-2xl font-bold mt-8">5. Links to Third-Party Sites</h2>
          <p>
            Our website and itineraries may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of these websites and are not responsible for their content or privacy practices.
          </p>

          <h2 className="text-2xl font-bold mt-8">6. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is based, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-bold mt-8">7. Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will post the revised Terms on this page with an updated effective date. Your continued use of our services after any such changes constitutes your acceptance of the new Terms.
          </p>

          <h2 className="text-2xl font-bold mt-8">Contact Us</h2>
          <p>
            If you have any questions about these Terms of Use, please contact us at <a href="mailto:legal@monicasnature.com">legal@monicasnature.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
