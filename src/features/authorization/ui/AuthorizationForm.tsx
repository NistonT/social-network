import { ButtonForm, InputForm } from "@/shared/ui";
import { KeyRound, Mail } from "lucide-react";
import { useAuthorization } from "../hooks/useAuthorization";

export const AuthorizationForm = () => {
  const { register, handleSubmit, onSubmitAuth, onSubmitAuthGoogle } = useAuthorization();

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmitAuth)} className="flex flex-col gap-3 w-full">
        <InputForm icon={Mail} type="email" {...register("email", { required: "Введите почту" })} placeholder="email@burmalda.com" />
        <InputForm icon={KeyRound} type="password" {...register("password", { required: "Введите пароль" })} placeholder="Password" />
        <div className="flex items-center mt-5 h-full gap-1">
          <ButtonForm type="submit" className="flex-1 max-h-11">
            Sign In
          </ButtonForm>

          <ButtonForm type="button" onClick={onSubmitAuthGoogle} className="flex flex-1 items-center justify-center max-h-11">
            <img src="/google.svg" alt="Google" className="w-6 h-6 object-contain" />
          </ButtonForm>
        </div>
      </form>
    </div>
  );
};
