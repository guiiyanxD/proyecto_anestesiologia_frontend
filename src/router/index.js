import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'
import RegistrarView from '@/views/RegistrarView.vue'
import PerfilView from '@/views/PerfilView.vue'
import RegistrarDatosIOView from '@/views/RegistrarDatosIOView.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView
  },
  {
    path: '/registrar',
    name: 'registrar',
    component: RegistrarView
  },
  {
    path: '/perfil/:userId',
    name: 'perfil',
    component: PerfilView,
    props: true,
  },
  {
    path: '/formDIO/:userId',
    name: 'formDIO',
    component: RegistrarDatosIOView,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
