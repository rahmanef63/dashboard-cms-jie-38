import { useEffect } from 'react';
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useMediaQuery } from "@/hooks/use-media-query";
import { layoutUtils } from "@/utils/layout";
import { dateUtils } from "@/utils/date";

export default function DesignerDashboard() {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');
  const [lastVisit, setLastVisit] = useLocalStorage('designer_last_visit', new Date().toISOString());
  
  useEffect(() => {
    setLastVisit(new Date().toISOString());
    console.log('Dashboard visited:', { lastVisit, isLargeScreen });
  }, []);

  const gridClass = layoutUtils.getResponsiveClasses('lg');
  const sectionPadding = layoutUtils.getSectionPadding('lg');

  return (
    <PageLayout title="Designer Dashboard">
      <div className={`space-y-6 ${sectionPadding}`}>
        <div className={`grid gap-6 ${gridClass}`}>
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Last visit: {dateUtils.format(new Date(lastVisit))}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Projects Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                View optimized for {isLargeScreen ? 'desktop' : 'mobile'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Access your most used tools and recent projects
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}