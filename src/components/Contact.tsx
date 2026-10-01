import React from 'react';
import { GlobeIcon, MailIcon, MapPinIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { Reveal } from './Reveal';
import { company } from '../data/company';
import { buttonClasses } from '../utils/button';

const details = [
{ icon: PhoneIcon, label: 'Phone / WhatsApp', value: company.phoneDisplay, href: company.phoneHref },
{ icon: MailIcon, label: 'Email', value: company.email, href: `mailto:${company.email}` },
{ icon: GlobeIcon, label: 'Website', value: company.website, href: `https://${company.website}` },
{ icon: MapPinIcon, label: 'Location', value: company.location }];


export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:px-8">
        <div>
          <Reveal>
            <h2
              id="contact-title"
              className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[44px]">
              
              Let’s design your solar solution.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">
              Share a few details and our team will get back to you with advice and a free, no-obligation quote.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <dl className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
              {details.map((d) =>
              <div key={d.label} className="flex items-center gap-4 py-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-tint text-brand-dark">
                    <d.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-sm text-ink/60">{d.label}</dt>
                    <dd className="truncate font-semibold text-ink">
                      {d.href ?
                    <a href={d.href} className="transition-colors duration-150 hover:text-brand-dark">
                          {d.value}
                        </a> :

                    d.value
                    }
                    </dd>
                  </div>
                </div>
              )}
            </dl>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <a href={company.whatsappHref} target="_blank" rel="noreferrer" className={buttonClasses('green', 'lg')}>
              <MessageCircleIcon className="h-5 w-5" />
              WhatsApp Us
            </a>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 overflow-hidden rounded-3xl ring-1 ring-ink/10">
            <iframe
              title={`Map showing ${company.location}`}
              src={company.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full border-0" />
            
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>);

}