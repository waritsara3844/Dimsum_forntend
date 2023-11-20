import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
export const useUserStore = defineStore("user", {
  state: () => ({
    user: useStorage("user", {
      id: 13,
      email: null,
      username: null,
      password: null,
      card_id: 8,
      accessToken: null,
    }),
  }),
});
