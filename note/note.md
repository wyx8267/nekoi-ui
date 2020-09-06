### 1. vue3 的 v-model

- 要求：属性名任意，假设为`x`，事件名必须为`update:x`
- 效果：`<Any :value="y" @update:value="y=$event" />` 可以简写为 `<Any v-model:value="y" />`