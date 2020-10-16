import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false

// export const app = new Vue({
new Vue({
  render: h => h(App),
}).$mount('#app')

if (module.hot) {
  module.hot.accept();
}
