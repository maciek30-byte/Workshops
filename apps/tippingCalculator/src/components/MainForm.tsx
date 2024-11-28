import { LabelInput } from './LabelInput';
import {FormValues} from "../app/app"
import { ChangeEvent, Dispatch, SetStateAction} from 'react';

interface MainFormProps {
    formValues: FormValues
    setFormValues: Dispatch<SetStateAction<FormValues>>
}



export const MainForm = ({setFormValues}: MainFormProps) => {

const onHandleInputChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const { name, value } = e.target;
    
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value === '' ? '' : Number(value)
    }));
  };

  return (
    <>
      <LabelInput label="Bill" name="bill" type="number" defaultValue={50} />
      <br />
      <LabelInput label="Tip Percentage" name="tip" type="number" defaultValue={18} />
      <br />
      <LabelInput label="Number of People" name="people" type="number" defaultValue={18} />
    </>
  );
};
