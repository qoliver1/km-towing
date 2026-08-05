import { Phone, Check } from 'lucide-react';
import { siteConfig } from '../config/site';
import { usePhoto } from '../hooks/usePhoto';

export function Services() {
  const { services, business } = siteConfig;

  return (
    <section className="section section--light" id="services">
      <div className="section__header">
        <h2 className="section__title">Our Services</h2>
        <p className="section__subtitle">From light vehicles to heavy duty — one call handles it all.</p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} phone={business.phone} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service, phone }: { service: typeof siteConfig.services[number]; phone: string }) {
  const photo = usePhoto(service.imageQuery, 'landscape');

  return (
    <div className="service-card">
      <div className="service-card__image">
        {photo && <img src={photo} alt={service.title} loading="lazy" />}
      </div>
      <div className="service-card__body">
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__desc">{service.description}</p>
        <ul className="service-card__features">
          {service.features.map((f) => (
            <li key={f}>
              <Check size={16} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <a href={`tel:${phone}`} className="btn btn--call service-card__cta">
          <Phone size={18} />
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
}
