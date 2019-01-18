import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import BootstrapVue from "bootstrap-vue"
import Argon from "./plugins/argon-kit";

Vue.config.productionTip = false;

Vue.use(Argon);
Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
