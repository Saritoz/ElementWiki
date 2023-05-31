import axios from "axios";

export const instanstAxios = () => {
  return axios.create({
    baseURL: "https://element-wiki-be.vercel.app/",
    timeout: 10000,
  });
};
