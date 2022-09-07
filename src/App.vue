<template>
  <div>
    <span class="toutiao toutiao-gengduo"></span>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <div class="box"></div>
  </div>
</template>

<script>
// git log 查看commit记录
// git add . 提交到暂存区
// git status 查看当前仓库的状态
// git commit - m ""
// -feat:新增特性
// -style: 样式的修改
// -fixed: debug

// rem适配
// 1. 让rem动起来
// yarn add amfe-flexible
// 2. 盒子使用rem
export default {}
</script>

<style scoped>
.box {
  width: 2rem;
  height: 2rem;
  background-color: gold;
}
</style>
