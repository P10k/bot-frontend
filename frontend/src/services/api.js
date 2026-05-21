import axios from "axios";

const API = axios.create({
  baseURL: "https://bot-backend-p660.onrender.com",
});

export default API;