import Vue from "vue";

// valdtion links
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';
import App from "./App.vue";
import router from './router'
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
localize('en', en);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);


// bootstrab vue links
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)



// vue i 18 links
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
const messages = {
  english: {
    message: {
      currentPage: 'currentPage',
      formmessage:'go  forms',
    }
  },
  arabic: {
    message: {
      currentPage: 'الصفحة الحالية',
      formmessage:'اذهب للفورم',
    }
  }
};

const i18n = new VueI18n({
  locale: 'en',
  messages
});


//  vue valditin links
import "./vee-validate";

import store from './store'


Vue.config.productionTip = false;


new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
        