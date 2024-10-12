import { Predicate,} from "./predicates";
import {PPerson} from "./mock"

export const allMatch = (...predicates: Predicate<PPerson>[]): Predicate<PPerson> => {
    return (item: PPerson)=>{
        return predicates.every((predicate)=>predicate(item))
    }
}