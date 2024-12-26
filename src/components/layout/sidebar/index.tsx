import { UserProfile } from "./user-profile";
import { TeamSwitcher } from "./team-switcher";
import { RoleSwitcher } from "./role-switcher";
import { NavMenu } from "./nav-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Sidebar() {
  return (
    <div className="flex h-screen w-64 flex-col border-r">
      <div className="p-4">
        <UserProfile />
        <div className="mt-4 space-y-4">
          <TeamSwitcher />
          <RoleSwitcher />
        </div>
      </div>
      <ScrollArea className="flex-1">
        <NavMenu />
      </ScrollArea>
    </div>
  );
}