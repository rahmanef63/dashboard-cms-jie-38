import { PageLayout } from "@/components/layout/page-layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Chat = () => {
  return (
    <PageLayout title="Chat">
      <div className="flex h-[600px] flex-col">
        <div className="flex-1 space-y-4 overflow-auto p-4">
          <div className="ml-auto w-fit max-w-[80%] rounded-lg bg-primary p-3 text-primary-foreground">
            Hello! How can I help you today?
          </div>
          <div className="w-fit max-w-[80%] rounded-lg bg-muted p-3">
            I need information about the latest project updates.
          </div>
        </div>
        <div className="border-t p-4">
          <div className="flex gap-2">
            <Input placeholder="Type your message..." className="flex-1" />
            <Button size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Chat;