export interface Project {
  id: string
  title: string
  description: string
  year: string
  tags: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
  status?: 'Live' | 'In progress'
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Analytics Dashboard',
    description: 'Real-time business metrics with interactive charts and data filtering for informed decision making.',
    year: '2024',
    tags: ['React', 'TypeScript', 'D3.js', 'Tailwind'],
    image: '/projects/dashboard.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    status: 'Live',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'AI Content Generator',
    description: 'Generate high-quality content using advanced language models with custom templates.',
    year: '2024',
    tags: ['Next.js', 'OpenAI', 'Vercel'],
    image: '/projects/ai-tool.png',
    liveUrl: 'https://example.com',
    status: 'Live',
  },
  {
    id: 'project-3',
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with cart, checkout, and payment processing capabilities.',
    year: '2023',
    tags: ['React', 'Stripe', 'Node.js'],
    image: '/projects/ecommerce.png',
    githubUrl: 'https://github.com',
    status: 'Live',
  },
  {
    id: 'project-4',
    title: 'Design System',
    description: 'Reusable component library with consistent styling and comprehensive documentation.',
    year: '2023',
    tags: ['Storybook', 'React', 'TypeScript'],
    image: '/projects/design-system.png',
    githubUrl: 'https://github.com',
    status: 'In progress',
  },
  {
    id: 'project-5',
    title: 'Realtime Chat App',
    description: 'Instant messaging with rooms, presence, and file sharing powered by WebSocket connections.',
    year: '2024',
    tags: ['Socket.IO', 'Express', 'React'],
    image: '/projects/chat.png',
    liveUrl: 'https://example.com',
    status: 'Live',
  },
  {
    id: 'project-6',
    title: 'Dev CLI Tool',
    description: 'Command-line utility to automate repetitive development tasks and improve workflow efficiency.',
    year: '2024',
    tags: ['Node.js', 'CLI', 'JavaScript'],
    image: '/projects/cli.png',
    githubUrl: 'https://github.com',
    status: 'Live',
  },
]
