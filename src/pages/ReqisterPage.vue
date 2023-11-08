<template>
  <div class="q-pa-md" style="max-width: 400px">
    <div class="row justify-center text-h6 text-bold">Register</div>
    <q-form @submit.prevent="onSubmit" @reset.prevent="onReset" class="q-mt-sm">
      <div>
        <q-input
          filled
          v-model="email"
          type="text"
          label="Please type your Email"
          lazy-rules
          :rules="[emailValidate, requiredValidate]"
        />
      </div>
      <div>
        <q-input
          filled
          type="text"
          v-model="username"
          label="Please type your username"
          lazy-rules
          :rules="[requiredValidate]"
        />
      </div>
      <div>
        <q-input
          filled
          v-model="password"
          :type="isPwd ? 'password' : 'text'"
          label="Please type your password"
          lazy-rules
          :rules="[
            (val) =>
              (val && val.length >= 6) || 'Must be 6 characters at least.',
          ]"
        >
          <template v-slot:append>
            <q-icon
              @click="isPwd = !isPwd"
              :name="isPwd ? 'visibility_off' : 'visibility'"
            />
          </template>
        </q-input>
      </div>
      <div>
        <q-btn label="Submit" type="submit" color="orange" />
        <q-btn label="Reset" type="reset" color="red" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { emailValidate, requiredValidate } from "../utils/validations";

export default defineComponent({
  name: "ReqisterPage",
  data() {
    return {
      email: null,
      username: null,
      password: null,
      isPwd: true,
    };
  },
  methods: {
    emailValidate,
    requiredValidate,
    onSubmit() {
      const newUser = {
        email: this.email,
        username: this.username,
        password: this.password,
      };
      this.$api
        .post("/user/signup", newUser)
        .then((res) => {
          console.log(res);
          this.$router.push("/login");
        })
        .catch((err) => {
          err;
        });
    },
    onReset() {
      (this.username = null), (this.email = null), (this.password = null);
    },
  },
});
</script>
