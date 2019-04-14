<template>
  <div>
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
        <el-menu-item :key="index" :index="index+1+''" v-for="(n,index) in HeaderNve">
          <router-link :to="n.url">{{$i18n.locale === 'zh'?n.chName:n.enName}}</router-link>
        </el-menu-item>
      </el-menu>
      <div class="lange">
        <el-button type="text" @click.native="toggleLang">{{$i18n.locale === 'zh'?'EN':'CN'}}</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class Nave extends Vue {
  langText = "";
  activeIndex = "1";
  handleSelect(key: any, keyPath: any) {
    console.log(key, keyPath);
  }

  HeaderNve: any[] = [];

  toggleLang() {
    const lang = this.$i18n.locale === "zh" ? "en" : "zh";
    if (lang === "zh") {
      localStorage.setItem("locale", "zh");
      this.$i18n.locale = "zh";
    } else if (lang === "en") {
      localStorage.setItem("locale", "en");
      this.$i18n.locale = "en";
    }
    //   this.$message({
    //     message: 'Switch Success!',
    //     type: 'success'
    // })
  }

  created() {
    axios.get("/koas/services/getHeaderNveForType/vueProject").then(result => {
      const { data } = result;
      data.sort((a: any, b: any) => a.sortNo - b.sortNo);
      this.HeaderNve = data;
    });
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
  /deep/.el-submenu,
  > .el-menu-item {
    display: inline-block;
    float: none;
  }
  /deep/.el-submenu .el-submenu__title {
    height: 40px;
    line-height: 40px;
  }
}
a {
  text-decoration: none;
}
.lange {
  position: absolute;
  top: 5px;
  right: 8px;
}
</style>
