import { ExternalLink, GitBranch } from "lucide-react";
import { Link } from "react-router";

import type { Project } from "../../types/portfolio";
import { TechnologyList } from "../ui";
import { ProjectStatusBadge } from "./ProjectStatusBadge";

export function ProjectCard({ project }: { project: Project }) {
  const repository = project.links?.find((link) => link.type === "repository");
  const live = project.links?.find((link) => link.type === "live");

  return (
    <article className="project-card">
      <div className="project-card__topline">
        <ProjectStatusBadge status={project.status} />
        <span className="project-card__category">{project.category.join(" · ")}</span>
      </div>
      <h3>
        <Link to={`/projects/${project.slug}`} viewTransition>
          {project.title}
        </Link>
      </h3>
      <p>{project.shortDescription}</p>
      <TechnologyList technologies={project.technologies.slice(0, 6)} compact />
      {project.highlights[0] && <p className="project-card__highlight">{project.highlights[0]}</p>}
      <div className="project-card__actions">
        <Link to={`/projects/${project.slug}`} viewTransition>
          Case study <span aria-hidden="true">→</span>
        </Link>
        {repository && (
          <a
            href={repository.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} repository`}
          >
            <GitBranch aria-hidden="true" size={17} />
            Repo
          </a>
        )}
        {live && (
          <a
            href={live.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live site`}
          >
            <ExternalLink aria-hidden="true" size={17} />
            Live
          </a>
        )}
      </div>
    </article>
  );
}
