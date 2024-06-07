import axios from "axios";

const Axios = axios.create({
  baseURL: "http://40.80.160.216:8080",
});
export default Axios;
