import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Hero } from '../components/Hero'
import { TagFilter } from '../components/TagFilter'
import { PostGrid } from '../components/PostGrid'
import { getAllTags, posts } from '../lib/posts'

/** Route page shell — scrolls vertically when the grid overflows. */
const pageClass =
  'no-scrollbar absolute inset-0 z-10 overflow-y-auto px-4 pt-4 pb-4 md:px-5 md:pt-5 md:pb-5'

function BackPill() {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[12px] tracking-[0.08em] text-white/75 uppercase backdrop-blur transition-colors duration-200 hover:bg-white/[0.09] hover:text-white focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:outline-none"
    >
      <ArrowLeft aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
      Home
    </Link>
  )
}

export function Blog() {
  const reduce = useReducedMotion()
  const [activeTag, setActiveTag] = useState('All')
  const tags = getAllTags()

  const variants = reduce
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } }
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={pageClass}
    >
      <Hero label="Blog" action={<BackPill />} />

      <main className="relative z-10 mt-8 md:mt-[calc(22vh-1.25rem)]">
        {posts.length === 0 ? (
          <div className="flex min-h-[45vh] items-center justify-center">
            <div className="grain rounded-[32px] border border-white/[0.05] bg-card px-10 py-16 text-center">
              <p className="text-[20px] text-white/70">Nothing here yet.</p>
            </div>
          </div>
        ) : (
          <>
            <div className="relative z-30 mb-4">
              <TagFilter
                tags={tags}
                active={activeTag}
                onChange={setActiveTag}
              />
            </div>
            <PostGrid
              posts={posts}
              activeTag={activeTag}
              featuredLayoutId={reduce ? undefined : 'blog-card'}
            />
          </>
        )}
      </main>
    </motion.div>
  )
}
