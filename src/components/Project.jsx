export default function Project({ project }) {
  return (
    <article className="project-item">
      <div className="project-preview">
        {project.image ? (
          <img
            className="project-preview-image"
            src={project.image}
            alt={`${project.name} preview`}
            loading="lazy"
          />
        ) : (
          <div className="project-preview-placeholder" aria-hidden="true" />
        )}
        <div className="project-overlay">
          <div className="project-overlay-top">
            <span className="project-number">{project.number}</span>
            <div className="project-links">
              {project.docs && (
                <a
                  href={project.docs}
                  className="project-icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Documentation"
                  aria-label="Documentation"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  className="project-icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Repository"
                  aria-label="GitHub Repository"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
              )}
              {project.deployed && (
                <a
                  href={project.deployed}
                  className="project-icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Live Demo"
                  aria-label="Live Demo"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          <div className="project-overlay-bottom">
            <h3 className="project-name">{project.name}</h3>
            {project.subHeading && project.subHeading !== '#' && (
              <p className="project-subheading">{project.subHeading}</p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}