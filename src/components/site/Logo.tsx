import graphite from "@/assets/efilogic_logo_graphite.png.asset.json";
import white from "@/assets/efilogic_logo_white.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({ variant = "graphite", className }: { variant?: "graphite" | "white"; className?: string }) {
  return (
    <img
      src={variant === "white" ? white.url : graphite.url}
      alt="efilogic"
      width={1872}
      height={633}
      className={cn("h-7 w-auto min-w-[90px] md:h-8", className)}
    />
  );
}
