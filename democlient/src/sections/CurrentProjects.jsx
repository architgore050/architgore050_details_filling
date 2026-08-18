import Reveal from '../components/Reveal';
import { currentProjects } from '../data/currentProjects';

function CurrentProjects() {
  return (
    <section className="section section--alt current">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">In progress</span>
            <h2 className="section-heading__title">Still building.</h2>
            <p className="section-heading__desc">
              ZITO taught us what it takes. What we are building next is where it shows.
            </p>
          </div>
        </Reveal>

        <div className="current-list">
          {currentProjects.map((project, index) => (
            <Reveal key={project.index} delay={index * 0.08}>
              <article className="current-item">
                <div className="current-item__index">{project.index}</div>
                <div>
                  <h3 className="current-item__title">{project.title}</h3>
                  <span className="current-item__status">
                    <span className="inprogress-tag">{project.status}</span>
                  </span>
                  <p className="current-item__desc">{project.description}</p>
                </div>
                <span className="current-item__notes">{project.notes}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CurrentProjects;