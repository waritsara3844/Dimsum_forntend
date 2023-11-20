import { boot } from "quasar/wrappers";
import axios from "axios";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const RESTAPI = "http://localhost:3000/api";
const api = axios.create({
  baseURL: RESTAPI,
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});

api.interceptors.request.use((config) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTk5MzgxODksImV4cCI6MTY5OTk0NTM4OX0.ifJXpzbgZqEx0xGcJ6jR8oXVrNISl5ahd3FGMrvJPow";

  if (token) {
    config.headers["x-access-token"] = token;
  }

  return config;
});

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API

  app.config.globalProperties.$RESTAPI = RESTAPI;
});

export { api, RESTAPI };
