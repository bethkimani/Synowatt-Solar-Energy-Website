import React from 'react';
import { motion } from 'framer-motion';
import { CircleCheckIcon } from 'lucide-react';
import { ParallaxImage } from './ParallaxImage';
import { Reveal } from './Reveal';
import { reasons } from '../data/trust';
import { buttonClasses } from '../utils/button';
import { EASE_OUT } from '../utils/motion';

export function WhyChoose() {
  return (
    <section id="why" aria-labelledby="why-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <h2
              id="why-title"
              className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[44px]">
              
              Why Choose Synowatt?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">
              Solar is a long-term investment. We focus on getting it right the first time — and staying with you
              after installation.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ParallaxImage
              src="/d02409c6-13eb-4ec6-8b5b-0c01736d09f3.jpg"
              alt="Technician inspecting a ground-mounted solar array with a tablet"
              className="mt-8 aspect-[16/11] rounded-3xl" />
            
          </Reveal>
          <Reveal delay={0.15} className="mt-8">
            <a href="#contact" className={buttonClasses('primary', 'lg')}>
              Get a Free Quote
            </a>
          </Reveal>
        </div>

        <ul className="grid content-start gap-5 sm:grid-cols-2">
          {reasons.map((r, i) =>
          <motion.li
            key={r.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -60px 0px' }}
            transition={{ duration: 0.3, ease: EASE_OUT, delay: i % 2 * 0.06 }}
            className="rounded-2xl bg-brand-tint p-7">
            
              <CircleCheckIcon className="h-8 w-8 text-brand" aria-hidden />
              <h3 className="mt-5 font-display text-xl font-bold leading-snug text-ink">{r.title}</h3>
              <p className="mt-2 leading-relaxed text-ink/70">{r.description}</p>
            </motion.li>
          )}
        </ul>
      </div>
    </section>);

}