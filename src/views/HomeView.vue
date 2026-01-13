<script lang="ts">
import { RouterLink } from 'vue-router'

export default {
    name: 'HomeView'
}
</script>

<template>
    <header class="py-5 bg-light">
      <div class="container">
        <div class="text-center my-5">
          <h1 class="fw-bolder">Vitajte na Blogu o hardvéri!</h1>
          <p class="lead mb-0">Najnovšie novinky zo sveta procesorov, grafických kariet a technológií.</p>
          <div class="mt-4">
            <RouterLink to="/clanky" class="btn btn-primary btn-lg">Čítať články</RouterLink>
            <RouterLink to="/kontakt" class="btn btn-outline-dark btn-lg ms-2">Napíšte nám</RouterLink>
          </div>
        </div>
      </div>
    </header>
</template>