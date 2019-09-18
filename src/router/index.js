import Vue from 'vue';
import Router from 'vue-router';


import index from '@/components/index.vue';
import teamDetails from '@/components/teamDetails/index.vue'
import caseDetails from "@/components/caseDetails/index.vue"
import testcase from "@/components/testcase.vue"

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
        },
        {
            path: '/testcase',
            name: "testcase",
            component: testcase
        }
    ]
}
const router = new Router(params);
export default router;