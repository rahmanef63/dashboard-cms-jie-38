export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'in_progress' | 'completed' | 'on_hold';
  startDate: string;
  endDate: string;
  budget: number;
  clientId: string;
  managerId: string;
  teamMembers: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ProjectTask {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: 'todo' | 'in_progress' | 'review' | 'done';
  assigneeId: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  updatedAt: string;
}