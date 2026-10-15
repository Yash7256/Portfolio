import { ArrowUpRight } from 'lucide-react'
import { BentoCard } from './BentoCard'
import { contact } from '../data/contact'

/** Socials surface — one row per profile with hover arrow nudges. */
export function SocialsCard({ className = '' }: { className?: string }) {
  return (
    <BentoCard
      variant="page"
      label="Socials"
      className={className}
      contentClassName="flex flex-col px-6 pt-14 pb-6"
    >
      <div className="flex min-h-0 flex-1 flex-col justify-start">
        {contact.socials.map((social, index) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className={`group/link flex min-h-[44px] items-center justify-between gap-4 text-[15px] text-white/80 transition-colors duration-200 hover:text-white md:min-h-[40px] ${
              index > 0 ? 'border-t border-white/[0.05]' : ''
            }`}
          >
            {social.label}
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
