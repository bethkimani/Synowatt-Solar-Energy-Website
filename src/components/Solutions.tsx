import React from 'react';
import { motion } from 'framer-motion';
import { BatteryChargingIcon, CheckIcon, CpuIcon, MessageCircleIcon, SunIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { solarPackages } from '../data/solutions';
import { company } from '../data/company';
import { buttonClasses } from '../utils/button';
import { EASE_OUT } from '../utils/motion';
import { requestQuote } from '../utils/quote';

export function Solutions() {
  return (
    <section id="solutions" aria-labelledby="solutions-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          id="solutions-title"
          title="Solar Solutions Designed Around Your Energy Needs"
          description="Example hybrid systems to help you get started. Every installation is confirmed after an energy assessment of your property." />
        

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {solarPackages.map((pkg, i) =>
          <motion.article
            key={pkg.capacity}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -60px 0px' }}
            transition={{ duration: 0.3, ease: EASE_OUT, delay: i * 0.08 }}
            className="flex flex-col rounded-3xl border border-ink/10 bg-white p-7 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(34,34,34,0.10)] sm:p-8">
            
              <header>
                <p className="text-sm font-semibold text-brand-dark">{pkg.name}</p>
                <h3 className="mt-1 font-display text-5xl font-extrabold tracking-tight text-ink">{pkg.capacity}</h3>
              </header>

              <dl className="mt-7 divide-y divide-ink/10 border-y border-ink/10">
                {[
              { icon: CpuIcon, label: 'Inverter', value: pkg.inverter },
              { icon: BatteryChargingIcon, label: 'Battery', value: pkg.battery },
              { icon: SunIcon, label: 'Panels', value: pkg.panels }].
              map((row) =>
              <div key={row.label} className="flex items-center gap-4 py-3.5">
                    <row.icon className="h-5 w-5 shrink-0 text-accent" aria-hidden />
                    <dt className="w-20 shrink-0 text-sm text-ink/60">{row.label}</dt>
                    <dd className="text-[15px] font-semibold text-ink">{row.value}</dd>
                  </div>
              )}
              </dl>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-ink">Key components</h4>
                <ul className="mt-3 space-y-2">
                  {pkg.components.map((c) =>
                <li key={c} className="flex items-center gap-2.5 text-[15px] text-ink/75">
                      <CheckIcon className="h-4 w-4 shrink-0 text-brand" strokeWidth={3} aria-hidden />
                      {c}
                    </li>
                )}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-ink">Suitable for</h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {pkg.suitableFor.map((s) =>
                <li key={s} className="rounded-full bg-brand-tint px-3 py-1 text-sm font-medium text-brand-deep">
                      {s}
                    </li>
                )}
                </ul>
              </div>

              <div className="mt-auto pt-8">
                <p className="mb-4 text-sm text-ink/60">
                  {pkg.price ?
                <>
                      From <span className="font-display text-xl font-bold text-ink">{pkg.price}</span>
                    </> :

                'Pricing on request — tailored to your site'
                }
                </p>
                <button
                type="button"
                onClick={() =>
                requestQuote({
                  service: 'Hybrid Solar Systems',
                  message: `I'm interested in the ${pkg.capacity} ${pkg.name} (${pkg.battery}, ${pkg.panels}).`
                })
                }
                className={`${buttonClasses('primary', 'lg')} w-full`}>
                
                  Request a Quote
                </button>
              </div>
            </motion.article>
          )}

          <motion.aside
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -60px 0px' }}
            transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.16 }}
            className="relative flex flex-col overflow-hidden rounded-3xl bg-brand-deep p-7 text-white sm:p-8">
            
            <img
              src="/5da2a8ca-128a-4a82-b8a5-533a6d9ef921.jpg"
              alt="Wall-mounted hybrid inverter and lithium battery storage unit"
              loading="lazy"
              className="-mx-7 -mt-7 mb-7 aspect-[16/10] w-[calc(100%+3.5rem)] max-w-none object-cover sm:-mx-8 sm:-mt-8 sm:w-[calc(100%+4rem)]" />
            
            <h3 className="font-display text-2xl font-extrabold leading-tight">Need a different size?</h3>
            <p className="mt-3 leading-relaxed text-white/85">
              Larger homes, offices, schools and businesses often need custom capacity. We’ll assess your load and
              design a system that fits — including expandable battery storage.
            </p>
            <div className="mt-auto flex flex-col gap-3 pt-8">
              <button
                type="button"
                onClick={() => requestQuote({ service: 'Solar System Design & Consultation' })}
                className={`${buttonClasses('primary', 'lg')} w-full`}>
                
                Get a Custom Quote
              </button>
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className={`${buttonClasses('light', 'lg')} w-full`}>
                
                <MessageCircleIcon className="h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>);

}