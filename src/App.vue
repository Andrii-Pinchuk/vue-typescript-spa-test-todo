<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Pages } from "@/router/Pages";

@Component
export default class App extends Vue {
  protected mounted() {
    this.checkUserAuthorization();
  }

  private checkUserAuthorization() {
    const isUserAuthorized = localStorage.getItem("isUserAuthorized");
    if (isUserAuthorized) {
      this.$router.push({
        path: Pages.TODO
      });
    } else {
      this.$router.push({
        path: Pages.LOGIN
      });
    }
  }
}
</script>

<style lang="scss">
@import 'assets/styles/common';
@import 'assets/styles/button';
@import 'assets/styles/login-page';
@import 'assets/styles/login-form';
@import 'assets/styles/todo-page';
@import 'assets/styles/todo-list';
@import 'assets/styles/page-header';
@import 'assets/styles/article-list';
@import 'assets/styles/product-description';
@import 'assets/styles/page-footer';
@import 'assets/styles/error-information';
</style>
