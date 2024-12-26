import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function MessagesDrawer() {
  const messages = [
    {
      id: 1,
      sender: "Alice Smith",
      avatar: "/avatars/alice.jpg",
      message: "Hey, can we discuss the project?",
      time: "10:30 AM"
    },
    {
      id: 2,
      sender: "Bob Johnson",
      avatar: "/avatars/bob.jpg",
      message: "The designs look great!",
      time: "Yesterday"
    }
  ];

  return (
    <Drawer>
      <DrawerTrigger className="hidden" data-drawer-trigger="messages">
        Open Messages
      </DrawerTrigger>
      <DrawerContent className="w-[400px] sm:w-[540px]">
        <DrawerHeader>
          <DrawerTitle>Messages</DrawerTitle>
        </DrawerHeader>
        <ScrollArea className="h-[400px] p-6">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className="flex items-start space-x-4 p-4 rounded-lg border"
              >
                <Avatar>
                  <AvatarImage src={message.avatar} />
                  <AvatarFallback>{message.sender[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="text-sm font-medium">{message.sender}</h4>
                    <span className="text-xs text-muted-foreground">
                      {message.time}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {message.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}