<template>
  <el-card>
    <p>{{name}}</p>
    <el-button @click="handleClick">click</el-button>
    <el-input v-model="proxyName"></el-input>
    <el-input v-model="reactiveName.name"></el-input>
    <!-- readOnly不支持双向改变 -->
    <el-input v-model="readOnlyName.name"></el-input>
    <div>
      <p v-if="refBool">My name is Davy</p>
      <el-button @click="handleClick">click</el-button>
    </div>
  </el-card>
  <div contenteditable>{{ reactiveName.name }}</div>
</template>

<script setup>
import {
  reactive, readonly, ref, watch,
} from 'vue';
import { getInfo } from './api/index';

const name = 'Hello world';
const proxyName = ref('');
const reactiveName = reactive({ name: '' });
const readOnlyName = readonly({ name: '' });
const refBool = ref(false);

const handleClick = () => {
  getInfo();
};
watch(name, (val) => {
  console.log(val);
});
watch(proxyName, (val) => {
  console.log(proxyName);
  console.log(val);
});

// 监听响应式对象时，强制深度遍历，启动深层观察，deep： false无效，对象层次深的话性能开销大
watch(reactiveName, (val) => {
  console.log(val);
}, { deep: false });

watch(readOnlyName, (val) => {
  console.log(val);
});
console.log(process.env.CDN_PATH);
// function handleClick() {
//   name = 'Click 事件';
//   console.log(name);
// }
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
