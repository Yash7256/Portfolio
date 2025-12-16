import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { Home as HomeIcon, User, Code, Briefcase, Mail, BookOpen, ArrowUpRight } from 'lucide-react';
import { FloatingNav } from './components/ui/floating-navbar';
import CustomCursor from './components/CustomCursor';

// Lazy load pages
const HomePage = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));
const Experience = lazy(() => import('./pages/Experience'));
const ExperienceDetail = lazy(() => import('./pages/ExperienceDetail'));
const Contact = lazy(() => import('./pages/Contact'));

// Lazy load PageTransition with a named export for React.lazy
const PageTransition = lazy(() => import('./components/PageTransition'));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <Suspense fallback={null}>
            <LazyMotion features={domAnimation}>
              <PageTransition>
                <HomePage />
              </PageTransition>
            </LazyMotion>
          </Suspense>
        } />
        <Route path="/about" element={
          <Suspense fallback={null}>
            <LazyMotion features={domAnimation}>
              <PageTransition>
                <About />
              </PageTransition>
            </LazyMotion>
          </Suspense>
        } />
        <Route path="/skills" element={
          <Suspense fallback={null}>
            <LazyMotion features={domAnimation}>
              <PageTransition>
                <Skills />
              </PageTransition>
            </LazyMotion>
          </Suspense>
        } />
        <Route path="/projects" element={
          <Suspense fallback={null}>
            <LazyMotion features={domAnimation}>
              <PageTransition>
                <Projects />
              </PageTransition>
            </LazyMotion>
          </Suspense>
        } />
        <Route path="/projects/:id" element={
          <Suspense fallback={null}>
            <LazyMotion features={domAnimation}>
              <PageTransition>
                <ProjectDetails />
              </PageTransition>
            </LazyMotion>
          </Suspense>
        } />
        <Route path="/experience" element={
          <Suspense fallback={null}>
            <LazyMotion features={domAnimation}>
              <PageTransition>
                <Experience />
              </PageTransition>
            </LazyMotion>
          </Suspense>
        } />
        <Route path="/experience/:id" element={
          <Suspense fallback={null}>
            <LazyMotion features={domAnimation}>
              <PageTransition>
                <ExperienceDetail />
              </PageTransition>
            </LazyMotion>
          </Suspense>
        } />
        <Route path="/contact" element={
          <Suspense fallback={null}>
            <LazyMotion features={domAnimation}>
              <PageTransition>
                <Contact />
              </PageTransition>
            </LazyMotion>
          </Suspense>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [loading, setLoading] = React.useState(true);
  const [cursorStyle, setCursorStyle] = React.useState<'default' | 'minimal' | 'ring' | 'trailing' | 'neon'>('default');

  // Check if device is touch-enabled (smartphone/tablet)
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), isTouchDevice ? 500 : 2000);
    return () => clearTimeout(timer);
  }, [isTouchDevice]);

  // Allow changing cursor style via URL parameter for demo purposes
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const styleParam = urlParams.get('cursor');
    
    if (styleParam && ['default', 'minimal', 'ring', 'trailing', 'neon'].includes(styleParam)) {
      setCursorStyle(styleParam as any);
    }
  }, []);

  if (loading) {
    return null;
  }

  const navItems = [
    { name: 'Home', link: '/', icon: <HomeIcon className="w-4 h-4" /> },
    { name: 'About', link: '/about', icon: <User className="w-4 h-4" /> },
    { name: 'Experience', link: '/experience', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Skills', link: '/skills', icon: <Code className="w-4 h-4" /> },
    { name: 'Projects', link: '/projects', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Contact', link: '/contact', icon: <Mail className="w-4 h-4" /> },
    { name: 'Blog', link: 'https://amanraj-blog.vercel.app/', icon: <ArrowUpRight className="w-4 h-4" /> },
  ];

  return (
    <React.StrictMode>
      <Router>
        <div className="relative min-h-screen overflow-x-hidden">
          <CustomCursor style={cursorStyle} />
          <FloatingNav navItems={navItems} />
          <div className="pt-4 sm:pt-5 md:pt-6">
            <Suspense fallback={null}>
              <AnimatedRoutes />
            </Suspense>
          </div>
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;