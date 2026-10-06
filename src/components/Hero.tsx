import { profile } from "@/data/profile";
import HoverText from "./HoverText";
import GlowTile from "./GlowTile";

function FloatingButton({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant: "first" | "sec";
}) {
  return (
    <a className={`floating-btn ${variant}`} href={href}>
      <div>
        <HoverText text={label} />
      </div>
      <span aria-hidden="true" />
    </a>
  );
}

/** Hero: floating pills, name, social tiles, GitHub ribbon. */
export default function Hero() {
  const { socials, repoUrl, firstName, role } = profile;

  return (
    <section className="hero-section" id="top">
      {repoUrl && (
        <a
          className="github-ribbon"
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <HoverText text="⭐ Star this repo" />
          </div>
          <span aria-hidden="true" />
        </a>
      )}

      <FloatingButton href="#about-me" label="About Me" variant="first" />

      <p>Hi, I am</p>
      <h1 className="name">
        <HoverText text={firstName.toUpperCase()} />
      </h1>
      <p>{role}</p>

      <div className="blur" aria-hidden="true" />

      <FloatingButton href="#tech-stack" label="Tech" variant="sec" />

      <div className="bottom-bar">
        <a
          className="glow-link"
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github"
        >
          <GlowTile name="github" icon="github" color="#ffffff" />
        </a>
        <a
          className="glow-link"
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="linkedin"
        >
          <GlowTile name="linkedin" icon="linkedin" color="#0a66c2" />
        </a>
        <a className="glow-link" href={socials.email} aria-label="email">
          <GlowTile name="email" icon="email" color="rgb(var(--primary))" />
        </a>
      </div>
    </section>
  );
}
