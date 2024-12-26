import { useNavigation } from "@/hooks/use-navigation";
import { sidebarData } from "@/data/sidebar";
import { UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function RoleSwitcher() {
  const { activeRole, setActiveRole } = useNavigation();
  const navigate = useNavigate();

  const handleRoleChange = (newRole: string) => {
    setActiveRole(newRole);
    navigate(`/${newRole}/dashboard`);
  };

  return (
    <Select value={activeRole} onValueChange={handleRoleChange}>
      <SelectTrigger className="w-full">
        <div className="flex items-center gap-2">
          <UserCircle className="h-4 w-4" />
          <SelectValue placeholder="Select role" />
        </div>
      </SelectTrigger>
      <SelectContent>
        {sidebarData.availableRoles.map((role) => (
          <SelectItem key={role} value={role}>
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}