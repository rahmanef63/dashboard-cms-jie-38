export const errorHandlers = {
  logError: (error: Error, context?: string) => {
    console.error(`Error${context ? ` in ${context}` : ''}:`, error);
    // In a real app, you might want to send this to an error tracking service
  },

  formatError: (error: unknown): string => {
    if (error instanceof Error) {
      return error.message;
    }
    return String(error);
  },

  isNetworkError: (error: unknown): boolean => {
    return error instanceof Error && 
      ('NetworkError' === error.name || error.message.includes('network'));
  }
};