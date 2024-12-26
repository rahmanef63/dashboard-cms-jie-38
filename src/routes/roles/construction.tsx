import { RouteObject } from "react-router-dom";
import { ErrorBoundary } from "@/components/error-boundary";
import Index from "@/pages/Index";
import ActiveSites from "@/pages/projects/sites";
import Progress from "@/pages/projects/progress";
import Schedule from "@/pages/projects/schedule";
import BudgetTracking from "@/pages/projects/budget-tracking";

export const constructionRoutes: RouteObject[] = [
  { path: 'dashboard', element: <Index />, errorElement: <ErrorBoundary /> },
  {
    path: 'projects',
    children: [
      { path: 'sites', element: <ActiveSites />, errorElement: <ErrorBoundary /> },
      { path: 'progress', element: <Progress />, errorElement: <ErrorBoundary /> },
      { path: 'schedule', element: <Schedule />, errorElement: <ErrorBoundary /> },
      { path: 'budget-tracking', element: <BudgetTracking />, errorElement: <ErrorBoundary /> },
    ],
    errorElement: <ErrorBoundary />
  },
  { path: 'chat', element: <Index />, errorElement: <ErrorBoundary /> },
  {
    path: 'communication',
    children: [
      { path: 'announcements', element: <Index />, errorElement: <ErrorBoundary /> },
      { path: 'feedback', element: <Index />, errorElement: <ErrorBoundary /> },
      { path: 'support', element: <Index />, errorElement: <ErrorBoundary /> },
    ],
    errorElement: <ErrorBoundary />
  },
];