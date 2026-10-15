import { useEffect, useState } from 'react'

interface ReadingProgressProps {
  /** The scrollable page shell that contains the article. */
  containerRef: React.RefObject<HTMLElement | null>
}

/** 2px white line fixed to the very top, tracking scroll through the article. */
export function ReadingProgress({ containerRef }: ReadingProgressProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const update = () => {
      const scrollable = el.scrollHeight - el.clientHeight
      setProgress(scrollable > 0 ? Math.min(1, el.scrollTop / scrollable) : 0)
    }

    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [containerRef])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-50 h-[2px] bg-white"
      style={{ width: `${progress * 100}%` }}
    />
  )
}
