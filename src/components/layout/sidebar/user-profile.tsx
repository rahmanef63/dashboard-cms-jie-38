import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/hooks/use-user";
import { UserSettingsSheet } from "./user-settings-sheet";

export function UserProfile() {
  const { user } = useUser();

  if (!user) return null;

  return (
    <UserSettingsSheet>
      <button className="flex w-full items-center gap-4 px-4 py-2 hover:bg-sidebar-accent rounded-lg transition-colors">
        <Avatar>
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col text-left">
          <span className="text-sm font-semibold text-sidebar-foreground">{user.name}</span>
          <span className="text-xs text-sidebar-foreground/70">{user.email}</span>
        </div>
      </button>
    </UserSettingsSheet>
  );
}