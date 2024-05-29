import axios from "axios";

const Axios = axios.create({
  baseURL: "http://40.76.111.161:8080",
  headers: {
    "Content-type": "application/json",
  },
});
export default Axios;
