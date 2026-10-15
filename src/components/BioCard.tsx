import { about } from '../data/about'
import { BentoCard } from './BentoCard'

/** Phrases rendered in white while the rest of the bio stays muted. */
const HIGHLIGHTS = [
  'software developer',
  'end to end',
  'shipping software people enjoy using',
]

const highlightPattern = new RegExp(
  `(${HIGHLIGHTS.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
  'gi',
)

function renderBio(text: string) {
  return text.split(highlightPattern).map((part, index) =>
    HIGHLIGHTS.some((phrase) => phrase.toLowerCase() === part.toLowerCase()) ? (
      <span key={index} className="text-white">
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    ),
  )
}

/** Shared-layout target for the home "About" card (`layoutId="about-card"`). */
export function BioCard({
  className = '',
  layoutId,
}: {
  className?: string
  layoutId?: string
}) {
  return (
    <BentoCard
      label="Bio"
      variant="page"
      layoutId={layoutId}
      className={className}
      contentClassName="no-scrollbar flex flex-col justify-end overflow-y-auto px-6 pt-[72px] pb-2"
    >
      <p className="max-w-[92%] text-[clamp(22px,2.2vw,32px)] leading-[1.35] text-[#9a9a9a]">
        {renderBio(about.bio)}
      </p>

      <div className="mt-1.5 flex items-center gap-2.5">
        <span
          aria-hidden="true"
          className="pulse-dot block size-2 shrink-0 rounded-full bg-[#22c55e]"
        />
        <span className="text-[14px] text-[#8a8a8a]">{about.availability}</span>
      </div>
    </BentoCard>
  )
}
