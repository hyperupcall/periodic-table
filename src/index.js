import './css/main.scss';

// AnimeJS
import anime from 'animejs';

// VueJS
import Vue from 'vue';
window.Vue = Vue;  // Assign Vue to window object in index.js; Vue() is now a global property of the window object

// VueSax
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' // Gather VueSax styles
Vue.use(Vuesax, {
  theme: {
    colors: {
    }
  }
})

// Element UI
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { locale });

// Feather Icons
import VueFeatherIcon from 'vue-feather-icon';
Vue.use(VueFeatherIcon);

import Navigation from './components/Navigation.vue';
import PeriodicTable from './components/PeriodicTable.vue';
import Footer from './components/Footer.vue';

// This may be formated incorrectly
new Vue({
  render: k => k(Navigation)
}).$mount('#navigation-el')

new Vue({
  // Render is method of vue instance, means replace part you are slecting the dom with, with some other code
   render: h => h(PeriodicTable)
 }).$mount('#grid-el')

new Vue({
  render: m => m(Footer)
}).$mount('#footer-el')
