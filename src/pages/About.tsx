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
import { about } from '../data/about'

/** Route page shell — absolute so enter/exit can overlap during transitions.
 *  Flex column: the hero keeps its own row and the grid fills the rest. */
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
      <div className="flex w-full flex-1 flex-col">
        <Hero
          label="About"
          action={<BackPill />}
          inFlow
          hideReflection
          top="clamp(36px, 5.5vh, 72px)"
        />

        <main className="relative z-10 mt-6 grid w-full grid-cols-1 items-stretch gap-3 md:mt-8 md:grid-cols-2 lg:mt-10 lg:flex-1 lg:grid-cols-12 lg:grid-rows-[auto_minmax(min-content,1fr)]">
          <div className="grid gap-3 md:col-span-2 lg:col-span-7 lg:grid-rows-[minmax(0,1fr)_minmax(120px,auto)_auto]">
            <BioCard
              layoutId={reduce ? undefined : 'about-card'}
              className="min-h-[160px] lg:min-h-0"
            />
            <StatsCard className="min-h-[120px] lg:min-h-0" />
            <ExperienceCard className="min-h-[180px] lg:min-h-0" />
          </div>

          <PhotoCard
            parallax
            links={about.links}
            className="aspect-[4/5] min-h-[220px] md:col-span-1 md:aspect-auto md:min-h-0 lg:col-span-5"
          />

          <SkillsCard className="min-h-[220px] md:col-span-1 lg:col-span-12" />
        </main>
      </div>
    </motion.div>
  )
}
