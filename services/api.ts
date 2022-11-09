import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.tibiadata.com/",
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});
