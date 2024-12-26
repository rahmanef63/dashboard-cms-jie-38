import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { DashboardLayout } from "@/components/layout/dashboard-layout";

// Project Pages
import ActiveSites from "./pages/projects/sites";
import Progress from "./pages/projects/progress";
import Schedule from "./pages/projects/schedule";
import Contracts from "./pages/projects/contracts";
import BudgetTracking from "./pages/projects/budget-tracking";

// Communication Pages
import Chat from "./pages/chat";
import Notifications from "./pages/notifications";
import Announcements from "./pages/communication/announcements";
import Feedback from "./pages/communication/feedback";
import Support from "./pages/communication/support";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/projects/sites" element={<ActiveSites />} />
            <Route path="/projects/progress" element={<Progress />} />
            <Route path="/projects/schedule" element={<Schedule />} />
            <Route path="/projects/contracts" element={<Contracts />} />
            <Route path="/projects/budget-tracking" element={<BudgetTracking />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/communication/announcements" element={<Announcements />} />
            <Route path="/communication/feedback" element={<Feedback />} />
            <Route path="/communication/support" element={<Support />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;