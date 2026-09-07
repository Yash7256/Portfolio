import BackgroundGrid from './components/BackgroundGrid';
import ProfileHeader from './components/ProfileHeader';
import BioSection from './components/BioSection';
import ActionButtons from './components/ActionButtons';
import SocialLinks from './components/SocialLinks';
import ContributionGraph from './components/ContributionGraph';
import ProjectsSection from './components/ProjectsSection';
import FoundersNote from './components/FoundersNote';
import SkillsSection from './components/SkillsSection';
import BlogSection from './components/BlogSection';
import './styles/portfolio.css';

function App() {
  return (
    <div className="page-canvas">
      <BackgroundGrid />
      <div className="content-frame">
        <main className="profile-container">
          <ProfileHeader />
          <BioSection />
          <ActionButtons />
          <SocialLinks />
          <ContributionGraph />
          <ProjectsSection />
          <FoundersNote />
          <SkillsSection />
          <BlogSection />
        </main>
      </div>
    </div>
  );
}

export default App;
