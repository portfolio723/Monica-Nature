
'use client';

import React, { useState } from 'react';
import { Check, Mail, Phone } from 'lucide-react';


// --- ICONS (Inline SVGs to replace Lucide React) ---
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>;
const DollarSignIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>;
const ArrowLeftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>;
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>;

// --- FORM DATA & CONFIGURATION ---
const STEPS_CONFIG = [
  { id: 1, title: 'Personal Info', icon: <UserIcon />, header: 'Tell us about yourself' },
  { id: 2, title: 'Preferences', icon: <MapPinIcon />, header: 'Where would you like to explore?' },
  { id: 3, title: 'Experiences', icon: <HeartIcon />, header: 'What calls to your soul?' },
  { id: 4, title: 'Budget', icon: <DollarSignIcon />, header: "Let's talk details" },
  { id: 5, title: 'Review', icon: <CheckCircleIcon />, header: 'Your adventure awaits!' },
];

const INTEREST_CATEGORIES = [
  { id: 'relax', label: 'Relax & Leisure' },
  { id: 'adventure', label: 'Adventure & Thrill' },
  { id: 'nature', label: 'Nature & Outdoor' },
  { id: 'wellness', label: 'Wellness & Selfcare' },
  { id: 'culture', label: 'Culture & History' },
  { id: 'food', label: 'Food & Lifestyle' },
  { id: 'urban', label: 'Urban & Modern' },
  { id: 'arts', label: 'Arts & Creativity' },
  { id: 'photo', label: 'Photography & Scenic' },
  { id: 'other', label: 'Other' },
];

const INITIAL_FORM_DATA = {
  pronouns: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  residence: 'United States',
  destination: 'Italy',
  places: '',
  startDate: '',
  endDate: '',
  companion: 'Solo',
  interests: [],
  travelStyle: 'Mid-range',
  budgetMin: 2000,
  budgetMax: 5000,
  currency: 'USD',
  details: '',
};

// --- REUSABLE UI COMPONENTS ---

const InputField = ({ id, label, type, value, onChange, error, placeholder, required }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-[--text-dark] mb-1">
      {label} {required && <span className="text-[--error]">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-4 py-2 bg-[--warm-white] border rounded-lg focus:ring-2 focus:ring-[--sky-blue] transition-all duration-300 ${error ? 'border-[--error]' : 'border-gray-300'}`}
    />
    {error && <p className="text-xs text-[--error] mt-1">{error}</p>}
  </div>
);

const SelectField = ({ id, label, value, onChange, error, required, children }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[--text-dark] mb-1">
        {label} {required && <span className="text-[--error]">*</span>}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 bg-[--warm-white] border rounded-lg focus:ring-2 focus:ring-[--sky-blue] transition-all duration-300 ${error ? 'border-[--error]' : 'border-gray-300'}`}
      >
        {children}
      </select>
      {error && <p className="text-xs text-[--error] mt-1">{error}</p>}
    </div>
);

const TextAreaField = ({ id, label, value, onChange, error, placeholder, rows = 4 }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-[--text-dark] mb-1">{label}</label>
        <textarea
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            className={`w-full px-4 py-2 bg-[--warm-white] border rounded-lg focus:ring-2 focus:ring-[--sky-blue] transition-all duration-300 ${error ? 'border-[--error]' : 'border-gray-300'}`}
        ></textarea>
        {error && <p className="text-xs text-[--error] mt-1">{error}</p>}
    </div>
);


// --- FORM STEP COMPONENTS ---

const Step1 = ({ data, handleChange, errors }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <SelectField id="pronouns" label="Pronouns" value={data.pronouns} onChange={handleChange}>
        <option value="">Select...</option>
        <option value="she/her">She/Her</option>
        <option value="he/him">He/Him</option>
        <option value="they/them">They/Them</option>
        <option value="other">Other</option>
    </SelectField>
    <div />
    <InputField id="firstName" label="First Name" type="text" value={data.firstName} onChange={handleChange} error={errors.firstName} placeholder="e.g., Alex" required />
    <InputField id="lastName" label="Last Name" type="text" value={data.lastName} onChange={handleChange} error={errors.lastName} placeholder="e.g., Wander" required />
    <InputField id="email" label="Email" type="email" value={data.email} onChange={handleChange} error={errors.email} placeholder="alex.wander@example.com" required />
    <InputField id="phone" label="Phone Number" type="tel" value={data.phone} onChange={handleChange} error={errors.phone} placeholder="(555) 123-4567" />
  </div>
);

const Step2 = ({ data, handleChange, errors }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <InputField id="residence" label="Current country of residence" type="text" value={data.residence} onChange={handleChange} error={errors.residence} required />
    <InputField id="destination" label="Country to visit" type="text" value={data.destination} onChange={handleChange} error={errors.destination} required />
    <div className="md:col-span-2">
      <InputField id="places" label="Specific places to visit" type="text" value={data.places} onChange={handleChange} error={errors.places} placeholder="e.g., Rome, Florence, Amalfi Coast" required />
    </div>
    <InputField id="startDate" label="Start Date" type="date" value={data.startDate} onChange={handleChange} error={errors.startDate} required />
    <InputField id="endDate" label="End Date" type="date" value={data.endDate} onChange={handleChange} error={errors.endDate} required />
    <div className="md:col-span-2">
       <SelectField id="companion" label="Who are you traveling with?" value={data.companion} onChange={handleChange} error={errors.companion} required>
          <option>Solo</option>
          <option>Partner</option>
          <option>Friends</option>
          <option>Family</option>
          <option>Business</option>
          <option>Pet</option>
          <option>Other</option>
        </SelectField>
    </div>
  </div>
);

const Step3 = ({ data, handleInterestChange, errors }) => (
  <div>
    <label className="block text-sm font-medium text-[--text-dark] mb-2">Select your interests {errors.interests && <span className="text-[--error]">*</span>}</label>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {INTEREST_CATEGORIES.map(interest => (
        <button
          key={interest.id}
          type="button"
          onClick={() => handleInterestChange(interest.id)}
          className={`p-4 border rounded-lg text-center transition-all duration-200 ${data.interests.includes(interest.id) ? 'bg-[--forest-primary] text-white border-[--forest-dark]' : 'bg-[--warm-white] hover:bg-gray-200'}`}
        >
          <span className="text-sm font-semibold">{interest.label}</span>
        </button>
      ))}
    </div>
     {errors.interests && <p className="text-xs text-[--error] mt-2">{errors.interests}</p>}
  </div>
);

const Step4 = ({ data, handleChange, handleSliderChange, errors }) => (
    <div className="space-y-8">
        <div>
            <label className="block text-sm font-medium text-[--text-dark] mb-2">Select your travel style {errors.travelStyle && <span className="text-[--error]">*</span>}</label>
            <div className="flex flex-col sm:flex-row gap-3">
                {['Budget', 'Mid-range', 'Luxury'].map(style => (
                    <label key={style} className={`flex-1 p-4 border rounded-lg cursor-pointer transition-all duration-200 ${data.travelStyle === style ? 'bg-[--forest-primary] text-white border-[--forest-dark]' : 'bg-[--warm-white] hover:bg-gray-200'}`}>
                        <input type="radio" name="travelStyle" value={style} checked={data.travelStyle === style} onChange={handleChange} className="hidden" />
                        <span className="text-sm font-semibold">{style}</span>
                    </label>
                ))}
            </div>
             {errors.travelStyle && <p className="text-xs text-[--error] mt-2">{errors.travelStyle}</p>}
        </div>

        <div>
            <label className="block text-sm font-medium text-[--text-dark] mb-2">
                What's your estimated budget?
            </label>
             <div className="flex items-center justify-between font-bold text-lg text-[--forest-primary] mb-4">
                <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: data.currency, minimumFractionDigits: 0 }).format(data.budgetMin)}</span>
                <span>to</span>
                <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: data.currency, minimumFractionDigits: 0 }).format(data.budgetMax)}</span>
            </div>
            <div className="space-y-4">
                 <div>
                    <label htmlFor="budgetMin" className="text-xs">From</label>
                    <input type="range" id="budgetMin" name="budgetMin" min="500" max="10000" step="100" value={data.budgetMin} onChange={handleSliderChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                </div>
                 <div>
                    <label htmlFor="budgetMax" className="text-xs">To</label>
                    <input type="range" id="budgetMax" name="budgetMax" min="500" max="10000" step="100" value={data.budgetMax} onChange={handleSliderChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                </div>
            </div>
        </div>
    </div>
);


const Step5 = ({ data, handleChange }) => (
    <div className="space-y-6">
        <div>
            <h3 className="text-lg font-semibold text-[--text-dark] border-b pb-2 mb-3">Review Your Details</h3>
            <div className="text-sm space-y-2 text-[--text-muted]">
                <p><strong>Name:</strong> {data.firstName} {data.lastName}</p>
                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>Destination:</strong> {data.places} in {data.destination}</p>
                <p><strong>Dates:</strong> {data.startDate} to {data.endDate}</p>
                <p><strong>Travel Style:</strong> {data.travelStyle} ({data.companion})</p>
                <p><strong>Interests:</strong> {data.interests.join(', ')}</p>
                <p><strong>Budget:</strong> {data.budgetMin} - {data.budgetMax} {data.currency}</p>
            </div>
        </div>
        <TextAreaField 
            id="details" 
            label="Anything else to add?"
            value={data.details}
            onChange={handleChange}
            placeholder="Any special requests, accessibility needs, or celebrations?"
        />
    </div>
);


// --- MAIN APP COMPONENT ---

export default function ItineraryPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleInterestChange = (interestId) => {
      setFormData(prev => {
          const newInterests = prev.interests.includes(interestId)
              ? prev.interests.filter(i => i !== interestId)
              : [...prev.interests, interestId];
          return { ...prev, interests: newInterests };
      });
  };

  const handleSliderChange = (e) => {
      const { name, value } = e.target;
      let { budgetMin, budgetMax } = formData;

      if (name === 'budgetMin') {
          budgetMin = Math.min(parseInt(value, 10), budgetMax - 500);
      } else { // budgetMax
          budgetMax = Math.max(parseInt(value, 10), budgetMin + 500);
      }
      
      setFormData(prev => ({...prev, budgetMin, budgetMax}));
  };

  const validateStep = () => {
    const newErrors = {};
    switch (currentStep) {
      case 1:
        if (!formData.firstName) newErrors.firstName = 'First name is required.';
        if (!formData.lastName) newErrors.lastName = 'Last name is required.';
        if (!formData.email) newErrors.email = 'Email is required.';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid.';
        break;
      case 2:
        if (!formData.residence) newErrors.residence = 'Country of residence is required.';
        if (!formData.destination) newErrors.destination = 'Destination is required.';
        if (!formData.places) newErrors.places = 'Specific places are required.';
        if (!formData.startDate) newErrors.startDate = 'Start date is required.';
        if (!formData.endDate) newErrors.endDate = 'End date is required.';
        else if (formData.startDate > formData.endDate) newErrors.endDate = 'End date cannot be before start date.';
        break;
      case 3:
          if(formData.interests.length === 0) newErrors.interests = 'Please select at least one interest.';
          break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < 5) {
        setCurrentStep(prev => prev + 1);
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if(validateStep()){
          console.log("Form Submitted:", formData);
          setIsSubmitted(true);
      }
  }
  
  const currentStepConfig = STEPS_CONFIG.find(s => s.id === currentStep);

  const processSteps = [
    {
      title: "Share Your Preference",
      subtitle: "Tell Us Your Travel Dreams",
      description: "Complete our intuitive form with details to get started on your journey. Share your interests, travel style, and bucket list destinations.",
      details: ["Personal travel consultant assignment", "Initial destination recommendations", "Budget and timeline discussion", "Travel style assessment"],
    },
    {
      title: "Pricing and Timeline",
      subtitle: "Transparent Planning Process",
      description: "We'll review your preferences and send the delivery timeline and pricing details to your email.",
      details: ["Detailed proposal within 24 hours", "Clear pricing breakdown", "Timeline expectations set", "Payment options explained"],
    },
    {
      title: "Crafting Your Itinerary",
      subtitle: "Where Magic Happens",
      description: "Receive a detailed day-by-day travel plan with:",
      details: ["Transportation Options", "Accommodation Recommendations", "Activity Curation", "Dining Reservations", "Daily Sightseeing", "Essential Resources"],
    },
    {
      title: "Bonus Personalized Details",
      subtitle: "The Extra Mile",
      description: "Your Comprehensive Travel Package Includes:",
      details: ["Weather Forecast", "Tailored Packing Tips", "Visa & Immigration Resources", "Travel Restrictions", "Local Culture Insights", "Safety Advice & Etiquette Tips"],
    },
    {
      title: "Review & Delivery",
      subtitle: "Your Adventure Awaits",
      description: "Final Deliverables:",
      details: ["PDF Format", "Booking Links", "Mobile App Access", "Useful Resources", "Other formats available upon request", "Draft review process", "Real-time changes"],
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Open+Sans:wght@400;600&display=swap');
        :root {
          --forest-primary: #1B4332; --forest-light: #2D5A3D; --forest-dark: #081C15;
          --sky-blue: #52B2CF; --sky-light: #87CEEB; --ocean-deep: #264653;
          --warm-accent: #F4A261; --earth-brown: #8D5524; --sage-green: #8C873E;
          --cream-white: #FEFAE0; --warm-white: #F6F4F3; --text-dark: #2A2A2A;
          --text-muted: #6B7280; --success: #059669; --warning: #D97706; --error: #DC2626;
          --font-primary: 'Poppins', sans-serif;
        }
        body { font-family: var(--font-primary); background-color: var(--cream-white); }
        .bg-cream-white { background-color: var(--cream-white); }
        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none; appearance: none;
            width: 20px; height: 20px;
            background: var(--forest-primary);
            cursor: pointer; border-radius: 50%;
        }
        input[type="range"]::-moz-range-thumb {
            width: 20px; height: 20px;
            background: var(--forest-primary);
            cursor: pointer; border-radius: 50%;
        }
      `}</style>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-cream-white">
        <div className="w-full max-w-6xl mx-auto space-y-12 sm:space-y-16">
          {/* Hero Section */}
          <section className="text-center py-8 sm:py-12">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[--forest-primary] mb-4">Design Your Perfect Nature Adventure</h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-[--text-muted] mb-8">
              We craft custom itineraries that match your style of travel. Whether you crave adventure, luxury, or a slow, relaxing escape, we take care of the planning so you can simply enjoy the journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm sm:text-base text-[--forest-light]">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5"/>
                <span>24-hour response guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5"/>
                <span>1,200+ successful trips</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5"/>
                <span>Expert local guides</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5"/>
                <span>100% personalized</span>
              </div>
            </div>
          </section>

          {/* Process Overview Section */}
          <section>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[--forest-primary] mb-8 sm:mb-12">Your Journey to the Perfect Trip</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {processSteps.slice(0,5).map((step, index) => (
                <div key={index} className={`p-6 rounded-lg bg-white shadow-lg ${index >= 3 ? 'lg:col-span-1' : ''} ${index === 3 ? 'md:col-span-2 lg:col-start-1' : ''} ${index === 4 ? 'md:col-span-2 lg:col-start-2' : ''}`}>
                  <h3 className="text-lg sm:text-xl font-bold text-[--forest-dark]">{index + 1}. {step.title}</h3>
                  <p className="text-sm sm:text-base text-[--warm-accent] font-semibold mb-3">{step.subtitle}</p>
                  <p className="text-sm text-[--text-muted] mb-4">{step.description}</p>
                  <ul className="space-y-2 text-sm">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-4 h-4 mr-2 mt-1 text-[--success] shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Form Section */}
          <section className="w-full max-w-4xl mx-auto">
            
            {isSubmitted ? (
                <div className="bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-lg text-center">
                    <CheckCircleIcon className="w-12 h-12 sm:w-16 sm:h-16 text-[--success] mx-auto mb-4"/>
                    <h2 className="text-xl sm:text-2xl font-bold text-[--forest-dark]">Thank You!</h2>
                    <p className="text-[--text-muted] mt-2 text-base sm:text-lg">Your travel request has been submitted. We will get back to you within 24 hours with your personalized itinerary.</p>
                </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-4 sm:p-6 md:p-10 rounded-2xl shadow-lg">
                  {/* Progress Bar */}
                  <div className="mb-8">
                      <div className="flex items-center">
                          {STEPS_CONFIG.map((step, index) => (
                              <React.Fragment key={step.id}>
                                  <div className="flex flex-col items-center w-1/5">
                                      <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${currentStep > step.id ? 'bg-[--success] border-[--success] text-white' : currentStep === step.id ? 'bg-white border-[--warm-accent]' : 'bg-gray-100 border-gray-300'}`}>
                                          {currentStep > step.id ? <CheckIcon /> : step.icon}
                                      </div>
                                      <p className={`text-xs mt-2 text-center transition-colors hidden sm:block ${currentStep >= step.id ? 'text-[--forest-dark] font-semibold' : 'text-[--text-muted]'}`}>{step.title}</p>
                                  </div>
                                  {index < STEPS_CONFIG.length - 1 && <div className={`flex-1 h-1 mx-1 sm:mx-2 transition-colors duration-500 ${currentStep > step.id ? 'bg-[--success]' : 'bg-gray-300'}`}></div>}
                              </React.Fragment>
                          ))}
                      </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-[--forest-dark] mb-4">{currentStepConfig.header}</h2>
                  <div className="min-h-[300px] mb-8">
                      {currentStep === 1 && <Step1 data={formData} handleChange={handleChange} errors={errors} />}
                      {currentStep === 2 && <Step2 data={formData} handleChange={handleChange} errors={errors} />}
                      {currentStep === 3 && <Step3 data={formData} handleInterestChange={handleInterestChange} errors={errors} />}
                      {currentStep === 4 && <Step4 data={formData} handleChange={handleChange} handleSliderChange={handleSliderChange} errors={errors} />}
                      {currentStep === 5 && <Step5 data={formData} handleChange={handleChange} />}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between items-center pt-6 border-t flex-col-reverse sm:flex-row gap-4 sm:gap-0">
                      <button
                          type="button"
                          onClick={handlePrev}
                          disabled={currentStep === 1}
                          className="flex items-center gap-2 px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors w-full sm:w-auto justify-center"
                      >
                          <ArrowLeftIcon/> Previous
                      </button>
                      {currentStep < 5 ? (
                          <button type="button" onClick={handleNext} className="px-8 py-3 bg-[--forest-primary] text-white font-semibold rounded-lg hover:bg-[--forest-light] transition-colors shadow-md w-full sm:w-auto justify-center">
                              Next Step
                          </button>
                      ) : (
                          <button type="submit" className="px-8 py-3 bg-[--warm-accent] text-[--forest-dark] font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-md w-full sm:w-auto justify-center">
                              Send My Travel Request
                          </button>
                      )}
                  </div>
              </form>
              )}
          </section>
        </div>
      </div>
    </>
  );
}
