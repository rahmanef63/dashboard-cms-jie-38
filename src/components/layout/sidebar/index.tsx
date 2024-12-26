import { UserProfile } from "./user-profile";
import { TeamSwitcher } from "./team-switcher";
import { RoleSwitcher } from "./role-switcher";
import { NavMenu } from "./nav-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export function Sidebar() {
  return (
    <div className="flex h-screen w-64 flex-col bg-sidebar">
      <div className="p-3">
        <TeamSwitcher />
      </div>
      <Separator className="bg-sidebar-border" />
      <div className="p-3">
        <RoleSwitcher />
      </div>
      <Separator className="bg-sidebar-border" />
      <ScrollArea className="flex-1">
        <NavMenu />
      </ScrollArea>
      <Separator className="bg-sidebar-border" />
      <div className="p-3">
        <UserProfile />
      </div>
    </div>
  );
}