import axios from "axios";

const Axios = axios.create({
  baseURL: "http://51.8.113.58:8080",
});
export default Axios;
