<script lang="ts">
import ArticleMiniature from '@/components/ArticleMiniature.vue'

export default {
    name: 'ClankyView',
    components: {
        ArticleMiniature
    },
    data() {
        return {
            articles: [],
            apiUrl: 'http://localhost:3000/articles'
        };
    },
    mounted() {
        this.fetchArticles();
    },
    methods: {
        async fetchArticles() {
            try {
                const response = await fetch(this.apiUrl);
                this.articles = await response.json();
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
        <h1 class="mb-4">Všetky články</h1>

        <div class="row g-4" v-for="article in articles" :key="article.id">
            <ArticleMiniature :article="article" />
        </div>
    </div>
</template>