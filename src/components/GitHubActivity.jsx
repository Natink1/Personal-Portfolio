import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, CalendarDays } from "lucide-react";

const USERNAME = "Natink1";
const CONTRIBUTIONS_URL = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`;

export default function GitHubActivity() {
  const [activity, setActivity] = useState(null);
  const [status, setStatus] = useState("loading");
  const [selectedDay, setSelectedDay] = useState(null);
  const [snakeFrame, setSnakeFrame] = useState(0);

  useEffect(() => {
    let cancelled = false;
    fetch(CONTRIBUTIONS_URL)
      .then((response) => {
        if (!response.ok) throw new Error("Contribution data unavailable");
        return response.json();
      })
      .then((data) => {
        if (cancelled) return;
        setActivity(data);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const contributions = useMemo(() => activity?.contributions?.slice(-364) ?? [], [activity]);
  const weeks = useMemo(() => chunkIntoWeeks(contributions), [contributions]);
  const activeDays = contributions.filter((day) => day.count > 0).length;
  const snakeCells = useMemo(() => buildSnakeCells(weeks), [weeks]);

  useEffect(() => {
    if (!snakeCells.length) return undefined;
    const timer = window.setInterval(() => {
      setSnakeFrame((current) => (current + 1) % snakeCells.length);
    }, 140);
    return () => window.clearInterval(timer);
  }, [snakeCells]);

  const peakDay = contributions.reduce(
    (peak, day) => (day.count > peak.count ? day : peak),
    contributions[0] ?? { count: 0, date: "" },
  );

  return (
    <section id="github" className="relative border-y border-border/60 py-16 sm:py-20">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.025]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              GitHub
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Building <span className="gradient-text">in public</span>
            </h2>
          </div>
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 self-start border-b border-primary/50 pb-1 text-sm font-semibold text-primary"
          >
            @{USERNAME}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="glass-card mt-10 overflow-hidden rounded-[2rem] p-5 sm:p-7">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="font-display text-lg font-semibold">Contribution graph</div>
              <div className="mt-1 font-mono text-[10px] uppercase text-primary">
                {activeDays} active days
              </div>
            </div>
            <div className="flex items-center gap-3 border border-border bg-background/40 px-3 py-2 font-mono text-xs">
              <CalendarDays className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Selected</span>
              <span className="text-foreground">
                {selectedDay
                  ? `${selectedDay.count} on ${formatDate(selectedDay.date)}`
                  : peakDay.count
                    ? `Peak: ${peakDay.count} on ${formatDate(peakDay.date)}`
                    : "Hover a day"}
              </span>
            </div>
          </div>

          {status === "loading" ? (
            <div className="mt-7 h-28 animate-pulse rounded-xl bg-secondary/50" />
          ) : status === "error" ? (
            <div className="mt-7 flex h-28 items-center border border-dashed border-border px-4 text-sm text-muted-foreground">
              Activity is temporarily unavailable.
            </div>
          ) : (
            <div className="contribution-scroll mt-7 overflow-x-auto pb-2">
              <div className="contribution-grid contribution-grid-wide min-w-[1250px]" role="grid" aria-label="GitHub contributions">
                {weeks.flatMap((week, weekIndex) =>
                  week.map((day, dayIndex) => (
                    <button
                      type="button"
                      key={day.date}
                      title={`${day.count} contributions on ${day.date}`}
                      onMouseEnter={() => setSelectedDay(day)}
                      onFocus={() => setSelectedDay(day)}
                      onClick={() => setSelectedDay(day)}
                      className={`contribution-cell contribution-cell-interactive level-${day.level}`}
                      data-snake-active={getSnakeOffset(snakeCells, snakeFrame, weekIndex, dayIndex) !== null ? "true" : "false"}
                      style={{
                        "--cell-delay": `${Math.min((weekIndex * 7 + dayIndex) * 3, 700)}ms`,
                        "--snake-opacity": (() => {
                          const offset = getSnakeOffset(snakeCells, snakeFrame, weekIndex, dayIndex);
                          return offset === null ? 0 : Math.max(0.18, 1 - offset * 0.12);
                        })(),
                      }}
                    />
                  )),
                )}
              </div>
              <div className="mt-5 flex min-w-[1250px] items-center justify-between text-xs text-muted-foreground">
                <span>{formatDate(contributions[0]?.date)}</span>
                <div className="flex items-center gap-2">
                  <span>Less</span>
                  {[0, 1, 2, 3, 4].map((level) => (
                    <span key={level} className={`contribution-cell level-${level}`} />
                  ))}
                  <span>More</span>
                </div>
                <span>{formatDate(contributions.at(-1)?.date)}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function formatDate(date) {
  if (!date) return "--";
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(date));
}

function buildSnakeCells(weeks) {
  return weeks.flatMap((week, weekIndex) => {
    const indices = weekIndex % 2 === 0 ? [...week.keys()] : [...week.keys()].reverse();
    return indices.filter((dayIndex) => week[dayIndex]?.count > 0).map((dayIndex) => ({ weekIndex, dayIndex }));
  });
}

function getSnakeOffset(snakeCells, frame, weekIndex, dayIndex) {
  for (let offset = 0; offset <= Math.min(10, snakeCells.length - 1); offset += 1) {
    const cell = snakeCells[(frame - offset + snakeCells.length) % snakeCells.length];
    if (cell?.weekIndex === weekIndex && cell?.dayIndex === dayIndex) return offset;
  }
  return null;
}

function chunkIntoWeeks(contributions) {
  const weeks = [];
  for (let index = 0; index < contributions.length; index += 7) {
    weeks.push(contributions.slice(index, index + 7));
  }
  return weeks;
}
