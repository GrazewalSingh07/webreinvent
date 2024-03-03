 
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/authSlice";
import { authService } from "../utils/axiosService";
import { FormInput } from "../components/FormInput";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate= useNavigate()

  const handleSignIn = () => {
    dispatch(loginAction('token'));
    try {
      setIsLoading(true);
       authService.login({ email, password }).then((response) => {
        const token = response.data.token;
        navigate("/dashboard");
        dispatch(loginAction(token));
       })

     
    } catch (e) {
      if (typeof e === "string") {
        e.toUpperCase();
      } else if (e instanceof Error) {
        alert(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSignIn();
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Login with us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <FormInput
              label="Email"
              type="email"
              datatestid='log-email'
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <FormInput
             datatestid='log-password'
              label="Password"
              type="password"
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loggin In..." : "Login"}
          </button>
        </form>
        <p className="py-2">
          New user?{" "}
          <a className="text-blue-800" href="/register">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
