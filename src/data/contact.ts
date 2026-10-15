export interface Social {
  label: string
  href: string
}

export interface Availability {
  /** Drives the pulsing status dot. */
  open: boolean
  label: string
  detail: string
  responseTime: string
}

export interface Contact {
  /** Primary address, also used for the mailto fallback. */
  email: string
  /** Human-readable location line. */
  location: string
  /** IANA time zone for the live local clock. */
  timezone: string
  /** Short time zone label, e.g. "IST (UTC+5:30)". */
  timezoneLabel: string
  socials: Social[]
  availability: Availability
}

export const contact: Contact = {
  email: 'hello@amanraj.codes',
  location: 'Jabalpur, India',
  timezone: 'Asia/Kolkata',
  timezoneLabel: 'IST (UTC+5:30)',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Yash7256' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'X', href: 'https://x.com/' },
  ],
  availability: {
    open: true,
    label: 'Open to work',
    detail: 'Available for freelance and full-time',
    responseTime: 'Usually replies within 24 hours',
  },
}
