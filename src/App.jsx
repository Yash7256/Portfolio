import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
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

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);
  useSmoothScroll();

  useGSAP(
    () => {
      // Respect accessibility settings
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      // 1. Initial Load Hero / Profile Entrance Timeline
      const introTl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.7 } });

      introTl
        .from('.avatar', { scale: 0.85, opacity: 0, duration: 0.6 })
        .from('.name', { y: 16, opacity: 0 }, '-=0.4')
        .from('.header-actions', { opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.bio p', { y: 14, opacity: 0, stagger: 0.1 }, '-=0.3')
        .from('.actions .button', { y: 12, opacity: 0, stagger: 0.08 }, '-=0.2')
        .from('.social-pill', { scale: 0.9, opacity: 0, stagger: 0.04 }, '-=0.2')
        .from('.contribution-section', { y: 18, opacity: 0, duration: 0.6 }, '-=0.2');

      // 2. Parallax Drift on Background Grid
      gsap.to('.background-grid', {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: '.page-canvas',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.6,
        },
      });

      // 3. Projects Section Reveal
      gsap.from('.projects-card', {
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-section',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // 4. Founder's Note Reveal
      gsap.from('.founders-note-card', {
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.founders-note-section',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // 5. Skills Section Cascade
      gsap.from('.skills-card', {
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.skills-section',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.skill-pill', {
        scale: 0.88,
        opacity: 0,
        duration: 0.35,
        stagger: {
          amount: 0.45,
          from: 'start',
        },
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: '.skills-card',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // 6. Blog Articles Reveal
      gsap.from('.blog-item', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.blog-card',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="page-canvas" ref={containerRef}>
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
