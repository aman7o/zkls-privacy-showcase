import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DemoCardProps {
  title: string;
  subtitle: string;
  variant: "traditional" | "zktls";
  children: ReactNode;
  className?: string;
}

export const DemoCard = ({ title, subtitle, variant, children, className }: DemoCardProps) => {
  const isTraditional = variant === "traditional";
  
  return (
    <Card className={cn(
      "relative overflow-hidden border-2 transition-all duration-500 hover:scale-[1.02]",
      isTraditional 
        ? "border-danger/30 bg-gradient-to-br from-card to-danger/5 shadow-danger/20" 
        : "border-success/30 bg-gradient-to-br from-card to-success/5 shadow-success/20",
      className
    )}>
      <div className="p-6">
        <div className="mb-6 text-center">
          <h3 className={cn(
            "text-2xl font-bold mb-2",
            isTraditional ? "text-danger" : "text-success"
          )}>
            {title}
          </h3>
          <p className="text-muted-foreground text-sm">
            {subtitle}
          </p>
        </div>
        {children}
      </div>
      
      {/* Accent border glow */}
      <div className={cn(
        "absolute inset-0 opacity-20 pointer-events-none",
        isTraditional 
          ? "shadow-[inset_0_0_50px_hsl(var(--danger)/0.3)]"
          : "shadow-[inset_0_0_50px_hsl(var(--success)/0.3)]"
      )} />
    </Card>
  );
};