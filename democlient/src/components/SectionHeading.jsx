import Reveal from './Reveal';

function SectionHeading({ eyebrow, title, desc, align = 'left', id }) {
  return (
    <Reveal
      id={id}
      className={`section-heading ${align === 'center' ? 'section-heading--center' : ''}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2 className="section-heading__title">{title}</h2>}
      {desc && <p className="section-heading__desc">{desc}</p>}
    </Reveal>
  );
}

export default SectionHeading;