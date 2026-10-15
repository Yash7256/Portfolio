import { AnimatePresence } from 'motion/react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { TopBar } from './components/TopBar'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'
import { Blog } from './pages/Blog'
import { BlogPost } from './pages/BlogPost'

export default function App() {
  const location = useLocation()

  return (
    <div className="relative mx-auto h-dvh w-full max-w-[1600px] overflow-hidden bg-bg">
      <TopBar />

      <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}
