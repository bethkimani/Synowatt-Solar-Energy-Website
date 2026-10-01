import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, MessageCircleIcon, XIcon } from 'lucide-react';
import { Logo } from './Logo';
import { navItems } from '../data/navigation';
import { company } from '../data/company';
import { buttonClasses } from '../utils/button';
import { EASE_OUT } from '../utils/motion';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-200 ease-out ${
      solid ? 'bg-white py-2 shadow-[0_6px_24px_rgba(34,34,34,0.08)]' : 'bg-transparent py-4'}`
      }>
      
      <nav aria-label="Primary" className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Logo light={!solid} compact={scrolled} />

        <ul className="hidden items-center gap-7 xl:flex">
          {navItems.map((item) =>
          <li key={item.href}>
              <a
              href={item.href}
              className={`relative whitespace-nowrap text-sm font-medium transition-colors duration-150 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-accent after:transition-transform after:duration-200 hover:after:scale-x-100 ${
              solid ? 'text-ink/80 hover:text-brand-dark' : 'text-white/90 hover:text-white'}`
              }>
              
                {item.label}
              </a>
            </li>
          )}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" className={`${buttonClasses('primary', 'md')} hidden sm:inline-flex`}>
            Get a Free Quote
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={`grid h-11 w-11 place-items-center rounded-full transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent xl:hidden ${
            solid ? 'text-ink hover:bg-ink/5' : 'text-white hover:bg-white/10'}`
            }>
            
            {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open &&
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
          className="h-[calc(100svh-64px)] overflow-y-auto border-t border-ink/5 bg-white xl:hidden">
          
            <ul className="mx-auto max-w-7xl px-5 py-4">
              {navItems.map((item, i) =>
            <motion.li
              key={item.href}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, ease: EASE_OUT, delay: i * 0.03 }}>
              
                  <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-ink/5 py-4 font-display text-xl font-bold text-ink transition-colors duration-150 hover:text-brand-dark">
                
                    {item.label}
                  </a>
                </motion.li>
            )}
            </ul>
            <div className="mx-auto grid max-w-7xl gap-3 px-5 pb-8 sm:grid-cols-2">
              <a href="#contact" onClick={() => setOpen(false)} className={buttonClasses('primary', 'lg')}>
                Get a Free Quote
              </a>
              <a href={company.whatsappHref} target="_blank" rel="noreferrer" className={buttonClasses('green', 'lg')}>
                <MessageCircleIcon className="h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}