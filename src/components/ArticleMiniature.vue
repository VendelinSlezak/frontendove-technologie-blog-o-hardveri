<script>
export default {
    name: 'ArticleMiniature',
    props: {
        article: { type: Object, required: true },
    },
}
</script>

<template>
    <div class="col-12">
        <div class="card shadow-sm border-0">
            <div class="row g-0 align-items-stretch">
                <div class="col-md-4">
                    <img
                    :src="article.image"
                    class="img-fluid h-100 w-100 rounded-start"
                    style="object-fit: cover;"
                    :alt="article.altImg"
                    >
                </div>
                
                <div class="col-md-8">
                    <div class="card-body d-flex flex-column h-100">

                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="badge bg-info text-dark">{{ article.category }}</span>
                        <small class="text-muted">{{ article.date }}</small>
                    </div>

                    <h4 class="card-title fw-bold">{{ article.title }}</h4>

                    <p class="card-text text-secondary mb-4">{{ article.perex }}</p>

                    <RouterLink
                        :to="'/clanky/' + article.id"
                        class="btn btn-outline-primary mt-auto align-self-start"
                    >
                        Čítať článok
                    </RouterLink>

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