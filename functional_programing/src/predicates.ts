import { employees, Person } from "./mock";
import { isPolishPredicate } from "./arrayMethod";
//NEGATE THAT FUNCTION, WE CAN NOT DO NEGATION IN OUR PREDICATE//

//implement PREDICARE that is negation of PREDICATe is POLISH//
export type Predicate<T> = (item: T) => boolean;

const negatePredicate = (predicate: Predicate<Person>): Predicate<Person> => {
  return (item: Person) => {
    return !predicate(item);
  };
};

const isEuropean = negatePredicate(isPolishPredicate);

const negationResult = employees.filter(isEuropean)

// Join  predicates we want employee who is Polish and has more than 5 years of experience//
const isPernamentEmployee = (employee: Person) => employee.yearsOfExperience > 5;

const isPernamentPolishEmployee = (...predicates: Predicate<Person>[]): Predicate<Person>=>{
    return (item: Person)=>{
        return predicates.every((predicate)=>predicate(item))
    }
}