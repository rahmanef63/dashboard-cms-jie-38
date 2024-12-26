import { RouteObject } from "react-router-dom";
import { ErrorBoundary } from "@/components/error-boundary";
import Index from "@/pages/Index";
import ActiveSites from "@/pages/projects/sites";

export const constructionRoutes: RouteObject[] = [
  {
    path: 'projects',
    children: [
      { 
        path: 'sites', 
        element: <ActiveSites />, 
        errorElement: <ErrorBoundary /> 
      }
    ],
    errorElement: <ErrorBoundary />
  },
  { 
    path: 'chat', 
    element: <Index />, 
    errorElement: <ErrorBoundary /> 
  },
  {
    path: 'communication',
    children: [
      { 
        path: 'announcements', 
        element: <Index />, 
        errorElement: <ErrorBoundary /> 
      },
      { 
        path: 'feedback', 
        element: <Index />, 
        errorElement: <ErrorBoundary /> 
      },
      { 
        path: 'support', 
        element: <Index />, 
        errorElement: <ErrorBoundary /> 
      }
    ],
    errorElement: <ErrorBoundary />
  }
];