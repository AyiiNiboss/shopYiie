import { useState } from "react";
import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Inputan";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginFailed, setLoginFailed] = useState();
  const handleLogin = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    
    login(data, (status, res) => {
      if (status) {
        setIsLoading(false);
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setIsLoading(false);
        setLoginFailed(res.response.data);
      }
    });
  };
  return (
    <>
      {loginFailed &&
      <div className="border border-red-500 p-2 text-center bg-red-500 rounded-sm mb-2">⚠️ {loginFailed} ⚠️</div>
      }
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <InputForm
            classLabel="block mb-2 text-sm font-medium text-slate-200"
            htmlFor="username"
            children="Username"
            name="username"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-3">
          <InputForm
            classLabel="block mb-2 text-sm font-medium text-slate-200"
            type="password"
            children="Password"
            name="password"
            placeholder="••••••••"
          />
        </div>
        <Button
          type="submit"
          classButton={`w-full ${isLoading ? "cursor-progress" : "cursor-pointer"} hover:bg-[url('../../../public/images/background-auth-2.jpg')] bg-fixed bg-no-repeat bg-center`}
          color="bg-[url('../../../public/images/background-auth-1.jpg')] bg-fixed bg-no-repeat bg-center"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </form>
    </>
  );
};

export default FormLogin;
