import { createApp } from "vue";
import App from "./App.vue";
// import Test from "page/home.vue";


require('./bootstrap');

const app = createApp(App);

app.mount("#app");