import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroVisual from '../components/HeroVisual';
import Reveal from '../components/Reveal';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <Reveal>
            <span className="eyebrow hero__eyebrow">
              2nd year engineers · built in the real world
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="hero__title">
              <span className="hero__title-line">Three engineers.</span>
              <span className="hero__title-line">One obsession:</span>
              <span className="hero__title-line">
                <span className="accent">building software</span> that works.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="hero__copy">
              We are <strong>Tathagato, Archit, and Devansh</strong> — three 2nd-year CSE students
              working across <strong>frontend</strong>, <strong>AI</strong>, and{' '}
              <strong>backend engineering</strong>. We have already worked together on real startup
              software through <strong>ZITO Logistics</strong> — designing interfaces, investigating
              production issues, testing systems, and solving real engineering problems.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="hero__ctas">
              <Link to="/team" className="btn btn--solid">
                Meet the team
                <ArrowRight size={16} className="btn-arrow" />
              </Link>
              <Link to="/work" className="btn btn--ghost">
                See our work
                <ArrowRight size={16} className="btn-arrow" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="hero__meta">
              <div className="hero__meta-item">
                <span className="hero__meta-label">Team</span>
                <span className="hero__meta-value">3 engineers</span>
              </div>
              <div className="hero__meta-item">
                <span className="hero__meta-label">Disciplines</span>
                <span className="hero__meta-value">Frontend · AI/ML · Backend</span>
              </div>
              <div className="hero__meta-item">
                <span className="hero__meta-label">Experience</span>
                <span className="hero__meta-value">ZITO Logistics</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;