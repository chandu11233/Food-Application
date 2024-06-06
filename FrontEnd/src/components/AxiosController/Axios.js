import axios from "axios";

const Axios = axios.create({
  baseURL: "http://48.216.213.216:8080",
});
export default Axios;
