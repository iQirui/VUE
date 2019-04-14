<template>
  <div>
    <AboutIndex/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AboutIndex from "@/components/about/index.vue"; // @ is an alias to /src

@Component({
  components: {
    AboutIndex
  }
})
export default class About extends Vue {}
</script>
