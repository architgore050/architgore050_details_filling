import Hero from '../sections/Hero';
import Intro from '../sections/Intro';
import CurrentProjects from '../sections/CurrentProjects';
import FuturePlans from '../sections/FuturePlans';
import ContactSection from '../sections/ContactSection';

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <CurrentProjects />
      <FuturePlans />
      <ContactSection />
    </>
  );
}

export default Home;