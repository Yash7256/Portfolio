import { BentoCard } from './BentoCard'
import { about } from '../data/about'

export function SkillsCard({ className = '' }: { className?: string }) {
  return (
    <BentoCard
      label="Skills"
      variant="page"
      className={className}
      contentClassName="grid grid-cols-1 content-start gap-x-8 gap-y-3 px-6 pt-14 pb-6 lg:grid-cols-4"
    >
      {about.skills.map((group) => (
        <div key={group.category}>
          <div className="text-[11px] font-medium tracking-[0.08em] text-[#8a8a8a] uppercase">
            {group.category}
          </div>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {group.items.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.03] px-[11px] py-[4px] text-[13px] text-white/80"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </BentoCard>
  )
}
