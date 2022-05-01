import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '@/views/DashBoard'
import GridSystem from '@/views/GridSystem'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: DashBoard },
  { path: '/grid-system', component: GridSystem },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router