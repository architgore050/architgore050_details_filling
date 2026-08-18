import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css';

function Layout() {
  const location = useLocation();

  return (
    <div className="app">
      <Navbar />
      <main key={location.pathname} className="page-enter">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;