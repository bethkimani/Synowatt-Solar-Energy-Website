import React from 'react';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { SocialIcon } from './SocialIcon';
import { company } from '../data/company';

const quickLinks = [
{ label: 'Home', href: '#home' },
{ label: 'About', href: '#about' },
{ label: 'Services', href: '#services' },
{ label: 'Solar Solutions', href: '#solutions' },
{ label: 'Projects', href: '#projects' },
{ label: 'Contact', href: '#contact' }];


const footerServices = [
'Solar Installation',
'Hybrid Systems',
'Lithium Batteries',
'Solar Maintenance',
'Commercial Solar',
'Residential Solar'];


const linkClass = 'text-white/70 transition-colors duration-150 hover:text-white';

export function Footer() {
  return (
    <footer className="bg-ink pb-24 pt-20 text-white md:pb-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={company.logo} alt="" className="h-14 w-14 rounded-full bg-white object-contain" />
              <div>
                <p className="font-display text-lg font-extrabold leading-tight">
                  <span className="text-brand">Syno</span>
                  <span className="text-accent">watt</span>
                </p>
                <p className="text-sm text-white/70">Power &amp; Solar Ltd</p>
              </div>
            </div>
            <p className="mt-5 font-medium text-gold">{company.tagline}</p>
            <ul className="mt-6 flex gap-3">
              {company.socials.map((s) =>
              <li key={s.label}>
                  <a
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-[background-color,transform] duration-150 hover:-translate-y-0.5 hover:bg-brand-dark">
                  
                    <SocialIcon name={s.label} />
                  </a>
                </li>
              )}
            </ul>
          </div>

          <nav aria-label="Quick links">
            <h2 className="font-display font-bold">Quick Links</h2>
            <ul className="mt-5 space-y-3 text-[15px]">
              {quickLinks.map((l) =>
              <li key={l.href}>
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              )}
            </ul>
          </nav>

          <div>
            <h2 className="font-display font-bold">Services</h2>
            <ul className="mt-5 space-y-3 text-[15px]">
              {footerServices.map((s) =>
              <li key={s}>
                  <a href="#services" className={linkClass}>
                    {s}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold">Contact</h2>
            <ul className="mt-5 space-y-4 text-[15px]">
              <li className="flex items-center gap-3">
                <PhoneIcon className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                <a href={company.phoneHref} className={linkClass}>
                  {company.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                <a href={`mailto:${company.email}`} className={linkClass}>
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden />
                <span className="text-white/70">{company.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-sm text-white/60">
          © 2026 Synowatt Power &amp; Solar Ltd. All rights reserved.
        </div>
      </div>
    </footer>);

}