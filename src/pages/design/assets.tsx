import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AssetsLibraryPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Assets Library</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Icons</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Collection of custom and system icons used throughout the interface.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Images</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Stock photos, illustrations, and graphics for various use cases.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Logos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Brand logos and variations for different applications and sizes.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}