import { PPerson } from "./mock";
import { Predicate } from "./predicates";
import { allMatch} from "./homeworkUtils";
import { people } from "./mock";

//


//task 1//
const isOlderThan30 = (person: PPerson)=>person.age > 30;
const isLivingInWarsaw = (person: PPerson)=>person.location.city === "Warsaw";

const expectedResult = people.filter(allMatch(isOlderThan30, isLivingInWarsaw))



