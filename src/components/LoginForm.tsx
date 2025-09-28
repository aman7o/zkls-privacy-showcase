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
}

export const LoginForm = ({ onLogin, onReplay, isPlaying }: LoginFormProps) => {
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
        <Label htmlFor="email" className="text-sm font-medium">
          Username
        </Label>
        <Input
          id="email"
          type="email"
          value="john.doe@gmail.com"
          readOnly
          className="bg-gray-100 border-gray-300"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          value="••••••••••"
          readOnly
          className="bg-gray-100 border-gray-300"
        />
      </div>

      <div className="flex gap-3 pt-2">
        <Button
          onClick={handleLogin}
          disabled={isPlaying}
          className="flex-1 bg-black text-white hover:bg-gray-800"
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
          className="border-gray-300 hover:bg-gray-100"
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};