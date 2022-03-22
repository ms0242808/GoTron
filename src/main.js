import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars,faMapMarkerAlt,faUserShield,faSignOutAlt,faStream,faMap,faTachometerAlt,faFileAlt,faTools,faCog,faCheckCircle,faRobot,faPowerOff,faLemon,faLink,faHdd,faServer,faGlobe,faEye,faChartPie,faListOl,faCalendar,faCaretDown,faExchangeAlt,faTrashAlt,faPlus,faUpload,faLongArrowAltRight,faTimes,faIdBadge,faUser,faUserPlus,faEnvelope,faLock,faEdit,faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/theme.css'
import './registerServiceWorker'
import i18n from './i18n'
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

Vue.use(BootstrapVue)
library.add(faBars,faMapMarkerAlt,faUserShield,faSignOutAlt,faStream,faMap,faTachometerAlt,faFileAlt,faTools,faCog,faUserShield,faCheckCircle,faRobot,faPowerOff,faLemon,faLink,faHdd,faServer,faGlobe,faEye,faChartPie,faListOl,faCalendar,faCaretDown,faExchangeAlt,faTrashAlt,faPlus,faUpload,faLongArrowAltRight,faTimes,faIdBadge,faUser,faUserPlus,faEnvelope,faLock,faEdit,faPaperPlane)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
