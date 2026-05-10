import { pageRouter } from "@/shared/constants/page-router";
import { UserRoundPlus } from "lucide-react";
import { Link } from "react-router";

export const LinkCreateAccount = () => {
  return (
    <div className="flex justify-center mt-4">
      <Link to={pageRouter.REGISTRATION} className="flex justify-center items-center gap-2 group">
        <UserRoundPlus
          className="text-gray-200 transition-all duration-300 
										 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        />
        <span
          className="font-mono text-lg font-bold uppercase tracking-tight text-gray-200 transition-all duration-300 
										 group-hover:text-white group-hover:[text-shadow:0_0_8px_rgba(255,255,255,0.8),0_0_16px_rgba(255,255,255,0.4)]"
        >
          Create account
        </span>
      </Link>
    </div>
  );
};
