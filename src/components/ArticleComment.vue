<script>
export default {
    name: 'ArticleComment',
    props: {
        comment: { type: Object, required: true },
    },
}
</script>

<template>
    <div class="card mb-3">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <h6 class="card-title mb-0 fw-bold">{{ comment.username }}</h6>
                <small class="text-muted">{{ comment.date }}</small>
            </div>

            <p class="card-text">{{ comment.content }}</p>
        </div>
    </div>
</template>