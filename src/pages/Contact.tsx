import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Hero } from '../components/Hero'
import { ContactForm } from '../components/ContactForm'
import { EmailCard } from '../components/EmailCard'
import { SocialsCard } from '../components/SocialsCard'
import { LocationCard } from '../components/LocationCard'
import { AvailabilityCard } from '../components/AvailabilityCard'

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

export function Contact() {
  const reduce = useReducedMotion()

  const variants = reduce
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } }
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }

  const stagger = reduce
    ? undefined
    : {
        animate: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
      }

  const item = reduce
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 12 },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          },
        },
      }

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={pageClass}
    >
      <Hero label="Contact" action={<BackPill />} />

      <motion.main
        variants={stagger}
        className="relative z-10 mt-8 grid grid-cols-1 gap-4 md:absolute md:inset-x-5 md:top-[22%] md:bottom-5 md:mt-0 md:grid-cols-12 md:grid-rows-2"
      >
        <motion.div
          variants={item}
          className="order-2 md:order-1 md:col-span-7"
        >
          <ContactForm
            layoutId={reduce ? undefined : 'contact-card'}
            className="h-full min-h-[360px] md:min-h-0"
          />
        </motion.div>

        <motion.div
          variants={item}
          className="order-1 md:order-2 md:col-span-5"
        >
          <EmailCard className="h-full min-h-[160px] md:min-h-0" />
        </motion.div>

        <motion.div variants={item} className="order-3 md:col-span-4">
          <SocialsCard className="h-full min-h-[200px] md:min-h-0" />
        </motion.div>

        <motion.div variants={item} className="order-4 md:col-span-4">
          <LocationCard className="h-full min-h-[180px] md:min-h-0" />
        </motion.div>

        <motion.div variants={item} className="order-5 md:col-span-4">
          <AvailabilityCard className="h-full min-h-[180px] md:min-h-0" />
        </motion.div>
      </motion.main>
    </motion.div>
  )
}
