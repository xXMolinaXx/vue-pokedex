import { createMemoryHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import Introduction from './components/Introduction.vue'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import './assets/main.css'



const routes = [
  { path: '/', component: HomePage },
  { path: '/introduction', component: Introduction },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
createApp(App).use(router).mount('#app')
