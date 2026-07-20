export type ProjectStatus = "completed" | "active" | "in-progress" | "planned";

export type ProjectCategory =
  "full-stack" | "backend" | "frontend" | "systems" | "automation" | "cloud" | "research";

export type ProjectLink = {
  label: string;
  url: string;
  type: "repository" | "live" | "external";
};

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type ProjectSection = {
  heading: string;
  body?: string[];
  bullets?: string[];
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  category: ProjectCategory[];
  status: ProjectStatus;
  featured?: boolean;
  technologies: string[];
  highlights: string[];
  images?: ProjectImage[];
  links?: ProjectLink[];
  problem?: string[];
  users?: string[];
  functionality?: string[];
  architecture?: ProjectSection[];
  decisions?: ProjectSection[];
  challenges?: ProjectSection[];
  results?: string[];
  lessons?: string[];
  currentWork?: string[];
  plannedWork?: string[];
  relatedProjectSlugs?: string[];
};

export type Profile = {
  name: string;
  domain: string;
  location: string;
  email: string;
  github: string;
  linkedIn: string;
  resumePath: string;
  portraitPath: string;
  primaryRole: string;
  secondaryRole: string;
  availability: string;
  expectedGraduation: string;
  headline: string;
  summary: string;
};

export type NavigationItem = {
  label: string;
  to: string;
  end?: boolean;
};

export type ImpactMetric = {
  value: string;
  label: string;
  detail: string;
};

export type Experience = {
  organization: string;
  title: string;
  location?: string;
  dates: string;
  summary: string;
  accomplishments: string[];
  technologies: string[];
};

export type Education = {
  institution: string;
  degree: string;
  expectedGraduation: string;
  gpa: string;
  honors: string[];
  organizations: string[];
  coursework: string[];
};

export type SkillGroup = {
  name: string;
  skills: string[];
  evidence?: string;
};

export type BuildMilestone = {
  label: string;
  state: "implemented" | "building" | "testing" | "planned";
};

export type BuildLabProject = {
  name: string;
  status: string;
  description: string;
  technologies: string[];
  repository?: string;
  milestones: BuildMilestone[];
};

export type RouteMetadata = {
  title: string;
  description: string;
  pathname: string;
};
