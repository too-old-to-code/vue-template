<template>
  <div
    :style="{overflow: 'hidden'}"
    :class="{ 'sidebar-closed': !isSidebarVisible, 'mini': isMiniSidebar }"
  >
    <intl-navbar>
      <div class="navbar-brand">
        <div class="navbar-item webcom-logo" :class="{'is-visible': !isMiniSidebar}">
          <img src="../../public/logo.png" />
        </div>
        <a
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': isSidebarVisible }"
          aria-label="menu"
          aria-expanded="false"
          @click="handleSidebarVisibilityChange"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <div class="navbar-item is-tab">
          user
        </div>
      </div>
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
      <intl-footer>
        <footer-content />
      </intl-footer>
    </main-section>
  </div>
</template>

<script>
import IntlNavbar from './IntlNavbar'
import IntlSidebar from './IntlSidebar'
import SidebarContent from '../components/SidebarContent'
import FooterContent from '../components/FooterContent'
import MainSection from './MainSection'
import NavbarContent from '../components/NavbarContent'
import IntlFooter from './IntlFooter'

export default {

  name: 'structure',
  components: {
    IntlNavbar,
    IntlSidebar,
    IntlFooter,
    SidebarContent,
    NavbarContent,
    FooterContent,
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

<style lang="scss" scoped>
@import '../../sass/_variables.scss';

.navbar-brand, .navbar-burger {
  min-height: $navbar-height;
  min-width: 50px;
}

.navbar-item, .navbar-burger {
  color: $primary-text-color;
}

.webcom-logo {
  background-color: $secondary-bg-color;
  width: $sidebar-icon-width;
  transition: width $animation-fast;

  &.is-visible {
    width: $sidebar-width;

    img {
      max-height: 2em;
      margin: auto;
    }
  }
}

</style>