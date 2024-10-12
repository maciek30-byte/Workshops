export const mergeTwoObj = <TFirst, Tsecond>(obj1: TFirst, obj2: Tsecond) => {
    return { ...obj1, ...obj2 };
  };
  
  export const mergeManyObj = <TObj>(...objects: TObj[]) => {
    return objects.reduce((acc, item) => {
      return { ...acc, ...item };
    }, {} as TObj);
  };
  