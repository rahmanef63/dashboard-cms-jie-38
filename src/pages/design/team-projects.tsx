import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TeamProjectsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Team Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Active Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Currently ongoing design projects and their status updates.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Schedule and milestones for design project deliverables.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Project team composition and role assignments.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}