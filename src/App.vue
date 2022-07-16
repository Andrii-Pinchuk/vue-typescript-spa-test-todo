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
@import 'assets/styles/login-form';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    .router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
