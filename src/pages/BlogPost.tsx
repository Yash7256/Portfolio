import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { BentoCard } from '../components/BentoCard'
import { ArticleBody } from '../components/ArticleBody'
import { ReadingProgress } from '../components/ReadingProgress'
import { getAdjacent, getPost } from '../lib/posts'
import type { Post } from '../lib/posts'

/** Route page shell — scrolls vertically through the article. */
const pageClass =
  'no-scrollbar absolute inset-0 z-10 overflow-y-auto px-4 pt-4 pb-4 md:px-5 md:pt-5 md:pb-5'

const titleType =
  'block text-center font-medium leading-[0.9] tracking-[-0.02em] text-[clamp(40px,6vw,96px)]'

const heroTop = 'clamp(56px, 8vh, 96px)'

function BackPill() {
  return (
    <Link
      to="/blog"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[12px] tracking-[0.08em] text-white/75 uppercase backdrop-blur transition-colors duration-200 hover:bg-white/[0.09] hover:text-white focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:outline-none"
    >
      <ArrowLeft aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
      All posts
    </Link>
  )
}

/** Post-title hero with the same blurred mirrored reflection as the site hero. */
function PostHero({ title }: { title: string }) {
  const reduce = useReducedMotion()

  const enter = reduce
    ? ({ initial: false as const } satisfies object)
    : { initial: { opacity: 0, y: 24, filter: 'blur(14px)' } }

  return (
    <section
      aria-label="Post title"
      className="pointer-events-none relative z-0 select-none px-4 md:absolute md:inset-x-0 md:top-0 md:z-auto md:px-6"
      style={{ paddingTop: heroTop }}
    >
      <div
        className="pointer-events-auto absolute left-0 z-30 -translate-y-1/2 md:left-6"
        style={{ top: `calc(${heroTop} + 0.5em)` }}
      >
        <BackPill />
      </div>

      <motion.h1
        {...enter}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`relative z-0 mx-auto max-w-[18ch] ${titleType}`}
      >
        {title}
      </motion.h1>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-full z-20 hidden md:block"
      >
        <motion.div
          {...enter}
          animate={{ opacity: 0.4, y: 0, filter: 'blur(12px)' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            maskImage: 'linear-gradient(to bottom, black, transparent 60%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black, transparent 60%)',
          }}
        >
          <span
            className={`mx-auto max-w-[18ch] ${titleType}`}
            style={{ transform: 'scaleY(-1)' }}
          >
            {title}
          </span>
        </motion.div>
      </div>
    </section>
  )
}

function MiniPostCard({ post, label }: { post: Post; label: string }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group grain relative flex min-h-[120px] flex-col justify-center rounded-[32px] border border-white/[0.05] bg-card px-6 py-6 transition-[background-color,transform] duration-200 ease-out hover:scale-[1.01] hover:bg-card-hover focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:outline-none"
    >
      <span className="text-[12px] tracking-[0.08em] text-[#666] uppercase">
        {label}
      </span>
      <span className="mt-2 max-w-[34ch] text-[18px] leading-tight font-medium text-white">
        {post.title}
      </span>
      <span className="mt-1.5 text-[12px] text-[#888]">{post.dateLabel}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="pointer-events-none absolute top-6 right-6 size-[18px] text-white/40 transition-transform duration-200 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
        strokeWidth={1.75}
      />
    </Link>
  )
}

export function BlogPost() {
  const { slug = '' } = useParams()
  const post = getPost(slug)
  const reduce = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!post) return
    const previousTitle = document.title
    document.title = `${post.title} — Aman Raj`

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', post.excerpt)

    return () => {
      document.title = previousTitle
    }
  }, [post])

  const variants = reduce
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } }
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }

  if (!post) {
    return (
      <motion.div
        ref={containerRef}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className={pageClass}
      >
        <Hero404 />
      </motion.div>
    )
  }

  const { previous, next } = getAdjacent(slug)

  return (
    <motion.div
      ref={containerRef}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={pageClass}
    >
      <ReadingProgress containerRef={containerRef} />
      <PostHero title={post.title} />

      <main className="relative z-10 mt-8 grid grid-cols-1 gap-4 md:mt-[calc(22vh-1.25rem)] md:grid-cols-12">
        <div className="md:col-start-2 md:col-span-10">
          <BentoCard
            bare
            layoutId={reduce ? undefined : `post-${post.slug}`}
            className="h-full"
          >
            <article className="px-6 py-8 md:px-10 md:py-10">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] text-[#666]">
                <span>{post.dateLabel}</span>
                <span aria-hidden="true">•</span>
                <span>{post.readingTime} min read</span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#222] px-2.5 py-1 text-[12px] leading-none text-white/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <ArticleBody markdown={post.body} />
              </div>
            </article>
          </BentoCard>
        </div>

        {previous || next ? (
          <div className="grid grid-cols-1 gap-4 md:col-start-2 md:col-span-10 md:grid-cols-2">
            {previous ? <MiniPostCard post={previous} label="Previous" /> : null}
            {next ? <MiniPostCard post={next} label="Next" /> : null}
          </div>
        ) : null}
      </main>
    </motion.div>
  )
}

/** Empty state for an unknown slug. */
function Hero404() {
  return (
    <>
      <PostHero title="404" />
      <main className="relative z-10 flex min-h-[45vh] items-center justify-center px-4 md:mt-[calc(22vh-1.25rem)]">
        <div className="grain rounded-[32px] border border-white/[0.05] bg-card px-10 py-16 text-center">
          <p className="text-[24px] font-medium text-white">Post not found</p>
          <p className="mt-2 text-[14px] text-[#888]">
            That post does not exist — it may have been moved.
          </p>
          <Link
            to="/blog"
            className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] tracking-[0.08em] text-black uppercase transition-transform duration-200 hover:scale-[1.02]"
          >
            <ArrowLeft aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
            All posts
          </Link>
        </div>
      </main>
    </>
  )
}
