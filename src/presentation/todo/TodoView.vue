<template>
  <div>
    <h3>Thank you {{ userName }}!</h3>
    <p>Todo list</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TodoView extends Vue {
  private userName = localStorage.getItem("userName");
}
</script>
