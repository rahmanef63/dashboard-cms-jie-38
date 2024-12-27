import { PageLayout } from "@/components/layout/page-layout";
import { DynamicWrapper } from "@/components/layout/dynamic-wrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Calendar, Users, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Static data moved outside component
const sites = [
  {
    id: 1,
    name: "Downtown Plaza Project",
    location: "123 Main St, Downtown",
    status: "active",
    startDate: "2024-01-15",
    teamSize: 25,
  },
  {
    id: 2,
    name: "Riverside Apartments",
    location: "456 River Road",
    status: "planning",
    startDate: "2024-03-01",
    teamSize: 18,
  },
  {
    id: 3,
    name: "Tech Park Development",
    location: "789 Innovation Drive",
    status: "active",
    startDate: "2024-02-10",
    teamSize: 32,
  },
];

// Static utility function
const getStatusBadgeColor = (status: string) => {
  const colors = {
    active: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
    planning: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
    completed: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100",
  };
  return colors[status as keyof typeof colors] || colors.active;
};

// Static component for site statistics
const SiteStatistics = () => (
  <div className="grid gap-6 md:grid-cols-3">
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Total Sites</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{sites.length}</div>
        <p className="text-muted-foreground text-sm mt-2">
          Across all locations
        </p>
      </CardContent>
    </Card>
    
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Active Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">
          {sites.filter(site => site.status === 'active').length}
        </div>
        <p className="text-muted-foreground text-sm mt-2">
          Currently in progress
        </p>
      </CardContent>
    </Card>
    
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Total Team Members</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">
          {sites.reduce((acc, site) => acc + site.teamSize, 0)}
        </div>
        <p className="text-muted-foreground text-sm mt-2">
          Across all sites
        </p>
      </CardContent>
    </Card>
  </div>
);

// Dynamic content component
const SitesContent = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <CardDescription className="text-lg">
        Manage and monitor all active construction sites
      </CardDescription>
      <Button className="bg-sidebar-primary text-sidebar-primary-foreground">
        <Building2 className="mr-2 h-4 w-4" />
        Add New Site
      </Button>
    </div>

    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Active Sites Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Site Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>Team Size</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sites.map((site) => (
              <TableRow key={site.id}>
                <TableCell className="font-medium">{site.name}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                    {site.location}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={getStatusBadgeColor(site.status)}>
                    {site.status.charAt(0).toUpperCase() + site.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                    {new Date(site.startDate).toLocaleDateString()}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                    {site.teamSize} members
                  </div>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Site</DropdownMenuItem>
                      <DropdownMenuItem>View Timeline</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        Archive Site
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>

    <SiteStatistics />
  </div>
);

export default function ActiveSites() {
  return (
    <PageLayout title="Construction Sites">
      <DynamicWrapper>
        <SitesContent />
      </DynamicWrapper>
    </PageLayout>
  );
}
