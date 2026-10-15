import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Post } from '../lib/posts'

const MotionLink = motion.create(Link)

const surface =
  'group grain relative flex flex-col overflow-hidden rounded-[32px] border border-white/[0.05] bg-card transition-[background-color,transform] duration-200 ease-out hover:scale-[1.01] hover:bg-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg'

interface PostCardProps {
  post: Post
  /** Featured cards show the cover image, larger title, and a longer excerpt. */
  featured?: boolean
  /** Shared-layout id so a card can morph into this one (or vice versa). */
  layoutId?: string
  className?: string
}

export function PostCard({
  post,
  featured = false,
  layoutId,
  className = '',
}: PostCardProps) {
  return (
    <MotionLink
      to={`/blog/${post.slug}`}
      layoutId={layoutId}
      className={`${surface} h-full ${className}`}
    >
      {featured && post.cover ? (
        <div className="relative w-full shrink-0 grow-0 p-3 md:aspect-[16/9] md:basis-[45%]">
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
            <img
              src={post.cover}
              alt=""
              className="h-full w-full object-cover grayscale transition-[transform,filter] duration-300 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
              loading="lazy"
            />
          </div>
        </div>
      ) : null}

      <span className="pointer-events-none absolute top-5 left-6 z-10 text-[12px] leading-none text-[#666]">
        {post.dateLabel}
      </span>
      <span className="pointer-events-none absolute top-5 right-6 z-10 text-[12px] leading-none text-[#666]">
        {post.readingTime} min read
      </span>

      <div
        className={`flex min-h-0 flex-1 flex-col px-6 pb-5 ${
          featured ? 'pt-1' : 'pt-[52px]'
        }`}
      >
        <h3
          className={`mb-1 leading-tight font-medium text-white ${
            featured ? 'text-[clamp(28px,2.6vw,40px)]' : 'text-[24px]'
          }`}
        >
          {post.title}
        </h3>
        <p
          className={`text-[14px] leading-snug text-[#888] ${
            featured ? 'line-clamp-3' : 'line-clamp-2'
          }`}
        >
          {post.excerpt}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-3">
          {post.tags.slice(0, 2).map((tag) => (
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
    </MotionLink>
  )
}
