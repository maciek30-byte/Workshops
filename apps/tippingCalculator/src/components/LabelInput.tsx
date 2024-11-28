import { HTMLInputTypeAttribute, InputHTMLAttributes, FC } from 'react';

interface LabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export const LabelInput: FC<LabelInputProps> = ({ name, label, ...rest }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} {...rest} min={0} max={10000} />
    </>
  );
};
