// import axios from "axios";// axios.js or globally
import axios from "axios";
axios.defaults.withCredentials = true;

const axiosbase = axios.create({
  baseURL: "https://movie-server-ym5u.onrender.com/api",
  // baseURL: "http://localhost:8000/api",
  withCredentials: true,
});

export default axiosbase;
