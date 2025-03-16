import axios from "axios";

export default axios.create({
  baseURL: `https://web-production-59cbe.up.railway.app/api/`,
  timeout: 1200000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});