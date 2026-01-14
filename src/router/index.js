import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ClankyView from '@/views/ClankyView.vue'
import ClanokView from '@/views/ClanokView.vue'
import AutoriView from '@/views/AutoriView.vue'
import KontaktView from '@/views/KontaktView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/clanky/',
            name: 'clanky',
            component: ClankyView,
        },
        {
            path: '/clanky/:id',
            name: 'clanok',
            component: ClanokView,
            props: true,
        },
        {
            path: '/autori/',
            name: 'autori',
            component: AutoriView,
        },
        {
            path: '/kontakt/',
            name: 'kontakt',
            component: KontaktView,
        },
    ],
})

export default router
