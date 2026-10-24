import { NextResponse } from 'next/server';
import { fallbackGitHubRepos } from '@/data/projects';
import type { GitHubRepoSummary } from '@/types/portfolio';

interface RawGitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
}

export async function GET() {
  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'hosein-sedaqat-portfolio',
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
      'https://api.github.com/users/hoseinsedaqat/repos?per_page=60&sort=updated',
      {
        headers,
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return NextResponse.json({
        repos: fallbackGitHubRepos,
        source: 'fallback',
      });
    }

    const raw = (await res.json()) as RawGitHubRepo[];
    if (!Array.isArray(raw)) {
      return NextResponse.json({
        repos: fallbackGitHubRepos,
        source: 'fallback',
      });
    }

    const cleaned: GitHubRepoSummary[] = raw
      .filter(
        (repo) =>
          !repo.fork &&
          !repo.archived &&
          repo.name.toLowerCase() !== 'hoseinsedaqat'
      )
      .map((repo) => ({
        name: repo.name,
        description: repo.description,
        htmlUrl: repo.html_url,
        homepage: repo.homepage || null,
        language: repo.language,
        stargazersCount: repo.stargazers_count || 0,
        updatedAt: repo.updated_at,
        fork: repo.fork,
        archived: repo.archived,
      }));

    return NextResponse.json({
      repos: cleaned.length > 0 ? cleaned : fallbackGitHubRepos,
      source: cleaned.length > 0 ? 'live' : 'fallback',
    });
  } catch {
    return NextResponse.json({
      repos: fallbackGitHubRepos,
      source: 'fallback',
    });
  }
}
