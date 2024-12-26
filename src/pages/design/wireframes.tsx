import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Pencil } from "lucide-react";

export default function WireframesPage() {
  const wireframes = [
    {
      id: 1,
      title: "Homepage Wireframe",
      status: "In Progress",
      lastModified: "2024-03-15",
    },
    {
      id: 2,
      title: "Dashboard Layout",
      status: "Completed",
      lastModified: "2024-03-14",
    },
    {
      id: 3,
      title: "User Profile Page",
      status: "In Review",
      lastModified: "2024-03-13",
    },
    {
      id: 4,
      title: "Settings Interface",
      status: "Planned",
      lastModified: "2024-03-12",
    },
    {
      id: 5,
      title: "Mobile Navigation",
      status: "In Progress",
      lastModified: "2024-03-11",
    },
    {
      id: 6,
      title: "Authentication Flows",
      status: "Completed",
      lastModified: "2024-03-10",
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Wireframes</h1>
        <Button>Create New Wireframe</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wireframes.map((wireframe) => (
          <Card key={wireframe.id}>
            <CardHeader>
              <CardTitle>{wireframe.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Status: {wireframe.status}
              </p>
              <p className="text-sm text-muted-foreground">
                Last Modified: {wireframe.lastModified}
              </p>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button size="sm">
                <Pencil className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}