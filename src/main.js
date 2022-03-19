import Vue from 'vue';
import App from './App.vue';
import router from './router';

if (process.env.NODE_ENV === "test") {
    // You can't use import in a conditional so we're using require() so no
    // Mirage JS code will ever reach your production build.
    require('./miragejs/server').makeServer();
}

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
