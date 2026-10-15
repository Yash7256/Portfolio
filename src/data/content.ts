export type CardKey = 'about' | 'portfolio' | 'contact' | 'resume'

export interface Content {
  name: string
  role: string
  city: string
  /** IANA time zone used by the live clock in the top bar. */
  timeZone: string
  /** Portrait shown in the photo card. Drop a file in /public and set the path. */
  photo: string
  links: {
    about: string
    portfolio: string
    contact: string
    resume: string
  }
}

export const content: Content = {
  name: 'Aman Raj',
  role: 'Software Developer',
  city: 'Jabalpur',
  timeZone: 'Asia/Kolkata',
  photo: '/portrait.png',
  links: {
    about: '/about',
    portfolio: '/portfolio',
    contact: '/contact',
    resume: '/resume.pdf',
  },
}
