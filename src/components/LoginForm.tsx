import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Play, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoginFormProps {
  onLogin: () => void;
  onReplay: () => void;
  isPlaying: boolean;
  variant: "traditional" | "zktls";
}

export const LoginForm = ({ onLogin, onReplay, isPlaying, variant }: LoginFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleLogin = () => {
    setIsLoading(true);
    onLogin();
    // Reset loading state after animation
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor={`email-${variant}`} className="text-sm font-medium">
          Username
        </Label>
        <Input
          id={`email-${variant}`}
          type="email"
          value="john.doe@gmail.com"
          readOnly
          className="bg-input border-border text-foreground"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor={`password-${variant}`} className="text-sm font-medium">
          Password
        </Label>
        <Input
          id={`password-${variant}`}
          type="password"
          value="••••••••••"
          readOnly
          className="bg-input border-border text-foreground"
        />
      </div>
      
      <div className="flex gap-3 pt-2">
        <Button
          onClick={handleLogin}
          disabled={isPlaying}
          className={cn(
            "flex-1 transition-all duration-300",
            variant === "traditional" 
              ? "bg-danger hover:bg-danger/90 text-danger-foreground"
              : "bg-success hover:bg-success/90 text-success-foreground"
          )}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              Connecting...
            </div>
          ) : (
            <>
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </>
          )}
        </Button>
        
        <Button
          onClick={onReplay}
          variant="outline"
          size="icon"
          className="border-border hover:bg-secondary"
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};