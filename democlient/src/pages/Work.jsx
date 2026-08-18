import PageHeader from '../components/PageHeader';
import WorkSection from '../sections/WorkSection';

function Work() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Work we're proud to show."
        desc="A mix of shipped startup software and projects where we went deeper on the parts of engineering we care about most."
      />
      <WorkSection />
    </>
  );
}

export default Work;