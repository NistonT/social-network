import { LOGO } from "@/shared/constants/name";
import { Bot } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex gap-2.5 items-center cursor-default">
      <Bot size={28} className="text-black" />
      <span className="font-mono text-2xl font-bold uppercase tracking-tight text-black">{LOGO}</span>
    </div>
  );
};
