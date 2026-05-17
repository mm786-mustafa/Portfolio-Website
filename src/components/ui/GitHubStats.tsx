"use client";

import { useEffect, useState } from "react";

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
}

export function GitHubStats({ username }: { username: string }) {
  const [stats, setStats] = useState<GitHubStats | null>(null);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          return;
        }
        const data = (await response.json()) as GitHubStats;
        if (active) {
          setStats(data);
        }
      } catch {
        if (active) {
          setStats(null);
        }
      }
    };

    load();
    return () => {
      active = false;
    };
  }, [username]);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
        GitHub Stats
      </p>
      <div className="mt-3 grid grid-cols-3 gap-3 text-center text-sm text-[color:var(--text)]">
        <div>
          <p className="text-lg font-semibold">
            {stats ? stats.public_repos : "-"}
          </p>
          <p className="text-[color:var(--muted)]">Repos</p>
        </div>
        <div>
          <p className="text-lg font-semibold">
            {stats ? stats.followers : "-"}
          </p>
          <p className="text-[color:var(--muted)]">Followers</p>
        </div>
        <div>
          <p className="text-lg font-semibold">
            {stats ? stats.following : "-"}
          </p>
          <p className="text-[color:var(--muted)]">Following</p>
        </div>
      </div>
    </div>
  );
}
