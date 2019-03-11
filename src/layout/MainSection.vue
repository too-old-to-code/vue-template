<template>
  <main class="main-section">
    <slot />
  </main>
</template>

<script>
export default {

  name: 'main-section',

  data () {
    return {

    }
  }
}
</script>

<style lang="sass" scoped>
@import ../../sass/_variables.sass

.main-section
  margin-top: $navbar-height
  margin-left: $sidebar-width
  padding: $main-section-padding
  padding-bottom: $footer-height + $main-section-padding
  transition: margin $animation-fast
  position: relative
  min-height: calc(100vh - 60px)

.mini .main-section
  margin-left: $sidebar-icon-width

.sidebar-closed .main-section
  margin-left: 0

</style>
<!-- <style type="css" scoped>
.main-section {
  min-height: calc(100vh - 60px);
}
</style> -->