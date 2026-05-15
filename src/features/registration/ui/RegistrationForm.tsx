import { ButtonForm, ErrorField, InputForm, InputFormPassword } from "@/shared/ui";
import { KeyRound, Mail, User } from "lucide-react";
import { useRegistration } from "../hooks/useRegistration";

export const RegistrationForm = () => {
  const { register, handleSubmit, errors, isSubmitted, onSubmitRegister } = useRegistration();

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmitRegister)} className="flex flex-col gap-3 w-full">
        <div className="flex flex-col">
          <InputForm
            icon={User}
            type="text"
            placeholder="Display name"
            {...register("displayName")}
            aria-invalid={!!errors.displayName}
            aria-describedby={errors.displayName ? "displayName-error" : undefined}
          />
          <ErrorField field={errors.displayName} id={"displayName-error"} />
        </div>
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
        <div className="flex flex-col">
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
          <ButtonForm type="submit" className="flex-1 max-h-11" disabled={isSubmitted}>
            {isSubmitted ? "Created..." : "Create"}
          </ButtonForm>
        </div>
      </form>
    </div>
  );
};
