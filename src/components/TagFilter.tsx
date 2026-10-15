import { motion, useReducedMotion } from 'motion/react'

interface TagFilterProps {
  tags: string[]
  active: string
  onChange: (tag: string) => void
}

/**
 * Pill row of "All" plus every unique tag. The active pill uses a shared
 * layout id so the white highlight slides between pills as you filter.
 */
export function TagFilter({ tags, active, onChange }: TagFilterProps) {
  const reduce = useReducedMotion()
  const options = ['All', ...tags]

  return (
    <div
      role="tablist"
      aria-label="Filter posts by tag"
      className="flex flex-wrap gap-2"
    >
      {options.map((tag) => {
        const isActive = tag === active
        return (
          <button
            key={tag}
            role="tab"
            aria-selected={isActive}
            type="button"
            onClick={() => onChange(tag)}
            className={`relative inline-flex min-h-[36px] cursor-pointer items-center rounded-full px-4 text-[13px] tracking-[-0.01em] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:outline-none ${
              isActive
                ? 'text-black'
                : 'border border-white/10 bg-white/[0.04] text-white/75 hover:bg-white/[0.09] hover:text-white'
            }`}
          >
            {isActive && !reduce ? (
              <motion.span
                layoutId="tag-active"
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                className="absolute inset-0 rounded-full bg-white"
              />
            ) : isActive ? (
              <span className="absolute inset-0 rounded-full bg-white" />
            ) : null}
            <span className="relative z-10">{tag}</span>
          </button>
        )
      })}
    </div>
  )
}
