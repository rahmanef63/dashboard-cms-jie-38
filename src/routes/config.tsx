import { RouteObject } from "react-router-dom";
import { ErrorBoundary } from "@/components/error-boundary";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import Index from "@/pages/Index";
import WireframesPage from "@/pages/design/wireframes";
import ActiveSites from "@/pages/projects/sites";
import Notifications from "@/pages/notifications";

// Import role-specific routes
import { constructionRoutes } from "./roles/construction";
import { designerRoutes } from "./roles/designer";
import { architectRoutes } from "./roles/architect";
import { clientRoutes } from "./roles/client";

export const routeConfig: RouteObject = {
  path: "/",
  element: <DashboardLayout />,
  errorElement: <ErrorBoundary />,
  children: [
    {
      index: true,
      element: <Index />,
      errorElement: <ErrorBoundary />
    },
    // Construction routes
    {
      path: "construction/*",
      children: constructionRoutes,
      errorElement: <ErrorBoundary />
    },
    // Designer routes
    {
      path: "designer/*",
      children: designerRoutes,
      errorElement: <ErrorBoundary />
    },
    // Architect routes
    {
      path: "architect/*",
      children: architectRoutes,
      errorElement: <ErrorBoundary />
    },
    // Client routes
    {
      path: "client/*",
      children: clientRoutes,
      errorElement: <ErrorBoundary />
    },
    // Common routes
    {
      path: "notifications",
      element: <Notifications />,
      errorElement: <ErrorBoundary />
    }
  ]
};