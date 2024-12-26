import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DesignSystemPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Design System</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Typography</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Font families, sizes, weights, and text styles used across the platform.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Color Palette</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Primary, secondary, and accent colors with their respective variations.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Components</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Reusable UI components with documentation and usage guidelines.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}