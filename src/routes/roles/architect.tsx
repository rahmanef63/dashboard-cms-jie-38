import { RouteObject } from "react-router-dom";
import { ErrorBoundary } from "@/components/error-boundary";
import Index from "@/pages/Index";
import BlueprintsPage from "@/pages/architecture/blueprints";

export const architectRoutes: RouteObject[] = [
  {
    path: "",
    children: [
      {
        path: "architecture",
        children: [
          {
            path: "blueprints",
            element: <BlueprintsPage />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "models",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "site-analysis",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "specifications",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "standards",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "documentation",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "resources",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "design-reviews",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "technical-reviews",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "compliance",
            element: <Index />,
            errorElement: <ErrorBoundary />
          }
        ]
      }
    ]
  }
];