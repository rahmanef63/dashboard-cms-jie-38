import { format, parseISO, isValid } from 'date-fns';

export const formatDate = (date: string | Date, formatString: string = 'PP'): string => {
  if (!date) return '';
  
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  return isValid(parsedDate) ? format(parsedDate, formatString) : '';
};

export const formatDateTime = (date: string | Date): string => {
  return formatDate(date, 'PPpp');
};

export const formatRelativeTime = (date: string | Date): string => {
  return formatDate(date, 'PPp');
};