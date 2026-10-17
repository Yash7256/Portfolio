export interface Stat {
  value: string
  label: string
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  summary: string
  /** Optional small tag pill shown next to the role (e.g. "Education"). */
  tag?: string
}

export interface LinkItem {
  label: string
  href: string
}

export interface SkillGroup {
  /** Small uppercase label shown above the group's chips. */
  category: string
  items: string[]
}

export interface About {
  /** Single lead paragraph. Key phrases are highlighted in the Bio card. */
  bio: string
  /** Availability line shown under the bio. */
  availability: string
  stats: Stat[]
  experience: ExperienceItem[]
  skills: SkillGroup[]
  links: LinkItem[]
}

export const about: About = {
  bio: "I'm Aman Raj, a full-stack software engineer with three OCI professional certifications in Development, DevOps, and Generative AI. I've built websites for K-adio, a design agency in Jabalpur, and led the end-to-end development of Sedative Physio, an EdTech platform for physiotherapy students, from system architecture to deployment. Right now, I'm building Designer's Room, a platform for UI/UX, graphic designers, and design engineers. Have an idea worth building? Let's turn it into reality.",
  availability: 'Open to work · Available for freelance',
  stats: [
    { value: '3+', label: 'Years building' },
    { value: '20+', label: 'Projects shipped' },
    { value: '15+', label: 'Tools & frameworks' },
  ],
  // TODO: Edit your experience below — replace the `company` values with your
  // real employers / school. Items are sorted newest-first by start year.
  experience: [
    {
      role: 'Founding Engineer',
      company: 'Sedative Physio',
      period: 'Oct 2025 — July 2026',
      summary: 'Led end-to-end platform architecture as founding engineer, building an AI-powered medical learning platform with interactive 3D anatomy, live classes, and a multimodal Grok AI chatbot.',
    },
    {
      role: ' Skédio',
      company: 'Creative Studio',
      period: 'Sept 2026 — Present',
      summary: 'Built a scalable full-stack backend using Node.js, Express, Next.js API routes, Neon PostgreSQL, and Prisma, with Cloudinary and Cloudflare R2 for media and object storage.',
    },
  ],
  // TODO: Edit your skills below — add/remove categories and items freely.
  skills: [
    {
      category: 'Languages',
      items: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
    },
    {
      category: 'Frontend',
      items: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT Authentication', 'WebSockets'],
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Drizzle ORM', 'Supabase'],
    },
    {
      category: 'AI Engineering',
      items: [
        'Generative AI',
        'LLM Integration',
        'Prompt Engineering',
        'RAG',
        'LangChain',
      ],
    },
    {
      category: 'Cloud & DevOps',
      items: [
        'Docker',
        'Kubernetes',
        'Terraform',
        'CI/CD',
        'Linux',
        'Git',
        'GitHub',
      ],
    },
    {
      category: 'Architecture & Quality',
      items: ['System Design', 'API Architecture', 'Database Design', 'Testing', 'Debugging'],
    },
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/Yash7256' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/yash7256' },
    { label: 'Email', href: 'mailto:hello@amanrajengg@gmail.com' },
  ],
}
