import { useRef } from 'react'
import type { ComponentType } from 'react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail } from 'lucide-react'
import { content } from '../data/content'
import type { LinkItem } from '../data/about'

const MotionLink = motion.create(Link)

interface PhotoCardProps {
  className?: string
  /** Follows the pointer with a subtle (max 6px) spring offset when enabled. */
  parallax?: boolean
  /** When set, the card becomes a link to this route (e.g. the blog entry). */
  to?: string
  /** Enables shared-layout morphing when `to` is set. */
  layoutId?: string
  /** Renders a row of clickable icon buttons over the photo. */
  links?: LinkItem[]
}

type IconComponent = ComponentType<{ className?: string }>

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function MailIcon({ className }: { className?: string }) {
  return <Mail aria-hidden="true" className={className} strokeWidth={1.75} />
}

function ExternalIcon({ className }: { className?: string }) {
  return <ArrowUpRight aria-hidden="true" className={className} strokeWidth={1.75} />
}

/** Picks an icon from a link label (falls back to the external arrow). */
function linkIcon(label: string): IconComponent {
  const key = label.toLowerCase()
  if (key.includes('git')) return GithubIcon
  if (key.includes('linked')) return LinkedinIcon
  if (key.includes('mail') || key.includes('email')) return MailIcon
  return ExternalIcon
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
  links,
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

  const surfaceClass = `grain relative overflow-hidden rounded-[32px] border border-white/[0.05] bg-card ring-1 ring-inset ring-white/10 ${
    to ? 'group cursor-pointer transition-transform duration-200 ease-out hover:scale-[1.01]' : ''
  } ${className}`

  const image = (
    <motion.img
      src={content.photo}
      alt={`Portrait of ${content.name} in profile`}
      className={`absolute inset-0 h-full w-full origin-top scale-[1.04] object-cover object-[70%_20%] transition-[transform,filter] duration-300 ease-out ${
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
      {links && links.length > 0 ? (
        <div className="absolute inset-x-6 bottom-6 flex gap-2.5">
          {links.map((link) => {
            const Icon = linkIcon(link.label)
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
                className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white/90 backdrop-blur-md transition-all duration-200 ease-out hover:scale-105 hover:bg-white/20 hover:text-white focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none"
              >
                <Icon className="size-[18px]" />
              </a>
            )
          })}
        </div>
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
