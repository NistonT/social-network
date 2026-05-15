import { Eye, EyeClosed, LucideIcon } from "lucide-react";
import { forwardRef, InputHTMLAttributes, useState } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  icon?: LucideIcon;
};

export const InputFormPassword = forwardRef<HTMLInputElement, Props>(({ icon: Icon, className, ...props }, ref) => {
  const [isSee, setSee] = useState<boolean>(false);

  return (
    <div className="flex items-center gap-2 group relative">
      {Icon && <Icon className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 group-focus-within:text-gray-200" />}
      <input
        type={isSee ? "text" : "password"}
        ref={ref}
        {...props}
        className={`w-full text-xl border-b-2 border-gray-400 bg-transparent 
                     outline-none focus:border-gray-200 group-hover:border-gray-200 
                     group-focus-within:border-gray-200 transition-colors duration-300 pl-1
                     font-mono
                     ${className || ""}`}
      />
      <button type="button" className="absolute right-0" onClick={() => setSee(!isSee)}>
        {isSee ? <Eye /> : <EyeClosed />}
      </button>
    </div>
  );
});
