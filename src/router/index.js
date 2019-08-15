import Vue from 'vue';
import Router from 'vue-router';


import index from '@/components/index.vue';
import network from '@/components/network.vue'
import detailsCase from "@/components/detailsCase.vue"


Vue.use(Router);

const params = {
    mode: 'history',
    routes: [{
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/network',
            name: 'network',
            component: network
        },
        {
            path: "/detailsCase",
            name: "detailsCase",
            component: detailsCase
        }
    ]
}
const router = new Router(params);
export default router;