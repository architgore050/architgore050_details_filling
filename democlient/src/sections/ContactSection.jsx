import { ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import { site } from '../data/site';

function ContactSection() {
  const { contact } = site;

  return (
    <section className="section section--alt contact">
      <div className="container">
        <Reveal>
          <span className="eyebrow eyebrow--center contact__eyebrow">Contact</span>
          <h2 className="contact__title">
            Looking for engineers who are still learning? <em>Good.</em> So are we.
          </h2>
          <p className="contact__copy">
            We're just unusually serious about what we build next.
          </p>
          <div className="contact__ctas">
            <a href={`mailto:${contact.email}`} className="btn btn--solid">
              Let's build something
              <ArrowRight size={16} className="btn-arrow" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="contact__links">
            <a href={`mailto:${contact.email}`} className="contact__link">
              <span className="contact__link-label">Email</span>
              <span className="contact__link-value">{contact.email}</span>
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact__link">
              <span className="contact__link-label">GitHub</span>
              <span className="contact__link-value">Our repos</span>
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact__link">
              <span className="contact__link-label">LinkedIn</span>
              <span className="contact__link-value">Connect with us</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ContactSection;