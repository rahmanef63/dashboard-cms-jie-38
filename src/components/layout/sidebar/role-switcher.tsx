import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigation } from "@/hooks/use-navigation";
import { sidebarData } from "@/data/sidebar";
import { UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function RoleSwitcher() {
  const { activeRole, setActiveRole } = useNavigation();
  const navigate = useNavigate();

  const handleRoleChange = (newRole: string) => {
    setActiveRole(newRole);
    // Navigate to dashboard when role changes
    navigate('/dashboard');
  };

  return (
    <Select value={activeRole} onValueChange={handleRoleChange}>
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