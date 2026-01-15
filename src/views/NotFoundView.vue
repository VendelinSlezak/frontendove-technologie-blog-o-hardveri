<script>
import { RouterLink } from 'vue-router';

export default {
    name: "NotFoundView"
};
</script>

<template>
    <div class="container text-center mt-5 mb-5">
        <h1 class="display-1 text-danger">404</h1>
        <h2 class="mb-4">Stránka nenájdená</h2>
        <RouterLink to="/" class="btn btn-primary mt-3">Vrátiť sa na Domovskú stránku</RouterLink>
    </div>
</template>