import { motion, useReducedMotion } from 'motion/react'
import { BentoCard } from '../components/BentoCard'
import { Hero } from '../components/Hero'
import { PhotoCard } from '../components/PhotoCard'
import { ToolsMarquee } from '../components/ToolsMarquee'
import { content } from '../data/content'

/** Route page shell — absolute so enter/exit can overlap during transitions. */
const pageClass =
  'no-scrollbar absolute inset-0 z-10 overflow-y-auto px-4 pt-4 pb-4 md:overflow-hidden md:px-5 md:pt-5 md:pb-5'

export function Home() {
  const reduce = useReducedMotion()

  const variants = reduce
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } }
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={pageClass}
    >
      <Hero />

      <main className="relative z-10 mt-8 grid grid-cols-1 gap-4 md:absolute md:inset-x-5 md:top-[22%] md:bottom-5 md:mt-0 md:grid-cols-12 md:grid-rows-2">
        <BentoCard
          label="About"
          to="/about"
          layoutId={reduce ? undefined : 'about-card'}
          className="min-h-[180px] md:col-span-3 md:min-h-0"
        />

        <BentoCard
          label="Projects"
          to="/projects"
          layoutId={reduce ? undefined : 'projects-card'}
          className="min-h-[180px] md:col-span-9 md:min-h-0"
        />

        <BentoCard
          label="Contact"
          to={content.links.contact}
          layoutId={reduce ? undefined : 'contact-card'}
          className="min-h-[180px] md:col-span-6 md:min-h-0"
        />

        <PhotoCard
          to={content.links.blog}
          layoutId={reduce ? undefined : 'blog-card'}
          className="aspect-[4/5] min-h-[180px] md:col-span-3 md:aspect-auto md:min-h-0"
        />

        <div className="grid min-h-[180px] grid-rows-2 gap-4 md:col-span-3 md:min-h-0">
          <BentoCard bare className="min-h-[180px] md:min-h-0">
            <ToolsMarquee />
          </BentoCard>
          <BentoCard
            label="Resume"
            href={content.links.resume}
            className="min-h-[180px] md:min-h-0"
          />
        </div>
      </main>
    </motion.div>
  )
}
