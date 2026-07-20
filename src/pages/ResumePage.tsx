import { Download, Eye, Printer } from "lucide-react";

import { Container, ExternalButton, PageHero, Section, TechnologyList } from "../components/ui";
import { education, experiences, profile, projects, skillGroups } from "../data/portfolio";

export function Component() {
  const selectedProjects = projects
    .filter((project) => project.featured || project.slug === "cpp-vector")
    .slice(0, 4);
  return (
    <>
      <div data-print-hidden>
        <PageHero
          eyebrow="Résumé / 05"
          title="Experience and engineering range, formatted for the web."
          description="The PDF remains the canonical application résumé. This responsive version makes the same core background easy to scan on any device."
        >
          <div className="button-row">
            <ExternalButton href={profile.resumePath} variant="primary">
              <Eye size={17} aria-hidden="true" />
              View PDF
            </ExternalButton>
            <ExternalButton href={profile.resumePath} download>
              <Download size={17} aria-hidden="true" />
              Download PDF
            </ExternalButton>
            <button className="button button--secondary" type="button" onClick={() => window.print()}>
              <Printer size={17} aria-hidden="true" />
              Print page
            </button>
          </div>
        </PageHero>
      </div>
      <Section className="resume-section">
        <Container>
          <article className="web-resume">
            <header className="web-resume__header">
              <div>
                <h1 tabIndex={-1}>{profile.name}</h1>
                <p>{profile.primaryRole}</p>
              </div>
              <address>
                {profile.location}
                <br />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <br />
                <a href={profile.github}>{profile.github}</a>
                <br />
                <a href={profile.linkedIn}>{profile.linkedIn}</a>
              </address>
            </header>
            <section>
              <h2>Professional summary</h2>
              <p>{profile.summary}</p>
            </section>
            <section>
              <h2>Experience</h2>
              {experiences.map((experience) => (
                <article className="resume-entry" key={`${experience.organization}-${experience.title}`}>
                  <div>
                    <h3>
                      {experience.title} · {experience.organization}
                    </h3>
                    <span>
                      {experience.dates}
                      {experience.location ? ` · ${experience.location}` : ""}
                    </span>
                  </div>
                  <p>{experience.summary}</p>
                  <ul>
                    {experience.accomplishments.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </section>
            <section>
              <h2>Education</h2>
              <article className="resume-entry">
                <div>
                  <h3>
                    {education.degree} · {education.institution}
                  </h3>
                  <span>
                    Expected {education.expectedGraduation} · {education.gpa} GPA
                  </span>
                </div>
                <p>
                  <strong>Honors:</strong> {education.honors.join(", ")}
                </p>
                <p>
                  <strong>Organizations:</strong> {education.organizations.join(", ")}
                </p>
                <p>
                  <strong>Coursework:</strong> {education.coursework.join(", ")}
                </p>
              </article>
            </section>
            <section>
              <h2>Skills</h2>
              <div className="resume-skills">
                {skillGroups.map((group) => (
                  <div key={group.name}>
                    <h3>{group.name}</h3>
                    <p>{group.skills.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2>Selected projects</h2>
              <div className="resume-projects">
                {selectedProjects.map((project) => (
                  <article key={project.slug}>
                    <h3>
                      {project.title} <span>· {project.status}</span>
                    </h3>
                    <p>{project.shortDescription}</p>
                    <TechnologyList technologies={project.technologies.slice(0, 7)} compact />
                  </article>
                ))}
              </div>
            </section>
          </article>
        </Container>
      </Section>
    </>
  );
}
