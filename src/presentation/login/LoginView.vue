<template>
  <div>
    <form class="login-form" v-on:submit="validateCredential($event)">
      <label for="login">Login</label>
      <input type="text" id="login" v-model="login">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password">
      <button>Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Pages } from "@/router/Pages";

@Component
export default class LoginView extends Vue {
  private login = "";
  private password = "";

  private validateCredential(event: Event) {
    event.preventDefault();

    if (this.login === "Admin" && this.password === "12345") {
      localStorage.setItem("isUserAuthorized", "true");
      localStorage.setItem("userName", this.login);
      this.$router.push({
        path: Pages.TODO
      });
    } else {
      console.log("validation error");
    }
  }
}
</script>
