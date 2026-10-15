import { useEffect, useMemo, useState } from 'react'

interface LiveClockProps {
  /** IANA time zone, e.g. "Asia/Kolkata". */
  timeZone: string
  /** City label shown before the time. */
  city: string
}

/**
 * Live clock that ticks every second in the given time zone.
 * Renders as "City • 6:16 PM".
 */
export function LiveClock({ timeZone, city }: LiveClockProps) {
  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat('en-US', {
        timeZone,
        hour: 'numeric',
        minute: '2-digit',
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
      {city} • {time}
    </time>
  )
}
