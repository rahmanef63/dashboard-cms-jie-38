import { Building } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { sidebarData } from "@/data/sidebar";

export function TeamSwitcher() {
  if (!sidebarData.teams?.length) {
    return null;
  }

  return (
    <Select defaultValue={sidebarData.teams[0].name}>
      <SelectTrigger className="w-full">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {sidebarData.teams.map((team) => (
          <SelectItem key={team.name} value={team.name}>
            <div className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              <span>{team.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}