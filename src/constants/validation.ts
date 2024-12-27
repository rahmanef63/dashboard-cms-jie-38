export const VALIDATION = {
  PASSWORD: {
    MIN_LENGTH: 8,
    MAX_LENGTH: 50,
    PATTERN: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    MESSAGE: 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number',
  },
  EMAIL: {
    PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    MESSAGE: 'Please enter a valid email address',
  },
  NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 50,
    MESSAGE: 'Name must be between 2 and 50 characters',
  },
  PHONE: {
    PATTERN: /^\+?[\d\s-]{10,}$/,
    MESSAGE: 'Please enter a valid phone number',
  },
} as const;