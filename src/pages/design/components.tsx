import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ComponentsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Components Library</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Form Elements</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Input fields, buttons, checkboxes, and other form components.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Menus, breadcrumbs, and navigation patterns for the interface.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Data Display</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Tables, charts, and other data visualization components.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}