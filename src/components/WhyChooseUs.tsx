import { Clock, Zap, MapPin, Wrench, Users, Phone } from 'lucide-react';
import { siteConfig } from '../config/site';

const iconMap = [Clock, Zap, MapPin, Wrench, Users, Phone];

export function WhyChooseUs() {
  const { trustPoints } = siteConfig;

  return (
    <section className="section section--dark" id="why-choose-us">
      <div className="section__header">
        <h2 className="section__title">Why Choose K&M</h2>
        <p className="section__subtitle">The people who show up when you need them most.</p>
      </div>
      <div className="trust-grid">
        {trustPoints.map((point, i) => {
          const Icon = iconMap[i % iconMap.length];
          return (
            <div key={point.title} className="trust-card">
              <div className="trust-card__icon">
                <Icon size={28} />
              </div>
              <h3 className="trust-card__title">{point.title}</h3>
              <p className="trust-card__desc">{point.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
