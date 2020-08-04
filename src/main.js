import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue";
import VueAxios from "vue-axios";
import axios from "./services/axios";
import "@/assets/scss/app.scss";

Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
