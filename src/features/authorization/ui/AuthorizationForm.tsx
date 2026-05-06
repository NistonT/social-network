import { InputForm } from "@/shared/ui";
import { useAuthorization } from "../hooks/useAuthorization";

export const AuthorizationForm = () => {
  const { register, handleSubmit, onSubmitAuth, onSubmitAuthGoogle } = useAuthorization();

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmitAuth)} className="flex flex-col gap-1 w-full">
        <InputForm type="email" {...register("email", { required: "Введите почту" })} />
        <InputForm type="password" className="border-black border-2" {...register("password", { required: "Введите пароль" })} />
        <button type="submit" className="border-black border-2">
          Sign
        </button>
      </form>

      <button onClick={onSubmitAuthGoogle}>GOOGLE</button>
    </div>
  );
};
