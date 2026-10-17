import { useEffect, useMemo, useState } from 'react'

interface LiveClockProps {
  /** IANA time zone, e.g. "Asia/Kolkata". */
  timeZone: string
  /** City label shown before the time. */
  city?: string
  /** Set false to render the time alone. */
  showCity?: boolean
}

/**
 * Live clock that ticks every second in the given time zone.
 * Renders as "City • 6:16:32 PM", or just "6:16:32 PM" when `showCity` is false.
 */
export function LiveClock({ timeZone, city, showCity = true }: LiveClockProps) {
  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat('en-US', {
        timeZone,
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }),
    [timeZone],
  )

  const [time, setTime] = useState(() => formatter.format(new Date()))

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(formatter.format(new Date()))
    }, 1000)
    return () => window.clearInterval(id)
  }, [formatter])

  return (
    <time className="tabular-nums whitespace-nowrap">
      {showCity && city ? `${city} • ` : ''}
      {time}
    </time>
  )
}
