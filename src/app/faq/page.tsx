
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    category: 'General Questions',
    questions: [
      {
        q: 'What makes Monica`s Nature different from other travel companies?',
        a: 'We specialize in creating 100% custom itineraries focused on nature and adventure. Unlike pre-packaged tours, every trip is designed from scratch to match your unique interests, budget, and travel style. We combine expert knowledge with a passion for sustainable travel to create unforgettable experiences.',
      },
      {
        q: 'What kind of destinations do you offer?',
        a: 'We cover all seven continents, with a special focus on destinations rich in natural beauty, wildlife, and unique landscapes. From the glaciers of Antarctica to the rainforests of the Amazon and the savannahs of Africa, we can take you there.',
      },
      {
        q: 'Is Monica`s Nature suitable for solo travelers?',
        a: 'Absolutely! We design trips for all types of travelers, including solo adventurers. We can tailor itineraries to ensure your safety, comfort, and enjoyment, whether you want to join a small group expedition or embark on a fully independent journey.',
      },
    ],
  },
  {
    category: 'Trip Planning',
    questions: [
      {
        q: 'How does the itinerary planning process work?',
        a: 'Our process is simple: 1) You fill out our online form with your travel preferences. 2) We assign a personal travel consultant who sends you a proposal and quote within 24 hours. 3) We work with you to refine the itinerary until it’s perfect. 4) Once confirmed, we provide you with a complete travel package, including booking links, guides, and tips.',
      },
      {
        q: 'How far in advance should I book my trip?',
        a: 'For custom itineraries, we recommend booking at least 3-6 months in advance, especially for popular destinations or during peak season. For complex trips like polar expeditions, 9-12 months is ideal to ensure availability.',
      },
      {
        q: 'Can I make changes to my itinerary after it’s been planned?',
        a: 'Yes, flexibility is a key part of our service. We allow for a review process where you can request changes to the draft itinerary. We`ll work with you to make adjustments to activities, accommodations, or pacing to ensure the plan is exactly what you want.',
      },
    ],
  },
  {
    category: 'Luggage & Packing',
    questions: [
      {
        q: 'What should I pack for my trip?',
        a: 'Your final travel package will include a detailed, weather-appropriate packing list tailored to your specific destination and activities. As a general rule, we recommend packing layers, comfortable walking shoes, and any personal essentials.',
      },
      {
        q: 'Are there luggage restrictions I should be aware of?',
        a: 'Luggage restrictions depend on the airlines and types of transport used during your trip (e.g., small charter flights, safari vehicles). We will clearly outline all relevant luggage weight and size limits in your itinerary.',
      },
    ],
  },
  {
    category: 'Money & Payments',
    questions: [
      {
        q: 'What is included in the price of the trip?',
        a: 'Our proposals provide a clear, detailed breakdown of what is included and excluded. Typically, the price includes accommodations, planned activities, and specified transport. International flights are often excluded unless requested.',
      },
      {
        q: 'What are the payment options?',
        a: 'We accept major credit cards and bank transfers. Our payment process is typically divided into a deposit to confirm the booking and a final balance payment due closer to your departure date. All details will be outlined in your proposal.',
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Have questions? We’ve got answers. Here are some of the most common
            inquiries we receive from our travelers.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          {faqData.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-primary sm:text-3xl">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq) => (
                  <AccordionItem key={faq.q} value={faq.q}>
                    <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 text-base text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
