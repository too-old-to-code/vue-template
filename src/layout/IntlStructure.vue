<template>
  <div
    :style="{overflow: 'hidden'}"
    :class="{ 'sidebar-closed': !isSidebarVisible, 'mini': isMiniSidebar }"
  >
    <intl-navbar>
      <span
        class="sidebar-toggle-button"
        @click="handleSidebarVisibilityChange"
      >
        ☰
      </span>
      <navbar-content />
    </intl-navbar>

    <intl-sidebar>
      <sidebar-content />
      <div
        class="sidebar-size-toggle"
        @click="handleSidebarSizeChange"
      >«</div>
    </intl-sidebar>

    <main-section>
      <router-view />
    </main-section>
  </div>
</template>

<script>
import IntlNavbar from './IntlNavbar'
import IntlSidebar from './IntlSidebar'
import SidebarContent from '../components/SidebarContent'
import MainSection from './MainSection'
import NavbarContent from '../components/NavbarContent'

export default {

  name: 'structure',
  components: {
    IntlNavbar,
    IntlSidebar,
    SidebarContent,
    NavbarContent,
    MainSection
  },

  data () {
    return {
      isMiniSidebar: false,
      isSidebarVisible: true
    }
  },

  methods: {
    handleSidebarSizeChange () {
      this.isMiniSidebar = !this.isMiniSidebar
    },
    handleSidebarVisibilityChange () {
      this.isSidebarVisible = !this.isSidebarVisible
    }
  }
}
</script>

<style lang="sass" scoped>
@import ../../sass/_variables.sass

.sidebar-toggle-button
  display: flex
  align-items: center
  justify-content: center
  font-size: 1.5em
  margin-left: 10px
</style>