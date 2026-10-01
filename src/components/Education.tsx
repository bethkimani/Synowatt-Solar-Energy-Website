import React, { useCallback, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { ArticleDialog } from './ArticleDialog';
import { articles } from '../data/articles';
import type { Article } from '../types/content';
import { EASE_OUT } from '../utils/motion';

const arrowClass =
'grid h-12 w-12 place-items-center rounded-full border border-ink/15 bg-white text-ink transition-[background-color,color,border-color,transform] duration-150 hover:border-brand-dark hover:bg-brand-dark hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent';

export function Education() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: trackRef });
  const [openArticle, setOpenArticle] = useState<Article | null>(null);
  const close = useCallback(() => setOpenArticle(null), []);

  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('article');
    const step = card ? card.clientWidth + 24 : 360;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section aria-labelledby="education-title" className="overflow-hidden bg-brand-tint py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            id="education-title"
            title="Understanding Solar Energy"
            description="New to solar? Short, practical guides to help you make a confident decision." />
          
          <div className="flex gap-3">
            <button type="button" onClick={() => scroll(-1)} aria-label="Previous articles" className={arrowClass}>
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button type="button" onClick={() => scroll(1)} aria-label="Next articles" className={arrowClass}>
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-5 px-5 pb-4 lg:-mx-8 lg:scroll-px-8 lg:px-8">
          
          {articles.map((a, i) =>
          <motion.article
            key={a.title}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: EASE_OUT, delay: Math.min(i, 3) * 0.06 }}
            className="group flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-ink/[0.06] transition-shadow duration-200 hover:shadow-[0_20px_44px_rgba(34,34,34,0.10)] sm:w-[360px]">
            
              <div className="aspect-[16/10] overflow-hidden">
                <img
                src={a.image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05]" />
              
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm font-semibold text-brand-dark">{a.category}</p>
                <h3 className="mt-2 font-display text-xl font-bold leading-snug text-ink">{a.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{a.excerpt}</p>
                <button
                type="button"
                onClick={() => setOpenArticle(a)}
                className="mt-auto inline-flex items-center gap-1.5 self-start rounded pt-6 text-sm font-semibold text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                
                  Read More
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.article>
          )}
        </div>

        <div className="mt-6 h-1 w-full max-w-xs overflow-hidden rounded-full bg-ink/10" aria-hidden>
          <motion.div style={{ scaleX: scrollXProgress }} className="h-full origin-left rounded-full bg-accent" />
        </div>
      </div>

      <AnimatePresence>{openArticle && <ArticleDialog article={openArticle} onClose={close} />}</AnimatePresence>
    </section>);

}