import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye, CheckSquare, X } from "lucide-react";
import { UserDetailsDialog } from "./user-details-dialog";

interface RequestedUser {
  id: string;
  name: string;
  email: string;
  requestedRole: string;
  requestDate: string;
}

const mockRequestedUsers: RequestedUser[] = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@example.com",
    requestedRole: "designer",
    requestDate: "2024-02-20",
  },
  {
    id: "2",
    name: "Bob Wilson",
    email: "bob@example.com",
    requestedRole: "architect",
    requestDate: "2024-02-19",
  },
];

export function RequestedUsers() {
  const [selectedUser, setSelectedUser] = useState<RequestedUser | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string>("");

  const handleApprove = (userId: string) => {
    if (!selectedRole) {
      console.log("Please select a role first");
      return;
    }
    console.log("Approving user:", userId, "with role:", selectedRole);
    // Implement approve functionality
  };

  const handleReject = (userId: string) => {
    console.log("Rejecting user:", userId);
    // Implement reject functionality
  };

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Requested Role</TableHead>
            <TableHead>Request Date</TableHead>
            <TableHead>Assign Role</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockRequestedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.requestedRole}</TableCell>
              <TableCell>{user.requestDate}</TableCell>
              <TableCell>
                <Select onValueChange={setSelectedRole}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="construction">Construction</SelectItem>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="architect">Architect</SelectItem>
                    <SelectItem value="client">Client</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell className="text-right space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setSelectedUser(user);
                    setIsDetailsOpen(true);
                  }}
                >
                  <Eye className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-green-600"
                  onClick={() => handleApprove(user.id)}
                >
                  <CheckSquare className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-destructive"
                  onClick={() => handleReject(user.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <UserDetailsDialog
        user={selectedUser}
        open={isDetailsOpen}
        onOpenChange={setIsDetailsOpen}
      />
    </div>
  );
}