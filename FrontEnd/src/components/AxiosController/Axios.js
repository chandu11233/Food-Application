import axios from "axios";

const Axios = axios.create({
  baseURL: "http://20.3.131.150:8081",
});
export default Axios;
