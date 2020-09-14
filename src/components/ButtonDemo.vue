<template>
  <div>Button Demo</div>
  <h1>示例一</h1>
  <div>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h1>示例二</h1>
  <div>
    <Button size="big">大大大</Button>
    <Button>中中中</Button>
    <Button size="small">小小小</Button>
  </div>
  <div>
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link">中中中</Button>
    <Button theme="link" size="small">小小小</Button>
  </div>
  <div>
    <Button theme="text" size="big">大大大</Button>
    <Button theme="text">中中中</Button>
    <Button theme="text" size="small">小小小</Button>
  </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: {Button},
  setup(){
    const onClick = ()=>{
      console.log('h1');
    }
    return {onClick}
  }
}
</script>