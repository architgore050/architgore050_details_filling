import Reveal from '../components/Reveal';
import { zitoExperience } from '../data/experience';

function ZitoExperience() {
  return (
    <section className="section section--alt experience">
      <div className="container">
        <Reveal>
          <div className="experience__intro">
            <span className="eyebrow">Experience</span>
            <h2 className="section-heading__title" style={{ marginTop: 16 }}>
              From ZITO Logistics to our next breakthrough.
            </h2>
            <p className="section-heading__desc">
              ZITO Logistics is a real startup founded by our senior, Negi Bhaiya. We joined as a
              team and got our hands on a live product — not a classroom project. This is where we
              learned what it actually means to ship.
            </p>
          </div>
        </Reveal>

        {zitoExperience.map((item, index) => (
          <Reveal key={item.index} delay={index * 0.1}>
            <article className="experience__item">
              <div className="experience__index">{item.index}</div>
              <div>
                <div className="experience__role">{item.area}</div>
                <h3 className="experience__name">{item.name}</h3>
                <p className="experience__desc">{item.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default ZitoExperience;