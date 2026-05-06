import type { IAuthorization } from '@/shared/model/types/auth'
import { LucideIcon } from "lucide-react"
import { InputHTMLAttributes } from "react"
import { UseFormRegister } from 'react-hook-form'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  icon?: LucideIcon;
	register: UseFormRegister<IAuthorization>;
	name: "email" | "password";
};

export const InputForm = ({ icon: Icon, register, name, ...props }: Props) => {
  return (
    <div className="flex items-center gap-2 group">
      {Icon && <Icon className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 group-focus-within:text-gray-200" />}
      <input
        {...props}
				{...register(name)}
        className="w-full text-xl border-b-2 border-gray-400 group-hover:border-gray-200 group-focus-within:text-gray-200 transition-colors duration-300 pl-1"
      />
    </div>
  );
};
