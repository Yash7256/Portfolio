import { ArrowUpRight } from 'lucide-react'
import { BentoCard } from './BentoCard'
import { about } from '../data/about'

export function LinksCard({ className = '' }: { className?: string }) {
  return (
    <BentoCard
      variant="page"
      className={className}
      contentClassName="flex flex-col px-6 pt-3"
    >
      <span className="text-[14px] leading-none tracking-[0.08em] text-[#888] uppercase">
        Links
      </span>

      <div className="mt-3 flex min-h-0 flex-1 flex-col">
        {about.links.map((link, index) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={`group/link flex min-h-0 flex-1 items-center justify-between gap-4 text-[14px] text-white/80 transition-colors duration-200 hover:text-white ${
              index > 0 ? 'border-t border-white/[0.05]' : ''
            }`}
          >
            {link.label}
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 text-white/40 transition-transform duration-200 group-hover/link:translate-x-[2px] group-hover/link:-translate-y-[2px]"
              strokeWidth={1.75}
            />
          </a>
        ))}
      </div>
    </BentoCard>
  )
}
