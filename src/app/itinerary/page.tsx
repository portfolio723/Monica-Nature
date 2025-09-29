'use client';

import {
  Activity,
  Award,
  Calendar as CalendarIcon,
  ChevronDown,
  CircleDollarSign,
  HeartHandshake,
  Lock,
  Mail,
  MapPin,
  Mountain,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wallet,
  Zap,
} from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Slider } from '@/components/ui/slider';

const formSchema = z.object({
  pronouns: z.string().optional(),
  firstName: z.string().min(2, {
    message: 'First name must be at least 2 characters.',
  }),
  lastName: z.string().min(2, {
    message: 'Last name must be at least 2 characters.',
  }),
  email: z.string().email(),
  phone: z.string().optional(),
  countryOfResidence: z.string().min(1, 'Country of residence is required.'),
  countryToVisit: z.string().min(1, 'Country to visit is required.'),
  specificPlaces: z.string().min(1, 'Please list specific places.').max(500),
  travelDates: z.object({
    from: z.date().optional(),
    to: z.date().optional(),
  }).refine(data => !data.from || !data.to || data.to >= data.from, {
    message: "End date must be after start date.",
    path: ["to"],
  }),
  travelCompanion: z.enum([
    'solo',
    'partner',
    'friends',
    'family',
    'colleagues',
    'pet',
    'other',
  ]),
  interests: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one interest.',
  }),
  travelStyle: z.enum(['luxury', 'mid-range', 'budget']),
  budget: z.array(z.number()).optional(),
  currency: z.string().optional(),
  additionalInfo: z.string().max(500).optional(),
});

const interests = [
    { id: 'relax', label: 'Relax & Leisure' },
    { id: 'adventure', label: 'Adventure & Thrill' },
    { id: 'nature', label: 'Nature & Outdoor' },
    { id: 'wellness', label: 'Wellness & Selfcare' },
    { id: 'culture', label: 'Culture, History & Educational' },
    { id: 'food', label: 'Food & Lifestyle' },
    { id: 'urban', label: 'Urban & Modern' },
    { id: 'arts', label: 'Arts & Creativity' },
    { id: 'photo', label: 'Photography & Scenic' },
    { id: 'other_interest', label: 'Other' },
]

export default function ItineraryPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      countryOfResidence: '',
      countryToVisit: '',
      specificPlaces: '',
      interests: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <section className="bg-gray-50/50 py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Design Your Perfect Nature Adventure
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
              We craft custom itineraries that match your style of travel.
              Whether you crave adventure, luxury, or a slow, relaxing escape,
              we take care of the planning so you can simply enjoy the journey.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-left md:grid-cols-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <span>24-hour response guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                <span>1,200+ successful trips</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                <span>Expert local guides</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span>100% personalized</span>
              </div>
            </div>
          </div>
        </section>

        {/* Process Overview Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-4xl font-bold">
              Your Journey to the Perfect Trip
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
                <div className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">1</div>
                    <h3 className="mt-4 text-xl font-semibold">Share Your Preference</h3>
                    <p className="mt-2 text-muted-foreground">Complete our form to get started.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">2</div>
                    <h3 className="mt-4 text-xl font-semibold">Pricing and Timeline</h3>
                    <p className="mt-2 text-muted-foreground">We'll email a proposal in 24 hours.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">3</div>
                    <h3 className="mt-4 text-xl font-semibold">Crafting Your Itinerary</h3>
                    <p className="mt-2 text-muted-foreground">Receive a detailed day-by-day plan.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">4</div>
                    <h3 className="mt-4 text-xl font-semibold">Bonus Personalized Details</h3>
                    <p className="mt-2 text-muted-foreground">Get packing tips, weather info, and more.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">5</div>
                    <h3 className="mt-4 text-xl font-semibold">Review & Delivery</h3>
                    <p className="mt-2 text-muted-foreground">Your adventure awaits in PDF and app.</p>
                </div>
            </div>
          </div>
        </section>

        {/* Custom Itinerary Form */}
        <section className="bg-gray-50/50 py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">
                  Tell us about the trip you would like to plan
                </CardTitle>
                <CardDescription>
                  Let's create something extraordinary together. Share your
                  travel dreams, and we'll craft the perfect adventure just for
                  you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    {/* Personal Info */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold border-b pb-2">
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="pronouns"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pronouns</FormLabel>
                              <FormControl>
                                <Input placeholder="They/Them, She/Her, He/Him" {...field} />
                              </FormControl>
                              <FormDescription>Help us address you correctly.</FormDescription>
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your first name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your last name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="your.email@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              We'll send your custom itinerary here within 24
                              hours.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+1 (555) 123-4567" {...field} />
                              </FormControl>
                              <FormDescription>For urgent trip updates and WhatsApp communication.</FormDescription>
                            </FormItem>
                          )}
                        />
                    </div>

                    {/* Travel Preferences */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold border-b pb-2">
                        Travel Preferences
                      </h3>
                      <FormField
                        control={form.control}
                        name="countryOfResidence"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current Country of Residence *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your country" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="usa">United States</SelectItem>
                                <SelectItem value="canada">Canada</SelectItem>
                                <SelectItem value="uk">United Kingdom</SelectItem>
                                <SelectItem value="australia">Australia</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="countryToVisit"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Country You Want to Visit *</FormLabel>
                             <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a destination" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="norway">Norway</SelectItem>
                                <SelectItem value="costa-rica">Costa Rica</SelectItem>
                                <SelectItem value="canada">Canada</SelectItem>
                                <SelectItem value="argentina">Argentina</SelectItem>
                                <SelectItem value="chile">Chile</SelectItem>
                                <SelectItem value="iceland">Iceland</SelectItem>
                                <SelectItem value="new-zealand">New Zealand</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                          control={form.control}
                          name="specificPlaces"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Specific Places You Want to Visit *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Norwegian Fjords, Patagonian wilderness, specific cities, landmarks, or regions you're excited to explore..."
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>Be as specific as you'd like.</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                         <FormField
                            control={form.control}
                            name="travelDates"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                <FormLabel>Travel Dates</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal",
                                            !field.value?.from && "text-muted-foreground"
                                        )}
                                        >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {field.value?.from ? (
                                            field.value.to ? (
                                            <>
                                                {format(field.value.from, "LLL dd, y")} -{" "}
                                                {format(field.value.to, "LLL dd, y")}
                                            </>
                                            ) : (
                                            format(field.value.from, "LLL dd, y")
                                            )
                                        ) : (
                                            <span>Pick a date range</span>
                                        )}
                                        </Button>
                                    </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="range"
                                        selected={{from: field.value?.from!, to: field.value?.to}}
                                        onSelect={(range) => field.onChange(range || { from: undefined, to: undefined })}
                                        numberOfMonths={2}
                                    />
                                    </PopoverContent>
                                </Popover>
                                <FormDescription>
                                    Flexible dates? Let us know in the additional info section.
                                </FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                    </div>

                    {/* Travel Style & Companions */}
                     <div className="space-y-4">
                        <h3 className="text-xl font-semibold border-b pb-2">Travel Style & Companions</h3>
                        <FormField
                        control={form.control}
                        name="travelCompanion"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                            <FormLabel>Who you'll be traveling with? *</FormLabel>
                            <FormControl>
                                <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                                >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                    <RadioGroupItem value="solo" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Solo</FormLabel>
                                </FormItem>
                                 <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                    <RadioGroupItem value="partner" />
                                    </FormControl>
                                    <FormLabel className="font-normal">With Partner</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                    <RadioGroupItem value="friends" />
                                    </FormControl>
                                    <FormLabel className="font-normal">With Friends</FormLabel>
                                </FormItem>
                                 <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                    <RadioGroupItem value="family" />
                                    </FormControl>
                                    <FormLabel className="font-normal">With Family</FormLabel>
                                </FormItem>
                                 <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                    <RadioGroupItem value="colleagues" />
                                    </FormControl>
                                    <FormLabel className="font-normal">With Colleagues</FormLabel>
                                </FormItem>
                                 <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                    <RadioGroupItem value="pet" />
                                    </FormControl>
                                    <FormLabel className="font-normal">With Pet</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                    <RadioGroupItem value="other" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Other</FormLabel>
                                </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>

                    {/* Interests */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold border-b pb-2">What Interests You? *</h3>
                        <FormField
                            control={form.control}
                            name="interests"
                            render={() => (
                                <FormItem>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {interests.map((item) => (
                                    <FormField
                                        key={item.id}
                                        control={form.control}
                                        name="interests"
                                        render={({ field }) => {
                                        return (
                                            <FormItem
                                            key={item.id}
                                            className="flex flex-row items-start space-x-3 space-y-0"
                                            >
                                            <FormControl>
                                                <Checkbox
                                                checked={field.value?.includes(item.id)}
                                                onCheckedChange={(checked) => {
                                                    return checked
                                                    ? field.onChange([...field.value, item.id])
                                                    : field.onChange(
                                                        field.value?.filter(
                                                        (value) => value !== item.id
                                                        )
                                                    )
                                                }}
                                                />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                {item.label}
                                            </FormLabel>
                                            </FormItem>
                                        )
                                        }}
                                    />
                                    ))}
                                </div>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Budget & Travel Style */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold border-b pb-2">Budget & Travel Style</h3>
                         <FormField
                            control={form.control}
                            name="travelStyle"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                <FormLabel>Travel Style *</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                    >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                        <RadioGroupItem value="luxury" />
                                        </FormControl>
                                        <FormLabel className="font-normal">Luxury Travel</FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                        <RadioGroupItem value="mid-range" />
                                        </FormControl>
                                        <FormLabel className="font-normal">Mid-range Travel</FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                        <RadioGroupItem value="budget" />
                                        </FormControl>
                                        <FormLabel className="font-normal">Budget Travel</FormLabel>
                                    </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                          control={form.control}
                          name="budget"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Budget Estimation (Per Person)</FormLabel>
                               <div className="flex gap-4 items-center">
                                <FormField
                                    control={form.control}
                                    name="currency"
                                    render={({ field: currencyField }) => (
                                    <Select onValueChange={currencyField.onChange} defaultValue={currencyField.value}>
                                    <FormControl>
                                        <SelectTrigger className="w-1/4">
                                        <SelectValue placeholder="USD" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="usd">USD</SelectItem>
                                        <SelectItem value="eur">EUR</SelectItem>
                                        <SelectItem value="gbp">GBP</SelectItem>
                                        <SelectItem value="cad">CAD</SelectItem>
                                        <SelectItem value="aud">AUD</SelectItem>
                                    </SelectContent>
                                    </Select>
                                    )}
                                />
                                <FormControl>
                                  <Slider
                                    defaultValue={[1000, 5000]}
                                    max={50000}
                                    min={500}
                                    step={250}
                                    onValueChange={field.onChange}
                                    className={cn("w-3/4", field.className)}
                                    />
                                </FormControl>
                               </div>
                                <FormDescription>
                                    From ${field.value?.[0] ?? 1000} to ${field.value?.[1] ?? 5000}
                                </FormDescription>
                            </FormItem>
                          )}
                        />
                    </div>
                    
                    {/* Additional Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold border-b pb-2">Additional Information</h3>
                        <FormField
                            control={form.control}
                            name="additionalInfo"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Share More About Your Trip</FormLabel>
                                <FormControl>
                                    <Textarea
                                    placeholder="Special dietary requirements, accessibility needs, celebration occasions..."
                                    className="resize-none"
                                    {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Tell us anything else that would help us create your perfect itinerary.
                                </FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-[#1B4332] hover:bg-[#1B4332]/90">
                      Start Planning My Adventure
                    </Button>

                    <div className="text-center text-xs text-muted-foreground space-y-2">
                        <p>Note: I will reach out to you on your email within 24 hours.</p>
                        <p>By submitting this form, you agree to our Privacy Policy. We'll never share your information.</p>
                         <div className="flex justify-center items-center gap-4 pt-2">
                            <span className='flex items-center gap-1'><Lock size={12}/> Your information is secure</span>
                            <span className='flex items-center gap-1'><Zap size={12}/> 24-hour response guarantee</span>
                         </div>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
            <div className="container mx-auto max-w-4xl px-4">
                <h2 className="text-center text-4xl font-bold mb-12">Frequently Asked Questions</h2>
                 <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How much does custom travel planning cost?</AccordionTrigger>
                        <AccordionContent>
                        Our planning fees start at $297 for weekend getaways and $497 for week-long adventures. This covers the entire planning process, and we'll provide exact pricing based on your specific needs.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How long does it take to create my itinerary?</AccordionTrigger>
                        <AccordionContent>
                        We typically deliver your complete custom itinerary within 5-7 business days after receiving your preferences and payment. Rush orders (24-48 hour delivery) are available for an additional fee.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Can I make changes to my itinerary?</AccordionTrigger>
                        <AccordionContent>
                        Absolutely! We include one round of revisions in our service. Additional changes can be made for a small fee to ensure your trip is perfect.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-4">
                        <AccordionTrigger>Do you book everything for me?</AccordionTrigger>
                        <AccordionContent>
                        We provide detailed booking instructions and links, plus optional full-service booking for accommodations, activities, and transportation. You choose your level of service.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-5">
                        <AccordionTrigger>What if something goes wrong during my trip?</AccordionTrigger>
                        <AccordionContent>
                        We provide 24/7 emergency support for all our custom itinerary clients via WhatsApp and email. We're here to help resolve any issues that arise.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50/50 py-24">
            <div className="container mx-auto px-4">
                 <h2 className="text-center text-4xl font-bold mb-12">What Our Travelers Say</h2>
                 <div className="grid md:grid-cols-3 gap-8">
                    <Card>
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <div>
                                    <CardTitle>Sarah M.</CardTitle>
                                    <CardDescription>Norwegian Fjords Adventure</CardDescription>
                                </div>
                                <div className="flex text-yellow-400">
                                    <Star size={16}/><Star size={16}/><Star size={16}/><Star size={16}/><Star size={16}/>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className='italic'>"The team created the most incredible 10-day Norway itinerary. Every detail was perfect, from the boutique hotels to the hidden waterfalls they recommended. We never would have found these magical places on our own!"</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <div>
                                    <CardTitle>James & Maria</CardTitle>
                                    <CardDescription>Costa Rica Family Trip</CardDescription>
                                </div>
                                <div className="flex text-yellow-400">
                                    <Star size={16}/><Star size={16}/><Star size={16}/><Star size={16}/><Star size={16}/>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className='italic'>"Traveling with kids can be stressful, but NatureWander made it seamless. They found family-friendly eco-lodges and activities that kept both our teenagers and 8-year-old engaged. The packing list for Costa Rica's climate was spot-on!"</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <div>
                                    <CardTitle>David K.</CardTitle>
                                    <CardDescription>Solo Patagonia Trek</CardDescription>
                                </div>
                                <div className="flex text-yellow-400">
                                    <Star size={16}/><Star size={16}/><Star size={16}/><Star size={16}/><Star size={16}/>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className='italic'>"As a solo traveler, I was nervous about Patagonia, but their detailed itinerary gave me confidence. The local guide recommendations and safety tips were invaluable. This trip changed my life."</p>
                        </CardContent>
                    </Card>
                 </div>
            </div>
        </section>
      </main>
    </div>
  );
}
