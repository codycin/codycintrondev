import { Activity, Cloud, Code2, Dumbbell, HeartPulse } from "lucide-react";

import { ButtonLink, Container, PageHero, Section, SectionHeading, TechnologyList } from "../components/ui";
import { engineeringPrinciples, education, skillGroups } from "../data/portfolio";

const interests = [
  {
    icon: Dumbbell,
    title: "Strength training",
    body: "TallyPRs turns an interest in powerlifting into a full-stack social product.",
  },
  {
    icon: HeartPulse,
    title: "Health & nutrition",
    body: "PrepYield and Alphiplate explore practical food and athlete-oriented workflows.",
  },
];

export function Component() {
  return (
    <>
      <PageHero
        eyebrow="About / 01"
        title="Engineering from the product surface to the system underneath."
        description="Cody is a Computer Science student and software engineer interested in full-stack products, backend systems, enterprise automation, cloud delivery, and low-level fundamentals."
      />
      <Section>
        <Container className="about-story">
          <div>
            <p className="eyebrow">Technical direction</p>
            <h2>A broad stack with a consistent standard.</h2>
          </div>
          <div className="prose">
            <p>
              Cody’s path through computer science is shaped by building: APIs and relational models,
              responsive product interfaces, enterprise workflows, cloud deployments, and C++ containers that
              make memory and object lifetime impossible to ignore.
            </p>
            <p>
              That range supports product-oriented engineering. Debugging, testing, clear collaboration, and
              maintainable boundaries matter because the goal is software that keeps working after the first
              demo.
            </p>
          </div>
        </Container>
      </Section>
      <Section tone="alternate">
        <Container>
          <SectionHeading eyebrow="Operating principles" title="How Cody approaches the work." />
          <div className="principle-grid">
            {engineeringPrinciples.map((principle, index) => (
              <article key={principle.title}>
                <span>0{index + 1}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Interest map"
            title="Personal context, translated into useful software."
            description="These interests inform project choices without becoming the portfolio's main identity."
          />
          <div className="interest-card-grid">
            {interests.map(({ icon: Icon, title, body }) => (
              <article key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <Section tone="alternate">
        <Container className="technical-map">
          <div>
            <p className="eyebrow">Technical map</p>
            <h2>Learning across connected layers.</h2>
            <p>
              Product interface decisions shape APIs; APIs shape data; delivery shapes the constraints around
              all of it.
            </p>
          </div>
          <div className="technical-map__nodes">
            <span>
              <Activity />
              Product interfaces
            </span>
            <span>
              <Code2 />
              APIs & systems
            </span>
            <span>
              <Cloud />
              Cloud delivery
            </span>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Foundation"
            title={education.degree}
            description={`${education.institution} · ${education.gpa} GPA · Expected ${education.expectedGraduation}`}
          />
          <div className="mb-3">
            <TechnologyList technologies={education.coursework} />
          </div>
          <div className="button-row">
            <ButtonLink to="/resume">View full résumé</ButtonLink>
            <ButtonLink to="/projects" variant="text">
              Explore projects
            </ButtonLink>
          </div>
        </Container>
      </Section>
      <Section tone="alternate">
        <Container>
          <SectionHeading eyebrow="Current toolkit" title="Depth where it supports the work." />
          <div className="skills-grid">
            {skillGroups.slice(0, 3).map((group) => (
              <article key={group.name} className="skill-card">
                <h3>{group.name}</h3>
                <p>{group.evidence}</p>
                <TechnologyList technologies={group.skills} compact />
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
