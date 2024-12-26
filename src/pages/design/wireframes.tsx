import { PageLayout } from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Grid, Layout, Layers, PenTool } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Wireframe {
  id: string;
  title: string;
  description: string;
  image: string;
  lastModified: string;
  status: "draft" | "in-review" | "approved";
}

const wireframes: Wireframe[] = [
  {
    id: "1",
    title: "Homepage Layout",
    description: "Main landing page wireframe with hero section and feature highlights",
    image: "photo-1488590528505-98d2b5aba04b",
    lastModified: "2024-02-15",
    status: "approved"
  },
  {
    id: "2",
    title: "Dashboard Interface",
    description: "User dashboard with analytics and activity feed",
    image: "photo-1486312338219-ce68d2c6f44d",
    lastModified: "2024-02-14",
    status: "in-review"
  },
  {
    id: "3",
    title: "Mobile Navigation",
    description: "Responsive navigation patterns for mobile devices",
    image: "photo-1581091226825-a6a2a5aee158",
    lastModified: "2024-02-13",
    status: "draft"
  }
];

export default function WireframesPage() {
  const { toast } = useToast();

  const handleEdit = (id: string) => {
    console.log("Editing wireframe:", id);
    toast({
      title: "Edit mode activated",
      description: "Opening wireframe editor...",
    });
  };

  const handlePreview = (id: string) => {
    console.log("Previewing wireframe:", id);
    toast({
      title: "Preview mode",
      description: "Loading wireframe preview...",
    });
  };

  const getStatusColor = (status: Wireframe["status"]) => {
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
            <Button variant="outline" size="sm">
              <Grid className="w-4 h-4 mr-2" />
              Grid View
            </Button>
            <Button variant="outline" size="sm">
              <Layout className="w-4 h-4 mr-2" />
              List View
            </Button>
          </div>
          <Button>
            <PenTool className="w-4 h-4 mr-2" />
            New Wireframe
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wireframes.map((wireframe) => (
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