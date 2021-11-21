import { createRouter as _createRouter, createWebHashHistory } from 'vue-router'

// 1. Define route components.
// These can be imported from other files
import Home from '../Home.vue'
import Demo from '../Demo.vue'

export const createRouter = () => {
  // 2. Define some routes
  // Each route should map to a component.
  const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/demo', component: Demo, name: 'Demo' },
  ]

  return _createRouter({
    history: createWebHashHistory(),
    routes,
  })
}
