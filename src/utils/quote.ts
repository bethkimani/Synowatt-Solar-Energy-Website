export const QUOTE_EVENT = 'synowatt:quote';

export interface QuoteDetail {
  service?: string;
  message?: string;
}

export function requestQuote(detail: QuoteDetail = {}): void {
  window.dispatchEvent(new CustomEvent<QuoteDetail>(QUOTE_EVENT, { detail }));
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}