import { content } from '../data/content'
import { LiveClock } from './LiveClock'

/**
 * Fixed top bar: name (left), role (left-center, ~230px), clock + pulse dot (right).
 */
export function TopBar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between p-5 text-[16px] leading-none md:p-6">
      <span className="font-medium tracking-[-0.02em]">{content.name}</span>

      <span className="hidden font-normal text-white/80 md:absolute md:left-[230px] md:block">
        {content.role}
      </span>

      <div className="flex items-center gap-5">
        <span className="font-normal text-white/80">
          <LiveClock timeZone={content.timeZone} city={content.city} />
        </span>
        <span
          aria-hidden="true"
          className="pulse-dot block size-2 rounded-full bg-white"
        />
      </div>
    </header>
  )
}
