// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ChangeEvent, FC, ReactNode, useState } from 'react';
import styles from './app.module.css';
import { LabelInput } from '../components/LabelInput';
import path from 'path';
import { MainForm } from '../components/MainForm';
import { useCalculations } from './useCalculations';

export interface FormValues {
  bill: number;
  tipPercentage: number;
  numberOfPeople: number;
}

const NUMBER_TO_PERCENT_FACTOR = 0.1;

const AppWrapper = ({ children }: { children: ReactNode }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

const TipInfoField: FC<{ label: string; value: number; currency?: string }> = ({
  label,
  value,
  currency = '$',
}) => {
  return (
    <p>
      {label}:{currency}
      {value}
    </p>
  );
};

export function App() {

  const [formValues, setFormValues] = useState<FormValues>({
    bill: 50,
    tipPercentage: 18,
    numberOfPeople: 1,
  });

  const{totalTip, tipPerPerson} = useCalculations(formValues)


  const onHandleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: Number(value)
    }));
  };

  return (
    <AppWrapper>
      <form>
        <LabelInput 
        label="Bill"
         name="bill"
          type="number"
          value={formValues.bill}
           onChange={onHandleInputChange}
           />
        <br />
        <LabelInput
          label="Tip Percentage"
          name="tipPercentage"
          type="number"
          value={formValues.tipPercentage}
          onChange={onHandleInputChange}
        />
        <br />
        <LabelInput
          label="Number of People"
          name="numberOfPeople"
          type="number"
          onChange={onHandleInputChange}
          value={formValues.numberOfPeople}
        />
      </form>
      <p> TOTAL TIP {totalTip}</p>
      <p>TIP PER PERSON {tipPerPerson} </p>
    </AppWrapper>
  );
}

export default App;
