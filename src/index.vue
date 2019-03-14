<template>
  <div id="app">
    <div class="content">
      <img src="@/assets/yuyu.jpg" alt>
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="区域" name="first">
          <el-input type='text' placeholder="请输入地点名称" class="position-input"></el-input>
          <el-button type="primary">搜索</el-button>
        </el-tab-pane>
        <el-tab-pane label="地铁" name="second">
          <el-input type='text' placeholder="请输入地铁站点" class="position-input"></el-input>
          <el-button type="primary">搜索</el-button>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName2: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  height:100%;
  padding:0;
  margin:0;
}

#app img {
  width: 100px;
  height: 50px;
}
.content{
  height:200px;
  
}
.position-input{
  width:100%;
  max-width: 300px;
}
</style>
