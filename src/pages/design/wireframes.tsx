import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WireframesPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Wireframes</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Homepage Wireframe</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Initial homepage layout design with key components and navigation structure.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Dashboard Wireframe</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">User dashboard interface with data visualization and control panels.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Mobile App Wireframe</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Mobile-responsive layouts and navigation patterns for the app version.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}