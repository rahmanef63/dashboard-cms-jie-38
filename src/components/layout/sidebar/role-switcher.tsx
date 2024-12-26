import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigation } from "@/hooks/use-navigation";
import { sidebarData } from "@/data/sidebar";
import { UserCircle } from "lucide-react";

export function RoleSwitcher() {
  const { activeRole, setActiveRole } = useNavigation();

  return (
    <Select value={activeRole} onValueChange={setActiveRole}>
      <SelectTrigger className="w-full">
        <div className="flex items-center gap-2">
          <UserCircle className="h-4 w-4" />
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent>
        {sidebarData.availableRoles.map((role) => (
          <SelectItem key={role} value={role}>
            <div className="flex items-center gap-2">
              <UserCircle className="h-4 w-4" />
              <span className="capitalize">{role}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}