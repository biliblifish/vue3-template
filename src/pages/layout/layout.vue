<template>
  <div>layout</div>
  <p>{{ msg.name }}</p>
  <el-button @click="x">click</el-button>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: '',
  setup() {
    const msg = reactive({ name: 'dsa' });
    const x = () => {
      msg.name = 'bilibili';
    };
    return { msg, x };
  },
};
</script>
