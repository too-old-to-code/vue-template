<template>
  <div>
    <aside class="menu is-size-4">
      <p class="menu-label">
        General
      </p>
      <ul class="menu-list">
        <li @click="items[0].action">
          <sidebar-icon-item-pair>
            <template v-slot:name>{{items[0].name}}</template>
            <template v-slot:icon>{{items[0].icon}}</template>
          </sidebar-icon-item-pair>
        </li>
        <li @click="items[1].action">
          <sidebar-icon-item-pair>
            <template v-slot:name>{{items[1].name}}</template>
            <template v-slot:icon>{{items[1].icon}}</template>
          </sidebar-icon-item-pair>
        </li>
      </ul>
      <p class="menu-label">
        Administration
      </p>
      <ul class="menu-list">
        <li @click="items[2].action">
          <sidebar-icon-item-pair>
            <template v-slot:name>{{items[2].name}}</template>
            <template v-slot:icon>{{items[2].icon}}</template>
          </sidebar-icon-item-pair>
        </li>
      </ul>
      <p class="menu-label">
        My Products
      </p>
      <ul class="menu-list">
        <li @click="items[2].action">
          <sidebar-icon-item-pair>
            <template v-slot:name>Reporting</template>
            <template v-slot:icon>{{items[2].icon}}</template>
          </sidebar-icon-item-pair>
        </li>
        <li @click="items[2].action">
          <sidebar-icon-item-pair>
            <template v-slot:name>Websites</template>
            <template v-slot:icon>{{items[2].icon}}</template>
          </sidebar-icon-item-pair>
        </li>
        <li @click="items[2].action">
          <sidebar-icon-item-pair>
            <template v-slot:name>Emails</template>
            <template v-slot:icon>{{items[2].icon}}</template>
          </sidebar-icon-item-pair>
        </li>
      </ul>
</aside>
    <!-- <sidebar-icon-item-pair
      v-for="item in items"
      :key="item.name"
      @click.native="item.action"
    >
      <template v-slot:name>{{item.name}}</template>
      <template v-slot:icon>{{item.icon}}</template>
    </sidebar-icon-item-pair> -->

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
          name: 'Dashboard',
          icon: '\uD83D\uDCBE',
          route: '/',
          action: this.save
        },
        {
          name: 'Business Details',
          icon: '\u270E',
          route: '/',
          action: this.edit
        },
        {
          name: 'Modifications',
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