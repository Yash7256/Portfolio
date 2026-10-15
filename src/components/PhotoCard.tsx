import { content } from '../data/content'

/**
 * Portrait card. Fills the whole card with the photo (object-cover); on mobile
 * it uses a 4:5 ratio.
 */
export function PhotoCard({ className = '' }: { className?: string }) {
  return (
    <div
      className={`grain relative overflow-hidden rounded-[32px] border border-white/[0.05] bg-card ${className}`}
    >
      <img
        src={content.photo}
        alt={`Portrait of ${content.name} in profile`}
        className="h-full w-full origin-top scale-110 object-cover object-top"
        draggable={false}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
      />
    </div>
  )
}
