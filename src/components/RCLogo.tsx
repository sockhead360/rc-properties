import Image from "next/image";

interface RCLogoProps {
  variant?: "dark" | "light";
  compact?: boolean;
}

export default function RCLogo({
  variant = "dark",
  compact = false,
}: RCLogoProps) {
  return (
    <Image
      src={
        variant === "light"
          ? "/logos/rc-properties-logo-light.svg"
          : "/logos/rc-properties-logo.svg"
      }
      alt="RC Properties"
      width={980}
      height={500}
      priority={variant === "dark"}
      className={
        compact
          ? "h-auto w-[148px] sm:w-[168px]"
          : "h-auto w-[162px] sm:w-[182px]"
      }
    />
  );
}
