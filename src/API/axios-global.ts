import axios from "axios";

const baseUrl = axios.create({
  baseURL: " http://localhost:5005",
});
export default baseUrl;
