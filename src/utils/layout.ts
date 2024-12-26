export const layoutUtils = {
  getGridColumns: (items: number): number => {
    if (items <= 2) return items;
    if (items <= 4) return 2;
    return 3;
  },

  getResponsiveClasses: (breakpoint: 'sm' | 'md' | 'lg' | 'xl') => {
    const classes = {
      sm: 'grid-cols-1 sm:grid-cols-2',
      md: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
      lg: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
      xl: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
    };
    return classes[breakpoint];
  },

  getSectionPadding: (size: 'sm' | 'md' | 'lg' = 'md') => {
    const padding = {
      sm: 'py-2 px-4',
      md: 'py-4 px-6',
      lg: 'py-6 px-8'
    };
    return padding[size];
  }
};