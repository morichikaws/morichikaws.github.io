import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin, EmbedPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(EmbedPlugin);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount("#app");
