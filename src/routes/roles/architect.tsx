import { RouteObject } from "react-router-dom";
import { ErrorBoundary } from "@/components/error-boundary";
import Index from "@/pages/Index";

export const architectRoutes: RouteObject[] = [
  {
    path: 'architecture',
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
];