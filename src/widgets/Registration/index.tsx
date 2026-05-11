import { RegistrationForm } from "@/features/registration/ui/RegistrationForm";
import { LogoForm } from "@/shared/ui/Logo/LogoForm";
import { LinkSignIn } from "./ui";

export const Registration = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 border-2 border-gray-200 rounded-2xl max-w-80 w-full shadow-2xl">
      <LogoForm />
      <RegistrationForm />
      <LinkSignIn />
    </div>
  );
};
