<template>
  <div>Dialog Demo</div>
  <h1>示例一</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:content>
      <p>Content</p>
    </template>
    <template v-slot:title>
      <strong>加粗标题</strong>
    </template>
  </Dialog>
  <h1>示例二</h1>
  <Button @click="showDialog">showDialog</Button>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
import { ref } from "vue";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {
      return false;
    };
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "hello",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return { x, toggle, f1, f2, showDialog };
  },
};
</script>