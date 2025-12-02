import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Leaf, User } from "lucide-react";

interface NavigationProps {
  onAccountClick: () => void;
  showAccount?: boolean;
}

export function Navigation({ onAccountClick, showAccount = true }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
            <Leaf className="h-5 w-5 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h2 className="text-lg">Environmental Quiz</h2>
          </div>
        </div>
        {showAccount && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onAccountClick}
            className="gap-2"
          >
            <User className="h-4 w-4" />
            My Account
          </Button>
        )}
      </div>
    </nav>
  );
}
