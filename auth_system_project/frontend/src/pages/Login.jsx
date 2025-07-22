import React, { useState } from "react";
import api from "../services/api";
import { setAuthUser } from "../services/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // ✅ Correct initial state (no reference to formData inside itself)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Validate with backend FIRST
      const response = await api.post("login/", formData);

      // ✅ Only after success
      setAuthUser(formData.username);
      localStorage.setItem("username", formData.username);
      navigate("/dashboard");
    } catch (err) {
      setMessage("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-white shadow-xl p-6">
        <h2 className="text-xl font-bold text-center mb-4">Login</h2>

        {message && (
          <p className="text-sm text-red-500 text-center mb-2">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 underline">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
