import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { PageLayout } from "@/components/layout/page-layout";
import { Card } from "@/components/ui/card";
import { MessageSquare, Phone, Mail } from "lucide-react";

const Support = () => {
  return (
    <DashboardLayout>
      <PageLayout title="Support">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Get help and support for your projects.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-4">
              <div className="flex flex-col items-center space-y-2 text-center">
                <MessageSquare className="h-6 w-6 text-primary" />
                <h3 className="font-medium">Live Chat</h3>
                <p className="text-sm text-muted-foreground">
                  Chat with our support team
                </p>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex flex-col items-center space-y-2 text-center">
                <Phone className="h-6 w-6 text-primary" />
                <h3 className="font-medium">Phone Support</h3>
                <p className="text-sm text-muted-foreground">
                  Call us at +1 234 567 890
                </p>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex flex-col items-center space-y-2 text-center">
                <Mail className="h-6 w-6 text-primary" />
                <h3 className="font-medium">Email Support</h3>
                <p className="text-sm text-muted-foreground">
                  support@example.com
                </p>
              </div>
            </Card>
          </div>
        </div>
      </PageLayout>
    </DashboardLayout>
  );
};

export default Support;