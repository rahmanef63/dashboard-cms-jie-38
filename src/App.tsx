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
      {
        path: "design/wireframes",
        element: <WireframesPage />,
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