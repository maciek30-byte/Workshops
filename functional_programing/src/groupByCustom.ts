export const customGroupBy = <T extends Record<string, any>>(
    items: T[],
    key: keyof T
  ): Record<keyof T, T[]> => {
    return items.reduce((group, item) => {
      const groupKey = item[key] as keyof T;
  
      if (!group[groupKey]) {
        group[groupKey] = [];
      }
  
      group[groupKey].push(item);
  
      return group;
    }, {} as Record<keyof T, T[]>);
  };
  