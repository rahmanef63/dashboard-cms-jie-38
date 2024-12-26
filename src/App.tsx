import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "./components/layout/dashboard-layout";
import Index from "./pages/Index";
import WireframesPage from "./pages/design/wireframes";
import { ThemeProvider } from "@/components/theme-provider";
import { ErrorBoundary } from "@/components/error-boundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      // Common routes for all roles
      {
        path: "dashboard",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "profile",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "notifications",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "settings",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      // Designer routes
      {
        path: "design/wireframes",
        element: <WireframesPage />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "design/mockups",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "design/prototypes",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "design/system",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      // Construction routes
      {
        path: "projects/sites",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "projects/progress",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "projects/schedule",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "projects/contracts",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      // Architect routes
      {
        path: "architecture/blueprints",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "architecture/models",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "architecture/site-analysis",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      // Client routes
      {
        path: "client/dashboard",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "client/projects",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "client/timeline",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
    ],
  },
]);

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}