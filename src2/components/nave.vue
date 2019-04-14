<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#F2F6FC"
      text-color="#545c64"
      active-text-color="#409EFF"
      @select="handleSelect"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Nave extends Vue {
  activeIndex = "1";
  handleSelect(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
}
</script>

<style scoped lang="less">
.el-menu-item,
.el-submenu {
  height: 40px;
  line-height: 40px;
}
.el-menu--horizontal {
  /deep/.el-submenu,>.el-menu-item{
        display: inline-block;
        float: none;
  }
  /deep/.el-submenu .el-submenu__title {
    height: 40px;
    line-height: 40px;
  }
}
</style>
