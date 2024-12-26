import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export function PrivacyDrawer() {
  return (
    <Drawer>
      <DrawerTrigger className="hidden" data-drawer-trigger="privacy">
        Open Privacy Settings
      </DrawerTrigger>
      <DrawerContent className="w-[400px] sm:w-[540px]">
        <DrawerHeader>
          <DrawerTitle>Privacy Settings</DrawerTitle>
        </DrawerHeader>
        <div className="p-6 space-y-6">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="profile-visibility">Profile Visibility</Label>
                  <p className="text-sm text-muted-foreground">
                    Make your profile visible to other team members
                  </p>
                </div>
                <Switch id="profile-visibility" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="activity-status">Online Status</Label>
                  <p className="text-sm text-muted-foreground">
                    Show when you're active
                  </p>
                </div>
                <Switch id="activity-status" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive email notifications
                  </p>
                </div>
                <Switch id="email-notifications" />
              </div>
            </CardContent>
          </Card>
        </div>
      </DrawerContent>
    </Drawer>
  );
}