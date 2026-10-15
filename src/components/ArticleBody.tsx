import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'

const components: Components = {
  p: ({ children }) => <p className="my-4">{children}</p>,

  h1: ({ children }) => (
    <h2 className="mt-10 mb-3 text-[28px] leading-tight font-medium text-white">
      {children}
    </h2>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 mb-3 text-[24px] leading-tight font-medium text-white">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-2 text-[20px] leading-tight font-medium text-white">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-6 mb-2 text-[17px] leading-tight font-medium text-white">
      {children}
    </h4>
  ),

  a: ({ href, children }) => {
    const external = Boolean(href && /^https?:\/\//.test(href))
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
      >
        {children}
      </a>
    )
  },

  ul: ({ children }) => (
    <ul className="my-4 list-disc space-y-1 pl-6 marker:text-white/40">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 list-decimal space-y-1 pl-6 marker:text-white/40">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-[1.75]">{children}</li>,

  blockquote: ({ children }) => (
    <blockquote className="my-5 border-l-2 border-white/20 pl-4 text-white/80 italic">
      {children}
    </blockquote>
  ),

  hr: () => <hr className="my-8 border-white/10" />,

  code: ({ className, children }) => {
    const isBlock = /language-/.test(className ?? '')
    if (isBlock) return <code className={className}>{children}</code>
    return (
      <code className="rounded-md bg-[#222] px-1.5 py-0.5 text-[0.875em] text-white/90">
        {children}
      </code>
    )
  },

  pre: ({ children }) => (
    <pre className="my-5 overflow-x-auto rounded-xl border border-white/10 bg-[#121212] p-4 text-[15px] leading-relaxed text-white/90 [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-inherit">
      {children}
    </pre>
  ),

  img: ({ src, alt }) => (
    <img src={src} alt={alt ?? ''} className="my-5 rounded-2xl" loading="lazy" />
  ),

  table: ({ children }) => (
    <div className="my-5 overflow-x-auto">
      <table className="w-full border-collapse text-left text-[16px]">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => <thead className="border-b border-white/10">{children}</thead>,
  th: ({ children }) => (
    <th className="py-2 pr-4 font-medium text-white">{children}</th>
  ),
  td: ({ children }) => (
    <td className="border-b border-white/5 py-2 pr-4 align-top">{children}</td>
  ),
}

interface ArticleBodyProps {
  markdown: string
  className?: string
}

/** Renders post markdown with the portfolio's article typography. */
export function ArticleBody({ markdown, className = '' }: ArticleBodyProps) {
  return (
    <div
      className={`max-w-[68ch] text-[18px] leading-[1.75] text-[#b5b5b5] ${className}`}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {markdown}
      </ReactMarkdown>
    </div>
  )
}
