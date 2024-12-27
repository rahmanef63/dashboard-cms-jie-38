export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'construction' | 'designer' | 'architect' | 'client';
  status: 'active' | 'inactive' | 'pending';
  avatar?: string;
  phone?: string;
  company?: string;
  position?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserSettings {
  userId: string;
  theme: 'light' | 'dark' | 'system';
  language: string;
  notifications: {
    email: boolean;
    push: boolean;
    desktop: boolean;
  };
  timezone: string;
}