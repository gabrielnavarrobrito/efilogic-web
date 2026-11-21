import graphite from "@/assets/brand/efilogic-logo-graphite.png";
import white from "@/assets/brand/efilogic-logo-white.png";
import { cn } from "@/lib/utils";

export function Logo({
  variant = "graphite",
  className,
}: {
  variant?: "graphite" | "white";
  className?: string;
}) {
  return (
    <img
      src={variant === "white" ? white : graphite}
      alt="efilogic"
      width={1872}
      height={633}
      className={cn("h-7 w-auto min-w-[90px] md:h-8", className)}
    />
  );
}
