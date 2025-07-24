import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    Accept: "application/json",
  },
});

let accessToken = "";

axiosInstance.interceptors.request.use(
  (req) => {
    if (accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`;
    }
    return req;
  },
  (err) => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
  (res) => res,
  async (err) => {
    console.log(err);
    const prev = err.config;
    if (err.status === 403 && !prev.sent) {
      prev.sent = true;
      const response = await axios.get("/api/auth/refresh");
      accessToken = response.data.accessToken;
      prev.headers.Authorization = `Bearer ${accessToken}`;
      return axiosInstance(prev);
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;