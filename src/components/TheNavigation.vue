<script>
import { RouterLink } from 'vue-router'

export default {
    name: 'TheNavigation'
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container pt-3 pb-3">
            <RouterLink class="navbar-brand" to="/">Blog o hardvéri</RouterLink>

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/clanky">Články</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/autori">Autori</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/kontakt">Kontakt</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>