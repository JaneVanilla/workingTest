<template lang="pug">
  div.main-content
      div.main-content__top
        div.top-line
          span(v-for="datas in myJson") {{ datas.length }}
          span.top-line__offers  offers
          span.top-line__sort-block
            span Sort by
        span

          multiselect(
              v-model="value"
              :options="options"
              :searchable="false"
              :close-on-select="false"
              :show-labels="false"
              placeholder="Relevance")
      app-cards
</template>


<script>

  import json from '../objects.json'
  import Multiselect from 'vue-multiselect'
  export default {
    name: 'MainContent',
    components: {
      Multiselect,
    },
    methods: {
    },
    data() {
      return {
        selected: 'Relevance',
        myJson: json,
        value: 'Relevance',
        options: ['Relevance', 'Price', 'Country name', 'City name', 'Metrage'],
        page: 4
      }
    }
  }
</script>



<style lang="sass" >
  $textColor1: #292B3F

  body
    background: #F8F8F8

  .main-content__top
    display: flex

  .top-line
    position: relative
    top: 10px
    color: $textColor1
    text-align: left

  .top-line__offers
    position: relative
    padding-right: 29px

  .top-line__offers:after
    position: absolute
    right: 14px
    top: 1px
    content: ''
    width: 1px
    height: 18px
    background: rgba(0, 0, 0, 0.25)


  .top-line__select
    position: absolute
    min-width: 179px
    top: 36px
    left: 70px
    
  .top-line__selected
    display: inline-block
    padding: 9px 20px
    margin-left: 12px
    min-width: 179px
    text-align: left
    font-size: 14px
    font-weight: 400
    line-height: 17px
    background: #fff
    border: 1px solid rgba(0, 0, 0, 0.14)
    border-radius: 30px
    box-sizing: border-box

    /*select*/

  .multiselect
    display: inline-block
    width: 179px
    height: unset
    margin-left: 12px
  .multiselect--active
    border-radius: 30px
    border-bottom-right-radius: 30px
    border-bottom-left-radius: 30px

  .multiselect__tags
    min-height: 36px
    border-radius: 30px!important
    margin-bottom: 7px
    box-sizing: border-box

  .multiselect__option--highlight
    color: #616177
    background: #F8F8F8
  .multiselect__option--selected.multiselect__option--highlight
    color: #616177
    background: #fff
    font-weight: 400

  .multiselect__element
    max-height: 35px
    cursor: pointer

  .multiselect__content-wrapper
    overflow-y: hidden
    border: none!important
    border-radius: 10px
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.12)

  .multiselect__option--selected
    font-weight: 400

  /*Catalog*/
  .catalog__container
      display: flex
      flex-direction: column

</style>
