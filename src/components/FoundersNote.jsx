import { useTheme } from '../context/useTheme';

export default function FoundersNote() {
  const { theme } = useTheme();

  return (
    <section className="founders-note-section">
      <h2 className="founders-note-heading">Founder's Note</h2>
      <div className="founders-note-card">
        <div className="founders-note-badge">
          <span className="pulse-indicator" aria-hidden="true" />
          <span>Anvik Labs • Applied AI</span>
        </div>

        <div className="founders-note-body">
          <p>
            At Anvik Labs, we build technology at the intersection of robust engineering and Applied AI, turning emerging AI capabilities into practical, intelligent products.
          </p>
          <p>
            Our products are built to solve real problems, automate complex workflows, and push what modern software can do.
          </p>
          <p>
            <strong>CyberSec Toolkit</strong>, currently under development, is one of our products, bringing cybersecurity tools, automation, and intelligent analysis into a unified platform.
          </p>
          <p className="founders-tagline">
            <strong>Anvik Labs is building what comes next.</strong>
          </p>
        </div>

        <div className="founders-note-footer">
          <div className="founder-profile">
            <img
              src={theme === 'light' ? '/anvik-dark.jpeg' : '/anvik.jpeg'}
              alt="Anvik Labs"
              className="founder-avatar"
            />
            <div className="founder-meta">
              <span className="founder-name">Aman Raj</span>
              <span className="founder-role">Founder, Anvik Labs</span>
            </div>
          </div>

          <a
            href="https://x.com/Yash7257"
            target="_blank"
            rel="noopener noreferrer"
            className="founder-connect-btn"
          >
            <span>Follow the Journey</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
