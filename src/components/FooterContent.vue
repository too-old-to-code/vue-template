<template>
  <div class="footer-content has-background-grey-dark has-text-light">
    <span>Info</span>
    <span>Copyright</span>
    <span>Social media</span>
  </div>
</template>

<script>
export default {

  name: 'FooterContent',

  data () {
    return {

    }
  }
}
</script>

<style lang="sass" scoped>
  .footer-content
    display: flex
    width: 100%
    height: 100%
    justify-content: space-around
    align-items: center
</style>