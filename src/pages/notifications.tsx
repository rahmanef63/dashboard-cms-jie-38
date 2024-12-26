import { PageLayout } from "@/components/layout/page-layout";
import { Bell, MessageSquare, FileText } from "lucide-react";

const Notifications = () => {
  return (
    <PageLayout title="Notifications">
      <div className="space-y-4">
        {[
          {
            icon: Bell,
            title: "New Project Update",
            description: "Project A has been updated with new requirements",
            time: "2 hours ago",
          },
          {
            icon: MessageSquare,
            title: "New Message",
            description: "You have a new message from the project manager",
            time: "4 hours ago",
          },
          {
            icon: FileText,
            title: "Document Shared",
            description: "New documentation has been shared with you",
            time: "1 day ago",
          },
        ].map((notification, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-lg border p-4"
          >
            <notification.icon className="h-5 w-5 text-muted-foreground" />
            <div className="flex-1">
              <h3 className="font-medium">{notification.title}</h3>
              <p className="text-sm text-muted-foreground">
                {notification.description}
              </p>
              <span className="text-xs text-muted-foreground">
                {notification.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Notifications;