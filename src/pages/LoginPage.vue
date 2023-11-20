<template>
  <div class="q-pa-md" style="max-width: 400px">
    <div class="row justify-center text-h6 text-bold">Login</div>
    <q-form
      @submit.prevent="loginUser"
      @reset.prevent="onReset"
      class="q-gutter-sm"
    >
      <div>
        <q-input filled v-model="username" type="text" label="Your username" />
      </div>
      <div>
        <q-input
          filled
          type="password"
          v-model="password"
          label="Your password"
        />
      </div>

      <div>
        <q-btn label="Log in" type="submit" color="orange" />
        <q-btn label="Register" type="reset" color="red" class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useUserStore } from "../Stores/user";

export default defineComponent({
  name: "LoginPage",
  data() {
    const userStore = useUserStore;
    return {
      username: "",
      password: "",
      userStore,
      user: {},
    };
  },
  methods: {
    loginUser() {
      const userLogin = {
        username: this.username,
        password: this.password,
      };
      this.$api
        .post("/user/login", userLogin)
        .then((res) => {
          this.userStore.user = res.userLogin;
          this.$router.push("/menu");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
</script>
