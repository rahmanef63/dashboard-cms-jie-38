import { RouteObject } from "react-router-dom";
import { ErrorBoundary } from "@/components/error-boundary";
import Index from "@/pages/Index";
import { constructionRoutes } from "./roles/construction";
import { designerRoutes } from "./roles/designer";
import { architectRoutes } from "./roles/architect";
import { clientRoutes } from "./roles/client";

// Common routes shared across all roles
const commonRoutes: RouteObject[] = [
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
  construction: [...commonRoutes, ...constructionRoutes],
  designer: [...commonRoutes, ...designerRoutes],
  architect: [...commonRoutes, ...architectRoutes],
  client: [...commonRoutes, ...clientRoutes],
};

// Generate dynamic role-based routes
const generateRoleRoutes = (): RouteObject[] => {
  const roles = Object.keys(roleSpecificRoutes);
  
  return roles.map((role) => ({
    path: role,
    children: roleSpecificRoutes[role],
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