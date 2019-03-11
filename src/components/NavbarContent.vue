<template>
  <div :style="{width: '100%', display: 'flex', justifyContent: 'space-between'}">
    <div class="navbar-items-left">
      <div class="navbar-item">hello</div>
      <div class="navbar-item">hello</div>
      <div class="navbar-item">hello</div>
    </div>
    <div class="navbar-items-right">
      <div class="navbar-item">hello</div>
      <div class="navbar-item">hello</div>
      <div class="navbar-item">hello</div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'NavbarContent',

  data () {
    return {

    }
  }
}
</script>

<style lang="sass" scoped>
@import ../../sass/_variables.sass

.navbar-items
  display: flex
  flex: 1
  justify-content: space-between

.navbar-items-right
  display: flex
  flex: 2
  justify-content: flex-end
  max-width: 200px

.navbar-items-left
  display: flex
  flex: 5
  max-width: 400px

.navbar-item
  flex: 1
  display: flex
  align-items: center
  justify-content: center
</style>