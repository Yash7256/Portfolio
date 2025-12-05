import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import MotionLoader from './components/MotionLoader';
import Navigation from './components/Navigation';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
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
          <Suspense fallback={<MotionLoader />}>
            <LazyMotion features={domAnimation}>
              <PageTransition>
                <Home />
              </PageTransition>
            </LazyMotion>
          </Suspense>
        } />
        <Route path="/about" element={
          <Suspense fallback={<MotionLoader />}>
            <LazyMotion features={domAnimation}>
              <PageTransition>
                <About />
              </PageTransition>
            </LazyMotion>
          </Suspense>
        } />
        <Route path="/skills" element={
          <Suspense fallback={<MotionLoader />}>
            <LazyMotion features={domAnimation}>
              <PageTransition>
                <Skills />
              </PageTransition>
            </LazyMotion>
          </Suspense>
        } />
        <Route path="/projects" element={
          <Suspense fallback={<MotionLoader />}>
            <LazyMotion features={domAnimation}>
              <PageTransition>
                <Projects />
              </PageTransition>
            </LazyMotion>
          </Suspense>
        } />
        <Route path="/projects/:id" element={
          <Suspense fallback={<MotionLoader />}>
            <LazyMotion features={domAnimation}>
              <PageTransition>
                <ProjectDetails />
              </PageTransition>
            </LazyMotion>
          </Suspense>
        } />
        <Route path="/experience" element={
          <Suspense fallback={<MotionLoader />}>
            <LazyMotion features={domAnimation}>
              <PageTransition>
                <Experience />
              </PageTransition>
            </LazyMotion>
          </Suspense>
        } />
        <Route path="/experience/:id" element={
          <Suspense fallback={<MotionLoader />}>
            <LazyMotion features={domAnimation}>
              <PageTransition>
                <ExperienceDetail />
              </PageTransition>
            </LazyMotion>
          </Suspense>
        } />
        <Route path="/contact" element={
          <Suspense fallback={<MotionLoader />}>
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

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <MotionLoader />;
  }

  return (
    <React.StrictMode>
      <Router>
        <div className="relative min-h-screen overflow-x-hidden bg-[#0a0a0f] text-white">
          <Navigation />
          <div className="pt-20"> {/* Add padding to account for fixed navigation */}
            <Suspense fallback={<MotionLoader />}>
              <AnimatedRoutes />
            </Suspense>
          </div>
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;