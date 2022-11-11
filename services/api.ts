import axios, { AxiosHeaders } from "axios";

export const instance = axios.create({
  baseURL: "https://api.tibiadata.com/",
  timeout: 5000,
  headers: {
    "X-Custom-Header": "foobar",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Authorization",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Content-Type": "application/json;charset=UTF-8",
  },
});
