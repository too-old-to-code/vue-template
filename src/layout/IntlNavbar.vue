<template>
  <nav class="intl-navbar">
    <slot />
  </nav>
</template>

<style lang="sass" scoped>
@import ../../sass/_variables.sass

.intl-navbar
  height: $navbar-height
  padding: 0 10px
  position: fixed
  width: 100%
  z-index: 50
  display: flex
  align-items: space-around
  box-sizing: border-box
  background-color: #fff

  &:after
    content: ""
    box-shadow: inset 0px 4px 8px -3px rgba(30, 30, 30, .06)
    height: 5px
    position: absolute
    left: 0
    right: 0
    bottom: -5px
</style>