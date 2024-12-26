import { PageLayout } from "@/components/layout/page-layout";
import { Bell } from "lucide-react";

const Announcements = () => {
  return (
    <PageLayout title="Announcements">
      <div className="space-y-4">
        <p className="text-muted-foreground">
          View important announcements and updates.
        </p>
        {[
          {
            title: "System Maintenance",
            date: "2024-02-20",
            content:
              "Scheduled maintenance will be performed on the system this weekend.",
          },
          {
            title: "New Feature Release",
            date: "2024-02-18",
            content:
              "We're excited to announce the release of new project management features.",
          },
          {
            title: "Holiday Schedule",
            date: "2024-02-15",
            content:
              "Please note the upcoming holiday schedule for the next month.",
          },
        ].map((announcement) => (
          <div
            key={announcement.title}
            className="rounded-lg border p-4 space-y-2"
          >
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-muted-foreground" />
              <h3 className="font-medium">{announcement.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              {announcement.content}
            </p>
            <p className="text-xs text-muted-foreground">{announcement.date}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Announcements;