<template>
  <div>
    <div>解析Vue文件了哟~</div>
    <p>{{name}}</p>
    <el-button @click="handleClick">click</el-button>
  </div>
</template>

<script setup>
let name = 'Hello world'
function handleClick() {
  console.log(1)
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
