import Vue from 'vue';
import Router from 'vue-router';


import index from '@/components/index.vue';
import teamDetails from '@/components/teamDetails/index.vue'
import caseDetails from "@/components/caseDetails/index.vue"


Vue.use(Router);

const params = {
    mode: 'history',
    routes: [{
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/teamDetails',
            name: 'teamDetails',
            component: teamDetails
        },
        {
            path: "/caseDetails",
            name: "caseDetails",
            component: caseDetails
        }
    ]
}
const router = new Router(params);
export default router;