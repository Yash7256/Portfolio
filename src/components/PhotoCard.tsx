import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { content } from '../data/content'

const MotionLink = motion.create(Link)

interface PhotoCardProps {
  className?: string
  /** Follows the pointer with a subtle (max 6px) spring offset when enabled. */
  parallax?: boolean
  /** When set, the card becomes a link to this route (e.g. the blog entry). */
  to?: string
  /** Enables shared-layout morphing when `to` is set. */
  layoutId?: string
}

const MAX_SHIFT = 6

/**
 * Portrait card. Fills the whole card with the photo (object-cover); on mobile
 * it uses a 4:5 ratio. When `parallax` is set the image drifts a few pixels
 * toward the pointer (disabled under reduced-motion). When `to` is set the card
 * renders as a route link with a "Blog"-style label and arrow.
 */
export function PhotoCard({
  className = '',
  parallax = false,
  to,
  layoutId,
}: PhotoCardProps) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 20, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 150, damping: 20, mass: 0.6 })

  const enabled = parallax && !reduce

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!enabled || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const nx = (event.clientX - rect.left) / rect.width - 0.5
    const ny = (event.clientY - rect.top) / rect.height - 0.5
    x.set(nx * MAX_SHIFT * 2)
    y.set(ny * MAX_SHIFT * 2)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  const surfaceClass = `grain relative overflow-hidden rounded-[32px] border border-white/[0.05] bg-card ${
    to ? 'group cursor-pointer transition-transform duration-200 ease-out hover:scale-[1.01]' : ''
  } ${className}`

  const image = (
    <motion.img
      src={content.photo}
      alt={`Portrait of ${content.name} in profile`}
      className={`h-full w-full origin-top scale-[1.04] object-cover object-[center_15%] transition-[transform,filter] duration-300 ease-out ${
        to ? 'group-hover:scale-[1.08]' : ''
      }`}
      style={enabled ? { x: springX, y: springY } : undefined}
      draggable={false}
    />
  )

  const overlay = (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
      />
      {to ? (
        <>
          <span className="pointer-events-none absolute bottom-8 left-8 text-[20px] leading-none font-normal text-white">
            Blog
          </span>
          <ArrowUpRight
            aria-hidden="true"
            className="pointer-events-none absolute right-8 bottom-8 size-[18px] text-white/90 transition-transform duration-200 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
            strokeWidth={1.75}
          />
        </>
      ) : null}
    </>
  )

  const handlers = {
    onPointerMove: handleMove,
    onPointerLeave: handleLeave,
  }

  if (to) {
    return (
      <MotionLink
        to={to}
        layoutId={layoutId}
        className={`${surfaceClass} block h-full`}
      >
        {image}
        {overlay}
      </MotionLink>
    )
  }

  return (
    <div ref={ref} {...handlers} className={surfaceClass}>
      {image}
      {overlay}
    </div>
  )
}
