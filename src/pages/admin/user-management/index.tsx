import { useState } from "react";
import { PageLayout } from "@/components/layout/page-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ApprovedUsers } from "@/components/admin/users/approved-users";
import { RequestedUsers } from "@/components/admin/users/requested-users";

export default function UserManagement() {
  return (
    <PageLayout title="User Management">
      <Tabs defaultValue="approved" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="approved">Approved Users</TabsTrigger>
          <TabsTrigger value="requested">Requested Users</TabsTrigger>
        </TabsList>
        <TabsContent value="approved">
          <ApprovedUsers />
        </TabsContent>
        <TabsContent value="requested">
          <RequestedUsers />
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
}