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
        path: ":role/dashboard",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: ":role/profile",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: ":role/notifications",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: ":role/settings",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      // Designer routes
      {
        path: "designer/wireframes",
        element: <WireframesPage />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "designer/mockups",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "designer/prototypes",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "designer/system",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      // Construction routes
      {
        path: "construction/sites",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "construction/progress",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "construction/schedule",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "construction/contracts",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      // Architect routes
      {
        path: "architect/blueprints",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "architect/models",
        element: <Index />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "architect/site-analysis",
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