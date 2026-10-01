import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MapPinIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { projects } from '../data/projects';
import type { ProjectCategory } from '../types/content';
import { EASE_OUT } from '../utils/motion';

type Filter = 'All' | ProjectCategory;
const filters: Filter[] = ['All', 'Residential', 'Commercial', 'Institutional'];

export function Projects() {
  const [active, setActive] = useState<Filter>('All');
  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" aria-labelledby="projects-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="projects-title"
            title="Our Solar Installations"
            description="Solar solutions for homes, businesses and institutions." />
          
          <Reveal delay={0.1}>
            <div
              role="group"
              aria-label="Filter projects by category"
              className="no-scrollbar -mx-5 flex gap-1 overflow-x-auto px-5 sm:mx-0 sm:inline-flex sm:rounded-full sm:bg-brand-tint sm:p-1 sm:px-1">
              
              {filters.map((f) =>
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                aria-pressed={active === f}
                className={`relative shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                active === f ? 'text-white' : 'bg-brand-tint text-ink/70 hover:text-brand-dark sm:bg-transparent'}`
                }>
                
                  {active === f &&
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-full bg-brand-dark"
                  transition={{ duration: 0.25, ease: EASE_OUT }} />

                }
                  <span className="relative">{f}</span>
                </button>
              )}
            </div>
          </Reveal>
        </div>

        <motion.ul layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((p) =>
            <motion.li
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: EASE_OUT }}>
              
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_1px_2px_rgba(34,34,34,0.06)] ring-1 ring-ink/[0.07] transition-[box-shadow,transform] duration-200 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(34,34,34,0.12)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.06]" />
                  
                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-deep shadow-sm">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-bold text-ink">{p.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{p.description}</p>
                    {p.location &&
                  <p className="mt-auto flex items-center gap-1.5 pt-4 text-sm text-ink/60">
                        <MapPinIcon className="h-4 w-4 text-accent" aria-hidden />
                        {p.location}
                      </p>
                  }
                  </div>
                </article>
              </motion.li>
            )}
          </AnimatePresence>
        </motion.ul>

        <p className="mt-8 text-sm text-ink/50">
          Images shown are representative. Synowatt project photos and locations will be added here.
        </p>
      </div>
    </section>);

}