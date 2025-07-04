import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_DEVELOPMENT_API,
});

const useAxios = () => {
  axiosInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (res) => res,
    (error) => {
      return Promise.reject(error);
    }
  );

  return { axiosInstance };
};

export default useAxios;
