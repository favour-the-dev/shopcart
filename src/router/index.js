import { createRouter, createWebHistory } from "vue-router";
import index from '../pages/index.vue';
import createVue from '../pages/create.vue';
import cartVue from '../pages/cart.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: index
    },
    {
        path: '/create',
        name: 'CreatPost',
        component: createVue
    },
    {
        path: '/cart',
        name: 'Cart',
        component: cartVue 
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router