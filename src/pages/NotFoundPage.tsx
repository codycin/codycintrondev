import { Home, Search } from "lucide-react";
import { Link } from "react-router";

import { Container } from "../components/ui";

export function Component() {
  return (
    <section className="not-found">
      <Container>
        <div className="not-found__signal" aria-hidden="true">
          404
          <span />
        </div>
        <p className="eyebrow">Route not found</p>
        <h1 tabIndex={-1}>This page drifted off the map.</h1>
        <p>
          The requested route is not part of the current portfolio. Return home or continue through the
          project collection.
        </p>
        <div className="button-row">
          <Link className="button button--primary" to="/">
            <Home size={17} aria-hidden="true" />
            Return home
          </Link>
          <Link className="button button--secondary" to="/projects">
            <Search size={17} aria-hidden="true" />
            Explore projects
          </Link>
        </div>
      </Container>
    </section>
  );
}
