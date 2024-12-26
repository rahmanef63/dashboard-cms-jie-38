import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigation } from "@/hooks/use-navigation";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

export function NavMenu() {
  const { getMenuForRole } = useNavigation();
  const [openSections, setOpenSections] = useState<string[]>([]);

  const menuSections = getMenuForRole();

  const toggleSection = (sectionTitle: string) => {
    setOpenSections((prev) =>
      prev.includes(sectionTitle)
        ? prev.filter((title) => title !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  return (
    <div className="space-y-4 py-4">
      {menuSections.map((section) => (
        <div key={section.title} className="px-3">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            {section.title}
          </h2>
          <div className="space-y-1">
            {section.items.map((item) => (
              <Collapsible
                key={item.label}
                open={openSections.includes(item.label)}
                onOpenChange={() => toggleSection(item.label)}
              >
                <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                  <div className="flex items-center gap-2">
                    {item.icon && <item.icon className="h-4 w-4" />}
                    <span>{item.label}</span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      openSections.includes(item.label) ? "rotate-180" : ""
                    )}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.href}
                      to={subItem.href}
                      className="flex items-center gap-2 px-8 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    >
                      {subItem.icon && <subItem.icon className="h-4 w-4" />}
                      <span>{subItem.label}</span>
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}