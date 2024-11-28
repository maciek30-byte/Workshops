import { useEffect, useState } from "react";
import { FormValues } from "./app";

export const useCalculations = (values: FormValues)=>{
    const [totalTip, setTotalTip] = useState(0);
    const [tipPerPerson, setTipPerPerson] = useState(0);

    const {tipPercentage, numberOfPeople, bill} = values

    useEffect(()=>{
        setTotalTip(Number(((values.tipPercentage * 0.1) *values.bill).toFixed(2)))
        setTipPerPerson(Number((totalTip/ values.numberOfPeople).toFixed(2)))
    },[tipPercentage, numberOfPeople])

    return {totalTip, tipPerPerson, bill}
}