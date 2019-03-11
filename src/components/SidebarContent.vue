<template>
  <div>
    <sidebar-icon-item-pair
      v-for="item in items"
      :key="item.name"
      @click.native="item.action"
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
        {
          name: 'Save',
          icon: '\uD83D\uDCBE',
          route: '/',
          action: this.save
        },
        {
          name: 'Edit',
          icon: '\u270E',
          route: '/',
          action: this.edit
        },
        {
          name: 'Logout',
          icon: '\u2421',
          route: '/',
          action: this.logout
        }
      ]
    }
  },
  methods: {
    logout () {
      console.log('logging out')
      this.$store.dispatch('logout')
      this.$router.history.push('/login')
    },
    save () {
      console.log('saving')
    },
    edit () {
      console.log('editing')
    }
  }
}
</script>

<style lang="css" scoped>
</style>