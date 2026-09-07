const skillCategories = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'Python', 'Rust', 'Solidity'],
  },
  {
    category: 'AI & Tools',
    skills: ['Gen AI', 'Applied AI', 'AI Agents', 'n8n', 'LangChain'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'FastAPI',
      'REST APIs',
      'Authentication',
      'API Design',
    ],
  },
  {
    category: 'Databases & ORMs',
    skills: [
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'Prisma (ORM)',
      'Redis',
      'Supabase',
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'Docker',
      'Kubernetes',
      'Linux',
      'CI/CD',
      'GitHub Actions',
      'Nginx',
      'Cloud Deployment',
    ],
  },
  {
    category: 'Core Concepts',
    skills: ['System Design', 'OS', 'CN', 'Distributed Systems'],
  },
  {
    category: 'Web3',
    skills: ['Ethereum', 'Smart Contracts', 'Wallet Integration'],
  },
];

export default function SkillsSection() {
  return (
    <section className="skills-section">
      <h2 className="skills-heading">Skills & Technologies</h2>
      <div className="skills-card">
        {skillCategories.map((group) => (
          <div key={group.category} className="skill-category-group">
            <h3 className="skill-category-title">{group.category}</h3>
            <div className="skill-pill-container">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
