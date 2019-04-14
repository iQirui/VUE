<template>
  <div>
    <el-row class="tac">
      <el-col :span="4">
        <el-menu :default-active="index" active-text-color="#ffd04b">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">
              <router-link tag="span" :to="{name:'historyLink'}">HistoryLink</router-link>
            </span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">
              <router-link tag="span" :to="{name:'contactLink'}">ContactLink</router-link>
            </span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AboutIndex extends Vue {
  index = "1";
  created() {
    this.index = this.$route.name === "contactLink" ? "2" : "1";
    debugger;
  }
}
</script>