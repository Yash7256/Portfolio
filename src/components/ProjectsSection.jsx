import Project from './Project';

const projects = [
  {
    number: '01',
    name: 'CyberSec Toolkit',
    subHeading: 'One Toolkit. Every Threat Covered.',
    image: 'https://i.ibb.co/7tjBF5QB/Chat-GPT-Image-Sep-7-2026-10-58-20-PM.png',
    docs: 'https://home.cybersec1.tech',
    github: 'https://github.com/Yash7256',
    deployed: 'https://cybersec1.tech',
  },
  {
    number: '02',
    name: 'Notifyed',
    subHeading: 'Streamlined notification workflows.',
    image: 'https://i.ibb.co/4ZrGdCQh/mockup1.png',
    docs: '#',
    github: 'https://github.com/Yash7256',
    deployed: 'https://notifyed.vercel.app',
  },
];

export default function ProjectsSection() {
  return (
    <section className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-card">
        {projects.map((p) => (
          <Project key={p.number} project={p} />
        ))}
      </div>
    </section>
  );
}