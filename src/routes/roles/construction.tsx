import { RouteObject } from "react-router-dom";
import { ErrorBoundary } from "@/components/error-boundary";
import Index from "@/pages/Index";
import ActiveSites from "@/pages/projects/sites";

export const constructionRoutes: RouteObject[] = [
  {
    path: "dashboard",
    element: <Index />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "projects",
    children: [
      {
        path: "sites",
        element: <ActiveSites />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "progress",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "schedule",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "contracts",
        element: <Index />,
        errorElement: <ErrorBoundary />
      }
    ],
    errorElement: <ErrorBoundary />
  },
  {
    path: "communication",
    children: [
      {
        path: "announcements",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "feedback",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "support",
        element: <Index />,
        errorElement: <ErrorBoundary />
      }
    ],
    errorElement: <ErrorBoundary />
  }
];