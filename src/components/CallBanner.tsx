import { Phone } from 'lucide-react';
import { siteConfig } from '../config/site';

export function CallBanner() {
  const { business } = siteConfig;

  return (
    <section className="call-banner">
      <div className="call-banner__inner">
        <div className="call-banner__text">
          <h3>Stranded? Don't wait.</h3>
          <p>One call and we're on our way — 24/7.</p>
        </div>
        <a href={`tel:${business.phone}`} className="btn btn--call btn--large">
          <Phone size={22} />
          <span>Call {business.phoneDisplay}</span>
        </a>
      </div>
    </section>
  );
}
