import type { HTMLAttributes, ReactNode } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router";

import { cn } from "../utils/cn";

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("container", className)} {...props} />;
}

type SectionProps = HTMLAttributes<HTMLElement> & { tone?: "default" | "alternate" };

export function Section({ className, tone = "default", ...props }: SectionProps) {
  return (
    <section className={cn("section", tone === "alternate" && "section--alternate", className)} {...props} />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function ButtonLink({
  to,
  children,
  variant = "primary",
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
}) {
  return (
    <Link to={to} viewTransition className={cn("button", `button--${variant}`)}>
      {children}
      <ArrowRight aria-hidden="true" size={17} />
    </Link>
  );
}

export function ExternalButton({
  href,
  children,
  download,
  variant = "secondary",
}: {
  href: string;
  children: ReactNode;
  download?: boolean;
  variant?: "primary" | "secondary" | "text";
}) {
  return (
    <a
      href={href}
      className={cn("button", `button--${variant}`)}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noopener noreferrer"}
      download={download}
    >
      {children}
      <ExternalLink aria-hidden="true" size={17} />
    </a>
  );
}

export function TechnologyList({
  technologies,
  compact = false,
}: {
  technologies: string[];
  compact?: boolean;
}) {
  return (
    <ul className={cn("technology-list", compact && "technology-list--compact")} aria-label="Technologies">
      {technologies.map((technology) => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <header className="page-hero">
      <Container>
        <p className="eyebrow">{eyebrow}</p>
        <h1 tabIndex={-1}>{title}</h1>
        <p className="page-hero__description">{description}</p>
        {children}
      </Container>
    </header>
  );
}
