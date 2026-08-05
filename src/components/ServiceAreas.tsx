import { MapPin } from 'lucide-react';
import { siteConfig } from '../config/site';

export function ServiceAreas() {
  const { serviceAreas } = siteConfig;

  return (
    <section className="section section--light" id="service-areas">
      <div className="section__header">
        <h2 className="section__title">Service Areas</h2>
        <p className="section__subtitle">Proudly serving Minneapolis and surrounding communities.</p>
      </div>
      <div className="areas-grid">
        {serviceAreas.map((area) => (
          <div key={area.name} className="area-chip">
            <MapPin size={18} />
            <span>{area.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
