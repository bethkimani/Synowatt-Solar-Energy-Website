import React, { FormEvent, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CircleCheckIcon, LoaderCircleIcon, SendIcon } from 'lucide-react';
import { services } from '../data/services';
import { buttonClasses } from '../utils/button';
import { EASE_OUT } from '../utils/motion';
import { QUOTE_EVENT, QuoteDetail } from '../utils/quote';

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}
type Errors = Partial<Record<keyof FormState, string>>;
type Status = 'idle' | 'submitting' | 'success';

const empty: FormState = { name: '', phone: '', email: '', service: '', message: '' };
const serviceOptions = [...services.map((s) => s.title), 'Not sure yet — I need advice'];

const inputClass =
'mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink/40 transition-[border-color,box-shadow] duration-150 focus:outline-none focus:ring-4 focus:ring-brand/15';

export function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    const onQuote = (e: Event) => {
      const detail = (e as CustomEvent<QuoteDetail>).detail;
      setStatus('idle');
      setForm((f) => ({
        ...f,
        service: detail.service && serviceOptions.includes(detail.service) ? detail.service : f.service,
        message: detail.message ?? f.message
      }));
    };
    window.addEventListener(QUOTE_EVENT, onQuote);
    return () => window.removeEventListener(QUOTE_EVENT, onQuote);
  }, []);

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    const phone = form.phone.replace(/[\s-]/g, '');
    if (!phone) e.phone = 'Please enter your phone number.';else
    if (!/^(\+?254|0)[17]\d{8}$/.test(phone)) e.phone = 'Enter a valid Kenyan number, e.g. 0712 345 678.';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.';
    if (!form.service) e.service = 'Please choose a service.';
    return e;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus('submitting');
    window.setTimeout(() => setStatus('success'), 1200);
  };

  const border = (key: keyof FormState) =>
  errors[key] ? 'border-red-500 focus:border-red-500' : 'border-ink/15 focus:border-brand';

  return (
    <div className="relative rounded-3xl bg-white p-7 shadow-[0_24px_60px_rgba(34,34,34,0.10)] ring-1 ring-ink/[0.06] sm:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {status === 'success' ?
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: EASE_OUT }}
          className="flex min-h-[460px] flex-col items-center justify-center text-center"
          role="status">
          
            <CircleCheckIcon className="h-16 w-16 text-brand" aria-hidden />
            <h3 className="mt-6 font-display text-2xl font-extrabold text-ink">Thank you, {form.name.split(' ')[0]}!</h3>
            <p className="mt-3 max-w-sm leading-relaxed text-ink/70">
              Your quote request has been received. A Synowatt solar expert will contact you on {form.phone} shortly.
            </p>
            <button
            type="button"
            onClick={() => {
              setForm(empty);
              setStatus('idle');
            }}
            className={`${buttonClasses('outline', 'md')} mt-8`}>
            
              Send another request
            </button>
          </motion.div> :

        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onSubmit={onSubmit}
          noValidate
          aria-label="Request a quote">
          
            <h3 className="font-display text-2xl font-extrabold text-ink">Request a Free Quote</h3>
            <p className="mt-2 text-ink/65">We usually respond within one business day.</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Full name" error={errors.name} htmlFor="name" required>
                <input id="name" autoComplete="name" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Jane Wanjiku" className={`${inputClass} ${border('name')}`} aria-invalid={!!errors.name} />
              </Field>
              <Field label="Phone number" error={errors.phone} htmlFor="phone" required>
                <input id="phone" type="tel" autoComplete="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="0712 345 678" className={`${inputClass} ${border('phone')}`} aria-invalid={!!errors.phone} />
              </Field>
              <Field label="Email" error={errors.email} htmlFor="email" optional>
                <input id="email" type="email" autoComplete="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" className={`${inputClass} ${border('email')}`} aria-invalid={!!errors.email} />
              </Field>
              <Field label="Service required" error={errors.service} htmlFor="service" required>
                <select id="service" value={form.service} onChange={(e) => update('service', e.target.value)} className={`${inputClass} ${border('service')} ${form.service ? '' : 'text-ink/40'}`} aria-invalid={!!errors.service}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((s) =>
                <option key={s} value={s} className="text-ink">
                      {s}
                    </option>
                )}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field label="Message" htmlFor="message" optional>
                  <textarea id="message" rows={4} value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Tell us about your property and the appliances you’d like to power." className={`${inputClass} ${border('message')} resize-none`} />
                </Field>
              </div>
            </div>

            <button type="submit" disabled={status === 'submitting'} className={`${buttonClasses('primary', 'lg')} mt-8 w-full`}>
              {status === 'submitting' ?
            <>
                  <LoaderCircleIcon className="h-5 w-5 animate-spin" aria-hidden />
                  Sending…
                </> :

            <>
                  Request a Quote
                  <SendIcon className="h-4 w-4" aria-hidden />
                </>
            }
            </button>
          </motion.form>
        }
      </AnimatePresence>
    </div>);

}

interface FieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
}

function Field({ label, htmlFor, error, required, optional, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-accent"> *</span>}
        {optional && <span className="font-normal text-ink/50"> (optional)</span>}
      </label>
      {children}
      {error &&
      <p className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      }
    </div>);

}