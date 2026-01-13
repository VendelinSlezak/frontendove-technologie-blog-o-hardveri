<script lang="ts">
import { RouterLink } from 'vue-router'

export default {
    name: 'ClankyView'
}
</script>

<template>
    <div class="container py-5">
    <h1 class="mb-4">Všetky články</h1>

    <div class="row g-4">
        <div class="col-12">
        <div class="card shadow-sm border-0">
            <div class="row g-0 align-items-stretch">

            <!-- Obrázok -->
            <div class="col-md-4">
                <img
                src="https://via.placeholder.com/600x400"
                class="img-fluid h-100 w-100 rounded-start"
                style="object-fit: cover;"
                :alt="nazovClanku"
                >
            </div>

            <!-- Obsah -->
            <div class="col-md-8">
                <div class="card-body d-flex flex-column h-100">

                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="badge bg-info text-dark">Kategória</span>
                    <small class="text-muted">1.1.2026</small>
                </div>

                <h4 class="card-title fw-bold">
                    Názov článku
                </h4>

                <p class="card-text text-secondary mb-4">
                    Perexový text článku. Krátky úvod, ktorý naláka čitateľa
                    pokračovať v čítaní a dá rýchly prehľad o obsahu.
                </p>

                <RouterLink
                    :to="'/clanky/' + 'idcko'"
                    class="btn btn-outline-primary mt-auto align-self-start"
                >
                    Čítať článok
                </RouterLink>

                </div>
            </div>

            </div>
        </div>
        </div>
    </div>
    </div>
</template>
  
<style scoped>
.card {
transition: transform 0.2s;
}
.card:hover {
transform: translateY(-5px);
}
</style>