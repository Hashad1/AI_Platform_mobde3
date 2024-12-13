import Vue from 'nativescript-vue';
import Home from './components/Home.vue';
import { installTailwind } from '@nativescript/tailwind';

// Install Tailwind CSS
installTailwind();

// Disable Vue.js development mode warnings
Vue.config.silent = true;

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start();