import { useEffect, useRef, useState } from "react";
import { ContactRound, GitBranch, Menu, Waves, X } from "lucide-react";
import { Link, NavLink, Outlet, useLocation, useNavigation } from "react-router";

import { getRouteMetadata } from "../../app/routeMetadata";
import { navigation, profile } from "../../data/portfolio";
import { cn } from "../../utils/cn";
import { Container } from "../ui";

function SkipLink() {
  return (
    <a className="skip-link" href="#main-content">
      Skip to content
    </a>
  );
}

function NavigationLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      {navigation.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          viewTransition
          onClick={onNavigate}
          className={({ isActive }) => cn("nav-link", isActive && "nav-link--active")}
        >
          {item.label}
        </NavLink>
      ))}
    </>
  );
}

function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("menu-open");
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <header className="site-header" data-print-hidden>
      <Container className="site-header__inner">
        <Link to="/" viewTransition className="wordmark" aria-label="Cody Cintron, home">
          <span className="wordmark__mark" aria-hidden="true">
            <Waves size={18} />
          </span>
          <span>Cody Cintron</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <NavigationLinks />
        </nav>
        <Link to="/contact" viewTransition className="header-action">
          Let’s talk
        </Link>
        <button
          ref={menuButtonRef}
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          <Container>
            <NavigationLinks onNavigate={() => setOpen(false)} />
            <a className="mobile-nav__email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </Container>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer" data-print-hidden>
      <Container className="site-footer__grid">
        <div>
          <Link to="/" className="wordmark">
            <span className="wordmark__mark" aria-hidden="true">
              <Waves size={18} />
            </span>
            {profile.name}
          </Link>
          <p>Reliable products, developer tools, and enterprise automation.</p>
        </div>
        <div className="site-footer__links" aria-label="Social links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <GitBranch aria-hidden="true" size={18} />
            GitHub
          </a>
          <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">
            <ContactRound aria-hidden="true" size={18} />
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
        <p className="site-footer__meta">
          © {new Date().getFullYear()} Cody Cintron · Built with React and TypeScript.
        </p>
      </Container>
    </footer>
  );
}

function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = getRouteMetadata(pathname);
    document.title = metadata.title;
    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.append(description);
    }
    description.content = metadata.description;

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.append(canonical);
    }
    canonical.href = `https://${profile.domain}${metadata.pathname}`;
  }, [pathname]);

  return null;
}

function ScrollAndFocusManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const moveFocus = () => {
      const heading = document.querySelector<HTMLElement>("main h1");
      heading?.focus({ preventScroll: true });
    };

    if (hash) {
      window.requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView();
        moveFocus();
      });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
      window.requestAnimationFrame(moveFocus);
    }
  }, [pathname, hash]);

  return null;
}

function RouteProgress() {
  const navigationState = useNavigation();
  return (
    <div
      className={cn("route-progress", navigationState.state !== "idle" && "route-progress--active")}
      aria-hidden="true"
    />
  );
}

export function AppLayout() {
  const location = useLocation();
  return (
    <div className="app-shell">
      <SkipLink />
      <RouteMeta />
      <ScrollAndFocusManager />
      <RouteProgress />
      <Header />
      <main id="main-content" className="route-view" key={location.pathname}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
