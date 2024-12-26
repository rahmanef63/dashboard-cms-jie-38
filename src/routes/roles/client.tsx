import { RouteObject } from "react-router-dom";
import { ErrorBoundary } from "@/components/error-boundary";
import Index from "@/pages/Index";

export const clientRoutes: RouteObject[] = [
  {
    path: "dashboard",
    element: <Index />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "projects",
    element: <Index />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "timeline",
    element: <Index />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "financial",
    children: [
      {
        path: "invoices",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "payments",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "budget",
        element: <Index />,
        errorElement: <ErrorBoundary />
      }
    ],
    errorElement: <ErrorBoundary />
  },
  {
    path: "reports",
    children: [
      {
        path: "progress-reports",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "financial-reports",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "analytics",
        element: <Index />,
        errorElement: <ErrorBoundary />
      }
    ],
    errorElement: <ErrorBoundary />
  }
];