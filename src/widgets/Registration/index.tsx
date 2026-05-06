import { createUserWithEmailAndPassword } from "firebase/auth";

export const Registration = () => {
  const onSubmitRegister: SubmitHandler<TAuth> = async (data) => {
    await createUserWithEmailAndPassword(auth, data.email, data.password);
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
    </div>
  );
};
