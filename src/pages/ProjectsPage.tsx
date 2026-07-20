import { useMemo, useState } from "react";

import { ProjectCard } from "../components/projects/ProjectCard";
import { Container, PageHero, Section } from "../components/ui";
import { projects } from "../data/portfolio";
import type { Project } from "../types/portfolio";
import { cn } from "../utils/cn";

const filters = [
  "featured",
  "all",
  "full-stack",
  "backend",
  "systems",
  "active",
  "completed",
  "in-progress",
] as const;
type Filter = (typeof filters)[number];

const filterLabels: Record<Filter, string> = {
  featured: "Featured",
  all: "All",
  "full-stack": "Full stack",
  backend: "Backend",
  systems: "Systems",
  active: "Active",
  completed: "Completed",
  "in-progress": "In progress",
};

export function filterProjects(items: Project[], filter: Filter) {
  if (filter === "all") return items;
  if (filter === "featured") return items.filter((project) => project.featured);
  if (filter === "active" || filter === "completed" || filter === "in-progress")
    return items.filter((project) => project.status === filter);
  return items.filter((project) => project.category.includes(filter));
}

export function Component() {
  const [filter, setFilter] = useState<Filter>("featured");
  const filteredProjects = useMemo(() => filterProjects(projects, filter), [filter]);

  return (
    <>
      <PageHero
        eyebrow="Projects / 03"
        title="Software built around concrete problems."
        description="Full-stack products, focused frontend tools, systems exercises, automation, and active builds—with status and available links made explicit."
      />
      <Section>
        <Container>
          <div className="filter-bar" aria-label="Filter projects">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={filter === item}
                className={cn(filter === item && "filter-bar__active")}
                onClick={() => setFilter(item)}
              >
                {filterLabels[item]}
              </button>
            ))}
          </div>
          <p className="filter-summary" aria-live="polite">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"} ·{" "}
            {filterLabels[filter]}
          </p>
          {filteredProjects.length > 0 ? (
            <div className="project-grid project-grid--collection">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h2>No projects match this filter.</h2>
              <p>Choose another category to continue exploring.</p>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
