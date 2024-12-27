import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileCode, Download, Share2 } from "lucide-react";

export default function BlueprintsPage() {
  const blueprints = [
    {
      id: 1,
      name: "Main Building Layout",
      lastModified: "2024-03-27",
      status: "Approved",
      version: "2.1",
    },
    {
      id: 2,
      name: "Floor Plan - Level 1",
      lastModified: "2024-03-26",
      status: "In Review",
      version: "1.3",
    },
    {
      id: 3,
      name: "Electrical Systems",
      lastModified: "2024-03-25",
      status: "Draft",
      version: "1.0",
    },
  ];

  return (
    <PageLayout title="Blueprints">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Project Blueprints
            </h2>
            <p className="text-sm text-muted-foreground">
              Manage and view all project blueprints
            </p>
          </div>
          <Button>
            <FileCode className="mr-2 h-4 w-4" />
            Upload Blueprint
          </Button>
        </div>

        <div className="grid gap-4">
          {blueprints.map((blueprint) => (
            <Card key={blueprint.id}>
              <CardContent className="flex items-center justify-between p-6">
                <div className="space-y-1">
                  <h3 className="font-medium leading-none">{blueprint.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Version {blueprint.version} • {blueprint.status}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Last modified: {blueprint.lastModified}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}