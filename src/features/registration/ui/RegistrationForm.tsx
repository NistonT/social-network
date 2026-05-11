import { ButtonForm, InputForm } from "@/shared/ui";
import { KeyRound, Mail, User } from "lucide-react";

export const RegistrationForm = () => {
  return (
    <div className="w-full">
      <form className="flex flex-col gap-3 w-full">
        <div>
          <InputForm icon={User} type="text" placeholder="Display name" />
        </div>
        <div className="flex flex-col">
          <InputForm icon={Mail} type="email" placeholder="email@burmalda.com" />
        </div>
        <div>
          <InputForm icon={KeyRound} type="password" placeholder="Password" />
        </div>
        <div className="flex items-center mt-5 h-full gap-1">
          <ButtonForm type="submit" className="flex-1 max-h-11">
            Create
          </ButtonForm>
        </div>
      </form>
    </div>
  );
};
