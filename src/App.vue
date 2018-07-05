<template>
  <div id="app">
    <router-view v-on:loadShow="loadShow" v-on:loadErrShow="loadErrShow"></router-view>
    <Load v-show="loading"></Load>
    <LoadErr v-show="loaderr" v-on:loadErrShow="loadErrShow"></LoadErr>
  </div>
</template>

<script>
  import Load from '../src/components/loading'
  import LoadErr from '../src/components/loadErr'

  export default {
    data () {
      return {
        loading: false,
        loaderr: false
      }
    },
    components: {
      Load, LoadErr
    },
    methods: {
      loadShow (bool) {
        if (bool) {
          this.loading = true
        } else {
          this.loading = false
        }
      },
      loadErrShow (bool) {
        console.log('app')
        if (bool) {
          this.loaderr = true
        } else {
          this.loaderr = false
          this.$router.go(0)
        }
      }
    }
  }
</script>
<style src="../src/assets/css/common.css"></style>
<style>
  html, body {
    margin: 0;
    padding: 0;
    font-size: 10px;
    color: #464646;
    background-color: #000;
  }

  body {
    font-family: Helvetica;
    overflow: scroll;
    overflow-x: auto;
    color: #fff;
  }

  #app {
    padding-bottom: 50px;
  }

  div, p, ul, li, ol, dl, dt, dd, span, img, input, table, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
    list-style-type: none;
  }

  input, button, select {
    outline: 0;
    border: none;
    color: #fff;
  }

  a {
    text-decoration: none;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */
  {
    opacity: 0
  }

  .slide-enter-active {
    transition: all .3s;
    position: relative;
    z-index: -99;
  }

  .slide-leave-active {
    transition: all .3s;
    position: relative;
    z-index: -99;
  }

  .slide-enter, .slide-leave-to {
    transform: translateY(-50px);
    position: relative;
    z-index: -99;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
