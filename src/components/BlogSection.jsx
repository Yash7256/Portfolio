const blogs = [
  {
    title: 'The Difference Between Following Tutorials and Actually Building',
    date: 'Sep 2026',
    readTime: '5 min read',
    description:
      'Moving past tutorial dependency into building real-world software—how solving unscripted bugs and designing from scratch builds true engineering intuition.',
    link: 'https://medium.com/@yash7256/the-difference-between-following-tutorials-and-actually-building-c0ba8bf4b62f',
    tag: 'Engineering',
  },
  {
    title: 'Your Website Is Slow? Redis Can Fix That',
    date: 'Aug 2026',
    readTime: '6 min read',
    description:
      'A practical guide to implementing high-speed in-memory caching with Redis to eliminate database bottlenecks, speed up APIs, and scale throughput.',
    link: 'https://medium.com/@yash7256/your-website-is-slow-redis-can-fix-that-e741c77c3029',
    tag: 'Backend & Performance',
  },
  {
    title: 'Building Modern Tech: From Architecture to Applied AI Systems',
    date: 'Jul 2026',
    readTime: '4 min read',
    description:
      'Reflections on software craftsmanship, scaling web products, and bridging robust backend infrastructure with modern Applied AI capabilities.',
    link: 'https://medium.com/@yash7256/-4e5d690dab2b',
    tag: 'Applied AI',
  },
];

export default function BlogSection() {
  return (
    <section className="blog-section">
      <div className="blog-section-header">
        <h2 className="blog-heading">Writing & Articles</h2>
        <a
          href="https://medium.com/@yash7256"
          target="_blank"
          rel="noopener noreferrer"
          className="blog-view-all"
        >
          <span>View on Medium</span>
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
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </a>
      </div>

      <div className="blog-card">
        {blogs.map((b) => (
          <a
            key={b.title}
            href={b.link}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-item"
          >
            <div className="blog-item-header">
              <span className="blog-tag">{b.tag}</span>
              <span className="blog-meta">
                {b.date} • {b.readTime}
              </span>
            </div>
            <div className="blog-item-content">
              <h3 className="blog-title">{b.title}</h3>
              <p className="blog-description">{b.description}</p>
            </div>
            <div className="blog-item-footer">
              <span className="blog-read-link">Read article</span>
              <svg
                className="blog-arrow"
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
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
