<template>
  <div class="carousel-container">
    <carousel :items="1" :nav="true" :loop="true" :dots="true" >
          <carousel-component
            v-for="item in bannerList"
            :todo="item"
            :key="item.id"
            :title="item.title"
            :title2="item.title2"
            :text="item.text"
          >
          </carousel-component>
    </carousel>
  </div>
</template>

<script>
  import carousel from 'vue-owl-carousel'

  export default {
    name: "Carousel",
    components: { carousel },
    data() {
      return {
        bannerList: [
          {id: 0, title:"Blog", title2:"Property Purchase Guide", text: "Nèjhof is een kwalitatieve woonomgeving, die gesitueerd is aan de Steenstraat-Zuid alsmede de Julie Postelsingel. Een rustige woonplek in de luwte van het winkelcentrum van Boxmeer met alle voorzieningen van het centrum op loopafstand. Ook het prachtige natuurgebied de Maasheggen ligt."},
          {id: 1, title:"Blog", title2:"Property Purchase Guide", text: "Nèjhof is een kwalitatieve woonomgeving, die gesitueerd is aan de Steenstraat-Zuid alsmede de Julie Postelsingel. Een rustige woonplek in de luwte van het winkelcentrum van Boxmeer met alle voorzieningen van het centrum op loopafstand. Ook het prachtige natuurgebied de Maasheggen ligt."},
          {id: 2, title:"Blog", title2:"Property Purchase Guide", text: "Nèjhof is een kwalitatieve woonomgeving, die gesitueerd is aan de Steenstraat-Zuid alsmede de Julie Postelsingel. Een rustige woonplek in de luwte van het winkelcentrum van Boxmeer met alle voorzieningen van het centrum op loopafstand. Ook het prachtige natuurgebied de Maasheggen ligt."},
          {id: 3, title:"Blog", title2:"Property Purchase Guide", text: "Nèjhof is een kwalitatieve woonomgeving, die gesitueerd is aan de Steenstraat-Zuid alsmede de Julie Postelsingel. Een rustige woonplek in de luwte van het winkelcentrum van Boxmeer met alle voorzieningen van het centrum op loopafstand. Ook het prachtige natuurgebied de Maasheggen ligt."},
          {id: 4, title:"Blog", title2:"Property Purchase Guide", text: "Nèjhof is een kwalitatieve woonomgeving, die gesitueerd is aan de Steenstraat-Zuid alsmede de Julie Postelsingel. Een rustige woonplek in de luwte van het winkelcentrum van Boxmeer met alle voorzieningen van het centrum op loopafstand. Ook het prachtige natuurgebied de Maasheggen ligt."},
          {id: 5, title:"Blog", title2:"Property Purchase Guide", text: "Nèjhof is een kwalitatieve woonomgeving, die gesitueerd is aan de Steenstraat-Zuid alsmede de Julie Postelsingel. Een rustige woonplek in de luwte van het winkelcentrum van Boxmeer met alle voorzieningen van het centrum op loopafstand. Ook het prachtige natuurgebied de Maasheggen ligt."}
        ]
      }

    }

  }
</script>

<style lang="sass">

  .carousel-container
    position: relative

  .carousel-item
    width: 100%
    height: 596px
    background: url("assets/bannerImg.png")
    background-size: cover

  .carousel-title
    padding-top: 80px
    padding-left: 140px
    margin: 0
    text-align: left
    color: #fff
    font-size: 30px
    font-weight: 500
    letter-spacing: 2px
    text-transform: uppercase

  .carousel-content
    position: absolute
    bottom: 84px
    right: 140px
    width: 376px
    padding: 30px
    text-align: left
    background: #fff
    box-shadow: 0 3px 20px rgba(97, 97, 119, .8)
    border-radius: 3px
    box-sizing: border-box

  .carousel-content__text
    margin: 0
    margin-bottom: 40px
    font-size: 14px
    line-height: 24px
    font-weight: 400
    color: #292B3F

  .carousel-content__link
    position: relative
    padding: 10px 57px 10px 14px
    color: #343434
    font-size: 14px
    font-weight: 500
    background: #FCE144
    border-radius: 30px

  .carousel-content__link:hover
    opacity: 0.8

  .carousel-content__link:after
    position: absolute
    top: 8px
    right: 15px
    content: ""
    width: 20px
    height: 20px
    background: url("assets/arrowBtn.png")

  .carousel-title__bottom
    position: absolute
    left: 140px
    bottom: 107px
    margin: 0
    text-align: left
    font-size: 40px
    font-weight: 500
    color: #fff
    text-transform: uppercase


</style>
