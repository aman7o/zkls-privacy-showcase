import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DemoCardProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  className?: string;
}

export const DemoCard = ({ title, subtitle, children, className }: DemoCardProps) => {
  return (
    <Card className={cn("border-gray-200 p-6", className)}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      {children}
    </Card>
  );
};