import {
  Home,
  ClipboardList,
  Building,
  Users,
  Settings,
  FileText,
  Briefcase,
  Globe,
  LayoutDashboard,
  Calendar,
  MessagesSquare,
  Bell,
  FileCheck,
  Hammer,
  Pencil,
  Ruler,
  UserCircle,
  BarChart2,
  ListCheck,
  FileSignature,
  PenTool,
  Star,
  Box,
  Map,
  FileSearch,
  Layout,
  DollarSign,
  User,
  MessageSquare,
  Folder,
} from 'lucide-react';
import { SidebarData } from "../types/sidebar";

export const sidebarData: SidebarData = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/placeholder.svg",
    role: "construction"
  },
  teams: [
    {
      name: "Acme Inc",
      logo: Building,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: Briefcase,
      plan: "Startup",
    },
  ],
  roleMenus: {
    construction: [
      {
        title: 'Public',
        items: [
          {
            label: 'Projects',
            icon: Hammer,
            subItems: [
              { label: 'Active Sites', href: '/projects/sites', icon: Building },
              { label: 'Progress', href: '/projects/progress', icon: Hammer },
              { label: 'Schedule', href: '/projects/schedule', icon: Calendar },
              { label: 'Contracts', href: '/projects/contracts', icon: FileSignature },
              { label: 'Budget Tracking', href: '/projects/budget-tracking', icon: DollarSign },
            ],
          },
          {
            label: 'Communication',
            icon: MessagesSquare,
            subItems: [
              { label: 'Chat', href: '/chat', icon: MessageSquare },
              { label: 'Notifications', href: '/notifications', icon: Bell },
              { label: 'Announcements', href: '/communication/announcements', icon: FileText },
              { label: 'Feedback', href: '/communication/feedback', icon: Pencil },
              { label: 'Support', href: '/communication/support', icon: Briefcase },
            ],
          },
        ],
      },
    ],
    designer: [
      {
        title: 'Design',
        items: [
          {
            label: 'Design Projects',
            icon: LayoutDashboard,
            subItems: [
              { label: 'Wireframes', href: '/design/wireframes', icon: Ruler },
              { label: 'Mockups', href: '/design/mockups', icon: FileText },
              { label: 'Prototypes', href: '/design/prototypes', icon: PenTool },
            ],
          },
        ],
      },
    ],
    architect: [
      {
        title: 'Public',
        items: [
          {
            label: 'Projects',
            icon: Map,
            subItems: [
              { label: 'Plans', href: '/projects/plans', icon: Map },
              { label: 'Models', href: '/projects/models', icon: Box },
              { label: 'Reviews', href: '/projects/reviews', icon: Star },
              { label: 'Site Visit Reports', href: '/projects/site-reports', icon: FileSearch },
              { label: 'Compliance', href: '/projects/compliance', icon: Settings },
            ],
          },
        ],
      },
    ],
    client: [
      {
        title: 'Client Dashboard',
        items: [
          {
            label: 'Overview',
            icon: Users,
            subItems: [
              { label: 'Projects', href: '/client/projects', icon: ClipboardList },
              { label: 'Invoices', href: '/client/invoices', icon: FileCheck },
            ],
          },
        ],
      },
    ],
  },
  availableRoles: ['construction', 'designer', 'architect', 'client'],
};
