import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import MotionLoader from './components/MotionLoader';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));
const Experience = lazy(() => import('./pages/Experience'));
const Contact = lazy(() => import('./pages/Contact'));

// Lazy load PageTransition with a named export for React.lazy
const PageTransition = lazy(() => import('./components/PageTransition'));

function AnimatedRoutes() {
  const location = useLocation();

  const renderRoute = (path: string, Component: React.ComponentType) => (
    <Route 
      key={path}
      path={path}
      element={
        <Suspense fallback={<MotionLoader />}>
          <LazyMotion features={domAnimation}>
            <PageTransition>
              <Component />
            </PageTransition>
          </LazyMotion>
        </Suspense>
      }
    />
  );

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        {renderRoute("/", Home)}
        {renderRoute("/about", About)}
        {renderRoute("/skills", Skills)}
        {renderRoute("/projects", Projects)}
        <Route 
          path="/projects/:id"
          element={
            <Suspense fallback={<MotionLoader />}>
              <LazyMotion features={domAnimation}>
                <PageTransition>
                  <ProjectDetails />
                </PageTransition>
              </LazyMotion>
            </Suspense>
          }
        />
        {renderRoute("/experience", Experience)}
        {renderRoute("/contact", Contact)}
      </Routes>
    </AnimatePresence>
  );
}

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
          <Suspense fallback={<MotionLoader />}>
            <AnimatedRoutes />
          </Suspense>
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;