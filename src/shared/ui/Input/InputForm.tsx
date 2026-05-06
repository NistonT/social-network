import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const InputForm = ({ ...props }: Props) => {
  return <input {...props} className="border-black border-2 w-full" />;
};
