export const ROUTES = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
  DASHBOARD: '/dashboard',
  PROJECTS: {
    LIST: '/projects',
    DETAIL: (id: string) => `/projects/${id}`,
    CREATE: '/projects/create',
    EDIT: (id: string) => `/projects/${id}/edit`,
  },
  USERS: {
    LIST: '/admin/users',
    DETAIL: (id: string) => `/admin/users/${id}`,
    CREATE: '/admin/users/create',
    EDIT: (id: string) => `/admin/users/${id}/edit`,
  },
  SETTINGS: '/settings',
  PROFILE: '/profile',
} as const;