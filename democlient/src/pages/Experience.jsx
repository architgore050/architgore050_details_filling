import PageHeader from '../components/PageHeader';
import ZitoExperience from '../sections/ZitoExperience';

function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Real software, before the degree."
        desc="ZITO Logistics gave us exposure to a real startup product. Here is what each of us actually did there."
      />
      <ZitoExperience />
    </>
  );
}

export default Experience;