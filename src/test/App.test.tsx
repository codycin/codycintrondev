import { act, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, MemoryRouter, RouterProvider } from "react-router";
import { describe, expect, it } from "vitest";

import { AppLayout } from "../components/layout/AppLayout";
import { ProjectCard } from "../components/projects/ProjectCard";
import { ProjectStatusBadge } from "../components/projects/ProjectStatusBadge";
import { projects } from "../data/portfolio";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { Component as ContactPage } from "../pages/ContactPage";
import { HomePage } from "../pages/HomePage";
import { Component as NotFoundPage } from "../pages/NotFoundPage";
import { Component as ProjectDetailPage } from "../pages/ProjectDetailPage";
import { Component as ProjectsPage } from "../pages/ProjectsPage";
import { Component as ResumePage } from "../pages/ResumePage";

function renderRoute(initialEntry = "/") {
  const router = createMemoryRouter(
    [
      {
        path: "/",
        element: <AppLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "projects", element: <ProjectsPage /> },
          { path: "projects/:projectSlug", element: <ProjectDetailPage /> },
          { path: "resume", element: <ResumePage /> },
          { path: "contact", element: <ContactPage /> },
          { path: "*", element: <NotFoundPage /> },
        ],
      },
    ],
    { initialEntries: [initialEntry] },
  );
  return render(<RouterProvider router={router} />);
}

describe("portfolio routes", () => {
  it("renders the shared layout and recruiter-focused homepage", () => {
    renderRoute();
    expect(screen.getAllByRole("banner")[0]).toHaveClass("site-header");
    expect(
      screen.getByRole("heading", { level: 1, name: /software engineer building reliable/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Hi, I'm Cody.")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Portrait of Cody Cintron" })).toHaveAttribute(
      "src",
      "/images/profile/cody-cintron-portrait.webp",
    );
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /skip to content/i })).toHaveAttribute("href", "#main-content");
  });

  it("renders accessible primary navigation with an active home link", () => {
    renderRoute();
    const primary = screen.getByRole("navigation", { name: /primary navigation/i });
    expect(within(primary).getByRole("link", { name: "Home" })).toHaveAttribute("aria-current", "page");
    expect(within(primary).getByRole("link", { name: "Projects" })).toHaveAttribute("href", "/projects");
  });

  it("opens and closes mobile navigation with Escape", async () => {
    const user = userEvent.setup();
    renderRoute();
    const menuButton = screen.getByRole("button", { name: /open navigation menu/i });
    await user.click(menuButton);
    expect(screen.getByRole("navigation", { name: /mobile navigation/i })).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("navigation", { name: /mobile navigation/i })).not.toBeInTheDocument();
    expect(menuButton).toHaveFocus();
  });

  it("closes mobile navigation after a route selection", async () => {
    const user = userEvent.setup();
    renderRoute();
    await user.click(screen.getByRole("button", { name: /open navigation menu/i }));
    const mobile = screen.getByRole("navigation", { name: /mobile navigation/i });
    await user.click(within(mobile).getByRole("link", { name: "Projects" }));
    expect(screen.queryByRole("navigation", { name: /mobile navigation/i })).not.toBeInTheDocument();
    expect(
      await screen.findByRole("heading", { level: 1, name: /software built around concrete problems/i }),
    ).toBeInTheDocument();
  });

  it("renders the TallyPRs project route and approved links", () => {
    renderRoute("/projects/tallyprs");
    expect(screen.getByRole("heading", { level: 1, name: "TallyPRs" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /view repository/i })).toHaveAttribute(
      "href",
      "https://github.com/codycin/TallyPRs",
    );
    expect(screen.getAllByText("Active").length).toBeGreaterThan(0);
  });

  it("handles an unknown project slug without crashing", () => {
    renderRoute("/projects/not-a-real-project");
    expect(screen.getByRole("heading", { level: 1, name: /outside the current/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /explore projects/i })).toBeInTheDocument();
  });

  it("renders the designed not-found route", () => {
    renderRoute("/missing-route");
    expect(screen.getByRole("heading", { level: 1, name: /drifted off the map/i })).toBeInTheDocument();
  });

  it("filters projects with semantic pressed-state buttons", async () => {
    const user = userEvent.setup();
    renderRoute("/projects");
    const completed = screen.getByRole("button", { name: "Completed" });
    await user.click(completed);
    expect(completed).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText(/showing 4 projects/i)).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "TallyPRs" })).not.toBeInTheDocument();
  });

  it("renders project status labels and omits unavailable actions", () => {
    const vectorProject = projects.find((project) => project.slug === "cpp-vector")!;
    render(<ProjectStatusBadge status="in-progress" />);
    expect(screen.getByText("In Progress")).toBeInTheDocument();
    render(
      <MemoryRouter>
        <ProjectCard project={vectorProject} />
      </MemoryRouter>,
    );
    expect(screen.getByRole("heading", { name: "C++ Vector Implementation" })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /repository/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /live site/i })).not.toBeInTheDocument();
  });

  it("renders contact and résumé PDF links", () => {
    const { unmount } = renderRoute("/contact");
    expect(screen.getByRole("link", { name: /email cody/i })).toHaveAttribute(
      "href",
      "mailto:cody.cintron@icloud.com",
    );
    unmount();
    renderRoute("/resume");
    expect(screen.getByRole("link", { name: /view pdf/i })).toHaveAttribute(
      "href",
      "/resume/Cody-Cintron-Resume.pdf",
    );
    expect(screen.getByRole("link", { name: /download pdf/i })).toHaveAttribute("download");
  });
});

function ReducedMotionProbe() {
  return <output>{useReducedMotion() ? "reduced" : "full"}</output>;
}

it("responds to the reduced-motion preference", () => {
  const listeners: Array<() => void> = [];
  let matches = true;
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    value: () => ({
      get matches() {
        return matches;
      },
      media: "(prefers-reduced-motion: reduce)",
      onchange: null,
      addListener: () => undefined,
      removeListener: () => undefined,
      addEventListener: (_type: string, listener: () => void) => listeners.push(listener),
      removeEventListener: () => undefined,
      dispatchEvent: () => true,
    }),
  });
  render(<ReducedMotionProbe />);
  expect(screen.getByText("reduced")).toBeInTheDocument();
  act(() => {
    matches = false;
    listeners.forEach((listener) => listener());
  });
  expect(screen.getByText("full")).toBeInTheDocument();
});
