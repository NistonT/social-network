import { ButtonForm, ErrorField, InputForm, InputFormPassword } from "@/shared/ui";
import { KeyRound, Mail } from "lucide-react";
import { useAuthorization } from "../hooks/useAuthorization";

export const AuthorizationForm = () => {
  const { register, handleSubmit, onSubmitAuth, onSubmitAuthGoogle, isSubmitting, errors } = useAuthorization();

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmitAuth)} className="flex flex-col gap-3 w-full">
        <div className="flex flex-col">
          <InputForm
            icon={Mail}
            type="email"
            placeholder="email@burmalda.com"
            {...register("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          <ErrorField field={errors.email} id={"email-error"} />
        </div>
        <div>
          <InputFormPassword
            icon={KeyRound}
            placeholder="Password"
            {...register("password")}
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? "password-error" : undefined}
          />
          <ErrorField field={errors.password} id={"password-error"} />
        </div>
        <div className="flex items-center mt-5 h-full gap-1">
          <ButtonForm type="submit" className="flex-1 max-h-11" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Sign In"}
          </ButtonForm>

          <ButtonForm type="button" onClick={onSubmitAuthGoogle} className="flex flex-1 items-center justify-center max-h-11">
            <img src="/google.svg" alt="Google" className="w-6 h-6 object-contain" />
          </ButtonForm>
        </div>
      </form>
    </div>
  );
};
