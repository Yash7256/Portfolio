import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const MotionLink = motion.create(Link)

interface BentoCardProps {
  label?: string
  /** External / file link. Mutually exclusive with `to`. */
  href?: string
  /** Internal route link (react-router). Mutually exclusive with `href`. */
  to?: string
  /** Enables shared-layout morphing between matching cards across routes. */
  layoutId?: string
  /** `home` = label bottom-left 20px + arrow. `page` = label top-left, small caps. */
  variant?: 'home' | 'page'
  className?: string
  contentClassName?: string
  children?: React.ReactNode
  /** Renders no label/arrow chrome (used by the Tools surface). */
  bare?: boolean
}

const surface =
  'group grain relative flex flex-col overflow-hidden rounded-[32px] border border-white/[0.05] bg-card'
const interactive =
  'transition-[background-color,transform] duration-200 ease-out hover:scale-[1.01] hover:bg-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg'

/**
 * Base bento surface. Renders an internal `Link` when `to` is set, an anchor
 * when `href` is set, otherwise a plain panel. Labelling follows `variant`.
 */
export function BentoCard({
  label,
  href,
  to,
  layoutId,
  variant = 'home',
  className = '',
  contentClassName = '',
  children,
  bare = false,
}: BentoCardProps) {
  const inner = (
    <>
      {children ? (
        <div className={`min-h-0 flex-1 ${contentClassName}`}>{children}</div>
      ) : null}

      {!bare && label ? (
        variant === 'page' ? (
          <span className="pointer-events-none absolute top-6 left-6 text-[14px] leading-none tracking-[0.08em] text-[#888] uppercase">
            {label}
          </span>
        ) : (
          <>
            <span className="pointer-events-none absolute bottom-8 left-8 text-[20px] leading-none font-normal text-white">
              {label}
            </span>
            <ArrowUpRight
              aria-hidden="true"
              className="pointer-events-none absolute right-8 bottom-8 size-[18px] text-white/90 transition-transform duration-200 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              strokeWidth={1.75}
            />
          </>
        )
      ) : null}
    </>
  )

  if (to) {
    return (
      <MotionLink
        to={to}
        layoutId={layoutId}
        className={`${surface} ${interactive} ${className}`}
      >
        {inner}
      </MotionLink>
    )
  }

  if (href) {
    return (
      <motion.a
        href={href}
        layoutId={layoutId}
        className={`${surface} ${interactive} ${className}`}
      >
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.div layoutId={layoutId} className={`${surface} ${className}`}>
      {inner}
    </motion.div>
  )
}
