import { AuthorizationForm } from "@/features/authorization/ui/AuthorizationForm";
import { LinkCreateAccount, LogoForm } from "./ui";

export const Authorization = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 border-2 border-gray-200 rounded-2xl max-w-80 w-full shadow-2xl">
      <LogoForm />
      <AuthorizationForm />
      <LinkCreateAccount />
    </div>
  );
};
