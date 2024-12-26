import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { PageLayout } from "@/components/layout/page-layout";
import { Progress as ProgressIndicator } from "@/components/ui/progress";

const Progress = () => {
  return (
    <DashboardLayout>
      <PageLayout title="Project Progress">
        <div className="space-y-6">
          <p className="text-muted-foreground">
            Track the progress of ongoing projects.
          </p>
          <div className="space-y-4">
            {[
              { name: "Project A", progress: 75 },
              { name: "Project B", progress: 45 },
              { name: "Project C", progress: 90 },
            ].map((project) => (
              <div key={project.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{project.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {project.progress}%
                  </span>
                </div>
                <ProgressIndicator value={project.progress} />
              </div>
            ))}
          </div>
        </div>
      </PageLayout>
    </DashboardLayout>
  );
};

export default Progress;