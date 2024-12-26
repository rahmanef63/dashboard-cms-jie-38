import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrototypesPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Interactive Prototypes</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>User Flow Prototype</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Interactive user journey demonstration with key touchpoints and interactions.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Animation Prototype</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Motion design concepts and transition animations between states.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Navigation Prototype</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Menu systems and navigation patterns with interactive elements.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}