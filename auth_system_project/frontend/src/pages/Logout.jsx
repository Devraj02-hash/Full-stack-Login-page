import React, { useEffect } from "react";
import { removeAuthUser } from "../services/auth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    removeAuthUser();
    navigate("/login");
  }, []);

  return <p>Logging out...</p>;
};

export default Logout;
