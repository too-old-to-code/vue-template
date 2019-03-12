<template>
  <nav class="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">

    <slot />
  </nav>
</template>

<style lang="sass" scoped>
@import ../../sass/_variables.sass

.navbar
  height: $navbar-height

.navbar-burger
  margin-left: inherit
  margin-right: auto

</style>