import { Link } from 'react-router-dom';
import { site } from '../data/site';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Link to="/" className="footer__wordmark">
          Engineered<span> to</span> Build
        </Link>
        <p className="footer__copy">
          &copy; {year} Tathagato Chatterjee · Archit Sandeep Gore · Devansh Gaur
        </p>
        <div className="footer__links">
          {site.nav.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;