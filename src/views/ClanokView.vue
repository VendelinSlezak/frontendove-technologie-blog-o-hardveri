<script>
import ArticleComment from '@/components/ArticleComment.vue';
import ArticleImage from '@/components/ArticleImage.vue';
import HardwareRating from '@/components/HardwareRating.vue';
import { useCommentDraftStore } from '@/stores/commentDrafts.js';

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
            articleApiUrl: 'http://localhost:3000/articles/' + this.id,
            commentsApiUrl: 'http://localhost:3000/comments?articleId=' + this.id,
            articleLoaded: false,
            articleLoadingError: null,
            article: [],
            commentsLoaded: false,
            commentsLoadingError: null,
            comments: [],
            newComment: { username: '', content: '' },
            commentDraft: useCommentDraftStore(),
            submittingComment: false,
        };
    },
    mounted() {
        this.fetchArticle();
        if(this.articleLoadingError !== null) {
            return;
        }
        this.fetchComments();
        this.newComment = this.commentDraft.getDraft(this.id);
    },
    methods: {
        async fetchArticle() {
            try {
                this.articleLoaded = false;
                const response = await fetch(this.articleApiUrl);
                this.article = await response.json();
            } 
            catch(error) {
                console.error("Chyba pri komunikácii so serverom:", error);
                this.articleLoadingError = error.message;
            }
            finally {
                this.articleLoaded = true;
            }
        },
        async fetchComments() {
            try {
                this.commentsLoaded = false;
                const response = await fetch(this.commentsApiUrl);
                this.comments = await response.json();
            } 
            catch(error) {
                console.error("Chyba pri komunikácii so serverom:", error);
                this.commentsLoadingError = error.message;
            }
            finally {
                this.commentsLoaded = true;
            }
        },
        async submitComment() {
            this.submittingComment = true;
            const today = new Date().toISOString().split('T')[0];
            const newComment = {
                articleId: this.id,
                username: this.newComment.username,
                date: today,
                content: this.newComment.content,
            };
            
            try {
                const response = await fetch(this.commentsApiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newComment)
                });
                if(!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }
            }
            catch(error) {
                console.error("Chyba pri odosielaní:", error);
                alert("Chyba pri odosielaní: " + error.message);
                this.submittingComment = false;
                return;
            }

            this.submittingComment = false;
            this.comments.push(newComment);
            this.newComment = { author: '', text: '' };
            this.commentDraft.clearDraft(this.id);
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
    <div v-if="articleLoaded">
        <div id="app" class="container my-5" v-if="articleLoadingError === null">
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

                            <button type="submit" class="btn btn-primary" :disabled="submittingComment">
                                <span v-if="!submittingComment">
                                    Odoslať komentár
                                </span>
                                <span v-else>
                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    Odosielam komentár...
                                </span>
                            </button>
                        </form>

                        <h5 class="mb-3">Komentáre</h5>
                        
                        <div v-if="commentsLoaded">
                            <div v-if="commentsLoadingError === null">
                                <div v-for="comment in comments" :key="comment.id">
                                    <ArticleComment :comment="comment"/>
                                </div>
                            </div>
                            <div v-else>
                                <div class="alert alert-danger" role="alert">
                                    Chyba pri načítavaní komentárov: {{ commentsLoadingError }}
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <div class="d-flex justify-content-center my-3">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Načítavanie...</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <div v-else class="container my-5">
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