import { Building2, MapPin } from "lucide-react";

import { ButtonLink, Container, PageHero, Section, TechnologyList } from "../components/ui";
import { experiences } from "../data/portfolio";

export function Component() {
  return (
    <>
      <PageHero
        eyebrow="Experience / 02"
        title="Building software inside real organizational constraints."
        description="Enterprise collaboration automation and research-oriented computing, presented with measurable scope and without confidential implementation details."
      />
      <Section>
        <Container>
          <div className="timeline">
            {experiences.map((experience, index) => (
              <article className="timeline-entry" key={`${experience.organization}-${experience.title}`}>
                <div className="timeline-entry__rail">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="timeline-entry__content">
                  <div className="timeline-entry__header">
                    <div>
                      <p className="eyebrow">{experience.dates}</p>
                      <h2>{experience.title}</h2>
                      <h3>
                        <Building2 size={18} aria-hidden="true" />
                        {experience.organization}
                      </h3>
                    </div>
                    {experience.location && (
                      <span>
                        <MapPin size={16} aria-hidden="true" />
                        {experience.location}
                      </span>
                    )}
                  </div>
                  <p className="timeline-entry__summary">{experience.summary}</p>
                  <ul className="check-list">
                    {experience.accomplishments.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <TechnologyList technologies={experience.technologies} />
                </div>
              </article>
            ))}
          </div>
          <div className="page-end-cta">
            <h2>See the work behind the toolkit.</h2>
            <p>
              Explore project case studies spanning full-stack products, systems programming, and frontend
              delivery.
            </p>
            <ButtonLink to="/projects">Explore projects</ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
