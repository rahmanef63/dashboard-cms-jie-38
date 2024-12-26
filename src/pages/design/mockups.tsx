import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Eye, Download, Star, Share2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Mockup {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  stars: number;
  downloads: number;
}

const mockups: Mockup[] = [
  {
    id: "1",
    title: "Dashboard Layout",
    description: "Modern admin dashboard interface with dark mode support",
    image: "photo-1486312338219-ce68d2c6f44d",
    category: "Web App",
    stars: 245,
    downloads: 1234
  },
  {
    id: "2",
    title: "Mobile App Interface",
    description: "Clean and minimal mobile application design",
    image: "photo-1488590528505-98d2b5aba04b",
    category: "Mobile",
    stars: 187,
    downloads: 856
  },
  {
    id: "3",
    title: "E-commerce Platform",
    description: "Full-featured online store template",
    image: "photo-1461749280684-dccba630e2f6",
    category: "E-commerce",
    stars: 312,
    downloads: 2156
  },
  {
    id: "4",
    title: "Analytics Dashboard",
    description: "Data visualization and reporting interface",
    image: "photo-1581091226825-a6a2a5aee158",
    category: "Analytics",
    stars: 156,
    downloads: 945
  },
  {
    id: "5",
    title: "Social Media App",
    description: "Modern social networking interface",
    image: "photo-1487058792275-0ad4aaf24ca7",
    category: "Social",
    stars: 289,
    downloads: 1567
  },
  {
    id: "6",
    title: "Project Management",
    description: "Task and project tracking system",
    image: "photo-1498050108023-c5249f4df085",
    category: "Management",
    stars: 198,
    downloads: 1089
  }
];

const MockupsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { toast } = useToast();
  const categories = ["all", ...new Set(mockups.map(m => m.category))];

  const filteredMockups = selectedCategory === "all" 
    ? mockups 
    : mockups.filter(m => m.category === selectedCategory);

  const handleDownload = (mockupId: string) => {
    toast({
      title: "Download started",
      description: "Your mockup is being prepared for download.",
    });
  };

  const handleShare = (mockupId: string) => {
    toast({
      title: "Share link copied",
      description: "The share link has been copied to your clipboard.",
    });
  };

  return (
    <PageLayout title="Design Mockups">
      <div className="space-y-6">
        {/* Categories Filter */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Mockups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMockups.map((mockup) => (
            <Card key={mockup.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{mockup.title}</CardTitle>
                <CardDescription>{mockup.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="aspect-video relative overflow-hidden rounded-md">
                  <img
                    src={`https://source.unsplash.com/${mockup.image}`}
                    alt={mockup.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {mockup.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    {mockup.downloads}
                  </span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                    {mockup.category}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => handleDownload(mockup.id)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare(mockup.id)}
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default MockupsPage;