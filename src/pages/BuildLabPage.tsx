import { ExternalLink } from "lucide-react";

import { ConstructionScene } from "../components/build-lab/ConstructionScene";
import { Container, PageHero, Section, TechnologyList } from "../components/ui";
import { buildLabProjects } from "../data/portfolio";

const milestoneLabels = {
  implemented: "Implemented",
  building: "Currently building",
  testing: "Testing",
  planned: "Planned",
};

export function Component() {
  return (
    <>
      <PageHero
        eyebrow="Build Lab / 04"
        title="Active work, clearly labeled."
        description="A view into projects under construction—what exists, what is moving, what is being tested, and what remains planned."
      />
      <Section>
        <Container>
          <ConstructionScene />
        </Container>
      </Section>
      <Section tone="alternate">
        <Container className="build-lab-list">
          {buildLabProjects.map((project, index) => (
            <article className="build-lab-card" key={project.name}>
              <div className="build-lab-card__number">LAB_{String(index + 1).padStart(2, "0")}</div>
              <div className="build-lab-card__body">
                <div className="build-lab-card__header">
                  <div>
                    <p className="eyebrow eyebrow--amber">{project.status}</p>
                    <h2>{project.name}</h2>
                  </div>
                  <span className="pulse-status">
                    <span aria-hidden="true" />
                    Work in motion
                  </span>
                </div>
                <p>{project.description}</p>
                <TechnologyList technologies={project.technologies} />
                {project.repository && (
                  <a
                    className="inline-link"
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View repository <ExternalLink size={16} aria-hidden="true" />
                  </a>
                )}
              </div>
              <ol className="milestone-list">
                {project.milestones.map((milestone) => (
                  <li key={milestone.label} className={`milestone milestone--${milestone.state}`}>
                    <span className="milestone__marker" aria-hidden="true" />
                    <div>
                      <strong>{milestone.label}</strong>
                      <span>{milestoneLabels[milestone.state]}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </Container>
      </Section>
    </>
  );
}
