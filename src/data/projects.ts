export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  tech: string[];
  techDetails?: {
    name: string;
    items: string[];
  }[];
  features?: string[];
  image: string;
  screenshots?: string[];
  github?: string;
  demo?: string;
  links?: {
    label: string;
    url: string;
    icon?: string;
  }[];
  stats?: Record<string, string | number>;
  createdAt?: string;
  updatedAt?: string;
}

// Image paths (files are in public/assets/images/projects/cybersec/)
const cybersec1 = '/assets/images/projects/cybersec/01.png';
const cybersec2 = '/assets/images/projects/cybersec/02cybersec.png';
const cybersec3 = '/assets/images/projects/cybersec/03cybersec.png';
const cybersec4 = '/assets/images/projects/cybersec/04cybersec.png';
const cybersec5 = '/assets/images/projects/cybersec/cybersec.png';

export const projects: Project[] = [
  {
    id: 'cybersec',
    title: 'CyberSec',
    tagline: 'CLI & WEB UI based port scanning software powered by AI',
    description: 'A comprehensive cybersecurity tool for network analysis and vulnerability assessment with an intuitive web interface.',
    longDescription: 'CyberSec is a powerful network security tool that combines the flexibility of a command-line interface with the convenience of a modern web UI. It provides comprehensive port scanning capabilities, vulnerability assessment, and AI-powered threat detection. The application is built with security in mind and follows best practices for secure coding and deployment.',
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'Docker'],
    techDetails: [
      {
        name: 'Frontend',
        items: ['React', 'TypeScript', 'TailwindCSS', 'Shadcn/UI']
      },
      {
        name: 'Backend',
        items: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic']
      },
      {
        name: 'Infrastructure',
        items: ['Docker', 'Docker Compose', 'Nginx', 'Redis']
      }
    ],
    features: [
      'Multi-threaded port scanning with customizable settings',
      'AI-powered vulnerability detection and analysis',
      'Interactive web dashboard with real-time results',
      'Comprehensive reporting with export options',
      'User authentication and role-based access control',
      'API for integration with other security tools'
    ],
    image: cybersec5, // Using cybersec.png as the main image
    screenshots: [
      cybersec1,
      cybersec2,
      cybersec3,
      cybersec4,
      cybersec5
    ],
    github: 'https://github.com/Yash7256/CyberSec-CLI',
    demo: 'https://cybersec-kru4.onrender.com/',
    links: [
      {
        label: 'API Documentation',
        url: 'https://cybersec-docs.example.com',
        icon: '📚'
      },
      {
        label: 'Docker Hub',
        url: 'https://hub.docker.com/r/yourusername/cybersec',
        icon: '🐳'
      }
    ],
    stats: {
      'Version': '1.0.0',
      'Last Updated': '2023-11-15',
      'License': 'MIT',
      'Stars': '42',
      'Contributors': '3'
    },
    createdAt: '2023-01-15',
    updatedAt: '2023-11-15'
  },
  // Add more projects here following the same structure
];

export default projects;
