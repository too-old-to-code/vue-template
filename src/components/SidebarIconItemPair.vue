<template>
  <div :style="{display: 'flex'}">
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
  margin-top: 10px
  margin-right: 10px
  padding-right: 10px
  background-color: #ececec
  text-align: right
  line-height: $sidebar-icon-width

.sidebar-item-icon
  margin-top: 10px
  margin-left: 0
  background-color: #ececec
  width: $sidebar-icon-width
  height: $sidebar-icon-width
  line-height: $sidebar-icon-width
  text-align: center
</style>