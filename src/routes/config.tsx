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
  construction: [
    { path: 'projects/sites', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'projects/progress', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'projects/schedule', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'projects/contracts', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'projects/budget-tracking', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'chat', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'notifications', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'communication/announcements', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'communication/feedback', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'communication/support', element: <Index />, errorElement: <ErrorBoundary /> },
  ],
  designer: [
    { path: 'design/wireframes', element: <WireframesPage />, errorElement: <ErrorBoundary /> },
    { path: 'design/mockups', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'design/prototypes', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'design/system', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'design/assets', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'design/components', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'design/templates', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'design/team-projects', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'design/feedback', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'design/reviews', element: <Index />, errorElement: <ErrorBoundary /> },
  ],
  architect: [
    { path: 'architecture/blueprints', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'architecture/models', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'architecture/site-analysis', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'architecture/specifications', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'architecture/standards', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'architecture/documentation', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'architecture/resources', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'architecture/design-reviews', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'architecture/technical-reviews', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'architecture/compliance', element: <Index />, errorElement: <ErrorBoundary /> },
  ],
  client: [
    { path: 'client/dashboard', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'client/projects', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'client/timeline', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'client/invoices', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'client/payments', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'client/budget', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'client/progress-reports', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'client/financial-reports', element: <Index />, errorElement: <ErrorBoundary /> },
    { path: 'client/analytics', element: <Index />, errorElement: <ErrorBoundary /> },
  ],
};

// Generate dynamic role-based routes
const generateRoleRoutes = (): RouteObject[] => {
  const roles = Object.keys(roleSpecificRoutes);
  
  return roles.map((role) => ({
    path: role,
    children: [
      ...commonRoutes,
      ...roleSpecificRoutes[role],
    ],
  }));
};

// Root route configuration
export const routeConfig: RouteObject = {
  element: <DashboardLayout />,
  errorElement: <ErrorBoundary />,
  children: [
    {
      path: "/",
      element: <Index />,
    },
    ...generateRoleRoutes(),
  ],
};