import { profile } from "@/data/profile";
import GlowTile from "./GlowTile";

/** Glowing tech tiles on the left, sticky TECH/SET title on the right. */
export default function Tech() {
  const { techGroups } = profile;

  return (
    <section className="tech-stack container" id="tech-stack">
      <div>
        <div className="tech-grid">
          {techGroups.map((group) => (
            <div key={group.label}>
              <p>{group.label}</p>
              <div className="tech-row">
                {group.items.map((item, i) => (
                  <GlowTile
                    key={item.name}
                    name={item.name}
                    icon={item.icon}
                    color={item.color}
                    index={i}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="title">
          <p className="primary-text">Tech</p>
          <p className="secondary-text">Stack</p>
        </div>
      </div>
    </section>
  );
}
