import { AuthorizationForm } from "@/features/authorization/ui/AuthorizationForm";
import { m } from "motion/react";
import { LinkCreateAccount, LogoForm } from "./ui";

export const Authorization = () => {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 border-2 border-gray-200 rounded-2xl max-w-80 w-full shadow-2xl"
    >
      <LogoForm />
      <AuthorizationForm />
      <LinkCreateAccount />
    </m.div>
  );
};
