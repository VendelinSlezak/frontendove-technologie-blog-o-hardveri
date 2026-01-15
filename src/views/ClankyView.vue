<script lang="ts">
import ArticleMiniature from '@/components/ArticleMiniature.vue'

export default {
    name: 'ClankyView',
    components: {
        ArticleMiniature
    },
    data() {
        return {
            apiUrl: 'http://localhost:3000/articles',
            loaded: false,
            loadingError: null,
            articles: [],
        };
    },
    mounted() {
        this.fetchArticles();
    },
    methods: {
        async fetchArticles() {
            try {
                this.loaded = false;
                const response = await fetch(this.apiUrl);
                this.articles = await response.json();
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
        <div class="container py-5" v-if="loadingError === null">
            <h1 class="mb-4">Všetky články</h1>

            <div class="row g-4 pt-3 pb-3" v-for="article in articles" :key="article.id">
                <ArticleMiniature :article="article" />
            </div>
        </div>
        <div class="container py-5" v-else>
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