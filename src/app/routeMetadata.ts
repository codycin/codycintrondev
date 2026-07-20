import { projects } from "../data/portfolio";
import type { RouteMetadata } from "../types/portfolio";

const staticMetadata: Record<string, RouteMetadata> = {
  "/": {
    title: "Cody Cintron | Software Engineer",
    description: "Software engineer building reliable products, developer tools, and enterprise automation.",
    pathname: "/",
  },
  "/about": {
    title: "About | Cody Cintron",
    description:
      "Cody Cintron's engineering background, interests, principles, and computer science education.",
    pathname: "/about",
  },
  "/experience": {
    title: "Experience | Cody Cintron",
    description:
      "Professional experience in enterprise collaboration automation and research-oriented computing.",
    pathname: "/experience",
  },
  "/projects": {
    title: "Projects | Cody Cintron",
    description: "Full-stack, frontend, systems, cloud, and automation projects by Cody Cintron.",
    pathname: "/projects",
  },
  "/build-lab": {
    title: "Build Lab | Cody Cintron",
    description: "Active and in-progress software projects, current milestones, and planned work.",
    pathname: "/build-lab",
  },
  "/resume": {
    title: "Résumé | Cody Cintron",
    description: "Cody Cintron's responsive software engineering résumé, skills, experience, and education.",
    pathname: "/resume",
  },
  "/contact": {
    title: "Contact | Cody Cintron",
    description: "Contact Cody Cintron about software engineering opportunities and technical product work.",
    pathname: "/contact",
  },
};

export function getRouteMetadata(pathname: string): RouteMetadata {
  const staticRoute = staticMetadata[pathname];
  if (staticRoute) return staticRoute;

  if (pathname.startsWith("/projects/")) {
    const slug = pathname.slice("/projects/".length);
    const project = projects.find((item) => item.slug === slug);
    if (project) {
      return {
        title: `${project.title} Case Study | Cody Cintron`,
        description: project.shortDescription,
        pathname,
      };
    }
  }

  return {
    title: "Page Not Found | Cody Cintron",
    description:
      "The requested page could not be found. Explore Cody Cintron's portfolio and software projects.",
    pathname,
  };
}
