import Reveal from '../components/Reveal';

const values = [
  {
    index: '01',
    title: 'Usability',
    text: 'Interfaces that make sense to the person using them.',
  },
  {
    index: '02',
    title: 'Reliability',
    text: 'Systems that behave predictably when it matters.',
  },
  {
    index: '03',
    title: 'Debugging',
    text: 'Finding why something broke — not just that it broke.',
  },
  {
    index: '04',
    title: 'Experimentation',
    text: 'Trying things, breaking them, and learning faster.',
  },
  {
    index: '05',
    title: 'Scalable architecture',
    text: 'Code that stays clean as the problem gets bigger.',
  },
  {
    index: '06',
    title: 'Real-world engineering',
    text: 'Working software, with real users, under real pressure.',
  },
];

function Intro() {
  return (
    <section className="section intro">
      <div className="container">
        <Reveal>
          <p className="intro__statement">
            We don't build projects to put on a resume. We build systems to understand{' '}
            <em>how software actually works.</em>
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="intro__values">
            {values.map((value) => (
              <div className="intro__value" key={value.index}>
                <div className="intro__value-index">{value.index}</div>
                <div className="intro__value-title">{value.title}</div>
                <p className="intro__value-text">{value.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Intro;