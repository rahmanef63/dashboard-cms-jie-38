export const appConfig = {
  storage: {
    prefix: 'app_',
    version: '1.0',
  },
  dateFormat: 'yyyy-MM-dd',
  timeFormat: 'HH:mm:ss',
  pagination: {
    defaultPageSize: 10,
    pageSizeOptions: [5, 10, 20, 50],
  },
  theme: {
    colorSchemes: {
      light: {
        primary: 'hsl(var(--primary))',
        background: 'hsl(var(--background))',
      },
      dark: {
        primary: 'hsl(var(--primary-dark))',
        background: 'hsl(var(--background-dark))',
      },
    },
  },
  features: {
    darkMode: true,
    notifications: true,
    fileUploads: true,
  },
};