import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export function UserSettingsSheet() {
  const { theme, setTheme } = useTheme();

  return (
    <Sheet>
      <SheetTrigger className="hidden" data-sheet-trigger>
        Open Settings
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
        </SheetHeader>
        <div className="py-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col space-y-1">
              <Label htmlFor="theme-toggle">Dark Mode</Label>
              <span className="text-sm text-muted-foreground">
                Toggle between dark and light mode
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="theme-toggle"
                checked={theme === "dark"}
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              />
              <Moon className="h-4 w-4" />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}