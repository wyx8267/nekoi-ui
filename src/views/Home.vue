<template>
  <div>
    <div class="topnav">
      <div class="logo"></div>
      <div class="menu"></div>
    </div>
    <div class="banner">
      <h1>Nekoi UI</h1>
      <h2>一个 UI 框架</h2>
      <p class="actions">
        <a>GitHub</a>
        <a>开始</a>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .banner{
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: lightgreen;
    > .actions{
      padding: 8px 0;
      a {
        margin: 0 8px;
        background: #fff;
        display: inline-block;
        $h: 28px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 8px;
      }
    }
  }
</style>