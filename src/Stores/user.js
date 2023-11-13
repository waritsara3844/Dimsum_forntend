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
      cart_id: null,
    }),
  }),
  methods: {
    getAccessToken: (state) => {
      return state.user.accessToken;
    },
  },
  actions: {
    clearUserData() {
      // Reset the user state to its initial values or clear user data
      this.user = {
        id: null,
        email: null,
        username: null,
        password: null,
        accessToken: null,
        cart_id: null,
      };
    },
  },
});
