import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function HelpDrawer() {
  const faqItems = [
    {
      question: "How do I change my password?",
      answer: "Go to Settings > Security to change your password."
    },
    {
      question: "Where can I find my team settings?",
      answer: "Team settings are available in the Team Switcher dropdown at the top of the sidebar."
    },
    {
      question: "How do I invite team members?",
      answer: "You can invite team members from the Team Management section in your dashboard."
    }
  ];

  return (
    <Drawer>
      <DrawerTrigger className="hidden" data-drawer-trigger="help">
        Open Help & Support
      </DrawerTrigger>
      <DrawerContent className="w-[400px] sm:w-[540px]">
        <DrawerHeader>
          <DrawerTitle>Help & Support</DrawerTitle>
        </DrawerHeader>
        <div className="p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </DrawerContent>
    </Drawer>
  );
}