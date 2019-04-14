<template>
  <div
    v-show="showContextmenu"
    class="blog-contextmenu"
    :style="{ left: contextmenuOp.x+'px', top: contextmenuOp.y + 'px' }"
  >
    <ul>
      <li @click.stop="deleteNode">删除</li>
      <li @click.stop="addNode">添加博客</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import axios from "axios";
import StringTool from "@/util/StringTool";
import TreeData from "@/util/TreeData";

@Component({
  components: {}
})
export default class App extends Vue {
  @Prop({ type: Object, default: { x: 0, y: 0 } }) contextmenuOp;
  @Prop({ type: Object }) currentNode;

  showContextmenu = true;
  created() {
    console.log(this.currentNode);
  }

  pushId(nodes, ids) {
    if (!nodes) {
      return;
    }
    nodes.forEach(element => {
      ids.push(element.id);
      this.pushId(element.children, ids);
    });
  }
  async deleteNode() {
    const ids = [];
    ids.push(this.currentNode.id);
    this.pushId(this.currentNode.children, ids);
    this.showContextmenu = false;
    await axios.post("/koas/services/deleteBlogs", ids).then((result: any) => {
      this.$emit("clickLi");
    });
  }
  addNode() {
    this.$router.push(`/myBlog/addBlog/${this.currentNode.id}`);
  }
}
</script>

<style scoped lang="less">
.blog-contextmenu {
  position: fixed;
  top: 0;
  z-index: 2;
  background: #fff;
  border-radius: 3px;
  border: 1px solid#ddd;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    border-bottom: 1px solid #ddd;
    list-style: none;
    padding: 8px;
    min-width: 200px;
    cursor: pointer;
  }
}
</style>


