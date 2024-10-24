import { createMemoryHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import Introduction from './components/Introduction.vue'
import MainLayout from './components/layout/MainLayout.vue'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import AboutUser from './pages/AboutUser.vue'
import './assets/main.css'



const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: '/introduction',
        component: Introduction,
      },
      {
        path: '/character/:id',
        component: AboutUser,
      }
    ]
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
createApp(App).use(router).mount('#app')
