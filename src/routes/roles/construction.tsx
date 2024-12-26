import { RouteObject } from "react-router-dom";
import { ErrorBoundary } from "@/components/error-boundary";
import Index from "@/pages/Index";

// Create pages for construction role routes
<lov-write file_path="src/pages/projects/sites.tsx">
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ActiveSites() {
  return (
    <PageLayout title="Active Sites">
      <div className="space-y-6 p-6">
        <Card>
          <CardHeader>
            <CardTitle>Active Construction Sites</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              View and manage your active construction sites
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}