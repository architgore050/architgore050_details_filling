import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import { team } from '../data/team';

function TeamSection() {
  const [activeId, setActiveId] = useState(team[0].id);
  const tabRefs = useRef({});

  const activeMember = team.find((member) => member.id === activeId);

  const handleKeyDown = (e, index) => {
    let nextIndex = index;
    if (e.key === 'ArrowRight') nextIndex = (index + 1) % team.length;
    else if (e.key === 'ArrowLeft') nextIndex = (index - 1 + team.length) % team.length;
    else if (e.key === 'Home') nextIndex = 0;
    else if (e.key === 'End') nextIndex = team.length - 1;
    else return;

    e.preventDefault();
    setActiveId(team[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section className="section team">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">Team</span>
            <h2 className="section-heading__title">Three engineers, one standard.</h2>
            <p className="section-heading__desc">
              We came together at ZITO Logistics and kept going. Each of us owns a discipline; all of
              us ship together.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="team-tabs"
            role="tablist"
            aria-label="Team members"
            aria-orientation="horizontal"
          >
            {team.map((member, index) => {
              const isActive = member.id === activeId;
              return (
                <button
                  key={member.id}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  role="tab"
                  id={`team-tab-${member.id}`}
                  aria-selected={isActive}
                  aria-controls={`team-panel-${member.id}`}
                  tabIndex={isActive ? 0 : -1}
                  className={`team-tab ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveId(member.id)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                >
                  <span className="team-tab__index">{member.index}</span>
                  <span className="team-tab__name">{member.name}</span>
                  <span className="team-tab__role">{member.role}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div
            className="team-panel"
            role="tabpanel"
            id={`team-panel-${activeMember.id}`}
            aria-labelledby={`team-tab-${activeMember.id}`}
            key={activeMember.id}
          >
            <div className="team-panel__head">
              <div>
                <h3 className="team-panel__name">{activeMember.name}</h3>
                <span className="team-panel__role">{activeMember.role}</span>
              </div>
              <div className="team-panel__links">
                <a
                  href={activeMember.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-panel__link"
                >
                  GitHub <ArrowUpRight size={14} />
                </a>
                <a
                  href={activeMember.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-panel__link"
                >
                  LinkedIn <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <p className="team-panel__intro">{activeMember.intro}</p>

            <div className="team-panel__grid">
              <div className="team-panel__block">
                <h4 className="team-panel__block-label">What they work on</h4>
                <ul className="team-panel__list">
                  {activeMember.currentProjects.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="team-panel__block">
                <h4 className="team-panel__block-label">Strengths</h4>
                <ul className="team-panel__list">
                  {activeMember.strengths.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="team-panel__block">
                <h4 className="team-panel__block-label">At ZITO Logistics</h4>
                <p>{activeMember.zitoContribution}</p>
              </div>

              <div className="team-panel__block">
                <h4 className="team-panel__block-label">Technical interests</h4>
                <ul className="team-panel__list">
                  {activeMember.interests.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="team-panel__block">
                <h4 className="team-panel__block-label">Future direction</h4>
                <p>{activeMember.futureDirection}</p>
              </div>

              <div className="team-panel__block">
                <h4 className="team-panel__block-label">Tagline</h4>
                <p>{activeMember.tagline}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default TeamSection;