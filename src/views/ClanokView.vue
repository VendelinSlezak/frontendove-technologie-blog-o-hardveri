<script>
import ArticleComment from '@/components/ArticleComment.vue';
import ArticleImage from '@/components/ArticleImage.vue';
import HardwareRating from '@/components/HardwareRating.vue';
import { useCommentDraftStore } from '@/stores/drafts';

export default {
    name: 'ClanokView',
    props: {
        id: { type: String, required: true },
    },
    components: {
        ArticleComment,
        ArticleImage,
        HardwareRating,
    },
    data() {
        return {
            loaded: false,
            article: [],
            newComment: { username: '', content: '' },
            commentDraft: useCommentDraftStore(),
            apiUrl: 'http://localhost:3000/articles/' + this.id,
        };
    },
    mounted() {
        this.fetchArticles();
        this.newComment = this.commentDraft.getDraft(this.id);
    },
    methods: {
        async fetchArticles() {
            try {
                this.loaded = false;
                const response = await fetch(this.apiUrl);
                this.article = await response.json();
            } 
            catch(error) {
                console.error("Chyba pri komunikácii so serverom:", error);
                alert("Chyba pri načítaní článku: " + error.message);
            }
            finally {
                this.loaded = true;
            }
        },
        async submitComment() {
            const today = new Date().toISOString().split('T')[0];
            const newEntry = {
                username: this.newComment.username,
                date: today,
                content: this.newComment.content
            };

            try {
                const updatedArticle = { ...this.article };
                updatedArticle.comments.push(newEntry);

                const response = await fetch(`${this.apiUrl}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedArticle)
                });
                if(!response.ok) {
                    throw new Error("Nepodarilo sa uložiť komentár.");
                }

                this.article = await response.json();
                this.newComment = { author: '', text: '' };
                this.commentDraft.clearDraft(this.id);

                alert("Komentár bol úspešne pridaný!");
            }
            catch(error) {
                console.error("Chyba pri odosielaní:", error);
                alert("Chyba: " + error.message);
            }
        },
    },
    watch: {
        newComment: {
            deep: true,
            handler(newValue) {
                this.commentDraft.updateDraft(this.id, newValue);
            },
        }
    },
}
</script>

<template>
    <div v-if="loaded === true">
        <div id="app" class="container my-5">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <article>
                        <header class="mb-4">
                            <h1 class="fw-bold mb-1">{{ article.title }}</h1>
                            <div class="text-muted fst-italic mb-2">
                                Publikované: {{ article.date }} | Autor: {{ article.author }}
                            </div>
                        </header>

                        <section class="mb-5">
                            <p class="fs-5 fw-bold">{{ article.perex }}</p>
                        </section>

                        <ArticleImage
                            :src="article.image" 
                            :alt="article.altImg" 
                            :caption="article.altImg"
                        />

                        <section class="mb-5">
                            <div class="lh-lg">
                                {{ article.content }}
                            </div>
                        </section>

                        <section class="mb-5">
                            <h4 class="mb-4">Hodnotenie hardvéru</h4>
                            <HardwareRating 
                                :priceRating="article.priceRating" 
                                :qualityRating="article.qualityRating"
                            />
                        </section>
                    </article>

                    <hr>

                    <section class="mt-5">
                        <h4 class="mb-4">Pridať komentár</h4>
                        
                        <form @submit.prevent="submitComment" class="mb-5 p-4 bg-light rounded">
                            <div class="mb-3">
                                <label for="author" class="form-label">Meno</label>
                                <input type="text" id="author" v-model="newComment.username" class="form-control" placeholder="Vaše meno" required>
                            </div>

                            <div class="mb-3">
                                <label for="comment" class="form-label">Komentár</label>
                                <textarea id="comment" v-model="newComment.content" class="form-control" rows="3" placeholder="Napíšte niečo..." required></textarea>
                            </div>

                            <button type="submit" class="btn btn-primary">Odoslať komentár</button>
                        </form>

                        <h5 class="mb-3">Komentáre</h5>
                        
                        <div v-for="comment in article.comments" :key="comment.id">
                            <ArticleComment :comment="comment"/>
                        </div>
                    </section>
                </div>
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