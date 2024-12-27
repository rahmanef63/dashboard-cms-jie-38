import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { routeConfig } from "./routes/config";
import { Suspense } from "react";
import { LoadingSpinner } from "./components/ui/loading-spinner";

// Static components that don't need to be re-rendered
const StaticComponents = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={createBrowserRouter([routeConfig])} />
      </Suspense>
    </ThemeProvider>
  );
};

// Root component
export default function App() {
  return <StaticComponents />;
}