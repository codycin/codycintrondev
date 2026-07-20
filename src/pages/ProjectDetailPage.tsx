import { ArrowLeft, CheckCircle2, Expand } from "lucide-react";
import { Link, useParams } from "react-router";

import { ProjectCard } from "../components/projects/ProjectCard";
import { ProjectStatusBadge } from "../components/projects/ProjectStatusBadge";
import { Container, ExternalButton, Section, SectionHeading, TechnologyList } from "../components/ui";
import { projects } from "../data/portfolio";
import type { ProjectSection } from "../types/portfolio";

function CaseSections({ sections }: { sections: ProjectSection[] }) {
  return (
    <div className="case-section-grid">
      {sections.map((section) => (
        <article key={section.heading}>
          <h3>{section.heading}</h3>
          {section.body?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.bullets && (
            <ul>
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}

function TextListSection({ eyebrow, title, items }: { eyebrow: string; title: string; items: string[] }) {
  return (
    <Section>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <ul className="case-list">
          {items.map((item) => (
            <li key={item}>
              <CheckCircle2 aria-hidden="true" size={19} />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export function Component() {
  const { projectSlug } = useParams();
  const project = projects.find((item) => item.slug === projectSlug);

  if (!project) {
    return (
      <section className="not-found">
        <Container>
          <p className="eyebrow">Project not found</p>
          <h1 tabIndex={-1}>That case study is outside the current.</h1>
          <p>The project slug does not match an approved portfolio entry.</p>
          <div className="button-row">
            <Link className="button button--primary" to="/projects">
              Explore projects
            </Link>
            <Link className="button button--secondary" to="/">
              Return home
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  const related = projects.filter((item) => project.relatedProjectSlugs?.includes(item.slug));

  return (
    <>
      <header className="case-hero">
        <Container>
          <Link to="/projects" className="back-link">
            <ArrowLeft size={17} aria-hidden="true" />
            All projects
          </Link>
          <div className="case-hero__topline">
            <p className="eyebrow">Case study / {project.category.join(" · ")}</p>
            <ProjectStatusBadge status={project.status} />
          </div>
          <h1 tabIndex={-1}>{project.title}</h1>
          <p>{project.fullDescription ?? project.shortDescription}</p>
          <div className="button-row">
            {project.links?.map((link) => (
              <ExternalButton
                key={link.url}
                href={link.url}
                variant={link.type === "live" ? "primary" : "secondary"}
              >
                {link.label}
              </ExternalButton>
            ))}
          </div>
          <TechnologyList technologies={project.technologies} />
        </Container>
      </header>

      {project.images && project.images.length > 0 && (
        <Section>
          <Container>
            <div className="project-gallery">
              {project.images.map((image) => (
                <figure key={image.src}>
                  <a
                    href={image.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open full-size ${image.caption ?? project.title} screenshot`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      loading="lazy"
                    />
                    <span>
                      <Expand size={17} aria-hidden="true" />
                      Open image
                    </span>
                  </a>
                  {image.caption && <figcaption>{image.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </Container>
        </Section>
      )}
      {project.problem && (
        <TextListSection
          eyebrow="Problem / motivation"
          title="Why this project exists."
          items={project.problem}
        />
      )}
      {project.users && (
        <TextListSection eyebrow="Users" title="Designed for specific roles." items={project.users} />
      )}
      {project.functionality && (
        <TextListSection
          eyebrow="Product behavior"
          title="Implemented capabilities."
          items={project.functionality}
        />
      )}
      {project.architecture && (
        <Section tone="alternate">
          <Container>
            <SectionHeading eyebrow="Architecture" title="System boundaries and delivery." />
            <CaseSections sections={project.architecture} />
          </Container>
        </Section>
      )}
      {project.decisions && (
        <Section>
          <Container>
            <SectionHeading eyebrow="Engineering decisions" title="Choices tied to product behavior." />
            <CaseSections sections={project.decisions} />
          </Container>
        </Section>
      )}
      {project.highlights.length > 0 && (
        <TextListSection
          eyebrow="Technical highlights"
          title="What the implementation demonstrates."
          items={project.highlights}
        />
      )}
      {project.results && (
        <TextListSection eyebrow="Results" title="Approved outcomes." items={project.results} />
      )}
      {project.lessons && (
        <TextListSection eyebrow="Lessons" title="What the project reinforced." items={project.lessons} />
      )}
      {project.currentWork && (
        <TextListSection eyebrow="Current work" title="Still in motion." items={project.currentWork} />
      )}
      {project.plannedWork && (
        <Section tone="alternate">
          <Container>
            <SectionHeading eyebrow="Planned work" title="Intended—not presented as complete." />
            <ul className="case-list case-list--planned">
              {project.plannedWork.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Container>
        </Section>
      )}
      {related.length > 0 && (
        <Section>
          <Container>
            <SectionHeading eyebrow="Related work" title="Continue exploring." />
            <div className="project-grid">
              {related.map((item) => (
                <ProjectCard key={item.slug} project={item} />
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
