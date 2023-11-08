import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
export const useUserStore = defineStore("user", {
  state: () => ({
    user: useStorage("user", {
      id: null,
      email: null,
      username: null,
      password: null,
      accessToken: null,
    }),
  }),
});
