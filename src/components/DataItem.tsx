import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DataItemProps {
  icon: string;
  label: string;
  value: string;
  isVisible: boolean;
  delay?: number;
  children?: ReactNode;
  isProof?: boolean;
}

export const DataItem = ({
  icon,
  label,
  value,
  isVisible,
  delay = 0,
  children,
  isProof = false,
}: DataItemProps) => {
  return (
    <div
      className={cn(
        "p-3 rounded-lg border transition-all duration-500",
        isProof ? "border-green-500 bg-green-50" : "border-gray-200 bg-gray-50",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
      )}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      <div className="flex items-center gap-3">
        <span className="text-lg" role="img" aria-label={label}>
          {icon}
        </span>
        <div className="flex-1 min-w-0">
          <div className={cn(
            "text-sm font-medium",
            isProof ? "text-green-700" : "text-gray-800"
          )}>
            {label}
          </div>
          <div className="text-xs text-gray-500 truncate">
            {value}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};