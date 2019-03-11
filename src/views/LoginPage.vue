<template>
  <div class="outer">
    <div class="middle">
      <div class="inner">
        <div class="login-logo">
          <div :class="{'logged-in': $store.state.isLoggedIn}"></div>
        </div>
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <br>
        <button @click="login">Login</button>
        <router-link to="/signup" class="login-page-link">
          <small>I need to create an account</small>
        </router-link>
        <router-link to="/main">Dashboard</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {

  name: 'login-page',

  data () {
    return {

    }
  },
  methods: {
    ...mapActions(['login'])
  }
}
</script>

<style lang="sass" scoped>
@import ../../sass/_variables.sass

.outer
  display: table
  position: absolute
  width: 100%
  height: 100%

  .middle
    display: table-cell
    vertical-align: middle

    .inner
      margin: 0 auto
      width: 300px
      min-height: 300px
      padding: 50px
      border-radius: 5px
      box-shadow: $primary-box-shadow
      display: flex
      flex-direction: column

      div
        flex: 1


input
  &[name="email"], &[name="password"]
    box-sizing: border-box
    margin-top: 15px
    display: block
    width: 100%
    max-width: 100%
    font-size: 1.3em
    border: none
    box-shadow: $underline-box-shadow
    outline: none

  &::placeholder
    color: #8080803d

.login-logo
  flex: 1
  margin: 0 auto

  div
    border: 1px solid #8080803d
    border-radius: 50%
    width: 75px
    height: 75px
    overflow: hidden
    background-color: red

    &.logged-in
      background-color: green

.login-page-link
  text-decoration: none
  margin: 20px 0

</style>