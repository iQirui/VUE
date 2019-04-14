<template>
  <div>
    <el-container class="aaa" :style="{height:height}">
      <el-aside width="300px">
        <navigation-tree/>
      </el-aside>
      <el-main>
        <span @click="clickSpan">11</span>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Getter, Mutation, Action, namespace } from "vuex-class";
import axios from "axios";
import NavigationTree from "./navigationTree.vue"; // @ is an alias to /src

const someModule: any = namespace("loginVUEX");
@Component({
  components: {
    NavigationTree
  }
})
export default class Home extends Vue {
  // @someModule.State((state: any) => state.menulist) menulist: any;
  @someModule.State menulist;
  @someModule.Action saveMenuListFN;
  @(Getter as any)  author;
  @(Action as any) reducePrice;


  URL = process.env.VUE_APP_URL;
  height = `${window.innerHeight - 62}px`;

  beforeCreate() {
    console.log("beforeCreate");
  }
  created() {
    console.log(this.menulist);
    this.reducePrice();
    this.saveMenuListFN([2, 5, 7, 6]);
    console.log(this.author);

    axios.get("koas/services/getNavigation").then(result => {
      debugger;
      console.log(result.data);
    });
    fetch("koas/services/getI18n")
      .then(result => result.json())
      .then(result => {
        console.log(result);
      });
  }

  // beforeMount() {}

  // mounted() {}
  // beforeDestroy() {}
  // destroyed() {}

  clickSpan() {
    (this as any).$store.dispatch("reducePrice");
  }
}
</script>
<style scoped lang="less">
.aaa {
  margin-bottom: 20px;
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
