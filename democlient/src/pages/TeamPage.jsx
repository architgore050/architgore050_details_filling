import PageHeader from '../components/PageHeader';
import TeamSection from '../sections/TeamSection';

function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="The people behind the build."
        desc="Two years in, already shipping real software. Here's who does what."
      />
      <TeamSection />
    </>
  );
}

export default TeamPage;