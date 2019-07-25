import Vue from 'vue'
import VueRouter from 'vue-router'
import App123 from './App.vue'
import Header from './Header.vue'
import MainContent from './MainContent.vue'
import Cards from './Cards.vue'
import Sidebar from './Sidebar.vue'
import vSelect from 'vselect-component'
import Carousel from './Carousel.vue'
import PrettyCheckbox from 'pretty-checkbox-vue'


Vue.use(PrettyCheckbox);
Vue.use(vSelect)
Vue.use(VueRouter)
Vue.component('vue-multiselect', window.VueMultiselect.default)
Vue.component ('app-header', Header);
Vue.component ('app-mainContent', MainContent);
Vue.component ('app-cards', Cards);
Vue.component ('app-sidebar', Sidebar);
Vue.component ('app-carousel', Carousel);
Vue.component('paginate', VuejsPaginate)


Vue.component ('catalog-item', {
  props:['title','address_link', 'address','metrage','bedrooms', 'buthrooms', 'price', 'gallery', 'src'],
  template:
            "<div class='card__container'> " +
                "<div class='card__image'><img :src='gallery' alt=''>" +
                  " <button class='card__like'></button></div>" +
               "<div class='card__content'>" +
                  "<h3 class='card__title'>{{title}}</h3>" +
                  "<a :href='address_link' class='card__address'>{{address}}</a> " +
                  "<div class='card__facilities'> " +
                      "<span class='card__items'> {{metrage}} m<sup>2</sup></span> " +
                      "<span class='card__items'>{{bedrooms}} bedrooms</span> " +
                      "<span class='card__items'>{{buthrooms}} bathrooms</span> " +
                  "</div> " +
                  "<div class='card__price'>&#8364; {{price}}</div>" +
              "</div>" +
            "</div>"
});



Vue.component('carousel-component', {
  template:
    '      <div class="carousel-item">\n' +
    '        <h3 class="carousel-title">{{title}}</h3>\n' +
    '        <div class="carousel-content">\n' +
    '          <p class="carousel-content__text">{{text}}</p>\n' +
    '          <a class="carousel-content__link" href="#"><span>Read article</span></a>\n' +
    '        </div><h4 class="carousel-title__bottom">{{title2}}</h4>\n' +
    '      </div>\n',
  props: ['text','title', 'title2']
});




new Vue({
  el: '#app',
  render: h => h(App123),
  selected: 'A',

})




