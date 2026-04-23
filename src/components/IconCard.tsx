import { type LucideIcon } from "lucide-react";

interface IconCardProps {
  icon: LucideIcon;
  size?: number;
  iconSize?: number;
}

export default function IconCard({
  icon: Icon,
  size = 68,
  iconSize = 26,
}: IconCardProps) {
  const radius = Math.round(size * 0.2); // ~20% border-radius

  return (
    <div
      className="relative inline-flex flex-shrink-0"
      style={{ width: size, height: size }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: "#BFDDF6",
          borderRadius: radius,
          transform: "translate(4px, 5px)",
        }}
      />

      <div
        className="relative overflow-hidden"
        style={{
          width: size,
          height: size,
          background: "#7CB7E8",
          borderRadius: radius,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "white",
            clipPath: "polygon(50% 0%, 100% 0%, 100% 50%)",
            opacity: 0.45,
          }}
        />

        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ color: "#0E2F5A" }}
        >
          <Icon size={iconSize} strokeWidth={2.2} />
        </div>
      </div>
    </div>
  );
}
