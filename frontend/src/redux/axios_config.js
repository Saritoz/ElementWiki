import axios from "axios";

export const instanstAxios = () => {
  const newInstance = axios.create({
    baseURL: "https://element-wiki-be.vercel.app",
    timeout: 10000,
  });

  return newInstance;
};
