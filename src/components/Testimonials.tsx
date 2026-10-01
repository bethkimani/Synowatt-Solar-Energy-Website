import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { testimonials } from '../data/trust';
import { EASE_OUT } from '../utils/motion';

const AUTO_MS = 7000;

const variants = {
  enter: (d: number) => ({ x: d >= 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d >= 0 ? -40 : 40, opacity: 0 })
};

const arrowClass =
'grid h-12 w-12 place-items-center rounded-full border border-ink/15 text-ink transition-[background-color,color,border-color,transform] duration-150 hover:border-brand-dark hover:bg-brand-dark hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent';

export function Testimonials() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const n = testimonials.length;

  const paginate = (d: number) => setState(([i]) => [(i + d + n) % n, d]);

  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(() => setState(([i]) => [(i + 1) % n, 1]), AUTO_MS);
    return () => window.clearTimeout(t);
  }, [index, paused, n]);

  const t = testimonials[index];

  return (
    <section aria-labelledby="testimonials-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading id="testimonials-title" align="center" title="What Our Customers Say" />

        <Reveal className="mx-auto mt-14 max-w-3xl">
          <div
            className="relative min-h-[300px] overflow-hidden rounded-3xl bg-brand-tint p-8 sm:p-12"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            aria-roledescription="carousel"
            aria-label="Customer testimonials">
            
            <QuoteIcon className="h-10 w-10 text-accent" aria-hidden />
            <AnimatePresence mode="wait" custom={dir} initial={false}>
              <motion.figure
                key={index}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: EASE_OUT }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) paginate(1);else
                  if (info.offset.x > 60) paginate(-1);
                }}
                className="mt-6 cursor-grab active:cursor-grabbing"
                aria-live="polite">
                
                {t.isPlaceholder &&
                <span className="inline-block rounded-full border border-dashed border-accent px-3 py-1 text-xs font-semibold text-ink">
                    Placeholder — replace with a real testimonial
                  </span>
                }
                <blockquote className="mt-4 font-display text-xl font-semibold leading-relaxed text-ink sm:text-2xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-dark font-display font-bold text-white">
                    {t.name.
                    split(' ').
                    map((w) => w[0]).
                    join('')}
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{t.name}</span>
                    <span className="block text-sm text-ink/60">{t.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) =>
              <button
                key={i}
                type="button"
                onClick={() => setState(([cur]) => [i, i > cur ? 1 : -1])}
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === index}
                className="py-3">
                
                  <span
                  className={`block h-1.5 rounded-full transition-[width,background-color] duration-200 ${
                  i === index ? 'w-8 bg-brand-dark' : 'w-3 bg-ink/20 hover:bg-ink/40'}`
                  } />
                
                </button>
              )}
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={() => paginate(-1)} aria-label="Previous testimonial" className={arrowClass}>
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button type="button" onClick={() => paginate(1)} aria-label="Next testimonial" className={arrowClass}>
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}