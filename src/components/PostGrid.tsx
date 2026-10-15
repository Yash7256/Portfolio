import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import type { Post } from '../lib/posts'
import { PostCard } from './PostCard'

interface PostGridProps {
  posts: Post[]
  /** Shared-layout id so the featured card can morph from the home blog card. */
  featuredLayoutId?: string
  /** Selected tag ("All" shows every post). */
  activeTag?: string
}

/**
 * 12-col desktop grid:
 * Row 1 (~38vh): featured (cols 1-7), card 2 (cols 8-12).
 * Row 2 (~38vh): cards 3/4/5 (cols 1-4, 5-8, 9-12).
 * Additional posts continue in 3-col rows; page scrolls vertically.
 * Filtering animates with layout transitions (no page reload).
 */
export function PostGrid({
  posts,
  featuredLayoutId,
  activeTag = 'All',
}: PostGridProps) {
  const reduce = useReducedMotion()
  const isFiltered = activeTag !== 'All'
  const filtered = isFiltered
    ? posts.filter((post) => post.tags.includes(activeTag))
    : posts

  // The home "blog-card" morph only applies to the featured card when unfiltered.
  const featuredId = isFiltered ? undefined : featuredLayoutId

  const colClass = (i: number) => {
    if (i === 0) return 'md:col-span-7'
    if (i === 1) return 'md:col-span-5'
    return 'md:col-span-4'
  }

  const cardLayoutId = (post: Post, i: number) => {
    if (reduce) return undefined
    if (i === 0 && featuredId) return featuredId
    return `post-${post.slug}`
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
      <AnimatePresence initial={false} mode="popLayout">
        {filtered.map((post, i) => {
          const isFeaturedMorph = i === 0 && Boolean(featuredId)

          return (
            <motion.div
              key={post.slug}
              layout
              initial={reduce || isFeaturedMorph ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
              transition={{
                duration: 0.5,
                delay: reduce || isFeaturedMorph ? 0 : 0.2 + i * 0.06,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className={`${colClass(i)} md:h-[38vh] md:min-h-[300px]`}
            >
              <PostCard
                post={post}
                featured={i === 0}
                layoutId={cardLayoutId(post, i)}
                className="h-full"
              />
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
