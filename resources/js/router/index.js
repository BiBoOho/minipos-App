import { createWebHistory, createRouter } from "vue-router";

import Login from "../page/login.vue";
import Register from "../page/register.vue";
import Pos from "../page/pos.vue";
import Report from "../page/report.vue";
import Store from "../page/store.vue";
import Transection from "../page/transection.vue";
import Home from "../page/home.vue";

export const routers = [
    {
        name:"login1",
        path:"/",
        component: Login,
    },
    {
        name:"login",
        path:"/login",
        component: Login,
    },
    {
        name:"home",
        path:"/home",
        component: Home,
    },
    {
        name:"register",
        path:"/register",
        component: Register,
    },
    {
        name:"pos",
        path:"/pos",
        component: Pos,
    },
    {
        name:"report",
        path:"/report",
        component: Report,
    },
    {
        name:"store",
        path:"/store",
        component: Store,
    },
    {
        name:"transection",
        path:"/transection",
        component: Transection,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes: routers,
    scrollBehavior(){
        window.scrollTo(0,0);
    }
});

export default router;