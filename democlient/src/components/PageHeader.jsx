import Reveal from './Reveal';

function PageHeader({ eyebrow, title, desc }) {
  return (
    <div className="page-header">
      <div className="container">
        <Reveal>
          <span className="eyebrow page-header__eyebrow">{eyebrow}</span>
          <h1 className="page-header__title">{title}</h1>
          {desc && <p className="page-header__desc">{desc}</p>}
        </Reveal>
      </div>
    </div>
  );
}

export default PageHeader;