import { useRouteError, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
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

export function ErrorBoundary() {
  const error = useRouteError() as RouterError;
  const location = useLocation();
  
  console.error("Detailed route error:", {
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
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="max-w-2xl w-full space-y-6">
        <Alert variant="destructive">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle>Error on route: {location.pathname}</AlertTitle>
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