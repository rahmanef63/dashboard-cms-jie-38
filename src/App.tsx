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
      // Dynamic role-based routes
      {
        path: ":role/*",
        children: [
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
            path: "wireframes",
            element: <WireframesPage />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "mockups",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "prototypes",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "system",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          // Construction routes
          {
            path: "sites",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "progress",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "schedule",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "contracts",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          // Architect routes
          {
            path: "blueprints",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "models",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "site-analysis",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          // Client routes
          {
            path: "projects",
            element: <Index />,
            errorElement: <ErrorBoundary />
          },
          {
            path: "timeline",
            element: <Index />,
            errorElement: <ErrorBoundary />
          }
        ]
      }
    ]
  }
]);

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}