import axios from "axios";
import devConfig from "../config/dev";

const api = axios.create({
  baseURL: devConfig.baseURL,
});

export default api;
