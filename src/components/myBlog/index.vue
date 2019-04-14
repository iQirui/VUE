<template>
  <div id="myBlog">
   <!--  <AbbBlog/> -->

    <el-menu
      default-active="0"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#fff"
      text-color="#545c64"
      active-text-color="#409EFF"
    >
      <el-menu-item index="0">
     <router-link :to="{name:'addBlogLink'}">添加博客</router-link>
      </el-menu-item>
      <el-menu-item index="1">
     <router-link :to="{name:'showBlogLink'}">博客总览</router-link>
      </el-menu-item>
    </el-menu>
     <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {
  }
})
export default class App extends Vue {}
</script>

<style lang="less">
body {
  padding: 0;
  margin: 0;
}
</style>

<style scoped lang="less">
.el-menu-item {
  height: 30px;
  line-height: 30px;
}
a{
  text-decoration: none;
}
</style>


