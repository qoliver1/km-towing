import { Phone, Clock, MapPin, Truck } from 'lucide-react';
import { siteConfig } from '../config/site';

export function Footer() {
  const { business, serviceAreas } = siteConfig;

  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <div className="footer__col">
          <div className="footer__brand">
            <Truck className="footer__brand-icon" />
            <span>{business.name}</span>
          </div>
          <p className="footer__tagline">{business.tagline}</p>
          <p className="footer__owner">Owner-operated by {business.ownerName}</p>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Contact</h3>
          <a href={`tel:${business.phone}`} className="footer__contact-item">
            <Phone size={18} />
            <span>{business.phoneDisplay}</span>
          </a>
          <div className="footer__contact-item">
            <Clock size={18} />
            <span>{business.hours}</span>
          </div>
          <div className="footer__contact-item">
            <MapPin size={18} />
            <span>{business.serviceAreaSummary}</span>
          </div>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Service Areas</h3>
          <ul className="footer__area-list">
            {serviceAreas.slice(0, 6).map((area) => (
              <li key={area.name}>{area.name}</li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__link-list">
            <li><a href="#services">Services</a></li>
            <li><a href="#service-areas">Service Areas</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
