<template>
  <div>
    <sidebar-icon-item-pair
      v-for="item in items"
      :key="item.name"
    >
      <template v-slot:name>{{item.name}}</template>
      <template v-slot:icon>{{item.icon}}</template>
    </sidebar-icon-item-pair>
  </div>
</template>

<script>
import SidebarIconItemPair from './SidebarIconItemPair.vue'
export default {

  name: 'sidebar-content',
  components: {
    SidebarIconItemPair
  },
  data () {
    return {
      items: [
        { name: 'Save', icon: '\uD83D\uDCBE' },
        { name: 'Edit', icon: '\u270E' },
        { name: 'Delete', icon: '\u2421' }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>