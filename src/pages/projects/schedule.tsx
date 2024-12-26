import { PageLayout } from "@/components/layout/page-layout";
import { Calendar } from "@/components/ui/calendar";

const Schedule = () => {
  const date = new Date();

  return (
    <PageLayout title="Project Schedule">
      <div className="space-y-4">
        <p className="text-muted-foreground">
          View and manage project schedules and timelines.
        </p>
        <Calendar
          mode="single"
          selected={date}
          className="rounded-md border"
        />
      </div>
    </PageLayout>
  );
};

export default Schedule;