<script>
export default {
    name: 'AuthorDescription',
    props: {
        author: { type: Object, required: true },
    },
    data() {
        return {
            baseUrl: import.meta.env.BASE_URL,
        };
    }
}
</script>

<template>
    <div class="row justify-content-center mb-4">
        <div class="col-12">
            <div class="card shadow-sm border-0" style="background-color: #f7f6f3;">
                <div class="row g-0 align-items-center">
                    <div class="col-md-4 text-center py-3">
                        <img
                            :src="baseUrl + 'images/' + author.image"
                            :alt="author.altImg"
                            class="mx-auto rounded" 
                            style="width: 150px; height: 150px; object-fit: cover;"
                        >
                    </div>

                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">{{ author.name }}</h5>
                            <p class="text-muted">{{ author.briefDescription }}</p>
                            <p class="card-text text-secondary">{{ author.detailedDescription }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>