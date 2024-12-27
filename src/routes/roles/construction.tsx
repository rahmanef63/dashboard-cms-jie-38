import { RouteObject } from "react-router-dom";
import { ErrorBoundary } from "@/components/error-boundary";
import ActiveSites from "@/pages/projects/sites";

export const constructionRoutes: RouteObject[] = [
  {
    path: "",
    children: [
      {
        path: "projects",
        children: [
          {
            path: "sites",
            element: <ActiveSites />,
            errorElement: <ErrorBoundary />
          }
        ]
      }
    ]
  }
];