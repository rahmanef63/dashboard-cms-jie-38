import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bell, Info } from "lucide-react";

export function NotificationsDrawer() {
  const notifications = [
    { id: 1, title: "New project assigned", time: "5m ago", type: "info" },
    { id: 2, title: "Meeting reminder", time: "1h ago", type: "reminder" },
    { id: 3, title: "Task completed", time: "2h ago", type: "success" },
  ];

  return (
    <Drawer>
      <DrawerTrigger className="hidden" data-drawer-trigger="notifications">
        Open Notifications
      </DrawerTrigger>
      <DrawerContent className="w-[400px] sm:w-[540px]">
        <DrawerHeader>
          <DrawerTitle>Notifications</DrawerTitle>
        </DrawerHeader>
        <ScrollArea className="h-[400px] p-6">
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-start space-x-4 p-4 rounded-lg border"
              >
                <Info className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium">{notification.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {notification.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}