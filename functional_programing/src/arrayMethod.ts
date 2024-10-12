import { employees, Person } from "./mock"
import { customGroupBy } from "./groupByCustom";
import { mergeManyObj, mergeTwoObj } from "./immutability";

const costOfAllEmployess = employees.reduce((totalMoney, { salary }) => {
  return (totalMoney = totalMoney + salary);
}, 0);

export const isPolishPredicate = <T extends { nationality: string }>(employee: T) =>
  employee.nationality === "Polish";


const addFavouriteFoodToCollection = reduceMap(employees, (employee) => {
  return { ...employee, favouriteFood: null };
});

const isMoreThan8YearsExpirience = <T extends { yearsOfExpirience: number }>(
  employe: T
) => employe.yearsOfExpirience > 8;



const consoleAllItems = forEachReduce(employees, (item) => console.log);

const groupedByNationality = customGroupBy(employees, "nationality");
console.log("grouped", groupedByNationality);

const john = {
  firstName: "John",
  lastName: " Lenon",
};

const paul = {
  firstName: "Paul",
  lastName: "McCartney",
};

const musician = {
  proffesion: "musician",
  salary: " 5000",
};

const mergedTwo = mergeTwoObj(john, musician);
console.log("merged", mergedTwo);

const mergeMany = mergeManyObj({ id: 111 }, john, musician, {
  name: " Bambik",
});
console.log("MANY", mergeMany);
 
const stripId = <TObj extends { id: number }>(object: TObj) => {
  const { id, ...rest } = object;

  return rest;
};

const removedId = stripId({ id: 1234, firstName: "John", lastName: "Lenon" });
console.log("WithoutId", removedId);

const addField = (obj: {
  title: string;
  marked?: boolean;
}): { title: string; marked: boolean } => {
  return { ...obj, marked: obj.marked ?? true };
};





