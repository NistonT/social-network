import { LucideIcon } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  icon?: string | LucideIcon;
};

export const ButtonForm = ({ children, className, icon: Icon, ...props }: Props) => {
  return (
    <button
      {...props}
      className={`relative w-full text-xl border-2 border-gray-200 hover:border-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 rounded-lg flex items-center justify-center py-2 ${className}`}
    >
      {typeof Icon === "string" ? (
        <img src={Icon} alt="icon" className="w-6 h-6 object-contain absolute" />
      ) : Icon ? (
        <Icon className="w-6 h-6" />
      ) : null}
      {children}
    </button>
  );
};
