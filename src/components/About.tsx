import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, MessageCircleIcon } from 'lucide-react';
import { ParallaxImage } from './ParallaxImage';
import { Reveal } from './Reveal';
import { aboutHighlights } from '../data/services';
import { company } from '../data/company';
import { buttonClasses } from '../utils/button';
import { EASE_OUT } from '../utils/motion';

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal className="relative">
          <ParallaxImage
            src="/f0e391a3-a5b9-4007-847d-38c2041f610e.jpg"
            alt="Synowatt technicians installing solar panels on a roof"
            className="aspect-[4/5] rounded-3xl sm:aspect-[5/5] lg:aspect-[4/5]" />
          
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.2 }}
            className="absolute -bottom-6 right-4 hidden w-56 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block lg:-right-8">
            
            <img
              src="/d2f29796-e486-4309-8440-1e53b7769568.jpg"
              alt="Technician inspecting and cleaning rooftop solar panels"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover" />
            
          </motion.div>
          <div className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-deep shadow-md">
            {company.tagline}
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2
              id="about-title"
              className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[44px]">
              
              Clean Energy. Reliable Power. A Brighter Tomorrow.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              Synowatt Power &amp; Solar Ltd provides solar energy solutions that help homes, businesses and
              institutions reduce their dependence on conventional electricity and access reliable, renewable power.
            </p>
            <p className="mt-4 leading-relaxed text-ink/70">
              From the first consultation to installation and long-term support, we design every system around how
              you actually use energy — so you get dependable power, lower bills and peace of mind.
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {aboutHighlights.map((h, i) =>
            <motion.li
              key={h}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, ease: EASE_OUT, delay: i * 0.04 }}
              className="flex items-center gap-3 text-[15px] font-medium text-ink">
              
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-tint text-brand-dark">
                  <CheckIcon className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {h}
              </motion.li>
            )}
          </ul>

          <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row" delay={0.1}>
            <a href="#contact" className={buttonClasses('green', 'lg')}>
              Talk to a Solar Expert
            </a>
            <a href={company.whatsappHref} target="_blank" rel="noreferrer" className={buttonClasses('outline', 'lg')}>
              <MessageCircleIcon className="h-5 w-5 text-brand-dark" />
              WhatsApp Us
            </a>
          </Reveal>
        </div>
      </div>
    </section>);

}