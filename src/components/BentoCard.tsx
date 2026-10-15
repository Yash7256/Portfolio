import { ArrowUpRight } from 'lucide-react'

interface BentoCardProps {
  label?: string
  href?: string
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
 * Base bento surface. Renders a link when `href` is set, otherwise a plain
 * panel. Label sits bottom-left (padding 32px); arrow bottom-right.
 */
export function BentoCard({
  label,
  href,
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
        <>
          <span className="pointer-events-none absolute bottom-8 left-8 text-[20px] leading-none font-normal text-white">
            {label}
          </span>
          <ArrowUpRight
            aria-hidden="true"
            className="pointer-events-none absolute bottom-8 right-8 size-[18px] text-white/90 transition-transform duration-200 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
            strokeWidth={1.75}
          />
        </>
      ) : null}
    </>
  )

  if (href) {
    return (
      <a href={href} className={`${surface} ${interactive} ${className}`}>
        {inner}
      </a>
    )
  }

  return <div className={`${surface} ${className}`}>{inner}</div>
}
