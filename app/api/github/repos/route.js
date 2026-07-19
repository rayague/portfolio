import { NextResponse } from "next/server";
import { featuredRepos, manualProjects } from "@/data/featured-repos";

export const revalidate = 21600;

export async function GET() {
  try {
    const res = await fetch(
      "https://api.github.com/users/rayague/repos?per_page=100&sort=updated",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 21600 },
      }
    );

    if (!res.ok) {
          const formatted = manualProjects.map((p) => ({
        id: p.id,
        title: p.title,
        date: p.date,
        description: p.content,
        image: p.image,
        homepage: p.link,
        html_url: null,
        language: null,
        topics: [],
        stargazers_count: 0,
        fork: false,
        featured: true,
      }));
      return NextResponse.json({ repos: formatted, source: "fallback" });
    }

    const allRepos = await res.json();

    const relevant = allRepos.filter((repo) =>
      featuredRepos.includes(repo.name)
    );

    const enriched = relevant.map((repo) => ({
      id: repo.name,
      title: repo.name
        .replace(/-/g, " ")
        .replace(/_/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase()),
      description: repo.description || "No description available",
      image: null,
      homepage: repo.homepage || null,
      html_url: repo.html_url,
      language: repo.language,
      topics: repo.topics || [],
      stargazers_count: repo.stargazers_count,
      fork: repo.fork,
      updated_at: repo.updated_at,
    }));

    const manual = manualProjects.map((p) => ({
      id: p.id,
      title: p.title,
      description: p.content,
      image: p.image,
      homepage: p.link,
      html_url: null,
      language: null,
      topics: [],
      stargazers_count: 0,
      fork: false,
      date: p.date,
    }));

    const merged = [...enriched, ...manual].sort((a, b) => {
      const dateA = a.updated_at || a.date || "2020";
      const dateB = b.updated_at || b.date || "2020";
      return dateB.localeCompare(dateA);
    });

    return NextResponse.json({ repos: merged, source: "github" });
  } catch {
    const formatted = manualProjects.map((p) => ({
      id: p.id,
      title: p.title,
      date: p.date,
      description: p.content,
      image: p.image,
      homepage: p.link,
      html_url: null,
      language: null,
      topics: [],
      stargazers_count: 0,
      fork: false,
      featured: true,
    }));
    return NextResponse.json({ repos: formatted, source: "fallback" });
  }
}
