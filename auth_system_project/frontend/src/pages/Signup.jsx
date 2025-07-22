import React, { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.password2) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await api.post("signup/", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      // Optional: use message from backend if returned
      const backendMessage = response.data.message || "Signup successful!";
      setMessage(`${backendMessage} Redirecting...`);
      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      let errorMsg = "Signup failed";
      console.log("Signup error:", error.response?.data);

      if (error.response?.data) {
        const errors = error.response.data;
        if (typeof errors === "string") {
          errorMsg = errors;
        } else if (errors.username) {
          errorMsg = errors.username[0];
        } else if (errors.email) {
          errorMsg = errors.email[0];
        } else if (errors.password) {
          errorMsg = errors.password[0];
        } else if (errors.non_field_errors) {
          errorMsg = errors.non_field_errors[0];
        }
      }

      setMessage(errorMsg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-white shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Create Account</h2>
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
            type="email"
            name="email"
            placeholder="Email"
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
          <input
            type="password"
            name="password2"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />

          <button type="submit" className="btn btn-primary w-full">
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
