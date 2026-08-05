import { Phone, ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/site';
import { usePhoto } from '../hooks/usePhoto';

export function Hero() {
  const { hero, business } = siteConfig;
  const photo = usePhoto(hero.imageQuery, 'landscape');

  return (
    <section className="hero" id="top">
      <div className="hero__overlay" />
      {photo && <img src={photo} alt="" className="hero__bg" loading="eager" />}
      <div className="hero__content">
        <p className="hero__tagline">{business.tagline}</p>
        <h1 className="hero__headline">{hero.headline}</h1>
        <p className="hero__subheadline">{hero.subheadline}</p>
        <p className="hero__description">{hero.description}</p>
        <div className="hero__actions">
          <a href={`tel:${business.phone}`} className="btn btn--call btn--large">
            <Phone size={22} />
            <span>Call {business.phoneDisplay}</span>
          </a>
          <a href="#services" className="btn btn--secondary btn--large">
            <span>Our Services</span>
            <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
