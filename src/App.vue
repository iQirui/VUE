<template>
  <div id="app" @click="clickApp">
    <Header class="center"/>
    <router-view/>
    <el-footer height="20px">版权信息</el-footer>
  </div>
</template>

<script lang="ts">
import { namespace } from "vuex-class";
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue"; // @ is an alias to /src
const blogStoreModule: any = namespace("blogStore");
@Component({
  components: {
    Header
  }
})
export default class App extends Vue {
  @blogStoreModule.Action upDataContextmenu;
  clickApp(){
    this.upDataContextmenu(false);
  }
}
</script>

<style lang="less">
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .el-tabs__item{
    height: 26px;
    line-height: 26px;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>

<style lang="less" scoped>
.center{
  text-align: center;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
}
.el-footer {
  position: fixed;
  bottom: 0;
  height: 20px;
  line-height: 20px;
  width: 100%;
  font-size: 10px;
}
</style>


