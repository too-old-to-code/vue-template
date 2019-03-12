<template>
  <div class="name-icon-pair">
    <span class="sidebar-item-name"><slot name="name" /></span>
    <span class="sidebar-item-icon"><slot name="icon" /></span>
  </div>
</template>

<script>
export default {

  name: 'SidebarIconItemPair',

  data () {
    return {

    }
  }
}
</script>

<style lang="sass" scoped>
@import ../../sass/_variables.sass

.sidebar-item-name
  flex: 1
  text-align: right
  line-height: $sidebar-item-height
  font-size: .9em

.sidebar-item-icon
  margin-left: 0
  width: $sidebar-icon-width
  height: $sidebar-item-height
  line-height: $sidebar-item-height
  text-align: center

.name-icon-pair
  display: flex
  background-color: $primary-bg-color

  &:hover
    background-color: $primary-selected-bg-color
</style>