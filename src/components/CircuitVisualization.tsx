import { useEffect, useState } from "react";

interface CircuitVisualizationProps {
  isActive: boolean;
}

export const CircuitVisualization = ({ isActive }: CircuitVisualizationProps) => {
  const [activeNodes, setActiveNodes] = useState<number[]>([]);
  const mathSymbols = ["∑", "∫", "→", "≡", "∀", "∃", "∈", "∅"];

  useEffect(() => {
    if (!isActive) {
      setActiveNodes([]);
      return;
    }

    const interval = setInterval(() => {
      setActiveNodes(prev => {
        const newNodes = [...prev];
        const newNode = Math.floor(Math.random() * 12);
        if (!newNodes.includes(newNode)) {
          newNodes.push(newNode);
        }
        if (newNodes.length > 6) {
          newNodes.shift();
        }
        return newNodes;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-success/10 to-info/10 rounded-lg overflow-hidden">
      {/* Circuit Board Background */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200">
        {/* Circuit Lines */}
        <defs>
          <pattern id="circuit" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 0 15 L 30 15 M 15 0 L 15 30" stroke="hsl(var(--success))" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />

        {/* Circuit Nodes */}
        {Array.from({ length: 12 }, (_, i) => {
          const x = (i % 4) * 75 + 37.5;
          const y = Math.floor(i / 4) * 60 + 30;
          const isActive = activeNodes.includes(i);

          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={isActive ? "8" : "4"}
              fill={isActive ? "hsl(var(--success))" : "hsl(var(--success) / 0.5)"}
              className={isActive ? "animate-pulse-glow" : ""}
            />
          );
        })}

        {/* Data Flow Lines */}
        {isActive && (
          <>
            <path
              d="M 30 100 Q 150 50 270 100"
              stroke="hsl(var(--success))"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              className="animate-circuit-flow"
            />
            <path
              d="M 150 30 L 150 170"
              stroke="hsl(var(--info))"
              strokeWidth="2"
              fill="none"
              strokeDasharray="3,3"
              className="animate-circuit-flow"
              style={{ animationDelay: "0.5s" }}
            />
          </>
        )}
      </svg>

      {/* Floating Math Symbols */}
      {isActive && mathSymbols.map((symbol, index) => (
        <div
          key={index}
          className="absolute text-2xl font-bold text-info animate-math-symbols"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 60 + 20}%`,
            animationDelay: `${index * 0.3}s`,
          }}
        >
          {symbol}
        </div>
      ))}

      {/* Processing Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center bg-black/80 p-4 rounded-lg backdrop-blur-sm">
          <div className="text-success text-lg font-bold mb-2">⚙️ MATHEMATICAL CIRCUIT PROCESSING</div>
          <div className="text-sm space-y-1 text-left">
            <div className="text-muted-foreground">INPUT: Encrypted platform response</div>
            <div className="text-info">RULE: IF subscription_status == "active"</div>
            <div className="text-success">THEN output = TRUE</div>
            <div className="text-muted-foreground">OUTPUT: Mathematical proof only</div>
          </div>
        </div>
      </div>
    </div>
  );
};