import { auth } from "@/app/main";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

interface TAuth {
  email: string;
  password: string;
}

export const Auth = () => {
  const { register, handleSubmit } = useForm<TAuth>();

  const navigate = useNavigate();

  const onSubmitRegister: SubmitHandler<TAuth> = async (data) => {
    await createUserWithEmailAndPassword(auth, data.email, data.password);
  };

  const onSubmitAuth: SubmitHandler<TAuth> = async (data) => {
    await signInWithEmailAndPassword(auth, data.email, data.password);
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitRegister)}>
        <input type="email" className="border-black border-2" {...register("email", { required: "Введите почту" })} />
        <input type="password" className="border-black border-2" {...register("password", { required: "Введите пароль" })} />
        <button type="submit" className="border-black border-2">
          Register
        </button>
      </form>
      <form onSubmit={handleSubmit(onSubmitAuth)}>
        <input type="email" className="border-black border-2" {...register("email", { required: "Введите почту" })} />
        <input type="password" className="border-black border-2" {...register("password", { required: "Введите пароль" })} />
        <button type="submit" className="border-black border-2">
          AUTH
        </button>
      </form>
    </div>
  );
};
