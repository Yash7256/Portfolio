import { useEffect, useRef, useState } from 'react'
import { BentoCard } from './BentoCard'
import { contact } from '../data/contact'

/**
 * Email surface — clicking the address copies it and flashes a brief toast.
 */
export function EmailCard({ className = '' }: { className?: string }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
    } catch {
      const el = document.createElement('textarea')
      el.value = contact.email
      el.style.position = 'fixed'
      el.style.opacity = '0'
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setCopied(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), 1500)
  }

  return (
    <BentoCard
      variant="page"
      label="Email"
      className={className}
      contentClassName="flex flex-col justify-center px-6 pt-14 pb-6"
    >
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy ${contact.email} to clipboard`}
        className="cursor-pointer text-left"
      >
        <span
          className="block font-medium tracking-[-0.02em] break-all text-white transition-colors duration-200 hover:text-white/80"
          style={{ fontSize: 'clamp(24px, 2.4vw, 36px)' }}
        >
          {contact.email}
        </span>
      </button>

      <div className="mt-3 flex items-center gap-3 text-[14px]">
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex min-h-[44px] items-center text-white/55 transition-colors duration-200 hover:text-white md:min-h-0"
        >
          Open in mail app
        </a>
        <span
          aria-live="polite"
          className={`text-[#22c55e] transition-opacity duration-200 ${
            copied ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Copied ✓
        </span>
      </div>
    </BentoCard>
  )
}
