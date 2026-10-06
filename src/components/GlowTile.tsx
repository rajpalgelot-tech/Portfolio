import type { CSSProperties } from "react";
import { FALLBACK_ICON, TECH_ICONS } from "./iconMap";

type Props = {
  name: string;
  icon: string;
  color: string;
  /** Index within its row, used to stagger the entrance animation */
  index?: number;
};

/**
 * A glassy icon tile with a brand-colored inner glow and a white tooltip
 * pill that pops up on hover (the reference site's `.glow-box`).
 */
export default function GlowTile({ name, icon, color, index = 0 }: Props) {
  const Icon = TECH_ICONS[icon] ?? FALLBACK_ICON;

  return (
    <div className="glow-box-parent">
      <div className="glow-box" style={{ "--clr": color, "--i": index } as CSSProperties}>
        <Icon title={name} />
      </div>
      <div className="glow-box-title">{name}</div>
    </div>
  );
}
