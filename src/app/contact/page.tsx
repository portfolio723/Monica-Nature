
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Thank you! Your message has been sent.');
    // Here you would typically handle form submission, e.g., send an email or post to an API
  };

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            We&apos;d love to hear from you! Whether you have a question about our trips, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-6">
                Fill up the form and our team will get back to you within 24 hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <span className="text-lg">hello@monicasnature.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <span className="text-lg">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg">123 Nature Lane, Adventure City, World</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1">First Name</label>
                  <Input id="firstName" name="firstName" type="text" placeholder="Your first name" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1">Last Name</label>
                  <Input id="lastName" name="lastName" type="text" placeholder="Your last name" required />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address</label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                <Textarea id="message" name="message" placeholder="Your message..." rows={5} required />
              </div>
              <div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </div>
              {status && (
                <p className="text-center text-green-600">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
