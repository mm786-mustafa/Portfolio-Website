import { navigation, socials } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-lg font-semibold text-[color:var(--text)]">
              Muhammad Mustafa
            </p>
            <p className="text-sm text-[color:var(--muted)]">
              DevOps Engineer | Web Developer | App Developer
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
            {navigation.slice(0, 5).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[color:var(--text)]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-[color:var(--muted)]">
          <div className="flex flex-wrap gap-3">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[color:var(--text)]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <p>© 2026 Muhammad Mustafa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
