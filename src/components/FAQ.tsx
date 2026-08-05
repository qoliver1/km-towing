import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '../config/site';

export function FAQ() {
  const { faqs } = siteConfig;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section section--light" id="faq">
      <div className="section__header">
        <h2 className="section__title">Frequently Asked Questions</h2>
        <p className="section__subtitle">Quick answers to common questions.</p>
      </div>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div key={i} className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`}>
            <button
              className="faq-item__question"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
            >
              <span>{faq.question}</span>
              <ChevronDown
                size={22}
                className={`faq-item__chevron ${openIndex === i ? 'faq-item__chevron--open' : ''}`}
              />
            </button>
            {openIndex === i && (
              <div className="faq-item__answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
