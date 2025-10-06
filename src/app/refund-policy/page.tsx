
export default function RefundPolicyPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Refund Policy
          </h1>
          <p className="text-muted-foreground">
            Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <p>
            At Monica`s Nature, we are committed to crafting unique and personalized travel experiences. Our refund policy is designed to be fair and transparent, acknowledging the extensive planning and pre-booking required to create your custom itinerary.
          </p>

          <h2 className="text-2xl font-bold mt-8">1. Itinerary Planning Fee</h2>
          <p>
            Our process begins with a non-refundable Itinerary Planning Fee. This fee covers the initial consultation, research, and the expert time required to design your bespoke travel proposal. This fee is separate from the total trip cost and is not refundable under any circumstances.
          </p>

          <h2 className="text-2xl font-bold mt-8">2. Cancellations by the Client</h2>
          <p>
            If you need to cancel your trip after booking, you must notify us in writing via email. The following cancellation charges will apply, calculated from the date we receive your written notification:
          </p>
          <ul>
            <li><strong>90 days or more before departure:</strong> 75% of the total trip cost will be refunded, excluding non-refundable costs incurred (e.g., specific flights, permits, or non-refundable hotel deposits).</li>
            <li><strong>60-89 days before departure:</strong> 50% of the total trip cost will be refunded, excluding non-refundable costs.</li>
            <li><strong>30-59 days before departure:</strong> 25% of the total trip cost will be refunded, excluding non-refundable costs.</li>
            <li><strong>Less than 30 days before departure:</strong> No refund will be provided.</li>
          </ul>
          <p>
            We strongly recommend purchasing comprehensive travel insurance to cover potential cancellation fees and unforeseen events.
          </p>
          
          <h2 className="text-2xl font-bold mt-8">3. Third-Party Services</h2>
          <p>
            Our itineraries include services provided by third parties such as airlines, hotels, and local tour operators. Their individual refund and cancellation policies will apply to their portion of your trip cost. We will facilitate communication but cannot override their policies. We will make you aware of any significant non-refundable components during the booking process.
          </p>

          <h2 className="text-2xl font-bold mt-8">4. Cancellations by Monica`s Nature</h2>
          <p>
            In the unlikely event that we need to cancel your trip for reasons within our control, you will be entitled to a full refund of all payments made to us. If a trip is canceled due to a force majeure event (e.g., natural disaster, political instability, pandemic), we will work with you to reschedule your trip or provide a refund of recoverable costs from our suppliers.
          </p>

          <h2 className="text-2xl font-bold mt-8">5. Unused Services</h2>
          <p>
            No refunds will be provided for any unused portion of your trip, including accommodations, activities, or transportation, if you decide to alter your itinerary after departure.
          </p>

          <h2 className="text-2xl font-bold mt-8">Contact Us</h2>
          <p>
            If you have any questions about our Refund Policy, please contact us at <a href="mailto:legal@monicasnature.com">legal@monicasnature.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
