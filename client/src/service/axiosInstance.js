import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
});

let accessToken = "";

axiosInstance.interceptors.request.use((config) => {
  if (!config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const prev = error.config;
    if (error.response.status === 403 && !prev.sent) {
      const response = await axios.post("/api/auth/refresh");
      accessToken = response.data.accessToken;
      prev.headers.Authorization = `Bearer ${accessToken}`;
      prev.sent = true;
      return axiosInstance(prev);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
