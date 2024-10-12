const reduceSOME = <T>(items: T[], predicate: (item: T) => boolean) => {
    items.reduce((isSomeFound, item) => {
      return isSomeFound || predicate(item);
    }, false);
  };
  
  
  const reduceMap = <T, U>(items: T[], mapperFn: (item: T) => U): U[] => {
    return items.reduce((mappedArray: U[], item: T) => {
      mappedArray.push(mapperFn(item));
      return mappedArray;
    }, []);
  };

  const filterReduce = <T>(items: T[], filterPredicate: (item: T) => T[]) => {
    return items.reduce((filtredItems, item) => {
      if (filterPredicate(item)) {
        filtredItems.push(item);
      }
  
      return filtredItems;
    }, [] as T[]);
  };
  
  const forEachReduce = <T>(items: T[], callback: (item: T) => void) => {
    return items.reduce((acc, item) => {
      callback(item);
  
      return acc;
    }, undefined);
  };
  