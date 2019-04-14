<template>
  <div class="single-blog">
    <el-tabs v-model="activeName" type="card" size='mini'>
      <el-tab-pane :label="blog.title" name="first">
        <el-form ref="form" :model="blog" label-width="0px">
          <el-form-item>
            <el-input v-model="blog.title"></el-input>
          </el-form-item>
          <el-input type="textarea" :rows="12" placeholder="请输入内容" v-model="blog.body"></el-input>
          <el-form-item class="button">
            <el-button @click.prevent="post" type="primary">保存</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import $axios from "axios";
enum Color{
  seccusse=1,
  error=0
}
@Component({
  components: {}
})
export default class SingleBlog extends Vue {
  activeName = "first";
  blog: any = {};
  search = "";

  created() {
    debugger;
    $axios
      .get(`/koas/services/getBlogById/${this.$route.params.id}`)
      .then((result: any) => {
        this.blog = result.data;
      });
  }
  post() {
    this.blog.blogId = this.blog.id;
    $axios.post("/koas/services/updateBlog", this.blog).then((result: any) => {
      console.log(result);
    });
  }
}
</script>

<style scoped lang="less">
.button {
  margin-top: 12px;
  /deep/.el-form-item__content {
    text-align: center;
  }
}
</style>



