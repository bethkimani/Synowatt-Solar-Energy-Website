import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { XIcon } from 'lucide-react';
import type { Article } from '../types/content';
import { buttonClasses } from '../utils/button';
import { EASE_OUT } from '../utils/motion';

interface ArticleDialogProps {
  article: Article;
  onClose: () => void;
}

export function ArticleDialog({ article, onClose }: ArticleDialogProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/60 p-0 sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}>
      
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="article-dialog-title"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.25, ease: EASE_OUT }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90svh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-white sm:rounded-3xl">
        
        <div className="relative">
          <img src={article.image} alt="" className="aspect-[16/8] w-full object-cover" />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close article"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-md transition-transform duration-150 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="p-7 sm:p-9">
          <p className="text-sm font-semibold text-brand-dark">{article.category}</p>
          <h3 id="article-dialog-title" className="mt-2 font-display text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
            {article.title}
          </h3>
          <div className="mt-5 space-y-4 leading-relaxed text-ink/75">
            {article.body.map((para) =>
            <p key={para}>{para}</p>
            )}
          </div>
          <a href="#contact" onClick={onClose} className={`${buttonClasses('green', 'lg')} mt-8`}>
            Talk to a Solar Expert
          </a>
        </div>
      </motion.div>
    </motion.div>);

}