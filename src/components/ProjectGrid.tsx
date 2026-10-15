import { motion, useReducedMotion } from 'motion/react'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

/**
 * 12-col desktop grid:
 * Row 1 (~38vh): featured (cols 1-7), card 2 (cols 8-12).
 * Row 2 (~38vh): cards 3/4/5 (cols 1-4, 5-8, 9-12).
 * Additional projects continue in 3-col rows; page scrolls vertically.
 * Mobile (<768px): single column stack, featured first.
 */
export function ProjectGrid({ featuredLayoutId }: { featuredLayoutId?: string }) {
  const reduce = useReducedMotion()

  const ordered = [
    ...projects.filter((p) => p.featured),
    ...projects.filter((p) => !p.featured),
  ]

  const colClass = (i: number) => {
    if (i === 0) return 'md:col-span-7'
    if (i === 1) return 'md:col-span-5'
    return 'md:col-span-4'
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
      {ordered.map((project, i) => {
        const isFeaturedMorph = i === 0 && Boolean(featuredLayoutId)

        return (
          <motion.div
            key={project.id}
            initial={reduce || isFeaturedMorph ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: reduce ? 0 : 0.2 + i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`${colClass(i)} md:h-[38vh] md:min-h-[300px]`}
          >
            <ProjectCard
              project={project}
              index={i}
              featured={i === 0}
              layoutId={i === 0 ? featuredLayoutId : undefined}
              className="h-full"
            />
          </motion.div>
        )
      })}
    </div>
  )
}
