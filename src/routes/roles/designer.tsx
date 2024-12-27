import { RouteObject } from "react-router-dom";
import { ErrorBoundary } from "@/components/error-boundary";
import Index from "@/pages/Index";
import WireframesPage from "@/pages/design/wireframes";

export const designerRoutes: RouteObject[] = [
  {
    path: "",
    children: [
      {
        path: "design",
        children: [
          {
            path: "wireframes",
            element: <WireframesPage />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "mockups",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "prototypes",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "system",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "assets",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "components",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "templates",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "team-projects",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "feedback",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "reviews",
            element: <Index />,
            errorElement: <ErrorBoundary />
          }
        ]
      }
    ]
  }
];