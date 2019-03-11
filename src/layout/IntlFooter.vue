<template>
  <footer class="intl-footer">
    <slot />
  </footer>
</template>

<script>
export default {

  name: 'IntlFooter',

  data () {
    return {

    }
  }
}
</script>

<style lang="sass" scoped>
@import ../../sass/_variables.sass

.intl-footer
  height: $footer-height
  position: fixed
  bottom: 0
  right: 0
  width: 100%
  background-color: grey
  z-index: 5
  padding-left: $sidebar-width
  transition: padding $animation-fast

.mini
  .intl-footer
    padding-left: $sidebar-icon-width

.sidebar-closed
  .intl-footer
    padding-left: 0

</style>