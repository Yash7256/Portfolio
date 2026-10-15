import { BentoCard } from './BentoCard'
import { about } from '../data/about'

/** Start/end years parsed from a period label like "2023 — Present". */
function yearRange(period: string) {
  const years = period.match(/\d{4}/g)
  const start = years ? Number(years[0]) : 0
  const end =
    years && years.length > 1
      ? Number(years[1])
      : /present/i.test(period)
        ? Number.POSITIVE_INFINITY
        : start
  return { start, end }
}

/** Newest first by start year (then by end year). */
const ordered = [...about.experience].sort((a, b) => {
  const left = yearRange(a.period)
  const right = yearRange(b.period)
  return right.start - left.start || right.end - left.end
})

export function ExperienceCard({ className = '' }: { className?: string }) {
  return (
    <BentoCard
      label="Experience"
      variant="page"
      className={className}
      contentClassName="no-scrollbar overflow-y-auto"
    >
      <div className="flex h-full flex-col justify-center px-6 pt-14 pb-6">
        <ol className="flex flex-col">
          {ordered.map((item, index) => (
            <li key={`${item.role}-${item.period}`} className="flex gap-4">
              <div className="flex flex-col items-center">
                <span
                  aria-hidden="true"
                  className={`mt-3.5 size-2 shrink-0 rounded-full ${
                    index === 0 ? 'bg-white' : 'bg-[#555]'
                  }`}
                />
                {index < ordered.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="mt-1 w-px flex-1 bg-white/15"
                  />
                ) : null}
              </div>

              <div className={index < ordered.length - 1 ? 'pb-5' : ''}>
                <div className="flex items-center justify-between gap-3">
                  <span className="flex min-w-0 items-center gap-2">
                    <span className="text-[18px] leading-tight text-white">
                      {item.role}
                    </span>
                    {item.tag ? (
                      <span className="shrink-0 rounded-full bg-[#222] px-2 py-0.5 text-[11px] leading-none text-white/90">
                        {item.tag}
                      </span>
                    ) : null}
                  </span>
                  <span className="shrink-0 text-[13px] whitespace-nowrap text-[#8a8a8a]">
                    {item.period}
                  </span>
                </div>
                <div className="mt-1 text-[14px] text-[#9a9a9a]">
                  {item.company}
                </div>
                <p className="mt-1 text-[14px] leading-relaxed text-[#b0b0b0]">
                  {item.summary}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </BentoCard>
  )
}
