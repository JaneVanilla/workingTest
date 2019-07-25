<template lang="pug">
  div.card


    catalog-item(
    v-for="(datas) in computedUsers"
    :key="datas.id"
    :title="datas.name"
    :address_link="datas.address_link"
    :address="datas.address"
    :metrage="datas.info[0].value"
    :bedrooms="datas.info[1].value"
    :buthrooms="datas.info[2].value"
    :price="datas.price"
    :gallery="datas.gallery[0]"
    )

    ul.pagination-list
      li.pagination-item(v-for="n in numOfPages" )
        a(href="" @click.prevent="setPage(n)") {{n}}


</template>

<script>
  const data = [{"options":[{"value":false,"name":"concierge"},{"value":true,"name":"energy efficient house"},{"value":false,"name":"historical building"},{"value":true,"name":"smart house"}],"price":383000,"info":[{"value":161,"name":"metrage"},{"value":4,"name":"bedrooms"},{"value":3,"name":"bathrooms"}],"gallery":["https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_6.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_10.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_7.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_4.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_2.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_8.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_9.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_5.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_1.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_3.jpg"],"city":"Аликанте","country":"Испания","address_link":"https://maps.google.com/?q=Spain%2C+Alicante%2C+03520%2C+Alicante%2C+Spain","address":"Испания, Аликанте, 03520","name":"Свежый таунхаус около Аликанте","id":1},{"options":[{"value":true,"name":"concierge"},{"value":true,"name":"energy efficient house"},{"value":false,"name":"historical building"},{"value":true,"name":"smart house"}],"price":420000,"info":[{"value":122,"name":"metrage"},{"value":1,"name":"bedrooms"},{"value":0,"name":"bathrooms"}],"gallery":["https://westarp.io/uploads/model_files/ESP/C2/R36/P125/Images/ESP_C2_R36_P125_5.jpg","https://westarp.io/uploads/model_files/ESP/C2/R36/P125/Images/ESP_C2_R36_P125_6.jpg","https://westarp.io/uploads/model_files/ESP/C2/R36/P125/Images/ESP_C2_R36_P125_2.jpg","https://westarp.io/uploads/model_files/ESP/C2/R36/P125/Images/ESP_C2_R36_P125_3.jpg","https://westarp.io/uploads/model_files/ESP/C2/R36/P125/Images/ESP_C2_R36_P125_8.jpg","https://westarp.io/uploads/model_files/ESP/C2/R36/P125/Images/ESP_C2_R36_P125_9.jpg","https://westarp.io/uploads/model_files/ESP/C2/R36/P125/Images/ESP_C2_R36_P125_10.jpg","https://westarp.io/uploads/model_files/ESP/C2/R36/P125/Images/ESP_C2_R36_P125_1.jpg","https://westarp.io/uploads/model_files/ESP/C2/R36/P125/Images/ESP_C2_R36_P125_4.jpg","https://westarp.io/uploads/model_files/ESP/C2/R36/P125/Images/ESP_C2_R36_P125_7.jpg"],"city":"Аликанте","country":"Испания","address_link":"https://maps.google.com/?q=Spain%2C+Alicante%2C+Calle+Gijon%2C+03170+Cdad.+Quesada%2C+Alicante%2C+Spain","address":"Испания, Аликанте, 03170","name":"Красивый жилой дом на побережье Коста Бланка","id":2},{"options":[{"value":false,"name":"concierge"},{"value":true,"name":"energy efficient house"},{"value":false,"name":"historical building"},{"value":false,"name":"smart house"}],"price":392573,"info":[{"value":122,"name":"metrage"},{"value":1,"name":"bedrooms"},{"value":0,"name":"bathrooms"}],"gallery":["https://westarp.io/uploads/model_files/CZ/C1/R15/P20/Images/CZ_C1_R15_P20_1.jpg","https://westarp.io/uploads/model_files/CZ/C1/R15/P20/Images/CZ_C1_R15_P20_3.jpg","https://westarp.io/uploads/model_files/CZ/C1/R15/P20/Images/CZ_C1_R15_P20_2.jpg","https://westarp.io/uploads/model_files/CZ/C1/R15/P20/Images/CZ_C1_R15_P20_6.jpg","https://westarp.io/uploads/model_files/CZ/C1/R15/P20/Images/CZ_C1_R15_P20_4.jpg"],"city":"Прага","country":"Чехия","address_link":"https://maps.google.com/?q=Czechia%2C+Prague%2C+Prague+4+-+Mod%C5%99any%2C+%C4%8Cs.+Exilu+street","address":"Чехия, Прага, 4 Modřany, Čs. Exilu","name":"Уютный лофт в новостройке в Праге","id":3},{"options":[{"value":false,"name":"concierge"},{"value":true,"name":"energy efficient house"},{"value":false,"name":"historical building"},{"value":true,"name":"smart house"}],"price":134610,"info":[{"value":33,"name":"metrage"},{"value":1,"name":"bedrooms"},{"value":1,"name":"bathrooms"}],"gallery":["https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_2.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_6.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_9.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_1.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_4.jpg"],"city":"Прага","country":"Чехия","address_link":"https://maps.google.com/?q=Czechia%2C+Prague%2C+Naskov%C3%A9+1177%2F40%2C+Praha+5-Ko%C5%A1%C3%AD%C5%99e%2C+150+00","address":"Чехия, Прага, 1177/40, Praha 5-Košíře","name":"Просторная квартира с одной спальней","id":4},{"options":[{"value":false,"name":"concierge"},{"value":true,"name":"energy efficient house"},{"value":false,"name":"historical building"},{"value":true,"name":"smart house"}],"price":134610,"info":[{"value":29,"name":"metrage"},{"value":1,"name":"bedrooms"},{"value":1,"name":"bathrooms"}],"gallery":["https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_8.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_1.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_9.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_2.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_4.jpg"],"city":"Прага","country":"Чехия","address_link":"https://maps.google.com/?q=Czechia%2C+Prague%2C+Naskov%C3%A9+1177%2F40%2C+Praha+5-Ko%C5%A1%C3%AD%C5%99e%2C+150+00","address":"Чехия, Прага, 1177/40, Praha 5-Košíře","name":"Солнечная студия в новом жилом комплексе в Праге","id":5},{"options":[{"value":true,"name":"concierge"},{"value":false,"name":"energy efficient house"},{"value":true,"name":"historical building"},{"value":false,"name":"smart house"}],"price":139340,"info":[{"value":35,"name":"metrage"},{"value":1,"name":"bedrooms"},{"value":1,"name":"bathrooms"}],"gallery":["https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_5.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_1.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_9.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_2.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_4.jpg"],"city":"Прага","country":"Чехия","address_link":"https://maps.google.com/?q=Czechia%2C+Prague%2C+Naskov%C3%A9+1177%2F40%2C+Praha+5-Ko%C5%A1%C3%AD%C5%99e%2C+150+00","address":"Чехия, Прага, 1177/40, Praha 5-Košíře","name":"Свежая однокомнатная квартира в новом жилом комплексе","id":6},{"options":[{"value":false,"name":"concierge"},{"value":false,"name":"energy efficient house"},{"value":false,"name":"historical building"},{"value":false,"name":"smart house"}],"price":136875,"info":[{"value":32,"name":"metrage"},{"value":1,"name":"bedrooms"},{"value":1,"name":"bathrooms"}],"gallery":["https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_4.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_1.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_9.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_2.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_8.jpg"],"city":"Прага","country":"Чехия","address_link":"https://maps.google.com/?q=Czechia%2C+Prague%2C+Naskov%C3%A9+1177%2F40%2C+Praha+5-Ko%C5%A1%C3%AD%C5%99e%2C+150+00","address":"Чехия, Прага, 1177/40, Praha 5-Košíře","name":"Благоустроенная квартира с одной спальней","id":7},{"options":[{"value":false,"name":"concierge"},{"value":true,"name":"energy efficient house"},{"value":false,"name":"historical building"},{"value":true,"name":"smart house"}],"price":375000,"info":[{"value":119,"name":"metrage"},{"value":2,"name":"bedrooms"},{"value":1,"name":"bathrooms"}],"gallery":["https://westarp.io/uploads/model_files/Portugal/C1/R1/P1/Images/POR_C1_R1_P1_9.jpg","https://westarp.io/uploads/model_files/Portugal/C1/R1/P1/Images/POR_C1_R1_P1_3.jpg","https://westarp.io/uploads/model_files/Portugal/C1/R1/P1/Images/POR_C1_R1_P1_6.jpg","https://westarp.io/uploads/model_files/Portugal/C1/R1/P1/Images/POR_C1_R1_P1_1.jpg","https://westarp.io/uploads/model_files/Portugal/C1/R1/P1/Images/POR_C1_R1_P1_8.jpg"],"city":"Алгарве","country":"Португалия","address_link":"https://maps.google.com/?q=Portugal%2C+Algarve%2C+8125-507+Quarteira%2C+Portugal","address":"Португалия, Алгарве, 8125-507 Quarteira","name":"Красивая квартира с двумя спальнями с террасой","id":8},{"options":[{"value":false,"name":"concierge"},{"value":true,"name":"energy efficient house"},{"value":false,"name":"historical building"},{"value":true,"name":"smart house"}],"price":367175,"info":[{"value":115,"name":"metrage"},{"value":3,"name":"bedrooms"},{"value":2,"name":"bathrooms"}],"gallery":["https://westarp.io/uploads/model_files/Portugal/C1/R1/P1/Images/POR_C1_R1_P1_8.jpg","https://westarp.io/uploads/model_files/Portugal/C1/R1/P1/Images/POR_C1_R1_P1_7.jpg","https://westarp.io/uploads/model_files/Portugal/C1/R1/P1/Images/POR_C1_R1_P1_6.jpg","https://westarp.io/uploads/model_files/Portugal/C1/R1/P1/Images/POR_C1_R1_P1_1.jpg","https://westarp.io/uploads/model_files/Portugal/C1/R1/P1/Images/POR_C1_R1_P1_3.jpg"],"city":"Алгарве","country":"Португалия","address_link":"https://maps.google.com/?q=Portugal%2C+Algarve%2C+8125-507+Quarteira%2C+Portugal","address":"Португалия, Алгарве, 8125-507 Quarteira","name":"Красивая трехкомнатная квартира с отличным видом","id":9},{"options":[{"value":true,"name":"concierge"},{"value":true,"name":"energy efficient house"},{"value":false,"name":"historical building"},{"value":true,"name":"smart house"}],"price":352000,"info":[{"value":104,"name":"metrage"},{"value":3,"name":"bedrooms"},{"value":2,"name":"bathrooms"}],"gallery":["https://westarp.io/uploads/model_files/Portugal/C1/R1/P1/Images/POR_C1_R1_P1_7.jpg","https://westarp.io/uploads/model_files/Portugal/C1/R1/P1/Images/POR_C1_R1_P1_8.jpg","https://westarp.io/uploads/model_files/Portugal/C1/R1/P1/Images/POR_C1_R1_P1_1.jpg","https://westarp.io/uploads/model_files/Portugal/C1/R1/P1/Images/POR_C1_R1_P1_6.jpg","https://westarp.io/uploads/model_files/Portugal/C1/R1/P1/Images/POR_C1_R1_P1_3.jpg"],"city":"Алгарве","country":"Португалия","address_link":"https://maps.google.com/?q=Portugal%2C+Algarve%2C+8125-507+Quarteira%2C+Portugal","address":"Португалия, Алгарве, 8125-507 Quarteira","name":"Светлая трехкомнатная квартира в жилом комплексе Gardens Vilamoura","id":10},{"options":[{"value":false,"name":"concierge"},{"value":true,"name":"energy efficient house"},{"value":false,"name":"historical building"},{"value":true,"name":"smart house"}],"price":313000,"info":[{"value":178,"name":"metrage"},{"value":4,"name":"bedrooms"},{"value":2,"name":"bathrooms"}],"gallery":["https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_6.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_10.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_7.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_4.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_2.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_8.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_9.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_5.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_1.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_3.jpg"],"city":"Аликанте","country":"Испания","address_link":"https://maps.google.com/?q=Spain%2C+Alicante%2C+03520%2C+Alicante%2C+Spain","address":"Испания, Аликанте, 03520","name":"Свежый таунхаус около Аликанте","id":11},{"options":[{"value":false,"name":"concierge"},{"value":false,"name":"energy efficient house"},{"value":false,"name":"historical building"},{"value":true,"name":"smart house"}],"price":184620,"info":[{"value":42,"name":"metrage"},{"value":1,"name":"bedrooms"},{"value":1,"name":"bathrooms"}],"gallery":["https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_6.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_1.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_9.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_1.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_4.jpg"],"city":"Прага","country":"Чехия","address_link":"https://maps.google.com/?q=Czechia%2C+Prague%2C+Naskov%C3%A9+1177%2F40%2C+Praha+5-Ko%C5%A1%C3%AD%C5%99e%2C+150+00","address":"Чехия, Прага, 1177/40, Praha 5-Košíře","name":"Просторная квартира с одной спальней","id":12},{"options":[{"value":true,"name":"concierge"},{"value":false,"name":"energy efficient house"},{"value":true,"name":"historical building"},{"value":false,"name":"smart house"}],"price":139340,"info":[{"value":45,"name":"metrage"},{"value":1,"name":"bedrooms"},{"value":1,"name":"bathrooms"}],"gallery":["https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_1.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_5.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_2.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_9.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_4.jpg"],"city":"Прага","country":"Чехия","address_link":"https://maps.google.com/?q=Czechia%2C+Prague%2C+Naskov%C3%A9+1177%2F40%2C+Praha+5-Ko%C5%A1%C3%AD%C5%99e%2C+150+00","address":"Чехия, Прага, 1177/40, Praha 5-Košíře","name":"Свежая однокомнатная квартира в новом жилом комплексе","id":13},{"options":[{"value":false,"name":"concierge"},{"value":true,"name":"energy efficient house"},{"value":false,"name":"historical building"},{"value":true,"name":"smart house"}],"price":312000,"info":[{"value":153,"name":"metrage"},{"value":4,"name":"bedrooms"},{"value":3,"name":"bathrooms"}],"gallery":["https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_10.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_6.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_4.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_7.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_2.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_8.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_9.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_5.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_1.jpg","https://westarp.io/uploads/model_files/ESP/C2/R31/P83/Images/ESP_C2_R31_P83_3.jpg"],"city":"Аликанте","country":"Испания","address_link":"https://maps.google.com/?q=Spain%2C+Alicante%2C+03520%2C+Alicante%2C+Spain","address":"Испания, Аликанте, 03520","name":"Свежый таунхаус около Аликанте","id":14},{"options":[{"value":false,"name":"concierge"},{"value":true,"name":"energy efficient house"},{"value":false,"name":"historical building"},{"value":true,"name":"smart house"}],"price":375000,"info":[{"value":119,"name":"metrage"},{"value":2,"name":"bedrooms"},{"value":1,"name":"bathrooms"}],"gallery":["https://westarp.io/uploads/model_files/Portugal/C1/R1/P1/Images/POR_C1_R1_P1_9.jpg","https://westarp.io/uploads/model_files/Portugal/C1/R1/P1/Images/POR_C1_R1_P1_3.jpg","https://westarp.io/uploads/model_files/Portugal/C1/R1/P1/Images/POR_C1_R1_P1_6.jpg","https://westarp.io/uploads/model_files/Portugal/C1/R1/P1/Images/POR_C1_R1_P1_1.jpg","https://westarp.io/uploads/model_files/Portugal/C1/R1/P1/Images/POR_C1_R1_P1_8.jpg"],"city":"Алгарве","country":"Португалия","address_link":"https://maps.google.com/?q=Portugal%2C+Algarve%2C+8125-507+Quarteira%2C+Portugal","address":"Португалия, Алгарве, 8125-507 Quarteira","name":"Красивая квартира с двумя спальнями с террасой","id":15},{"options":[{"value":false,"name":"concierge"},{"value":false,"name":"energy efficient house"},{"value":true,"name":"historical building"},{"value":false,"name":"smart house"}],"price":169340,"info":[{"value":36,"name":"metrage"},{"value":1,"name":"bedrooms"},{"value":1,"name":"bathrooms"}],"gallery":["https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_1.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_5.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_2.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_4.jpg","https://westarp.io/uploads/model_files/CZ/C1/R1/P1/Images/CZ_C1_R1_P1_9.jpg"],"city":"Прага","country":"Чехия","address_link":"https://maps.google.com/?q=Czechia%2C+Prague%2C+Naskov%C3%A9+1177%2F40%2C+Praha+5-Ko%C5%A1%C3%AD%C5%99e%2C+150+00","address":"Чехия, Прага, 1177/40, Praha 5-Košíře","name":"Свежая однокомнатная квартира в новом жилом комплексе","id":16}];

  import json from '../objects.json'

  export default {
    name: "Cards",
    data () {
      return {
        myJson: json,
        currentPage: 1,
        perPage: 4,
        isActive: false,
      }
    },
    methods: {
      setPage(n) {
        this.currentPage = n;

      },
    },
    computed: {
      offset() {
        return ((this.currentPage - 1) * this.perPage);
      },
      limit() {
        return (this.offset + this.perPage);
      },
      numOfPages() {
        return Math.ceil(data.length / this.perPage);
      },
      computedUsers() {
        if (this.offset > data.length) {
          this.currentPage = this.numOfPages;
        }
        return data.slice(this.offset, this.limit);
      }
    }
  };

</script>

<style lang="sass">
  .card
    display: flex
    flex-direction: column
    text-align: left

    .card__container
      display: flex
      flex-grow: 1
      margin-bottom: 16px
      background: #fff
      border-radius: 5px
      border: 1px solid rgba(0, 0, 0, 0.14)
      cursor: pointer

    .card__container:hover
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.12)

    .card__title
      margin-top: 20px
      margin-bottom: 8px
      font-size: 16px
      line-height: 19px
      font-weight: bold
    .card__like
      position: absolute
      top: 0
      right: 0

    .card__image
      position: relative
      width: 240px
      height: 175px
      margin-right: 20px

    .card__image img
      width: 240px
      height: 100%
      max-width: 240px;
      border-top-left-radius: 5px
      border-bottom-left-radius: 5px

    .card__items
      display: inline-block
      position: relative
      padding-left: 22px
      margin-right: 20px
      margin-bottom: 10px
      font-size: 12px
      line-height: 15px

    .card__items:before
      position: absolute
      bottom: 0
      left: 0
      display: block
      content: ''
      width: 16px
      height: 16px
      background: url("assets/Path584.png")

    .card__items:first-child:before
      bottom: 1px
      background: url("assets/Path584.png")
    .card__items:nth-child(2):before
      background: url("assets/Path585.png")
    .card__items:nth-child(3):before
      background: url("assets/Path583.png")

    .card__address
      display: block
      position: relative
      padding-left: 12px
      padding-bottom: 21px
      margin-bottom: 20px
      font-size: 12px
      font-weight: 500
      color: #616177
      text-decoration: underline
      cursor: pointer

    .card__address:after
      position: absolute
      content: ''
      top: 2px
      left: 0
      width: 7px
      height: 9px
      background: url("assets/gps.png")

    .card__address:before
      position: absolute
      content: ''
      bottom: 0
      left: 0
      width: calc(100% - 20px)
      height: 1px
      background: rgba(0, 0, 0, 0.14)

    .card__address:hover
      color: #616177
      opacity: 0.7

    .card__price
      font-weight: bold
      font-size: 16px

    .card__like
      position: absolute
      display: flex
      justify-content: center
      align-items: center
      width: 35px
      height: 35px
      margin: 8px
      background: url('assets/likeWhite.png') no-repeat center, #fff
      border-radius: 50%

    .card__container:nth-child(4) .card__like
      background: url('assets/likeRed.png') no-repeat center, #fff

    .card__like:hover
      background: url('assets/likeGrey.png') no-repeat center, #fff!important


    /**Pagination**/

    .pagination-list
      display: flex
      margin-top: 14px
      margin-bottom: 75px

    .pagination-item
      display: flex
      justify-content: center
      align-items: center
      width: 22px
      margin: 0 5px
      border-bottom: 1px solid #F8F8F8
      cursor: pointer

    .pagination-item:first-child
      margin: 0

    .pagination-item.active
      border-bottom: 1px solid pink

    .pagination-item:hover
      border-bottom: 1px solid #292B3F

    .pagination-item a
      display: block
      width: 22px
      text-align: center
      font-size: 16px
      line-height: 26px
      color: #292B3F


</style>
