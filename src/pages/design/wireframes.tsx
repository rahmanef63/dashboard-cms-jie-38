import { PageLayout } from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Grid, Layout, Layers, PenTool } from "lucide-react";
import { useWireframes } from "@/hooks/use-wireframes";

export default function WireframesPage() {
  const {
    wireframes,
    isLoading,
    error,
    viewMode,
    handleEdit,
    handlePreview,
    toggleViewMode
  } = useWireframes();

  if (isLoading) {
    return (
      <PageLayout title="Wireframes">
        <div className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">Loading wireframes...</p>
        </div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout title="Wireframes">
        <div className="flex items-center justify-center h-64">
          <p className="text-destructive">Error loading wireframes</p>
        </div>
      </PageLayout>
    );
  }

  const getStatusColor = (status: "draft" | "in-review" | "approved") => {
    switch (status) {
      case "approved":
        return "text-green-500";
      case "in-review":
        return "text-yellow-500";
      case "draft":
        return "text-gray-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <PageLayout title="Wireframes">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleViewMode}
              className={viewMode === 'grid' ? 'bg-accent' : ''}
            >
              <Grid className="w-4 h-4 mr-2" />
              Grid View
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleViewMode}
              className={viewMode === 'list' ? 'bg-accent' : ''}
            >
              <Layout className="w-4 h-4 mr-2" />
              List View
            </Button>
          </div>
          <Button>
            <PenTool className="w-4 h-4 mr-2" />
            New Wireframe
          </Button>
        </div>

        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          : "space-y-4"
        }>
          {wireframes?.map((wireframe) => (
            <Card key={wireframe.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{wireframe.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{wireframe.description}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="aspect-video relative overflow-hidden rounded-md bg-muted">
                  <img
                    src={`https://images.unsplash.com/${wireframe.image}`}
                    alt={wireframe.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full bg-background/80 ${getStatusColor(wireframe.status)}`}>
                      {wireframe.status}
                    </span>
                  </div>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  Last modified: {wireframe.lastModified}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => handleEdit(wireframe.id)}
                >
                  <Layers className="w-4 h-4 mr-2" />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => handlePreview(wireframe.id)}
                >
                  <Layout className="w-4 h-4 mr-2" />
                  Preview
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}