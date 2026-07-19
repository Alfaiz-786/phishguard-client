import axios from "axios";

const API = axios.create({
  baseURL: "https://phishguard-server-ro9d.onrender.com/api",
});

export default API;
