import React from 'react';
import { MessageCircleIcon } from 'lucide-react';
import { Reveal } from './Reveal';
import { company } from '../data/company';
import { buttonClasses } from '../utils/button';

const RAYS = Array.from({ length: 24 }, (_, i) => i * 15);

export function CtaBanner() {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden bg-brand-dark py-24 lg:py-28">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-1/2 -z-10 h-[720px] w-[720px] -translate-y-1/2">
        <svg viewBox="0 0 200 200" className="h-full w-full motion-safe:animate-[spin_80s_linear_infinite]">
          {RAYS.map((deg) =>
          <line
            key={deg}
            x1="100"
            y1="30"
            x2="100"
            y2="6"
            stroke="#FFFFFF"
            strokeOpacity="0.09"
            strokeWidth="2.5"
            strokeLinecap="round"
            transform={`rotate(${deg} 100 100)`} />

          )}
        </svg>
        <span className="absolute inset-[30%] rounded-full border border-white/10 motion-safe:animate-pulse" />
        <span className="absolute inset-[38%] rounded-full bg-gold/15" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 id="cta-title" className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
            Ready to Switch to Reliable Solar Power?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/85">
            Talk to Synowatt Power &amp; Solar Ltd about a solar solution designed around your energy needs.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className={buttonClasses('primary', 'lg')}>
              Get a Free Quote
            </a>
            <a href={company.whatsappHref} target="_blank" rel="noreferrer" className={buttonClasses('white', 'lg')}>
              <MessageCircleIcon className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>);

}