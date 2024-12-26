import { useEffect } from "react";
import { useUser } from "@/hooks/use-user";
import { sidebarData } from "@/data/sidebar";

const Index = () => {
  const { setUser } = useUser();

  useEffect(() => {
    // Initialize with demo user data
    setUser(sidebarData.user);
  }, [setUser]);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Welcome back!</h1>
      <p className="text-muted-foreground">
        Select a menu item from the sidebar to get started.
      </p>
    </div>
  );
};

export default Index;