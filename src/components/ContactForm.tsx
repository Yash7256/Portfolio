import { useState } from 'react'
import { ArrowUpRight, Loader2 } from 'lucide-react'
import { BentoCard } from './BentoCard'
import { contact } from '../data/contact'

const ENDPOINT = (import.meta.env.VITE_CONTACT_ENDPOINT ?? '') as string
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Status = 'idle' | 'sending' | 'success' | 'error'

interface FormValues {
  name: string
  email: string
  message: string
}

interface FieldProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  type?: string
  textarea?: boolean
}

/** Transparent input with a floating label and an inline error line. */
function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = 'text',
  textarea = false,
}: FieldProps) {
  const [focused, setFocused] = useState(false)
  const floated = focused || value.length > 0

  const control =
    'peer w-full resize-none border-b border-white/10 bg-transparent pt-5 pb-2 text-[16px] text-white outline-none transition-colors duration-200 focus:border-white'
  const labelClass = `pointer-events-none absolute left-0 transition-all duration-200 ${
    floated ? 'top-0 text-[12px] text-white/70' : 'top-5 text-[16px] text-[#888]'
  }`

  const handlers = {
    id,
    value,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onChange: (event: { target: { value: string } }) =>
      onChange(event.target.value),
  }

  return (
    <div>
      <div className="relative">
        {textarea ? (
          <textarea
            {...handlers}
            rows={2}
            className={`no-scrollbar min-h-[72px] ${control}`}
          />
        ) : (
          <input {...handlers} type={type} className={control} />
        )}
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
      </div>
      {error ? (
        <p className="mt-1.5 text-[12px] text-[#f87171]">{error}</p>
      ) : null}
    </div>
  )
}

interface ContactFormProps {
  layoutId?: string
  className?: string
}

/** Message surface — validated, spam-guarded, with sending/success/error states. */
export function ContactForm({ layoutId, className = '' }: ContactFormProps) {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<FormValues>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [honeypot, setHoneypot] = useState('')

  const update = (key: keyof FormValues) => (value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const validate = (): Partial<FormValues> => {
    const next: Partial<FormValues> = {}
    if (!values.name.trim()) next.name = 'Name is required.'
    if (!values.email.trim()) next.email = 'Email is required.'
    else if (!EMAIL_RE.test(values.email.trim()))
      next.email = 'Enter a valid email address.'
    if (values.message.trim().length < 10)
      next.message = 'Message must be at least 10 characters.'
    return next
  }

  const runFallback = () => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`)
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`,
    )
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
  }

  const submit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (honeypot) return

    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    setStatus('sending')

    if (!ENDPOINT) {
      runFallback()
      setValues({ name: '', email: '', message: '' })
      setStatus('success')
      return
    }

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          subject: `Portfolio enquiry from ${values.name.trim()}`,
          _gotcha: '',
        }),
      })
      if (!response.ok) throw new Error('Request failed')
      setValues({ name: '', email: '', message: '' })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const sending = status === 'sending'

  return (
    <BentoCard
      variant="page"
      label="Send a message"
      layoutId={layoutId}
      className={className}
      contentClassName="no-scrollbar overflow-y-auto"
    >
      <form
        onSubmit={submit}
        noValidate
        className="flex h-full flex-col px-6 pt-12 pb-5"
      >
        <div className="flex flex-col gap-4">
          <Field
            id="contact-name"
            label="Name"
            value={values.name}
            onChange={update('name')}
            error={errors.name}
          />
          <Field
            id="contact-email"
            label="Email"
            type="email"
            value={values.email}
            onChange={update('email')}
            error={errors.email}
          />
          <Field
            id="contact-message"
            label="Message"
            textarea
            value={values.message}
            onChange={update('message')}
            error={errors.message}
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 -left-[9999px] h-px w-px opacity-0"
        >
          <input
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            name="botcheck"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
          <input
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            name="_gotcha"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-4">
          <button
            type="submit"
            disabled={sending}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-medium text-black transition-transform duration-200 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
          >
            {sending ? (
              <>
                Sending
                <Loader2
                  aria-hidden="true"
                  className="size-4 animate-spin"
                  strokeWidth={2}
                />
              </>
            ) : (
              <>
                Send message
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4"
                  strokeWidth={1.75}
                />
              </>
            )}
          </button>

          <p
            aria-live="polite"
            className={`min-h-[18px] text-[13px] ${
              status === 'error' ? 'text-[#f87171]' : 'text-white/70'
            }`}
          >
            {status === 'success'
              ? "Message sent. I'll get back to you soon."
              : status === 'error'
                ? 'Something went wrong. Please try again, or email me directly.'
                : ''}
          </p>
        </div>
      </form>
    </BentoCard>
  )
}
