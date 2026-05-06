import { AuthorizationForm } from "@/features/authorization/ui/AuthorizationForm";
import { Logo } from "@/shared/ui";

export const Authorization = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 border-2 border-black rounded-2xl max-w-80 w-full">
      <div className="flex justify-center items-center">
        <Logo />
      </div>
      <AuthorizationForm />
    </div>
  );
};
