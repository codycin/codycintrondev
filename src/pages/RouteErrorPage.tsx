import { isRouteErrorResponse, Link, useRouteError } from "react-router";

import { Container } from "../components/ui";

export function RouteErrorPage() {
  const error = useRouteError();
  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : "The route could not be rendered.";
  return (
    <main id="main-content" className="not-found">
      <Container>
        <p className="eyebrow">Route error</p>
        <h1 tabIndex={-1}>The system hit an unexpected current.</h1>
        <p>{message}</p>
        <div className="button-row">
          <Link className="button button--primary" to="/">
            Return home
          </Link>
          <Link className="button button--secondary" to="/projects">
            Explore projects
          </Link>
        </div>
      </Container>
    </main>
  );
}
