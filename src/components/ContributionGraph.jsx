import contributions, { months, monthSpans, totalContributions } from '../data/contributions';
import ScrollBar from './ScrollBar';

const CELL_SIZE = 10;
const GAP = 4;

function getMonthPositions() {
  const positions = [];
  let week = 0;
  for (let i = 0; i < months.length; i++) {
    positions.push({ label: months[i], x: week * (CELL_SIZE + GAP) });
    week += monthSpans[i];
  }
  return positions;
}

export default function ContributionGraph() {
  const monthPositions = getMonthPositions();

  return (
    <section className="contribution-section">
      <div className="contribution-scroll-wrapper">
        <div className="month-labels" aria-hidden="true">
          {monthPositions.map((m) => (
            <span key={m.label} className="month-label" style={{ left: m.x }}>
              {m.label}
            </span>
          ))}
        </div>

        <div className="contribution-grid">
          {contributions.map((level, i) => (
            <div
              key={i}
              className={`contribution-cell level-${level}`}
              title={`${level} contribution${level !== 1 ? 's' : ''}`}
            />
          ))}
        </div>
      </div>

      <div className="contribution-meta">
        <span>{totalContributions} contributions in the last year</span>
        <div className="contribution-legend">
          <span>Less</span>
          <span className="legend-cell level-0" />
          <span className="legend-cell level-1" />
          <span className="legend-cell level-2" />
          <span className="legend-cell level-3" />
          <span className="legend-cell level-4" />
          <span>More</span>
        </div>
      </div>

      <ScrollBar />
    </section>
  );
}
