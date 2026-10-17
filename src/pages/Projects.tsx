import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Hero } from '../components/Hero'
import { ProjectGrid } from '../components/ProjectGrid'

/** Route page shell — scrolls vertically when the grid overflows. */
const pageClass =
  'no-scrollbar absolute inset-0 z-10 flex flex-col overflow-y-auto px-4 pt-4 pb-4 md:px-5 md:pt-5 md:pb-5'

function BackPill() {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[12px] tracking-[0.08em] text-white/75 uppercase backdrop-blur transition-colors duration-200 hover:bg-white/[0.09] hover:text-white focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:outline-none"
    >
      <ArrowLeft aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
      Home
    </Link>
  )
}

export function Projects() {
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
      <div className="flex w-full flex-1 flex-col">
        <Hero
          label="Projects"
          action={<BackPill />}
          inFlow
          hideReflection
          top="clamp(36px, 5.5vh, 72px)"
        />

        <main className="relative z-10 mt-6 md:mt-8 lg:mt-10">
          <ProjectGrid featuredLayoutId={reduce ? undefined : 'projects-card'} />
        </main>
      </div>
    </motion.div>
  )
}
