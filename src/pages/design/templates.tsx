import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TemplatesPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Templates</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Page Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Pre-designed page layouts for common use cases and scenarios.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Email Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Standardized email layouts for various types of communications.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Document Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Formatted documents and reports with consistent styling.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}