import { createBrowserRouter } from "react-router";

import { AppLayout } from "../components/layout/AppLayout";
import { HomePage } from "../pages/HomePage";
import { RouteErrorPage } from "../pages/RouteErrorPage";

function RouteHydrateFallback() {
  return (
    <main id="main-content" className="route-hydrate" aria-live="polite">
      <p>Loading route…</p>
    </main>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <RouteErrorPage />,
    HydrateFallback: RouteHydrateFallback,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", lazy: () => import("../pages/AboutPage") },
      { path: "experience", lazy: () => import("../pages/ExperiencePage") },
      { path: "projects", lazy: () => import("../pages/ProjectsPage") },
      { path: "projects/:projectSlug", lazy: () => import("../pages/ProjectDetailPage") },
      { path: "build-lab", lazy: () => import("../pages/BuildLabPage") },
      { path: "resume", lazy: () => import("../pages/ResumePage") },
      { path: "contact", lazy: () => import("../pages/ContactPage") },
      { path: "*", lazy: () => import("../pages/NotFoundPage") },
    ],
  },
]);
