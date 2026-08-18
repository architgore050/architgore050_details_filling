import { ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import { projects } from '../data/projects';

function WorkSection() {
  return (
    <section className="section work">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">Work</span>
            <h2 className="section-heading__title">Selected work.</h2>
            <p className="section-heading__desc">
              Projects we have built together and as individuals — most recently on a live product at
              ZITO Logistics.
            </p>
          </div>
        </Reveal>

        <div className="work-list">
          {projects.map((project, index) => {
            const href = project.githubUrl || project.liveUrl;
            const label = project.githubUrl
              ? 'Source'
              : project.liveUrl
                ? 'Live'
                : 'Coming soon';

            return (
              <Reveal key={project.title} delay={index * 0.06}>
                <article className="work-item">
                  <div className="work-item__index">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="work-item__title">{project.title}</h3>
                    <p className="work-item__desc">{project.description}</p>
                  </div>
                  <div className="work-item__meta">
                    <span className="work-item__tech">
                      {project.technologies.join(' · ')}
                    </span>
                    <span className="work-item__year">{project.year}</span>
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-item__link"
                    >
                      View project <ArrowUpRight size={16} className="arrow" />
                    </a>
                  ) : (
                    <span className="work-item__link">{label}</span>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WorkSection;