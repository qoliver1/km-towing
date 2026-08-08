/**
 * Site Configuration — K&M Towing
 *
 * This file is the single source of truth for all business-specific content.
 * To rebrand this site for another local service business (plumber, electrician,
 * landscaper, etc.), edit ONLY this file. All components read from this config.
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imageQuery: string;
  features: string[];
}

export interface ServiceArea {
  name: string;
  description?: string;
}

export interface TrustPoint {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const siteConfig = {
  business: {
    name: 'K&M Towing',
    ownerName: 'Kyle Engevik',
    phone: '763-951-9563',
    phoneDisplay: '763-951-9563',
    tagline: 'Anytime. Anywhere. One Call & I\'m There.',
    hours: 'Available 24 Hours a Day • 7 Days a Week',
    city: 'Minneapolis',
    state: 'MN',
    serviceAreaSummary: 'Minneapolis and surrounding areas',
    email: '',
    social: {
      facebook: '',
      instagram: '',
    },
  },

  hero: {
    headline: '24/7 Towing & Roadside Assistance',
    subheadline: 'Fast. Reliable. Anytime. Anywhere.',
    description: 'Minneapolis and surrounding areas. One call and we\'re on our way.',
    primaryCta: 'Call Now',
    secondaryCta: 'Request Service',
    imageQuery: 'tow truck helping car on highway roadside',
  },

  services: [
    {
      id: 'light-towing',
      title: 'Vehicle Towing',
      description: 'Cars, pickups, SUVs, and minivans — transported safely on a flatbed.',
      imageQuery: 'flatbed tow truck loading sedan',
      features: ['Flatbed towing', 'Accident recovery', 'Safe loading process'],
    },
    {
      id: 'heavy-towing',
      title: 'Heavy Duty Towing',
      description: 'Semi trucks, RVs, buses, and commercial vehicles — the big jobs others won\'t touch.',
      imageQuery: 'heavy duty tow truck semi truck recovery',
      features: ['Semi trucks', 'RVs & buses', 'Commercial vehicles'],
    },
    {
      id: 'roadside',
      title: 'Roadside Assistance',
      description: 'Jump starts, lockouts, flat tires, winching, and fuel delivery — we get you moving.',
      imageQuery: 'roadside assistance jump start car battery',
      features: ['Jump starts', 'Lockout assistance', 'Winching & fuel delivery'],
    },
    {
      id: 'specialty',
      title: 'Specialty Transport',
      description: 'Motorcycles, ATVs, and specialty vehicles handled with care.',
      imageQuery: 'motorcycle tow transport truck',
      features: ['Motorcycles', 'ATVs', 'Specialty vehicles'],
    },
    {
      id: 'diagnostics',
      title: 'Diagnostics',
      description: 'On-the-spot vehicle diagnostics to identify the problem and plan next steps.',
      imageQuery: 'mechanic diagnosing car engine',
      features: ['Engine diagnostics', 'Electrical issues', 'Quick assessment'],
    },
    {
      id: 'auto-parts',
      title: 'Auto Parts',
      description: 'Parts sourcing and delivery to get your vehicle back on the road faster.',
      imageQuery: 'auto parts store shelves',
      features: ['Parts sourcing', 'Fast delivery', 'Quality parts'],
    },
  ] as ServiceItem[],

  serviceAreas: [
    { name: 'Minneapolis' },
    { name: 'Fridley' },
    { name: 'Brooklyn Park' },
    { name: 'Blaine' },
    { name: 'Columbia Heights' },
    { name: 'Coon Rapids' },
    { name: 'Spring Lake Park' },
    { name: 'New Brighton' },
    { name: 'Roseville' },
    { name: 'Crystal' },
    { name: 'Golden Valley' },
    { name: 'St. Anthony' },
  ] as ServiceArea[],

  trustPoints: [
    {
      title: '24/7 Availability',
      description: 'Day or night, weekends and holidays — we answer the call.',
    },
    {
      title: 'Fast Response Times',
      description: 'We know every minute matters when you\'re stranded.',
    },
    {
      title: 'Local & Owner-Operated',
      description: 'A Minneapolis business that knows the area and the roads.',
    },
    {
      title: 'Professional Equipment',
      description: 'Clean, well-maintained trucks ready for any job.',
    },
    {
      title: 'Experienced Drivers',
      description: 'Skilled operators who handle your vehicle with care.',
    },
    {
      title: 'One Call Solution',
      description: 'From light vehicles to heavy duty — one number handles it all.',
    },
  ] as TrustPoint[],

  faqs: [
    {
      question: 'Are you available 24 hours a day?',
      answer: 'Yes. We operate 24 hours a day, 7 days a week, including weekends and holidays. Call anytime.',
    },
    {
      question: 'What areas do you serve?',
      answer: 'We serve Minneapolis and surrounding suburbs including Fridley, Brooklyn Park, Blaine, Columbia Heights, and nearby areas.',
    },
    {
      question: 'Can you tow heavy-duty vehicles like semi trucks and RVs?',
      answer: 'Yes. Heavy-duty towing is one of our specialties. We handle semi trucks, RVs, buses, and commercial vehicles.',
    },
    {
      question: 'Do you offer roadside assistance?',
      answer: 'Yes. We provide jump starts, lockout assistance, flat tire service, winching, and fuel delivery.',
    },
    {
      question: 'How quickly can you get to me?',
      answer: 'Response times vary by location and traffic, but we prioritize fast response because we know you need help now.',
    },
    {
      question: 'What types of payment do you accept?',
      answer: 'Call us at 763-951-9563 and we\'ll discuss payment options for your specific situation.',
    },
  ] as FAQItem[],

  } as const;

export type SiteConfig = typeof siteConfig;
