import { createMemoryHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import Home from './pages/Home.vue'
import Introduction from './components/Introduction.vue'
import './assets/main.css'


import App from './App.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/introduction', component: Introduction },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
createApp(App).use(router).mount('#app')
