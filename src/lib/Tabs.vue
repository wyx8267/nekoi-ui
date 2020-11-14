<template>
  <div class="nekoi-tabs">
    <div class="nekoi-tabs-nav" ref="container">
      <div
        class="nekoi-tabs-nav-item"
        v-for="(t, index) in titles"
        :ref="
          (el) => {
            if (el) selectedItem = el;
          }
        "
        :key="index"
        :class="{ selected: t === selected }"
        @click="select(t)"
      >
        {{ t }}
      </div>
      <div class="nekoi-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="nekoi-tabs-content">
      <component
        class="nekoi-tabs-content-item"
        :class="{ selected: c.props.title === selected }"
        v-for="c in defaults"
        :is="c"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref, watchEffect } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);

    watchEffect(() => {
      const { width, left } = selectedItem.value.getBoundingClientRect();
      indicator.value.style.width = width + "px";
      const { left: containerLeft } = container.value.getBoundingClientRect();
      const indicatorLeft = left - containerLeft;
      indicator.value.style.left = indicatorLeft + "px";
    });

    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });

    const titles = defaults.map((tag) => {
      return tag.props.title;
    });

    const select = (title: string) => {
      context.emit("update:selected", title);
    };

    return { defaults, titles, select, indicator, container, selectedItem };
  },
};
</script>

<style lang="scss" scoped>
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.nekoi-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}
</style>