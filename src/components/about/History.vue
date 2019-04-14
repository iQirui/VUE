<template>
  <div>
    History
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class History extends Vue {

 beforeRouteEnter() {
    console.log("beforeRouteEnter");
  }
  beforeRouteLeave() {
    console.log("beforeRouteLeave");
  }

}
</script>