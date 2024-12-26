import { ErrorBoundary } from "@/components/error-boundary";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import Index from "@/pages/Index";
import ActiveSites from "@/pages/projects/sites";
import WireframesPage from "@/pages/design/wireframes";
import { RouteObject } from "react-router-dom";

// Common routes shared across all roles
const commonRoutes: RouteObject[] = [
  { 
    path: 'dashboard', 
    element: <Index />, 
    errorElement: <ErrorBoundary /> 
  },
  { 
    path: 'profile', 
    element: <Index />, 
    errorElement: <ErrorBoundary /> 
  },
  { 
    path: 'notifications', 
    element: <Index />, 
    errorElement: <ErrorBoundary /> 
  },
  { 
    path: 'settings', 
    element: <Index />, 
    errorElement: <ErrorBoundary /> 
  },
];

// Role-specific routes
const roleSpecificRoutes: { [key: string]: RouteObject[] } = {
  construction: [
    { 
      path: 'projects/*', 
      children: [
        { path: 'sites', element: <ActiveSites />, errorElement: <ErrorBoundary /> },
        { path: 'progress', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'schedule', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'contracts', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'budget-tracking', element: <Index />, errorElement: <ErrorBoundary /> },
      ]
    },
    { path: 'chat', element: <Index />, errorElement: <ErrorBoundary /> },
    { 
      path: 'communication/*', 
      children: [
        { path: 'announcements', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'feedback', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'support', element: <Index />, errorElement: <ErrorBoundary /> },
      ]
    },
  ],
  designer: [
    { 
      path: 'design/*', 
      children: [
        { path: 'wireframes', element: <WireframesPage />, errorElement: <ErrorBoundary /> },
        { path: 'mockups', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'prototypes', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'system', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'assets', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'components', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'templates', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'team-projects', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'feedback', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'reviews', element: <Index />, errorElement: <ErrorBoundary /> },
      ]
    },
  ],
  architect: [
    { 
      path: 'architecture/*', 
      children: [
        { path: 'blueprints', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'models', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'site-analysis', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'specifications', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'standards', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'documentation', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'resources', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'design-reviews', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'technical-reviews', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'compliance', element: <Index />, errorElement: <ErrorBoundary /> },
      ]
    },
  ],
  client: [
    { 
      path: 'client/*', 
      children: [
        { path: 'dashboard', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'projects', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'timeline', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'invoices', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'payments', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'budget', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'progress-reports', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'financial-reports', element: <Index />, errorElement: <ErrorBoundary /> },
        { path: 'analytics', element: <Index />, errorElement: <ErrorBoundary /> },
      ]
    },
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