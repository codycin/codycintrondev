import type { ProjectStatus } from "../../types/portfolio";

const labels: Record<ProjectStatus, string> = {
  completed: "Completed",
  active: "Active",
  "in-progress": "In Progress",
  planned: "Planned",
};

export function ProjectStatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={`status-badge status-badge--${status}`}>
      <span aria-hidden="true" />
      {labels[status]}
    </span>
  );
}
