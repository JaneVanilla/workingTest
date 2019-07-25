<template >
  <div class="sidebar ">
    <a href="#" class="sidebar__group-button"><span>Group into projects</span></a>
    <div class="sidebar__container">
      <div class="sidebar__block-container">
        <h2 class="sidebar__form-title">Need Expert Advise?</h2>
        <div class="sidebar__form">
          <input class="sidebar__form-input" type="text" value="" placeholder="Name">
          <input class="sidebar__form-input" type="text" value="" placeholder="Phone number">
          <input class="sidebar__form-button" type="submit" value="Send query">
        </div>
      </div>
      <div class="sidebar__block-container">
        <div class="sidebar__filter-currency">
          <h2 class="sidebar__filter-title">Currency</h2>
          <div class="sidebar__currency-block">
            <button class="sidebar__currency-button sidebar__currency-button--left">RUB</button>
            <button class="sidebar__currency-button sidebar__currency-button--center">USD</button>
            <button class="sidebar__currency-button sidebar__currency-button--right active">EUR</button>
          </div>
        </div>
        <div class="sidebar__filter-options">
          <h2 class="sidebar__filter-title">Options</h2>
          <div class="slider__form">
              <div class="input-block">
                <input type="checkbox" id="concierge" name="Concierge">
                <label for="concierge">Concierge</label>
              </div>
              <div class="input-block">
                <input type="checkbox" id="house" name="house">
                <label for="house">Energy Efficient House</label>
              </div>
              <div class="input-block">
                <input type="checkbox" id="historyBuilding" name="historyBuilding">
                <label for="historyBuilding">Historical Building</label>
              </div>
              <div class="input-block">
                <input type="checkbox" id="smartHouse" name="smartHouse" checked>
                <label for="smartHouse">Smart House</label>
              </div>
          </div>
        </div>
        <div class="sidebar__filter-price">
          <h2 class="sidebar__filter-title">Price</h2>
          <div class="sidebar__filter-container">
            <span class="sidebar__filter-yellow"></span>
            <span class="sidebar__filter-circle"></span>
            <span class="sidebar__filter-grey"></span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'Sidebar',
    data: {
      items: ['Item One', 'Item Two', 'Item Three', 'Item Four', 'Item Five', 'Item Six', 'Item Seven', 'Item Eight', 'Item Nine', 'Item Ten', 'Item Eleven', 'Item Twelve', 'Item Thirteen'],
      paginate: ['items']
    },

  }
</script>

<style lang="sass">
  @import '~pretty-checkbox/src/pretty-checkbox.scss'


  $pretty--class-name: pretty

  $pretty--color-success: #FCE144

  $primary-color: #333

  body
    color: $primary-color

  .sidebar
    position: relative
    width: 302px
    margin-left: 16px
    clear: both

  .sidebar__group-button
    float: right
    display: flex
    align-items: center
    padding: 9px 22px
    font-size: 14px
    line-height: 22px
    color: #292B3F
    max-height: 36px
    background: #fff
    border: 1px solid rgba(0, 0, 0, 0.14)
    border-radius: 30px
    box-sizing: border-box

  .sidebar__container
    padding-top: 36px



  .sidebar__block-container
    padding: 30px
    margin-top: 10px
    margin-bottom: 16px
    background: white
    border-radius: 5px
    border: 1px solid rgba(0, 0, 0, 0.14)

  /**Sidebar Form**/

  .sidebar__form-title
    margin-top: 0
    margin-bottom: 30px
    font-size: 18px
    line-height: 36px
    font-weight: 600

  .sidebar__form-input, .sidebar__form-button
    width: 100%
    padding: 13px 26px
    font-size: 14px
    line-height: 16px
    border-radius: 30px
    outline: none
    box-sizing: border-box

  .sidebar__form-input
    margin-bottom: 10px
    font-family: 'Montserrat', sans-serif;
    font-weight: 400
    border: 1px solid rgba(0, 0, 0, 0.14)

  .sidebar__form-button
    font-weight: 500
    color: #292B3F
    background: #FCE144
    border: none
    font-family: 'Montserrat', sans-serif
    cursor: pointer

  .sidebar__form-button:hover
    background: rgba(252,225,68, 0.8)

  input::placeholder
    font-size: 14px
    line-height: 16px
    font-weight: 400
    color: #616177
    font-family: 'Montserrat', sans-serif

  /**Sidebar Filters**/

  .sidebar__filter-title
    margin-top: 0
    margin-bottom: 15px
    font-weight: 500
    text-align: left
    color: #292B3F
    font-size: 16px
    line-height: 18px

  .sidebar__currency-block
    display: flex
    justify-content: center
    margin-bottom: 30px

  .sidebar__currency-button
    padding: 14.5px 24px
    margin-left: -1px
    font-size: 14px
    color: #292B3F
    font-weight: 500
    background: #fff
    border: 1px solid #DBDBDB
    cursor: pointer


  .sidebar__currency-button:hover
    border: 1px solid #FCE144
    background: rgba(252,225,68, 0.2)
    z-index: 2

  .sidebar__currency-button.active
    border: 1px solid #FCE144
    background: #FCE144

  .sidebar__currency-button--left
    border-top-left-radius: 23px
    border-bottom-left-radius: 23px
    z-index: 1

  .sidebar__currency-button--right
    border-top-right-radius: 23px
    border-bottom-right-radius: 23px

  .sidebar__currency-button--center
    border-right: 1px solid white
    border-left: 1px solid white

  .sidebar__currency-button--center:hover .sidebar__currency-button--right
    border-left: 0


  /**Checkbox Styles**/

  .slider__form
    margin-bottom: 30px
    text-align: left
    
  .input-block
    position: relative
    display: flex
    align-items: center
    margin-bottom: 10px
    cursor: pointer

  .input-block label
    position: relative
    padding-left: 30.8px
    font-size: 14px
    line-height: 22px
    font-weight: 400
    color: #292B3F
    cursor: pointer

  .input-block label:after
    position: absolute
    top: 0
    left: 0
    content: ""
    display: block
    width: 20px
    height: 20px
    border: 1px solid #DBDBDB
    cursor: pointer
    border-radius: 2px



  .input-block input[type="checkbox" i]
    position: absolute
    width: 20px
    height: 20px
    margin: 0
    margin-right: 10.8px
    opacity: 0
    z-index: 2
    cursor: pointer

  .input-block input[type=checkbox]:checked ~ label:after
    background:  url("assets/checkbox.png") no-repeat center, #FCE144
    border: 1px solid #FCE144
    cursor: pointer

  .checkbox-item
    text-align: left

  /**Price filter**/

  .sidebar__filter-container
    display: flex
    align-items: center
    position: relative
    width: 242px
    padding-bottom: 58px

  .sidebar__filter-container:before,
  .sidebar__filter-container:after
    position: absolute
    content: ""
    width: 4px
    height: 12px
    -webkit-border-radius: 2px
    -moz-border-radius: 2px
    border-radius: 2px
    border: 1px solid #616177
    -webkit-box-sizing: border-box
    -moz-box-sizing: border-box
    box-sizing: border-box
    z-index: 5

  .sidebar__filter-container:before
    left: 0
    background: #FCE144

  .sidebar__filter-container:after
    right: 0
    background: #fff

  .sidebar__filter-yellow,
  .sidebar__filter-grey
    display: inline-block
    height: 2px

  .sidebar__filter-yellow
    position: relative
    width: 94px
    background: #FCE144

  .sidebar__filter-yellow:after,
  .sidebar__filter-grey:after
    position: absolute

    font-size: 12px
    line-height: 17px

  .sidebar__filter-yellow:after
    content: "0 $"
    top: 10px
    left: 0

  .sidebar__filter-grey:after
    content: "2 000 000 $"
    top: 20px
    right: 8px

  .sidebar__filter-grey
    display: inline-block
    width: 144px
    height: 2px
    background: #616177

  .sidebar__filter-circle
    display: inline-block
    width: 16px
    height: 16px
    background: #fff
    box-shadow: 0px 0px 4px rgba(0,0,0,.2)
    -webkit-border-radius: 50%
    -moz-border-radius: 50%
    border-radius: 50%
    cursor: pointer

  .sidebar__filter-circle:hover
    box-shadow: 0px 0px 4px rgba(0,0,0,.6)


</style>
