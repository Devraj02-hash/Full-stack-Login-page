import axios from "axios";

// const API_BASE_URL = "http://localhost:8000/api/auth/"; // ✅ Change to deployed URL later
const API_BASE_URL = "https://d5sxvt-8000.csb.app/api/auth/";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Needed if you're using session auth
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
