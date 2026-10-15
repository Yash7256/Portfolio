import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'

const surface =
  'group grain relative flex flex-col overflow-hidden rounded-[32px] border border-white/[0.05] bg-card transition-[background-color,transform] duration-200 ease-out hover:scale-[1.01] hover:bg-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg'

interface ProjectCardProps {
  project: Project
  /** Index used for the "01", "02" corner label. */
  index: number
  /** Featured cards get a taller image (~60%) and a 2-line description. */
  featured?: boolean
  /** Shared-layout id so the home card can morph into this one. */
  layoutId?: string
  className?: string
}

export function ProjectCard({
  project,
  index,
  featured = false,
  layoutId,
  className = '',
}: ProjectCardProps) {
  const href = project.liveUrl || project.githubUrl || '#'
  const external = Boolean(project.liveUrl || project.githubUrl)

  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      layoutId={layoutId}
      className={`${surface} h-full ${className}`}
    >
      <div
        className={`relative w-full shrink-0 grow-0 p-3 md:aspect-auto md:w-auto ${
          featured ? 'aspect-[16/10] md:basis-[60%]' : 'aspect-[16/10] md:basis-[55%]'
        }`}
      >
        <div className="relative h-full w-full overflow-hidden rounded-2xl">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-cover grayscale transition-[transform,filter] duration-300 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
            loading="lazy"
          />
          {project.status ? (
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[11px] text-white/90 backdrop-blur">
              <span
                aria-hidden="true"
                className={`size-1.5 rounded-full ${
                  project.status === 'Live' ? 'bg-green-400' : 'bg-amber-400'
                }`}
              />
              {project.status}
            </div>
          ) : null}
        </div>
      </div>

      <span className="pointer-events-none absolute top-5 left-6 z-10 text-[12px] leading-none text-[#666]">
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="pointer-events-none absolute top-5 right-6 z-10 text-[12px] leading-none text-[#666]">
        {project.year}
      </span>

      <div className="flex min-h-0 flex-1 flex-col px-6 pt-3 pb-5">
        <h3 className="mb-1 text-[20px] leading-tight font-normal text-white">
          {project.title}
        </h3>
        <p
          className={`text-[14px] leading-snug text-[#888] ${
            featured ? 'mb-3 line-clamp-2' : 'mb-3 line-clamp-1'
          }`}
        >
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#222] px-2.5 py-1 text-[12px] leading-none text-white/90"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <ArrowUpRight
        aria-hidden="true"
        className="pointer-events-none absolute right-6 bottom-6 z-10 size-[18px] text-white/90 transition-transform duration-200 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
        strokeWidth={1.75}
      />
    </motion.a>
  )
}
