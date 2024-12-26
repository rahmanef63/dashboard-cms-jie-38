import { PageLayout } from "@/components/layout/page-layout";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Feedback = () => {
  return (
    <PageLayout title="Feedback">
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Share your thoughts and suggestions with us.
        </p>
        <div className="space-y-4">
          <Textarea
            placeholder="Type your feedback here..."
            className="min-h-[150px]"
          />
          <Button>Submit Feedback</Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Feedback;