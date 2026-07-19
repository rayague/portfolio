import { NextResponse } from "next/server";
import { manualProjects } from "@/data/featured-repos";

export const revalidate = 21600;

const formatManual = () =>
  manualProjects.map((p) => ({
    id: p.id,
    title: p.title,
    description: p.content,
    homepage: p.link,
    html_url: null,
    language: p.language || null,
    topics: [],
    stargazers_count: 0,
    updated_at: p.date,
    manual: true,
  }));

export async function GET() {
  try {
    const headers = { Accept: "application/vnd.github.v3+json" };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    // Fetch every public repo (paginated, 100 per page).
    const allRepos = [];
    for (let page = 1; page <= 3; page++) {
      const res = await fetch(
        `https://api.github.com/users/rayague/repos?per_page=100&page=${page}&sort=updated`,
        { headers, next: { revalidate: 21600 } }
      );
      if (!res.ok) {
        if (page === 1) {
          return NextResponse.json({ repos: formatManual(), source: "fallback" });
        }
        break;
      }
      const batch = await res.json();
      allRepos.push(...batch);
      if (batch.length < 100) break;
    }

    const enriched = allRepos
      .filter((repo) => !repo.fork && !repo.private)
      .map((repo) => ({
        id: repo.name,
        title: repo.name
          .replace(/[-_]/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase())
          .trim(),
        description:
          repo.description ||
          (repo.language
            ? `A ${repo.language} project — open the repository to explore the source code.`
            : "Open the repository on GitHub to explore the source code."),
        homepage: repo.homepage || null,
        html_url: repo.html_url,
        language: repo.language,
        topics: repo.topics || [],
        stargazers_count: repo.stargazers_count,
        updated_at: repo.updated_at,
        manual: false,
      }));

    const merged = [...formatManual(), ...enriched].sort((a, b) =>
      String(b.updated_at).localeCompare(String(a.updated_at))
    );

    return NextResponse.json({
      repos: merged,
      total: merged.length,
      source: "github",
    });
  } catch {
    return NextResponse.json({ repos: formatManual(), source: "fallback" });
  }
}
