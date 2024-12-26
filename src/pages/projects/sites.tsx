import { PageLayout } from "@/components/layout/page-layout";

export default function ActiveSites() {
  return (
    <PageLayout title="Active Sites">
      <div className="space-y-4">
        <p className="text-muted-foreground">
          View and manage all active construction sites.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {["Site A", "Site B", "Site C"].map((site) => (
            <div key={site} className="rounded-lg border p-4">
              <h3 className="font-semibold">{site}</h3>
              <p className="text-sm text-muted-foreground">Status: Active</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}