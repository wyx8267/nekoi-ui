<template>
  <button class="nekoi-button" :class="{[`theme-${theme}`]: theme}">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  props: {
    // theme: {
    //   type: String,
    //   default: "button",
    // },
    theme: String
  },
};
</script>

<style lang="scss" scoped>
div {
  border: 1px solid red;
}
</style>