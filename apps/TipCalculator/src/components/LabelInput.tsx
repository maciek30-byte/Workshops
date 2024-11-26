import { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const InputField = ({ name, label, ...rest }: InputFieldProps) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...rest} />
    </>
  );
};
