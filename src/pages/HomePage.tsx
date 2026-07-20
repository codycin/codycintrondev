import { ArrowDownRight, ContactRound, GitBranch, MapPin, Radio } from "lucide-react";
import { Link } from "react-router";

import { ProjectCard } from "../components/projects/ProjectCard";
import { ProjectStatusBadge } from "../components/projects/ProjectStatusBadge";
import {
  ButtonLink,
  Container,
  ExternalButton,
  Section,
  SectionHeading,
  TechnologyList,
} from "../components/ui";
import {
  buildLabProjects,
  education,
  experiences,
  featuredProject,
  impactMetrics,
  profile,
  selectedProjects,
  skillGroups,
} from "../data/portfolio";

function HeroPortrait() {
  return (
    <figure className="hero-portrait">
      <div className="hero-portrait__frame">
        <img
          src={profile.portraitPath}
          alt="Portrait of Cody Cintron"
          width={900}
          height={1200}
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-portrait__grid" aria-hidden="true" />
        <div className="hero-portrait__signal" aria-hidden="true">
          <span /> PROFILE / CODY CINTRON
        </div>
      </div>
      <figcaption>
        <span>{profile.primaryRole}</span>
        <strong>{profile.location}</strong>
      </figcaption>
    </figure>
  );
}

function SystemsDivider() {
  return (
    <div className="systems-divider" aria-hidden="true">
      <Container className="systems-divider__inner">
        <div className="systems-divider__status">
          <Radio size={15} /> SYSTEMS ONLINE
        </div>
        <div className="systems-divider__waves">
          <div className="systems-divider__wave systems-divider__wave--one" />
          <div className="systems-divider__wave systems-divider__wave--two" />
          <div className="systems-divider__wave systems-divider__wave--three" />
          <span className="systems-divider__node systems-divider__node--one" />
          <span className="systems-divider__node systems-divider__node--two" />
          <span className="systems-divider__node systems-divider__node--three" />
        </div>
        <div className="systems-divider__message">
          <strong>Products that hold up under real use.</strong>
          <span>FULL-STACK · SYSTEMS · AUTOMATION</span>
        </div>
      </Container>
    </div>
  );
}

export function HomePage() {
  const currentExperience = experiences[0];
  const featuredSelection = selectedProjects.filter((project) => project.slug !== "tallyprs");

  return (
    <>
      <header className="home-hero">
        <Container className="home-hero__grid">
          <div className="home-hero__intro">
            <div className="availability">
              <span aria-hidden="true" />
              {profile.availability}
            </div>
            <p className="hero-greeting">Hi, I'm Cody.</p>
            <p className="hero-kicker">
              {profile.primaryRole} · {profile.secondaryRole}
            </p>
          </div>
          <HeroPortrait />
          <div className="home-hero__main">
            <h1 tabIndex={-1}>{profile.headline}</h1>
            <p className="home-hero__summary">{profile.summary}</p>
            <div className="button-row">
              <ButtonLink to="/projects">View projects</ButtonLink>
              <ButtonLink to="/resume" variant="secondary">
                View résumé
              </ButtonLink>
              <ButtonLink to="/contact" variant="text">
                Contact me
              </ButtonLink>
            </div>
            <div className="hero-links">
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <GitBranch aria-hidden="true" size={18} />
                GitHub
              </a>
              <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">
                <ContactRound aria-hidden="true" size={18} />
                LinkedIn
              </a>
              <span>
                <MapPin aria-hidden="true" size={18} />
                {profile.location}
              </span>
            </div>
          </div>
        </Container>
        <SystemsDivider />
      </header>

      <Section className="metrics-section" aria-labelledby="impact-heading">
        <Container>
          <div className="section-heading section-heading--horizontal">
            <div>
              <p className="eyebrow">Selected impact</p>
              <h2 id="impact-heading">Work with real scope.</h2>
            </div>
            <p>
              Enterprise automation, reliable migrations, and disciplined academic progress—each metric
              includes the system behind it.
            </p>
          </div>
          <div className="metric-grid">
            {impactMetrics.map((metric) => (
              <article key={metric.label} className="metric-card">
                <strong>{metric.value}</strong>
                <h3>{metric.label}</h3>
                <p>{metric.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="alternate" id="about-preview">
        <Container className="split-section">
          <div>
            <p className="eyebrow">Engineering perspective</p>
            <h2>Product thinking, backed by systems fundamentals.</h2>
          </div>
          <div className="split-section__content">
            <p>
              Cody works across full-stack products, backend APIs, enterprise automation, cloud delivery, and
              systems programming. The common thread is practical: understand the real problem, make the
              behavior explicit, and improve it through testing and technical iteration.
            </p>

            <ButtonLink to="/about" variant="text">
              Read more about Cody
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Current experience"
            title={`${currentExperience.title} at ${currentExperience.organization}`}
            description={currentExperience.summary}
          />
          <article className="experience-preview">
            <div className="experience-preview__meta">
              <span>{currentExperience.dates}</span>
              <span>{currentExperience.location}</span>
            </div>
            <ul>
              {currentExperience.accomplishments.slice(0, 3).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <TechnologyList technologies={currentExperience.technologies} compact />
          </article>
          <ButtonLink to="/experience" variant="text">
            View professional experience
          </ButtonLink>
        </Container>
      </Section>

      <Section tone="alternate" className="featured-project-section">
        <Container>
          <div className="featured-project">
            <div className="featured-project__content">
              <div className="featured-project__topline">
                <p className="eyebrow">Flagship case study</p>
                <ProjectStatusBadge status={featuredProject.status} />
              </div>
              <h2>{featuredProject.title}</h2>
              <p className="featured-project__lede">{featuredProject.fullDescription}</p>
              <ul className="check-list">
                {featuredProject.highlights.slice(0, 4).map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <TechnologyList technologies={featuredProject.technologies.slice(0, 8)} compact />
              <ButtonLink to="/projects/tallyprs">Read the TallyPRs case study</ButtonLink>
            </div>
            <div className="featured-project__image-wrap">
              <img
                src={featuredProject.images![0].src}
                alt={featuredProject.images![0].alt}
                width={featuredProject.images![0].width}
                height={featuredProject.images![0].height}
              />
              <div className="featured-project__annotation">
                <span>01</span> Media-first social feed
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Selected work"
            title="Focused builds across product and platform."
            description="Completed products and active systems, each grounded in a specific problem."
          />
          <div className="project-grid">
            {featuredSelection.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <ButtonLink to="/projects" variant="text">
            Explore all projects
          </ButtonLink>
        </Container>
      </Section>

      <Section tone="alternate">
        <Container className="build-preview">
          <div>
            <p className="eyebrow eyebrow--amber">Build lab / active</p>
            <h2>Work in motion, without the false finish line.</h2>
            <p>{buildLabProjects[0].description}</p>
            <ButtonLink to="/build-lab" variant="secondary">
              Enter the Build Lab
            </ButtonLink>
          </div>
          <div className="build-preview__terminal">
            <div className="build-preview__terminal-bar">
              <span />
              <span />
              <span /> alphiplate.build
            </div>
            {buildLabProjects[0].milestones.slice(0, 4).map((milestone, index) => (
              <div key={milestone.label}>
                <span>0{index + 1}</span>
                <strong>{milestone.label}</strong>
                <em>{milestone.state}</em>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Technical range"
            title="Skills connected to shipped work."
            description="No percentages—just tools, practices, and the evidence that gives them context."
          />
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article key={group.name} className="skill-card">
                <h3>{group.name}</h3>
                <p>{group.evidence}</p>
                <TechnologyList technologies={group.skills} compact />
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="alternate">
        <Container className="education-preview">
          <div>
            <p className="eyebrow">Education</p>
            <h2>{education.degree}</h2>
            <p>
              {education.institution} · Expected {education.expectedGraduation}
            </p>
          </div>
          <div className="education-preview__stat">
            <strong>{education.gpa}</strong>
            <span>GPA</span>
          </div>
          <div>
            <h3>Programs & honors</h3>
            <p>{education.honors.join(" · ")}</p>
          </div>
          <ButtonLink to="/resume" variant="text">
            View the web résumé
          </ButtonLink>
        </Container>
      </Section>

      <Section className="contact-cta">
        <Container>
          <p className="eyebrow">Start a conversation</p>
          <div className="contact-cta__row">
            <div>
              <h2>Let’s build something useful.</h2>
              <p>
                Full-stack products, backend systems, automation, cloud infrastructure, and technically
                challenging work.
              </p>
            </div>
            <Link to="/contact" viewTransition className="contact-cta__arrow" aria-label="Contact Cody">
              <ArrowDownRight />
            </Link>
          </div>
          <div className="button-row">
            <ButtonLink to="/contact">Contact Cody</ButtonLink>
            <ExternalButton href={`mailto:${profile.email}`} variant="secondary">
              Email directly
            </ExternalButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
