import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setUser } from "../Redux/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const user = useSelector((state) => state.auth.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/users?email=${credentials.email}&password=${credentials.password}`,
      );
      if (response.ok) {
        const user = await response.json();
        dispatch(setUser(user[0]));
        if (user[0].role === "Manager") {
          navigate("/manager-dashboard");
        } else {
          navigate("/employee-dashboard");
        }
        console.log("Successfully logged in as", user[0].firstName);
      } else {
        console.error("Login failed");
        dispatch(clearUser());
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      dispatch(clearUser());
    }
  };

  return (
    <div className="flex h-screen w-screen max-w-full justify-center">
      <div className="flex h-screen w-2/5 flex-col justify-center bg-slate-100 px-20">
        <div className="flex w-full justify-center">
          <img src="/login-img.svg" alt="Login" />
        </div>
      </div>
      <div className="flex w-3/5 flex-col items-center bg-white p-20">
        <div className="flex w-full justify-center">
          <h1 className="text-3xl font-semibold text-dark-text">
            Welcome back to{" "}
            <span className="font-bold text-blue-800">Shift</span>
            <span className="font-bold italic text-blue-400">Sync</span>
          </h1>
        </div>
        <div className="py-20">
          <form className="flex flex-col gap-5" onSubmit={handleLogin}>
            <div className="flex flex-col gap-2">
              <label className="text-2xl" htmlFor="username">
                Email
              </label>
              <input
                className="h-10 w-96 rounded border border-slate-600 p-5 outline-none"
                type="text"
                name="email"
                placeholder="Email"
                value={credentials.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-2xl" htmlFor="password">
                Password
              </label>
              <input
                className="h-10 w-96 rounded border border-slate-600 p-5 outline-none"
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center p-10">
              <button
                type="submit"
                className="rounded bg-blue-600 px-10 py-2 text-xl font-bold text-white transition duration-300 ease-in-out hover:bg-blue-900"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
