<template>
  <div>
    Tabs Demo
  </div>
  <h1>示例1</h1>
  <Tabs v-model:selected="selectedTab">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import { ref } from 'vue';
export default {
  components: {
    Tabs, Tab
  },
  setup(){
    const selectedTab = ref('导航1');
    return {selectedTab}
  }
}
</script>