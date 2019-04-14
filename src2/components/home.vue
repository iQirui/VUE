<template>
  <div>
    <el-container>
      <el-header height="40px">
        <nave-he/>
      </el-header>
      <el-container class="aaa" :style="{height:height}">
        <el-aside width="300px">
          <navigation-tree/>
        </el-aside>
        <el-main>{{URL}}ss</el-main>
      </el-container>
      <el-footer height="20px">版权信息</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import NaveHe from "./nave.vue"; // @ is an alias to /src
import NavigationTree from "./navigationTree.vue"; // @ is an alias to /src
@Component({
  components: {
    NaveHe,
    NavigationTree
  }
})
export default class ss extends Vue {
  URL = process.env.VUE_APP_URL;
  height = `${window.innerHeight - 60}px`;

  beforeCreate() {
    debugger;
    console.log("beforeCreate");
  }
  created() {
    debugger;
    console.log("created");
  }

  beforeMount() {
    debugger;
    console.log("beforeMount");
  }

  mounted() {
    debugger;
    console.log("mounted");
  }
}
</script>
<style scoped lang="less">
.aaa {
  margin-top: 40px;
  margin-bottom: 20px;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
}
.el-header {
  //position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0;
}
.el-footer {
  position: fixed;
  bottom: 0;
  height: 20px;
  line-height: 20px;
  width: 100%;
  font-size: 10px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  padding: 0;
}
</style>
