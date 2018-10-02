import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(Router);


new Vue({
    el: '#app',
    data: {
        api_url: 'https://api.artcontract.ru/?page=5',
        current_host: 'http://crm.mocx.su'
    },
    render: h => h(App)
})
