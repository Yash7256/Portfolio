import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { BentoCard } from './BentoCard'

const HOLD = 4500

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 1, ease: [0.4, 0, 0.2, 1] as const },
}

export function StatsCard({ className = '' }: { className?: string }) {
  const reduce = useReducedMotion()
  const [showTextLogo, setShowTextLogo] = useState(true)

  useEffect(() => {
    if (reduce) return
    const id = window.setInterval(() => setShowTextLogo((v) => !v), HOLD)
    return () => window.clearInterval(id)
  }, [reduce])

  if (reduce) {
    return (
      <BentoCard label="Currently Cooking" variant="page" className={className}>
        <div className="flex h-full flex-col items-center justify-center gap-4 px-5 pt-12 pb-5 text-center">
          <img src="/dstext.svg" alt="" className="w-[62%]" />
          <img src="/dslogo.svg" alt="" className="w-14" />
        </div>
      </BentoCard>
    )
  }

  return (
    <BentoCard
      label="Currently Cooking"
      variant="page"
      className={className}
      contentClassName="overflow-hidden"
    >
      <div className="flex h-full items-center justify-center px-5 pt-12 pb-5">
        <AnimatePresence mode="wait">
          {showTextLogo ? (
            <motion.img
              key="dstext"
              src="/dstext.svg"
              alt="Currently cooking"
              className="w-[62%]"
              {...fade}
            />
          ) : (
            <motion.img
              key="dslogo"
              src="/dslogo.svg"
              alt=""
              className="w-14"
              {...fade}
            />
          )}
        </AnimatePresence>
      </div>
    </BentoCard>
  )
}
