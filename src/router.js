import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Attendance from './Attendance.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/app', component: Attendance }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
