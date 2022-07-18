<template>
  <div class="login-page">
    <header class="page-header"></header>
    <div class="logo-block">
      <img src="../../assets/images/logos/logo.svg" alt="Citi company logo" width="103" height="66"
           class="logo-block__logo">
    </div>
    <main>
      <div class="login-page__main-title-container">
        <h1 class="login-page__main-title">Welcome to Business Analytics Online</h1>
      </div>
      <form class="login-form" v-on:submit="validateCredential($event)">
        <label for="login">Login</label>
        <input type="text" id="login" v-model="login">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password">
        <button>Login</button>
      </form>
    </main>
    <footer>
    </footer>
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
