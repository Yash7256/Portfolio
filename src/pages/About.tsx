import { useEffect } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Hero } from '../components/Hero'
import { PhotoCard } from '../components/PhotoCard'
import { BioCard } from '../components/BioCard'
import { StatsCard } from '../components/StatsCard'
import { ExperienceCard } from '../components/ExperienceCard'
import { SkillsCard } from '../components/SkillsCard'
import { LinksCard } from '../components/LinksCard'

/** Route page shell — absolute so enter/exit can overlap during transitions. */
const pageClass =
  'no-scrollbar absolute inset-0 z-10 overflow-y-auto px-4 pt-4 pb-4 md:overflow-hidden md:px-5 md:pt-5 md:pb-5'

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

export function About() {
  const reduce = useReducedMotion()

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'About · Aman Raj'
    return () => {
      document.title = previousTitle
    }
  }, [])

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
      <Hero label="About" action={<BackPill />} compactReflection />

      <main className="relative z-10 mt-8 grid grid-cols-1 gap-4 md:absolute md:inset-x-5 md:top-[22%] md:bottom-5 md:mt-0 md:grid-cols-12 md:grid-rows-2">
        <BioCard
          layoutId={reduce ? undefined : 'about-card'}
          className="min-h-[200px] md:col-span-7 md:min-h-0"
        />

        <PhotoCard
          parallax
          className="aspect-[4/5] min-h-[200px] md:col-span-5 md:aspect-auto md:min-h-0"
        />

        <div className="grid min-h-[180px] grid-rows-2 gap-4 md:col-span-3 md:min-h-0">
          <StatsCard className="min-h-[120px] md:min-h-0" />
          <LinksCard className="min-h-[120px] md:min-h-0" />
        </div>

        <ExperienceCard className="min-h-[180px] md:col-span-5 md:min-h-0" />

        <SkillsCard className="min-h-[300px] md:col-span-4 md:min-h-0" />
      </main>
    </motion.div>
  )
}
