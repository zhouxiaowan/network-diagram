import Vue from 'vue';
import Router from 'vue-router';


import index from '@/components/index.vue';
import network from '@/components/network.vue'


Vue.use(Router);

const params = {
    mode: 'history',
    routes: [{
            path: '/tree',
            name: 'index',
            component: index
        },
        {
            path: '/network',
            name: 'network',
            component: network
        }
    ]
}
const router = new Router(params);
export default router;


// export default router = new Router({
//     mode: 'history',
//     routes: [{
//             path: '/tree',
//             name: 'index',
//             component: index
//         },
//         {
//             path: '/network',
//             name: 'network',
//             component: network
//         }
//     ]
// })