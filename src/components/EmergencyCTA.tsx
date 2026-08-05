import { Phone } from 'lucide-react';
import { siteConfig } from '../config/site';
import { usePhoto } from '../hooks/usePhoto';

export function EmergencyCTA() {
  const { business } = siteConfig;
  const photo = usePhoto('tow truck at night with lights on highway', 'landscape');

  return (
    <section className="emergency-cta">
      <div className="emergency-cta__overlay" />
      {photo && <img src={photo} alt="" className="emergency-cta__bg" loading="lazy" />}
      <div className="emergency-cta__content">
        <h2 className="emergency-cta__headline">Need Help Right Now?</h2>
        <p className="emergency-cta__subtext">{business.hours}</p>
        <a href={`tel:${business.phone}`} className="btn btn--call btn--xlarge emergency-cta__btn">
          <Phone size={28} />
          <span>{business.phoneDisplay}</span>
        </a>
      </div>
    </section>
  );
}
