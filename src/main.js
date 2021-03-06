import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faEye, faEnvelope,faMusic, faFileSignature } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookMessenger} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/theme.css'
import './registerServiceWorker'
import i18n from './i18n'
import Carousel3d from 'vue-carousel-3d';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

Vue.use(BootstrapVue)
library.add(faPlus, faEye, faEnvelope, faMusic, faFileSignature, faInstagram, faFacebookMessenger)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Carousel3d);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
