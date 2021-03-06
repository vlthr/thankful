import Vue from 'vue';
import Vuetify from 'vuetify';

import { Database } from '../lib/db.js';

Vue.use(Vuetify, {
  theme: {},
});

import App from './popup.vue';

import 'vuetify/dist/vuetify.min.css';

Vue.prototype.$db = new Database();

new Vue({
  el: '#popup',
  render: h => h(App),
});
