import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ShowProduct from '../views/ShowProduct.vue'
import UpdatePage from '../views/UpdatePage.vue'
import AddPage from '../views/AddProductPage.vue'
import Basket from '../views/Basket.vue'


const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/products/:id',
        name: 'ShowProduct',
        component: ShowProduct
    },
    {
        path: '/products/update/id/:id',
        name: 'Update',
        component: UpdatePage
    },
    {
        path: '/products/add',
        name: 'Add',
        component: AddPage
    },
    {
        path: '/products/basket',
        name: 'Basket',
        component: Basket
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router