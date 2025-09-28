import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DataItemProps {
  icon: string;
  label: string;
  value: string;
  variant: "exposed" | "protected" | "proof";
  isVisible: boolean;
  delay?: number;
  children?: ReactNode;
}

export const DataItem = ({
  icon,
  label,
  value,
  variant,
  isVisible,
  delay = 0,
  children
}: DataItemProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "exposed":
        return "border-danger bg-danger/10 shadow-danger/30";
      case "protected":
        return "border-muted bg-muted/30 opacity-50";
      case "proof":
        return "border-success bg-success/10 shadow-success/30 animate-pulse-glow";
      default:
        return "";
    }
  };

  const getTextStyles = () => {
    switch (variant) {
      case "exposed":
        return "text-danger";
      case "protected":
        return "text-muted-foreground";
      case "proof":
        return "text-success";
      default:
        return "text-foreground";
    }
  };

  return (
    <div
      className={cn(
        "relative p-3 rounded-lg border-2 transition-all duration-500 transform",
        getVariantStyles(),
        isVisible
          ? "opacity-100 translate-y-0 animate-reveal-danger"
          : "opacity-0 translate-y-4"
      )}
      style={{
        animationDelay: `${delay}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      <div className="flex items-center gap-3">
        <span className="text-lg" role="img" aria-label={label}>
          {icon}
        </span>
        <div className="flex-1 min-w-0">
          <div className={cn("text-sm font-medium", getTextStyles())}>
            {label}
          </div>
          <div className="text-xs text-muted-foreground truncate">
            {value}
          </div>
        </div>
        {children}
      </div>

      {variant === "exposed" && (
        <div className="absolute -top-2 -right-2 bg-danger text-danger-foreground text-xs px-2 py-1 rounded-full font-bold animate-bounce">
          EXPOSED!
        </div>
      )}

      {variant === "protected" && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
          <span className="text-2xl">🔒</span>
        </div>
      )}
    </div>
  );
};