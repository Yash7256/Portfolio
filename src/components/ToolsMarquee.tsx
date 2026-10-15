import { useId } from 'react'
import { motion, useReducedMotion } from 'motion/react'

function ClaudeSparkle() {
  return (
    <svg viewBox="0 0 24 24" className="size-8" fill="currentColor" aria-hidden="true">
      <path d="M12 2c.8 5.2 4 8.4 9.2 9.2C16 12 12.8 15.2 12 20.4 11.2 15.2 8 12 2.8 11.2 8 10.4 11.2 7.2 12 2Z" />
    </svg>
  )
}

function FramerMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-8" fill="currentColor" aria-hidden="true">
      <path d="M4 0h16v8h-8zM4 8h16l-8 8H4zM4 16h8v8z" />
    </svg>
  )
}

function FigmaMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-8" fill="currentColor" aria-hidden="true">
      <path d="M8 24a4 4 0 0 0 4-4v-4H8a4 4 0 0 0 0 8Z" />
      <path d="M4 12a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4Z" />
      <path d="M4 4a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4Z" />
      <path d="M12 0h4a4 4 0 0 1 0 8h-4V0Z" />
      <path d="M20 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
    </svg>
  )
}

function GradientHeart({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 24 24" className="size-8" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#ff7ac6" />
          <stop offset="1" stopColor="#7a5cff" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id})`}
        d="M12 21s-8-4.9-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.1-8 11-8 11Z"
      />
    </svg>
  )
}

const TILES = [
  { key: 'claude', render: () => <ClaudeSparkle /> },
  { key: 'framer', render: () => <FramerMark /> },
  { key: 'figma', render: () => <FigmaMark /> },
]

/**
 * Infinite horizontal marquee of app-icon tiles with faded edges.
 * Duplicates the track so the loop is seamless.
 */
export function ToolsMarquee() {
  const reduce = useReducedMotion()
  const gradientId = useId()

  const tiles = [
    ...TILES,
    { key: 'heart', render: () => <GradientHeart id={gradientId} /> },
  ]

  const track = (
    <div className="flex shrink-0 items-center gap-4 pr-4">
      {tiles.map((tile, i) => (
        <div
          key={`${tile.key}-${i}`}
          className="grid size-[72px] shrink-0 place-items-center rounded-2xl bg-tile text-white"
        >
          {tile.render()}
        </div>
      ))}
    </div>
  )

  return (
    <div
      className="relative flex h-full w-full items-center overflow-hidden"
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 18%, black 82%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 18%, black 82%, transparent)',
      }}
    >
      <motion.div
        className="flex w-max items-center"
        animate={reduce ? undefined : { x: ['0%', '-50%'] }}
        transition={
          reduce
            ? undefined
            : { duration: 18, ease: 'linear', repeat: Infinity }
        }
      >
        {track}
        {track}
      </motion.div>
    </div>
  )
}
