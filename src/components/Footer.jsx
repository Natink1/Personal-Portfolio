export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="grid h-7 w-7 place-items-center rounded-md gradient-bg-primary text-xs font-bold text-primary-foreground">
            N
          </span>
          <span>© {new Date().getFullYear()} Natnael Deribe. All rights reserved.</span>
        </div>
        <div className="text-xs text-muted-foreground">
          Built with <span className="text-primary">Laravel mind</span>, designed with care.
        </div>
      </div>
    </footer>
  );
}
