export interface Post {
  slug: string
  title: string
  /** ISO date string (YYYY-MM-DD). */
  date: string
  /** Formatted display date. */
  dateLabel: string
  excerpt: string
  tags: string[]
  cover?: string
  /** Markdown body, frontmatter stripped. */
  body: string
  readingTime: number
}

interface RawModule {
  default: string
}

const modules = import.meta.glob('/content/posts/*.md', {
  query: '?raw',
  eager: true,
}) as Record<string, RawModule>

const READ_WORD_RATE = 200

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

function formatDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number)
  const monthName = MONTHS[(month ?? 1) - 1] ?? ''
  return `${monthName} ${day}, ${year}`
}

function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / READ_WORD_RATE))
}

/** Minimal frontmatter parser (`key: value` lines between `---` fences). */
function parseFrontmatter(raw: string): {
  data: Record<string, string | string[]>
  body: string
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, body: raw.trim() }

  const data: Record<string, string | string[]> = {}
  for (const line of (match[1] ?? '').split(/\r?\n/)) {
    const separator = line.indexOf(':')
    if (separator === -1) continue
    const key = line.slice(0, separator).trim()
    const value = line.slice(separator + 1).trim()
    if (!key || !value) continue

    if (value.startsWith('[') && value.endsWith(']')) {
      data[key] = value
        .slice(1, -1)
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean)
    } else {
      data[key] = value
    }
  }
  return { data, body: (match[2] ?? '').trim() }
}

function buildPosts(): Post[] {
  const posts: Post[] = []

  for (const [path, module] of Object.entries(modules)) {
    const { data, body } = parseFrontmatter(module.default)
    const slug = path.replace(/^.*\//, '').replace(/\.md$/, '')
    const date = typeof data.date === 'string' ? data.date : ''
    const title = typeof data.title === 'string' ? data.title : slug

    posts.push({
      slug,
      title,
      date,
      dateLabel: date ? formatDate(date) : '',
      excerpt: typeof data.excerpt === 'string' ? data.excerpt : '',
      tags: Array.isArray(data.tags) ? data.tags : [],
      cover: typeof data.cover === 'string' ? data.cover : undefined,
      body,
      readingTime: readingTime(body),
    })
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
}

export const posts: Post[] = buildPosts()

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

/** Unique tags across all posts, ordered by first appearance. */
export function getAllTags(): string[] {
  const seen = new Set<string>()
  for (const post of posts) {
    for (const tag of post.tags) seen.add(tag)
  }
  return [...seen]
}

/** Neighbouring posts by date. `previous` is older, `next` is newer. */
export function getAdjacent(slug: string): {
  previous?: Post
  next?: Post
} {
  const index = posts.findIndex((post) => post.slug === slug)
  if (index === -1) return {}
  // Posts are sorted newest first: index - 1 is newer, index + 1 is older.
  return { previous: posts[index + 1], next: posts[index - 1] }
}
