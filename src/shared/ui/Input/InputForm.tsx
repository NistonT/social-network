import { LucideIcon } from "lucide-react";
import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  icon?: LucideIcon;
};

export const InputForm = ({ icon: Icon, ...props }: Props) => {
  return (
    <div className="flex items-center gap-2 group">
      {Icon && <Icon className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 group-focus-within:text-gray-200" />}
      <input
        {...props}
        className="w-full text-xl border-b-2 border-gray-400 group-hover:border-gray-200 group-focus-within:text-gray-200 transition-colors duration-300 pl-1"
      />
    </div>
  );
};
