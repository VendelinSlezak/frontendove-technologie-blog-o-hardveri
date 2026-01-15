<script lang="ts">
import AuthorDescription from '@/components/AuthorDescription.vue'

export default {
    name: 'AutoriView',
    components: {
        AuthorDescription
    },
    data() {
        return {
            apiUrl: import.meta.env.VITE_API_URL + '/authors',
            loaded: false,
            loadingError: null,
            authors: [],
        };
    },
    mounted() {
        this.fetchAuthors();
    },
    methods: {
        async fetchAuthors() {
            try {
                this.loaded = false;
                const response = await fetch(this.apiUrl);
                this.authors = await response.json();
            } 
            catch (error) {
                console.error("Chyba pri komunikácii so serverom:", error);
                this.loadingError = error.message;
            }
            finally {
                this.loaded = true;
            }
        },
    }
}
</script>

<template>
    <div v-if="loaded">
        <div v-if="loadingError === null" class="container py-5">
            <h1 class="mb-4">Naši autori</h1>
        
            <div
                v-for="author in authors"
                :key="author.id"
                class="mb-4"
            >
                <AuthorDescription :author="author" />
            </div>
        </div>
        <div v-else class="container py-5">
            <div class="alert alert-danger" role="alert">
                Chyba pri načítavaní: {{ loadingError }}
            </div>
        </div>
    </div>
    <div v-else>
        <div class="d-flex justify-content-center my-5">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Načítavanie...</span>
            </div>
        </div>
    </div>
</template>