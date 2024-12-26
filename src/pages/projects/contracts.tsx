import { PageLayout } from "@/components/layout/page-layout";
import { FileText } from "lucide-react";

const Contracts = () => {
  return (
    <PageLayout title="Contracts">
      <div className="space-y-4">
        <p className="text-muted-foreground">
          View and manage project contracts and agreements.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {["Contract A", "Contract B", "Contract C"].map((contract) => (
            <div
              key={contract}
              className="flex items-center gap-3 rounded-lg border p-4"
            >
              <FileText className="h-5 w-5 text-muted-foreground" />
              <div>
                <h3 className="font-medium">{contract}</h3>
                <p className="text-sm text-muted-foreground">PDF Document</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Contracts;