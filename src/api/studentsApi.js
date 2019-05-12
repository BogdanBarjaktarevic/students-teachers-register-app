import axios from "axios";

// Default config options
const defaultOptions = {
  baseURL:
    "http://lo.klett.rs:10080",
  headers: {
    "Content-Type": "application/json",
    withCredentials: true,
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "POST, GET, DELETE, OPTIONS"
  }
};

// Create instance
let instance = axios.create(defaultOptions);

// Set the AUTH token for any request
instance.interceptors.request.use(function(config) {
  const token = localStorage.getItem("token");
  config.headers["Authorization"] = token ? `Bearer ${token}` : "";
  return config;
});

export default instance;
