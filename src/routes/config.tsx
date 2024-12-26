import { ErrorBoundary } from "@/components/error-boundary";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import Index from "@/pages/Index";
import WireframesPage from "@/pages/design/wireframes";
import { RouteObject } from "react-router-dom";

// Common routes shared across all roles
const commonRoutes: RouteObject[] = [
  { path: 'dashboard', element: <Index />, errorElement: <ErrorBoundary /> },
  { path: 'profile', element: <Index />, errorElement: <ErrorBoundary /> },
  { path: 'notifications', element: <Index />, errorElement: <ErrorBoundary /> },
  { path: 'settings', element: <Index />, errorElement: <ErrorBoundary /> },
];

// Role-specific routes
const roleSpecificRoutes: { [key: string]: RouteObject[] } = {
  designer: [
    { path: 'wireframes', element: <WireframesPage />, errorElement: <ErrorBoundary /> },
    { path: 'mockups', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'prototypes', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'system', element: <Index />, errorElement: <ErrorBoundary /> },
  ],
  construction: [
    { path: 'sites', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'progress', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'schedule', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'contracts', element: <Index />, errorElement: <ErrorBoundary /> },
  ],
  architect: [
    { path: 'blueprints', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'models', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'site-analysis', element: <Index />, errorElement: <ErrorBoundary /> },
  ],
  client: [
    { path: 'projects', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'timeline', element: <Index />, errorElement: <ErrorBoundary /> },
  ],
};

// Generate dynamic role-based routes
export const generateRoleRoutes = (): RouteObject[] => {
  const roles = Object.keys(roleSpecificRoutes);
  
  return roles.map((role) => ({
    path: role,
    element: <DashboardLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      ...commonRoutes,
      ...roleSpecificRoutes[role as keyof typeof roleSpecificRoutes],
    ],
  }));
};

// Root route configuration
export const routeConfig: RouteObject = {
  path: "/",
  element: <DashboardLayout />,
  errorElement: <ErrorBoundary />,
  children: [
    {
      path: "",
      index: true,
      element: <Index />,
      errorElement: <ErrorBoundary />,
    },
    ...generateRoleRoutes(),
  ],
};