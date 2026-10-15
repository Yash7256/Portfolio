import { BentoCard } from './BentoCard'
import { contact } from '../data/contact'

/** Availability surface — pulsing status dot plus response expectations. */
export function AvailabilityCard({ className = '' }: { className?: string }) {
  const { availability } = contact

  return (
    <BentoCard
      variant="page"
      label="Availability"
      className={className}
      contentClassName="flex flex-col justify-center px-6 pt-14 pb-6"
    >
      <div className="flex items-center gap-3">
        {availability.open ? (
          <span
            aria-hidden="true"
            className="pulse-dot block size-2.5 rounded-full bg-[#22c55e]"
          />
        ) : null}
        <span className="text-[24px] leading-none font-medium tracking-[-0.02em]">
          {availability.label}
        </span>
      </div>
      <p className="mt-3 text-[14px] text-white/70">{availability.detail}</p>
      <p className="mt-1 text-[14px] text-[#888]">{availability.responseTime}</p>
    </BentoCard>
  )
}
