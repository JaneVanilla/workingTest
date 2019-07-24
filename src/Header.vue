<template lang="pug">
    header.page-header
      div.page-header__wrapper
        a.page-header__logo(href="#")
              span.page-header__logo-circle
              span Logo

        div.page-header__navigation
          a.page-header__navigation-link.active(href="#")
              span.page-header__navigation-item Homes
              span.page-header__navigation-circle
          a.page-header__navigation-link(href="#")
            span.page-header__navigation-item Premier
            span
          a.page-header__navigation-link(href="#")
            span.page-header__navigation-item About
            span

        button.page-header__logIn-btn
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="sass">

  $logoColor: #FCE144
  $textColor1: #292B3F

  .page-header
    padding: 10px 0
    background: #fff

  .page-header__wrapper
    display: flex
    justify-content: space-between
    max-width: 1160px
    margin: 0 auto

  /*logo*/

  .page-header__logo
    display: flex
    align-items: center
    color: $textColor1
    font-size: 16px
    line-height: 26px
    font-weight: 600

  .page-header__logo-circle
    display: block
    width: 44px
    height: 44px
    margin-right: 10px
    border-radius: 50%
    background: $logoColor

  /*navigation*/
  .page-header__navigation
    display: flex
    align-self: center

  .page-header__navigation-link
    display: flex
    flex-direction: column
    align-items: center
    margin: 0 23px
    text-transform: uppercase
    color: $textColor1
    font-size: 14px
    line-height: 18px
    font-weight: 500

  .page-header__navigation-link:hover
    opacity: 0.7

  .page-header__navigation-link.active
    font-weight: bold

  .page-header__navigation-link.active:hover
    opacity: 1
    cursor: unset

  .page-header__navigation-item
    display: block
    margin-bottom: 8px

  .page-header__navigation-circle
    display: block
    width: 5px
    height: 5px
    background: $textColor1
    border-radius: 50%
  
  /*login btn*/

  .page-header__logIn-btn
    display: block
    width: 45px
    heigth: 45px
    background: url("./assets/avatar.png") no-repeat
    background-size: contain


</style>
