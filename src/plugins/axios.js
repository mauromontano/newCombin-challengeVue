import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8081/",
});

const accessToken = localStorage.getItem("token");

if (accessToken) {
  axiosInstance.defaults.headers.common["Authorization"] =
    "Bearer " + accessToken;
}

export default axiosInstance;
