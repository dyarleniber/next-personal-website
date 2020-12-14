import axios from "axios";
import githubConfig from "../config/github";

const api = axios.create({
  baseURL: githubConfig.baseURL,
});

export default api;
