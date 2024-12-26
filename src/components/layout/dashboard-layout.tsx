import { Outlet, useRouteError } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

function DashboardError() {
  const error = useRouteError() as Error;
  console.error("Route error:", error);

  return (
    <div className="flex-1 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-6 text-center">
        <div className="flex justify-center">
          <AlertCircle className="h-12 w-12 text-destructive" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight">Oops! Something went wrong</h1>
        <p className="text-muted-foreground">
          {error?.message || "An unexpected error occurred"}
        </p>
        <div className="space-y-4">
          <Button
            variant="outline"
            onClick={() => window.location.reload()}
            className="w-full"
          >
            Try again
          </Button>
          <Button
            variant="default"
            onClick={() => window.history.back()}
            className="w-full"
          >
            Go back
          </Button>
        </div>
      </div>
    </div>
  );
}

export function DashboardLayout() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="container py-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}