interface LogoMarkProps {
  size?: number;
  /** "light" = for dark/navy backgrounds. "dark" = for cream/white backgrounds. */
  variant?: "light" | "dark";
}

export default function LogoMark({ size = 36, variant = "light" }: LogoMarkProps) {
  const ring = variant === "light" ? "#a8b4c4" : "#1a1f2e";
  const nodeBottom = variant === "light" ? "#d0dae6" : "#1a1f2e";
  const dash = variant === "light" ? "#5a6a7a" : "#8a9aaa";

  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="17" stroke={ring} strokeWidth="1.8" />
      {/* Gold anchor node — top */}
      <circle cx="20" cy="9" r="4.5" fill="#c9923a" />
      {/* Bottom nodes */}
      <circle cx="10" cy="27" r="4.5" fill={nodeBottom} />
      <circle cx="30" cy="27" r="4.5" fill={nodeBottom} />
      {/* Gold connecting lines */}
      <line x1="20" y1="13.5" x2="13" y2="23.5" stroke="#c9923a" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="20" y1="13.5" x2="27" y2="23.5" stroke="#c9923a" strokeWidth="1.8" strokeLinecap="round" />
      {/* Dashed base line */}
      <line x1="14.5" y1="27" x2="25.5" y2="27" stroke={dash} strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2.5 2" />
    </svg>
  );
}
