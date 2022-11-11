import axios, { AxiosHeaders } from "axios";

export const instance = axios.create({
  baseURL: "https://api.tibiadata.com/",
  timeout: 5000,
});
