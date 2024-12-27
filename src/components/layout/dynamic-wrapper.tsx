import { Suspense } from "react";
import { LoadingSpinner } from "../ui/loading-spinner";

interface DynamicWrapperProps {
  children: React.ReactNode;
}

export function DynamicWrapper({ children }: DynamicWrapperProps) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      {children}
    </Suspense>
  );
}