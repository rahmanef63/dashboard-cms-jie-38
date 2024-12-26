import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ReviewsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Design Reviews</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Pending Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Design work awaiting review and feedback from stakeholders.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Review History</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Past design reviews with comments and revision history.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Review Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Statistics and insights from design review processes.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}