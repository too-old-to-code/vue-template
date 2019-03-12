<template>
  <div id="app" class="has-navbar-fixed-top">
    <router-view/>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

#app {
  height: 100%;
}
</style>
<style lang="sass">
  @import ../sass/mystyles.scss
  @import ../sass/_variables.sass

  html
    font-size: $root-font-size

    body
      font-size: 1.6em
</style>
