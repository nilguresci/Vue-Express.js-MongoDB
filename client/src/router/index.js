import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import UpdatePage from '../views/UpdatePage.vue'



const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/products/:id',
        name: 'About',
        component: About
    },
    {
        path: '/products/update/id/:id',
        name: 'Update',
        component: UpdatePage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router