import { motion, useReducedMotion } from 'motion/react'
import { content } from '../data/content'

const NAME = content.name

/** Shared type treatment so the mirror copy lines up exactly with the name. */
const nameType =
  'block text-center font-medium leading-[0.85] tracking-[-0.02em] text-[clamp(56px,12.5vw,176px)]'

const heroTop = 'clamp(56px, 8vh, 96px)'

interface HeroProps {
  /** Large display word. Defaults to the site name on the home route. */
  label?: string
  /** Optional control (e.g. a back pill) pinned to the hero's top-left. */
  action?: React.ReactNode
  /**
   * Clips the mirror to a short ~60px strip with a full fade — used on pages
   * where body content sits directly beneath the hero (e.g. About's bio).
   */
  compactReflection?: boolean
}

/**
 * Oversized hero name. On desktop the main layer sits behind the cards (z-0)
 * and a blurred, vertically flipped mirror copy sits just below it on top of
 * the cards (z-20). On mobile it flows in-document above the stack.
 */
export function Hero({ label = NAME, action, compactReflection = false }: HeroProps) {
  const reduce = useReducedMotion()

  const enter = reduce
    ? ({ initial: false as const } satisfies object)
    : { initial: { opacity: 0, y: 24, filter: 'blur(14px)' } }

  return (
    <section
      aria-label="Introduction"
      className="pointer-events-none relative z-0 select-none px-4 md:absolute md:inset-x-0 md:top-0 md:z-auto md:px-6"
      style={{ paddingTop: heroTop }}
    >
      {action ? (
        <div
          className="pointer-events-auto absolute left-0 z-30 -translate-y-1/2 md:left-6"
          style={{ top: `calc(${heroTop} + 0.5em)` }}
        >
          {action}
        </div>
      ) : null}

      <motion.h1
        {...enter}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`relative z-0 ${nameType}`}
      >
        {label}
      </motion.h1>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-full z-20 hidden md:block ${
          compactReflection ? 'h-[56px] overflow-hidden' : ''
        }`}
      >
        <motion.div
          {...enter}
          animate={{ opacity: 0.4, y: 0, filter: 'blur(12px)' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            maskImage: compactReflection
              ? 'linear-gradient(to bottom, black, transparent 100%)'
              : 'linear-gradient(to bottom, black, transparent 60%)',
            WebkitMaskImage: compactReflection
              ? 'linear-gradient(to bottom, black, transparent 100%)'
              : 'linear-gradient(to bottom, black, transparent 60%)',
          }}
        >
          <span className={nameType} style={{ transform: 'scaleY(-1)' }}>
            {label}
          </span>
        </motion.div>
      </div>
    </section>
  )
}
