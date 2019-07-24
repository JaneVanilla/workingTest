<template>
  <div id="app">
    <app-header></app-header>
    <section class="page-wrapper">
      <div class="page-container">
        <app-mainContent></app-mainContent>
        <app-sidebar></app-sidebar>
      </div>
    </section>
    <section class="blog">
      <app-carousel></app-carousel>
    </section>
  </div>
</template>

<script>
import json from '../objects.json'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      myJson: json,
    }
  },
}
</script>

<style lang="sass">

  /*common styles*/
body
  margin: 0
  padding-bottom: 140px
  font-family: 'Montserrat', sans-serif

  #app
  text-align: center
  color: #2c3e50


  h1, h2
    font-weight: normal


  img
      max-width: 100%

  ul
    list-style-type: none
    padding: 0


    li
      display: inline-block

a
  text-decoration: none

a:hover
  text-decoration: none

button
  padding: 0
  border: none
  outline: none
button:hover
  cursor: pointer
  opacity: 0.8
.sidebar p
  margin: 0

.page-wrapper
  padding-top: 40px
  background: #F8F8F8

.page-container
  display: flex
  max-width: 1160px
  margin: 0 auto

.main-content
  flex-grow: 1


/**Slider common styles**/

.owl-theme .owl-nav
  margin-top: 0!important

.owl-carousel .owl-nav .owl-prev,
.owl-carousel .owl-nav .owl-next
  position: absolute!important
  top: 0
  width: 60px
  height: 596px
  max-height: 596px
  margin: 0!important
  font-size: 0
  border-radius: none!important
  -webkit-box-sizing: border-box
  -moz-box-sizing: border-box
  box-sizing: border-box

.owl-carousel .owl-nav .owl-prev

  background: url('assets/arrowsGrey.png') no-repeat center, rgba(0,0,0,.12)

.owl-carousel .owl-nav .owl-next
  transform: rotate(180deg)
  background: url('assets/arrowsGrey.png') no-repeat center, rgba(0,0,0,.12)

.owl-carousel .owl-nav .owl-prev:hover
  transform: rotate(180deg)
  background: url('assets/arrowsWhite.png') no-repeat center, rgba(0,0,0,.12)

.owl-carousel .owl-nav .owl-next:hover
  transform: rotate(360deg)
  background: url('assets/arrowsWhite.png') no-repeat center, rgba(0,0,0,.12)


.owl-carousel .owl-nav .owl-next
      right: 0!important

.owl-carousel .owl-nav .owl-prev
      left: 0!important

.owl-theme .owl-dots
    position: absolute
    left: 138px
    bottom: 84px

    .owl-dot span
      margin: 5px 2px!important
      width: 44px!important
      height: 3px!important
      background: #FFF!important
      -webkit-border-radius: 3px
      -moz-border-radius: 3px
      border-radius: 3px

    .owl-dot.active  span
      background: #FCE144!important

</style>
