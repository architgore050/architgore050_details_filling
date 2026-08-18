import Reveal from '../components/Reveal';
import { futurePlans } from '../data/currentProjects';

function FuturePlans() {
  return (
    <section className="section future">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">What's next</span>
            <h2 className="section-heading__title">The direction we're heading.</h2>
            <p className="section-heading__desc">
              Ambitious, but grounded in what we have actually built so far.
            </p>
          </div>
        </Reveal>

        <div className="future__list">
          {futurePlans.map((plan, index) => (
            <Reveal key={plan} delay={index * 0.05}>
              <div className="future__item">
                <span className="future__marker">{String(index + 1).padStart(2, '0')}</span>
                <p className="future__item-text">{plan}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FuturePlans;