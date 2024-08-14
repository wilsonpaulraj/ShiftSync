import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextField, Alert, Button } from "@mui/material";
import axios from "axios";
import { setUser, clearUser } from "../Redux/authSlice";
import {
  Google as GoogleIcon,
  Facebook as FacebookIcon,
} from "@mui/icons-material";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const [loginError, setLoginError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    setErrors({ ...errors, [name]: false });
    setLoginError("");
  };

  const validateForm = () => {
    const newErrors = {
      email: !validateEmail(credentials.email),
      password: credentials.password === "",
    };
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleLogin = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    console.error("Validation failed");
    return;
  }

  try {
    const response = await axios.get(
      `http://localhost:8000/users?email=${credentials.email}&password=${credentials.password}`
    );

    if (response.status === 200) {
      const user = response.data;
      dispatch(setUser(user));

      if (user.role === "Manager") {
        navigate("/manager-dashboard");
      } else {
        navigate("/employee-dashboard");
      }

      console.log(user)

      console.log("Successfully logged in as", user.firstName);
    } else {
      setLoginError("Incorrect email or password. Please try again.");
      dispatch(clearUser());
    }
  } catch (error) {
    console.error("An error occurred during login:", error);
    setLoginError("An error occurred during login. Please try again.");
    dispatch(clearUser());
  }
};


  return (
    <div className="flex h-screen w-screen max-w-full justify-center overflow-hidden">
      <div className="flex h-screen w-3/5 flex-col justify-center rounded-l-lg pl-32">
        <div className="flex w-full justify-center">
          <img className="h-full w-full" src="/login-img.jpg" alt="Login" />
        </div>
      </div>
      <div className="flex w-3/5 flex-col items-center rounded-r-lg bg-slate-50 p-20">
        <div className="flex w-full justify-center">
          <h1 className="text-4xl font-bold text-light-text">
            Welcome back to{" "}
            <span className="font-bold text-blue-800">Shift</span>
            <span className="font-bold italic text-blue-400">Sync</span>
            <span className="text-blue-4 font-bold text-blue-400">!</span>
          </h1>
        </div>
        <div className="w-full max-w-md py-20">
          <form className="flex flex-col gap-5" onSubmit={handleLogin}>
            <div className="flex flex-col">
              <TextField
                id="email"
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                value={credentials.email}
                error={errors.email}
                className="rounded-lg bg-white shadow-md"
              />
              {errors.email && (
                <div className="mt-1 text-sm text-red-500">
                  Please enter a valid email address.
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <TextField
                id="password"
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                value={credentials.password}
                error={errors.password}
                className="rounded-lg bg-white shadow-md"
              />
              {errors.password && (
                <div className="mt-1 text-sm text-red-500">
                  Please enter your password.
                </div>
              )}
            </div>
            {loginError && (
              <Alert severity="error" className="mt-4">
                {loginError}
              </Alert>
            )}
            <div className="flex justify-center p-5">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="rounded-lg bg-gradient-to-r from-sky-800 via-blue-600 to-sky-800 px-10 py-3 text-xl text-white shadow-lg transition duration-300 ease-in-out hover:shadow-2xl"
                fullWidth
              >
                Login
              </Button>
            </div>
          </form>
          <div className="flex flex-col items-center gap-3 px-5">
            <span className="mb-2 text-light-text underline">Or</span>

            <Button
              variant="contained"
              startIcon={<GoogleIcon />}
              fullWidth
              className="mb-3 !bg-red-600 !text-white !shadow-md hover:!bg-red-700"
              style={{
                backgroundColor: "#DB4437", // Google red
                color: "#FFFFFF", // White text
              }}
            >
              Sign in with Google
            </Button>
            <Button
              variant="contained"
              startIcon={<FacebookIcon />}
              fullWidth
              className="!bg-blue-700 !text-white !shadow-md hover:!bg-blue-800"
              style={{
                backgroundColor: "#4267B2",
                color: "#FFFFFF",
              }}
            >
              Sign in with Facebook
            </Button>
          </div>
          <div className="mt-5 flex justify-center">
            <p className="text-gray-700">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
