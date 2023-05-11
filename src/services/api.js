import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.3.2:3000",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  },
});

export default api;
