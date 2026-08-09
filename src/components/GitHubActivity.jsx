import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, CalendarDays, GitBranch, Star, Users, Zap } from "lucide-react";

const USERNAME = "Natink1";
const CONTRIBUTIONS_URL = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`;
const REPOS_URL = `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=8`;

export default function GitHubActivity() {
  const [activity, setActivity] = useState(null);
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState(null);
  const [status, setStatus] = useState("loading");
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    let cancelled = false;

    Promise.all([
      fetch(CONTRIBUTIONS_URL).then((response) => {
        if (!response.ok) throw new Error("Contribution data unavailable");
        return response.json();
      }),
      fetch(REPOS_URL).then((response) => {
        if (!response.ok) throw new Error("Repository data unavailable");
        return response.json();
      }),
      fetch(`https://api.github.com/users/${USERNAME}`).then((response) => {
        if (!response.ok) throw new Error("Profile data unavailable");
        return response.json();
      }),
    ])
      .then(([contributionData, repositoryData, profileData]) => {
        if (cancelled) return;
        setActivity(contributionData);
        setRepos(repositoryData.filter((repo) => !repo.fork).slice(0, 6));
        setProfile(profileData);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const recentContributions = useMemo(() => activity?.contributions?.slice(-364) ?? [], [activity]);
  const activeDays = activity?.contributions?.filter((day) => day.count > 0).length ?? 0;
  const peakDay = useMemo(
    () => activity?.contributions?.reduce((peak, day) => (day.count > peak.count ? day : peak)),
    [activity],
  );

  return (
    <section id="github" className="relative border-y border-border/60 py-24">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.025]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              [SYS.GITHUB_FEED]
            </span>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Open source, <span className="gradient-text">in public.</span>
            </h2>
            <p className="mt-4 max-w-xl font-mono text-xs text-muted-foreground uppercase flex items-center gap-2">
              <span className="text-primary">{`>`}</span> FETCHING LIVE SIGNAL FROM UPSTREAM... [OK]
            </p>
          </div>
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 self-start border-b border-primary/50 pb-1 text-sm font-semibold text-primary md:self-auto"
          >
            @{USERNAME}{" "}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <Stat
            icon={Zap}
            label="Contributions"
            value={activity ? activity.total?.lastYear?.toLocaleString() : "--"}
          />
          <Stat
            icon={GitBranch}
            label="Public repositories"
            value={profile?.public_repos ?? "--"}
          />
          <Stat icon={Users} label="Followers" value={profile?.followers ?? "--"} />
        </div>

        <div className="glass-card mt-4 overflow-hidden rounded-md p-5 sm:p-7">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="font-display text-lg font-semibold uppercase tracking-wide">Contribution rhythm</div>
              <div className="mt-1 font-mono text-[10px] uppercase text-primary">
                > {activeDays} ACTIVE DAYS // LIVE DATA_
              </div>
            </div>
            <div className="flex items-center gap-3 border border-border bg-background/40 px-3 py-2 font-mono text-xs">
              <CalendarDays className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Selected</span>
              <span className="text-foreground">
                {selectedDay
                  ? `${selectedDay.count} on ${formatDate(selectedDay.date)}`
                  : peakDay
                    ? `Peak: ${peakDay.count} on ${formatDate(peakDay.date)}`
                    : "Hover a day"}
              </span>
            </div>
          </div>
          {status === "loading" ? (
            <ActivitySkeleton />
          ) : status === "error" ? (
            <ActivityError />
          ) : (
            <div className="mt-7 overflow-x-auto pb-2 contribution-scroll">
              <div
                className="contribution-grid contribution-grid-wide min-w-[920px]"
                role="grid"
                aria-label="GitHub contributions during the last year"
              >
                {recentContributions.map((day, index) => (
                  <button
                    type="button"
                    key={day.date}
                    title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                    aria-label={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${formatDate(day.date)}`}
                    onMouseEnter={() => setSelectedDay(day)}
                    onFocus={() => setSelectedDay(day)}
                    onClick={() => setSelectedDay(day)}
                    className={`contribution-cell contribution-cell-interactive level-${day.level}`}
                    style={{ "--cell-delay": `${Math.min(index * 3, 700)}ms` }}
                  />
                ))}
              </div>
              <div className="mt-5 flex min-w-[920px] items-center justify-between text-[10px] text-muted-foreground">
                <span>{formatDate(recentContributions[0]?.date)}</span>
                <div className="flex items-center gap-2">
                  <span>Less</span>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((level) => (
                      <span key={level} className={`contribution-cell level-${level}`} />
                    ))}
                  </div>
                  <span>More</span>
                </div>
                <span>{formatDate(recentContributions.at(-1)?.date)}</span>
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 glass-card rounded-md p-5 sm:p-7">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-display text-lg font-semibold uppercase tracking-wide">Recently shipped</div>
              <div className="mt-1 font-mono text-[10px] uppercase text-primary">> Latest public repositories_</div>
            </div>
            <Star className="h-4 w-4 text-primary" />
          </div>
          <div className="mt-5 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {status === "loading" ? (
              <RepoSkeleton />
            ) : status === "error" ? (
              <p className="bg-card p-5 text-sm text-muted-foreground sm:col-span-2 lg:col-span-3">
                GitHub data is taking a break. Visit the profile for the latest work.
              </p>
            ) : (
              repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-28 items-start justify-between gap-3 bg-card p-5 transition-colors hover:bg-primary/8"
                >
                  <span className="min-w-0">
                    <span className="block truncate font-mono text-sm font-medium group-hover:text-primary">
                      {repo.name}
                    </span>
                    <span className="mt-2 block font-mono text-[10px] uppercase text-muted-foreground">
                      [{repo.language || "SYS"}] // {repo.stargazers_count} STARS
                    </span>
                    <span className="mt-4 block font-mono text-[10px] uppercase text-muted-foreground">
                      > UPDATED {formatDate(repo.updated_at)}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </a>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="border-l-2 border-primary/30 bg-background/20 p-4 font-mono transition-colors hover:border-primary">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
        <Icon className="h-3.5 w-3.5 text-primary" /> {label.replace(/\s+/g, '_')}
      </div>
      <div className="mt-2 text-3xl font-semibold text-foreground">{value}</div>
    </div>
  );
}

function ActivitySkeleton() {
  return (
    <div
      className="mt-6 h-28 animate-pulse bg-secondary/50"
      aria-label="Loading GitHub contributions"
    />
  );
}

function RepoSkeleton() {
  return (
    <div
      className="h-44 animate-pulse bg-secondary/50 sm:col-span-2 lg:col-span-3"
      aria-label="Loading repositories"
    />
  );
}

function formatDate(date) {
  if (!date) return "--";
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(
    new Date(date),
  );
}

function ActivityError() {
  return (
    <div className="mt-6 flex h-28 items-center border border-dashed border-border px-4 text-sm text-muted-foreground">
      Live activity is temporarily unavailable. The profile link above is always current.
    </div>
  );
}
