<template>
  <div class="add-blog">
    <el-form ref="form" :model="blog" label-width="120px" :rules="rules">
      <el-form-item :label="$t('message.blog.title')" prop="title">
        <el-input v-model="blog.title"></el-input>
      </el-form-item>

      <el-form-item :label="$t('message.blog.content')">
        <el-input
          type="textarea"
          :rows="2"
          :placeholder="$t('message.enter.content')"
          v-model="blog.body"
        ></el-input>
      </el-form-item>

      <el-form-item :label="$t('message.type')">
        <el-select v-model="blog.type" :placeholder="$t('message.please.select')">
          <el-option label="Vue.js" :value="1"></el-option>
          <el-option label="Node.js" :value="2"></el-option>
          <el-option label="React.js" :value="3"></el-option>
          <el-option label="Angular4" :value="4"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('message.parent.node')">
        <el-select v-model="blog.pid" :placeholder="$t('message.please.select')">
          <el-option label="测试数据1" :value="1"></el-option>
          <el-option label="测试数据1-1" :value="2"></el-option>
          <el-option label="测试数据2" :value="3"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="日期:">
        <el-date-picker v-model="blog.riqi" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button @click.prevent="post" type="primary">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import StringTool from "@/util/StringTool";
import $axios from "axios";
@Component({
  components: {}
})
export default class App extends Vue {
  blog: any = {
    title: "",
    body: "",
    categories: [],
    type: ""
  };
  authors = ["Maray", "Human"];

  created() {
    console.log(StringTool);
    console.log((StringTool as any).visualWidth("sdfsdf"));
  }
  post() {
    (this.$refs.form as any).validate(valid => {
      if (valid) {
        this.blog.pid = this.$route.params.id || 0;
        $axios
          .post("/koas/services/insertBlog", this.blog)
          .then((result: any) => {
            console.log(result);
          });
      }
    });
  }
  rules = {
    title: [{ required: true, message: "请输入活动名称", trigger: "blur" }]
  };
}
</script>

<style lang="less">
body {
  padding: 0;
  margin: 0;
}
</style>
<style lang="less" scoped>
.add-blog {
  margin-left: 100px;
}

/deep/.el-input__inner,
/deep/.el-input,
/deep/.el-textarea__inner,
/deep/.el-textarea {
  width: 420px;
  // display: inline-block;
}
</style>


