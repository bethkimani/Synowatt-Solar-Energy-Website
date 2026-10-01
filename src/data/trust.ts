import type { Feature, ProcessStep, Testimonial } from '../types/content';

export const reasons: Feature[] = [
{
  title: 'Professional Installation',
  description: 'Installed by trained technicians following proper safety and wiring practices.'
},
{
  title: 'Quality Solar Components',
  description: 'Inverters, lithium batteries and panels selected for performance and durability.'
},
{
  title: 'Tailored Solar Solutions',
  description: 'Every system is sized around your actual energy use, property and budget.'
},
{
  title: 'Reliable Technical Support',
  description: 'Inspection, troubleshooting and help whenever your system needs attention.'
},
{
  title: 'Energy-Efficient Solutions',
  description: 'Designed to make the most of Kenyan sunshine and reduce your power bills.'
},
{
  title: 'Residential & Commercial Expertise',
  description: 'Solutions for homes, offices, businesses and institutions.'
}];


export const processSteps: ProcessStep[] = [
{
  title: 'Consultation',
  description: 'Tell us about your property and power needs by phone, WhatsApp or a site visit.'
},
{
  title: 'Energy Assessment',
  description: 'We review your appliances and daily consumption to size the right system.'
},
{
  title: 'System Design & Installation',
  description: 'We design your solution, then install, test and commission it professionally.'
},
{
  title: 'Support & Maintenance',
  description: 'Ongoing inspection, maintenance and technical support keep your system performing.'
}];


// Placeholders — replace with real customer testimonials and set isPlaceholder to false.
export const testimonials: Testimonial[] = [
{
  quote:
  'Customer testimonial to be added by Synowatt. Share a real client’s experience with their solar installation, the team and the results.',
  name: 'Customer Name',
  role: 'Residential client',
  isPlaceholder: true
},
{
  quote:
  'Customer testimonial to be added by Synowatt. A business owner describing how solar power has supported their operations.',
  name: 'Customer Name',
  role: 'Commercial client',
  isPlaceholder: true
},
{
  quote:
  'Customer testimonial to be added by Synowatt. An institution describing the installation process and ongoing support.',
  name: 'Customer Name',
  role: 'Institutional client',
  isPlaceholder: true
}];