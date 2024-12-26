import { Outlet, useRouteError, useLocation, Navigate } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigation } from "@/hooks/use-navigation";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

interface RouterError {
  status?: number;
  statusText?: string;
  message?: string;
  data?: string;
  error?: {
    message?: string;
    stack?: string;
  };
}

function DashboardError() {
  const error = useRouteError() as RouterError;
  const location = useLocation();

  console.error("Dashboard route error:", {
    path: location.pathname,
    error,
    state: location.state
  });

  const getErrorMessage = () => {
    if (error.data) return error.data;
    if (error.error?.message) return error.error.message;
    if (error.message) return error.message;
    return "An unexpected error occurred";
  };

  const getErrorDetails = () => {
    if (error.status) {
      return `Status: ${error.status} ${error.statusText}`;
    }
    return error.error?.stack || "No additional details available";
  };

  return (
    <div className="flex-1 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-6">
        <Alert variant="destructive">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle>Dashboard Error on route: {location.pathname}</AlertTitle>
          <AlertDescription>
            {getErrorMessage()}
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-medium mb-2">Technical Details:</h3>
            <pre className="text-sm whitespace-pre-wrap overflow-auto max-h-48">
              {getErrorDetails()}
            </pre>
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={() => window.location.reload()}
              className="flex-1"
            >
              Try again
            </Button>
            <Button
              variant="default"
              onClick={() => window.history.back()}
              className="flex-1"
            >
              Go back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardLayout() {
  const location = useLocation();
  const { canAccessRoute, activeRole } = useNavigation();

  console.log('DashboardLayout render:', {
    path: location.pathname,
    activeRole,
    canAccess: canAccessRoute(location.pathname)
  });

  // Check if the current route is accessible
  if (!canAccessRoute(location.pathname)) {
    console.log('Access denied to route:', location.pathname);
    return <Navigate to={`/${activeRole}/dashboard`} replace />;
  }

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