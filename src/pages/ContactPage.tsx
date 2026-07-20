import { ContactRound, FileText, GitBranch, Mail, MapPin, Radio } from "lucide-react";

import { Container, PageHero, Section } from "../components/ui";
import { profile } from "../data/portfolio";

const contacts = [
  { label: "Email Cody", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: "Professional profile", href: profile.linkedIn, icon: ContactRound },
  { label: "GitHub", value: "Projects and source", href: profile.github, icon: GitBranch },
  { label: "Résumé", value: "View canonical PDF", href: profile.resumePath, icon: FileText },
];

export function Component() {
  return (
    <>
      <PageHero
        eyebrow="Contact / 06"
        title="Let’s build something useful."
        description="I am interested in software engineering opportunities involving full-stack development, backend systems, automation, cloud infrastructure, and technically challenging product work."
      />
      <Section>
        <Container className="contact-layout">
          <aside className="contact-context">
            <div className="availability">
              <span aria-hidden="true" />
              {profile.availability}
            </div>
            <div>
              <MapPin aria-hidden="true" size={18} />
              <span>
                <strong>Based in</strong>
                {profile.location}
              </span>
            </div>
            <div>
              <Radio aria-hidden="true" size={18} />
              <span>
                <strong>Expected graduation</strong>
                {profile.expectedGraduation}
              </span>
            </div>
            <p>No contact form, no artificial gate. Choose the channel that fits the conversation.</p>
          </aside>
          <div className="contact-grid">
            {contacts.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
                rel={href.startsWith("http") || href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
              >
                <Icon aria-hidden="true" />
                <span>
                  <strong>{label}</strong>
                  <small>{value}</small>
                </span>
                <b aria-hidden="true">↗</b>
              </a>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
