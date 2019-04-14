<template>
  <div class="show-blog">
    <Contextmenu
      v-if="contextmenu"
      :contextmenuOp="contextmenuOp"
      :currentNode="currentNode"
      @clickLi="refreshTree"
    />
    <el-row class="tac">
      <el-col class="title" :span="4" v-loading="loading" element-loading-spinner="el-icon-loading">
        <el-input class="search" v-model="search" placeholder="搜索"></el-input>
        <div class="title2">
          <el-tree
            ref="tree"
            :data="blogs"
            :props="defaultProps"
            show-checkbox
            node-key="id"
            :expand-on-click-node="false"
            :default-expanded-keys="[2]"
            @node-click="nodeClick"
            :check-on-click-node="true"
            :render-content="renderContent"
            :default-checked-keys="[3,5]"
            @node-contextmenu="nodeContextmenu"
            @check-change="checkChange"
            :filter-node-method="filterNode"
          ></el-tree>
        </div>
      </el-col>
      <el-col :span="20" class="right">
        <router-view v-if="routerAlive"/>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { namespace } from "vuex-class";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import axios from "axios";
import StringTool from "@/util/StringTool";
import TreeData from "@/util/TreeData";
import Contextmenu from "./Contextmenu.vue";
const blogStoreModule: any = namespace("blogStore");

@Component({
  components: {
    Contextmenu
  },
  //局部自定义过滤器
  filters: {
    qrToUppercase(value: any) {
      return value.toUpperCase();
    },
    qrSnippet(value: any) {
      return `${value.slice(0, 20)}...`;
    }
  },
  computed: {},
  directives: {
    "qr-rainbow": {
      bind(el: any, binding: any, vnode: any) {}
    }
  }
})
export default class App extends Vue {
  @blogStoreModule.State contextmenu;
  @blogStoreModule.Action upDataContextmenu;

  loading = true;
  routerAlive = true;
  blogs = [];
  search = "";
  contextmenuOp: any = {};
  currentNode: any;
  defaultProps = {
    children: "children",
    label: "title"
  };
  created() {
    this.refreshTree();
  }

  refreshTree() {
    debugger;
    axios.get("/koas/services/getBlogs").then((result: any) => {
      debugger;
      TreeData.bindTreeData(result.data, "id", "pid");
      this.blogs = result.data;
      this.loading = false;
    });
  }
  nodeContextmenu(a, b, c, d, e) {
    this.currentNode = b;
    this.upDataContextmenu(false);
    this.contextmenuOp.x = a.clientX;
    this.contextmenuOp.y = a.clientY;
    this.$nextTick(() => {
      this.upDataContextmenu(true);
    });
  }
  nodeClick(a, b, c, d, e) {
    // this.upDataContextmenu(false);
    // this.$router.push(`/myBlog/showBlog/${a.id}`);
    // this.routerRefresh();
  }
  checkChange(a, b, c) {
    debugger;
  }

  renderContent(h, { node, data, store }) {
    return h(
      "div",
      {
        style: {
          width: "100%"
        },
        //这里添加hover事件
        on: {
          dblclick: a => {
            this.upDataContextmenu(false);
            this.$router.push(`/myBlog/showBlog/${data.id}`);
            this.routerRefresh();
          }
        }
      },
      [h("span", {}, node.label)]
    );
  }
  routerRefresh() {
    this.routerAlive = false;
    this.$nextTick(() => {
      this.routerAlive = true;
    });
  }

  filterNode(value, data) {
    if (!value) return true;
    return data.title.indexOf(value) !== -1;
  }

  @Watch("search")
  onSearch(val) {
    // const tree: any = this.$refs.tree;
    const { tree } = this.$refs;
    (tree as any).filter(val);
  }

  @Watch("$route")
  ss() {
    console.log(11);
  }
}
</script>

<style lang="less">
body {
  padding: 0;
  margin: 0;
}
</style>
<style lang="less" scoped>
.search /deep/input {
  border-radius: 4px 4px 0 0;
}
.right {
  padding: 0 10px;
}
.tac {
  position: relative;
  height: 100%;
}
.show-blog {
  text-align: left;
  padding: 10px;
  height: calc(100vh - 90px);
  width: 100%;
  box-sizing: border-box;
}
.title {
  height: 100%;
  overflow: hidden;
}
.title2 {
  overflow: auto;
  height: calc(100% - 34px);
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 0 0 4px 4px;
  padding: 0 8px;
}
p {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0;
  cursor: pointer;
}
</style>


