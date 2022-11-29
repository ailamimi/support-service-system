import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../components/SignIn.vue'
import ForgotPassword from '../components/ForgotPassword.vue'

const routes = [
    {
        name: 'SignIn',
        component: SignIn,
        path: '/'
    },
    {
        name: 'ForgotPassword',
        component: ForgotPassword,
        path: '/forgot-password'
    },
];

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router