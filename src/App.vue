<script>
import TheNavigation from './components/TheNavigation.vue'
import { RouterView } from 'vue-router'
import TheFooter from './components/TheFooter.vue'

export default {
    components: {
        TheNavigation,
        TheFooter
    },
}
</script>

<template>
    <TheNavigation />
    <RouterView />
    <TheFooter />
</template>