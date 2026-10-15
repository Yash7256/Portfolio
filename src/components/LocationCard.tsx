import { BentoCard } from './BentoCard'
import { LiveClock } from './LiveClock'
import { contact } from '../data/contact'

/** Location surface — place, live local time, and the zone label. */
export function LocationCard({ className = '' }: { className?: string }) {
  return (
    <BentoCard
      variant="page"
      label="Location"
      className={className}
      contentClassName="flex flex-col justify-center px-6 pt-14 pb-6"
    >
      <div className="text-[28px] leading-tight font-medium tracking-[-0.02em]">
        {contact.location}
      </div>
      <div className="mt-2 text-[16px] text-white/80">
        <LiveClock timeZone={contact.timezone} showCity={false} />
      </div>
      <div className="mt-1 text-[14px] text-[#888]">{contact.timezoneLabel}</div>
    </BentoCard>
  )
}
