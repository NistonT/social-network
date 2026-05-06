import { LOGO } from "@/shared/constants/name";
import { Bot } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex gap-2.5 items-center cursor-default group">
      <Bot
        size={28}
        className="text-gray-200 transition-all duration-300 
                   group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
      />
      <span
        className="font-mono text-2xl font-bold uppercase tracking-tight text-gray-200 transition-all duration-300 
                   group-hover:text-white group-hover:[text-shadow:0_0_8px_rgba(255,255,255,0.8),0_0_16px_rgba(255,255,255,0.4)]"
      >
        {LOGO}
      </span>
    </div>
  );
};
