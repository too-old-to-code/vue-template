<template>
  <div class="sidebar-wrapper">
    <div class="sidebar-spacer"></div>
    <aside class="intl-sidebar">

      <div class="sidebar-spacer"></div>
      <slot />
    </aside>
  </div>
</template>

<style lang="sass" scoped>
@import ../../sass/_variables.sass

.sidebar-wrapper
  width: $sidebar-width
  position: fixed
  top: 0
  bottom: 0
  left: 0
  padding-bottom: $navbar-height - 4px
  transition: left $animation-fast
  z-index: 20

  .sidebar-spacer
    width: 100%
    margin-top: $navbar-height


  .intl-sidebar
    background-color: $primary-bg-color
    width: 100%
    height: 100%
    overflow-y: scroll
    box-sizing: border-box
    color: $primary-text-color

.mini .sidebar-wrapper
  left: $sidebar-width * -1 + $sidebar-icon-width

.sidebar-closed .sidebar-wrapper
  left: $sidebar-width * -1

.sidebar-size-toggle
  position: absolute
  bottom: 0px
  right: 0px
  width: $sidebar-icon-width
  height: $sidebar-icon-width
  text-align: center
  line-height: $sidebar-icon-width
  transition: transform $animation-fast

.mini .sidebar-size-toggle
  transform: rotate(180deg)

</style>