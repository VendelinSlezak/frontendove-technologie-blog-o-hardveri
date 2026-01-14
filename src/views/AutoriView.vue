<script lang="ts">
import AuthorDescription from '@/components/AuthorDescription.vue'

export default {
    name: 'AutoriView',
    components: {
        AuthorDescription
    },
    data() {
        return {
            authors: [],
            apiUrl: 'http://localhost:3000/authors'
        };
    },
    mounted() {
        this.fetchAuthors();
    },
    methods: {
        async fetchAuthors() {
            try {
                const response = await fetch(this.apiUrl);
                this.authors = await response.json();
            } 
            catch (error) {
                console.error("Chyba pri komunikácii so serverom:", error);
            }
        },
    }
}
</script>

<template>
    <div class="container py-5">
        <h1 class="mb-4">Naši autori</h1>
    
        <div v-for="author in authors" :key="author.id" class="mb-4">
            <AuthorDescription :author="author" />
        </div>
    </div>
</template>