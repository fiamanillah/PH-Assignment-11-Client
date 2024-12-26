import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://ph-a11-backend.vercel.app/",
  withCredentials: true, // Allow cookies to be sent with requests
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
