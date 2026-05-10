import { LucideIcon } from "lucide-react";
import { forwardRef, InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  icon?: LucideIcon;
};

export const InputForm = forwardRef<HTMLInputElement, Props>(({ icon: Icon, className, ...props }, ref) => {
  return (
    <div className="flex items-center gap-2 group">
      {Icon && <Icon className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 group-focus-within:text-gray-200" />}
      <input
        ref={ref}
        {...props}
        className={`w-full text-xl border-b-2 border-gray-400 bg-transparent 
                     outline-none focus:border-gray-200 group-hover:border-gray-200 
                     group-focus-within:border-gray-200 transition-colors duration-300 pl-1
                     font-mono
                     ${className || ""}`}
      />
    </div>
  );
});
