import React from "react";
import { getAuthUser } from "../services/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const username = getAuthUser();

  // Redirect to login if not logged in
  if (!username) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card w-full max-w-lg bg-white shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Welcome, {username}!
        </h2>
        <p className="text-gray-600 text-center">
          You are now logged in to your dashboard. 🎉
        </p>
        <div className="mt-6 text-center">
          <button
            className="btn btn-outline btn-error"
            onClick={() => {
              localStorage.removeItem("username");
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
