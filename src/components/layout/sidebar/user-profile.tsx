import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/hooks/use-user";
import { UserSettingsSheet } from "./user-settings-sheet";
import { ProfileDrawer } from "./drawers/profile-drawer";
import { NotificationsDrawer } from "./drawers/notifications-drawer";
import { MessagesDrawer } from "./drawers/messages-drawer";
import { PrivacyDrawer } from "./drawers/privacy-drawer";
import { HelpDrawer } from "./drawers/help-drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import {
  Settings,
  User,
  LogOut,
  Bell,
  Mail,
  Shield,
  Keyboard,
  HelpCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";

export function UserProfile() {
  const { user } = useUser();
  const { toast } = useToast();

  if (!user) return null;

  const handleLogout = () => {
    toast({
      title: "Logging out...",
      description: "You will be redirected to the login page.",
    });
  };

  const handleKeyboardShortcuts = () => {
    toast({
      title: "Keyboard Shortcuts",
      description: "Press '?' to view all keyboard shortcuts",
    });
  };

  const openDrawer = (drawerId: string) => {
    document
      .querySelector<HTMLButtonElement>(`[data-drawer-trigger="${drawerId}"]`)
      ?.click();
  };

  return (
    <>
      <UserSettingsSheet />
      <ProfileDrawer />
      <NotificationsDrawer />
      <MessagesDrawer />
      <PrivacyDrawer />
      <HelpDrawer />
      <DropdownMenu>
        <HoverCard>
          <HoverCardTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative flex w-full items-center gap-4 px-4 py-3 hover:bg-sidebar-accent rounded-lg transition-all duration-200"
              >
                <Avatar className="h-10 w-10 border-2 border-primary/10">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="bg-primary/5">
                    {user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-semibold text-sidebar-foreground truncate max-w-[120px]">
                    {user.name}
                  </span>
                  <span className="text-xs text-sidebar-foreground/70 truncate max-w-[120px]">
                    {user.email}
                  </span>
                </div>
                <Badge
                  variant="secondary"
                  className="absolute top-2 right-2 px-1 py-0"
                >
                  Online
                </Badge>
              </Button>
            </DropdownMenuTrigger>
          </HoverCardTrigger>
          <HoverCardContent
            align="start"
            className="w-[280px] p-4"
            side="right"
          >
            <div className="flex justify-between space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={user.avatar} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">{user.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {user.role || "Team Member"}
                </p>
                <div className="flex items-center pt-2">
                  <Badge variant="secondary" className="text-xs">
                    {user.plan || "Pro Member"}
                  </Badge>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        <DropdownMenuContent className="w-72" align="end" side="right">
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onSelect={() => openDrawer("profile")}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => openDrawer("notifications")}>
              <Bell className="mr-2 h-4 w-4" />
              <span>Notifications</span>
              <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => openDrawer("messages")}>
              <Mail className="mr-2 h-4 w-4" />
              <span>Messages</span>
              <DropdownMenuShortcut>⌘M</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault();
                document
                  .querySelector<HTMLButtonElement>("[data-sheet-trigger]")
                  ?.click();
              }}
            >
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => openDrawer("privacy")}>
              <Shield className="mr-2 h-4 w-4" />
              <span>Privacy</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleKeyboardShortcuts}>
              <Keyboard className="mr-2 h-4 w-4" />
              <span>Keyboard shortcuts</span>
              <DropdownMenuShortcut>?</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => openDrawer("help")}>
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Help & Support</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-red-600 focus:text-red-600"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}