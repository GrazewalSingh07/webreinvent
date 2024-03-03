import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAction } from "../redux/authSlice";
import { authService } from "../utils/axiosService"; // Adjust the path accordingly
import {  useNavigate } from "react-router-dom";
import { FormInput } from "../components/FormInput";
import { AuthData } from "../utils/interface";

 
const Register: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = () => {
    if (!email || !password) {
      return;
    }

    setIsLoading(true);

    try {
      authService.register({ email, password }).then((response) => {
        const data: AuthData = response.data;
        console.log("Register");
        dispatch(registerAction(data));
        navigate("/dashboard");
      });
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
    handleSignUp();
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Register with us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <FormInput
              label="Email"
              type="email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <FormInput
              type="password"
              label="Password"
              value={password}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="py-2">
          Existing user?{" "}
          <a className="text-blue-800" href="/login">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
