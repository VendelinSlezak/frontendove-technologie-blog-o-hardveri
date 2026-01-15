<script>
export default {
    name: 'ArticleImage',
    props: {
        src: { type: String, required: true },
        alt: { type: String, required: false, default: '' },
        caption: { type: String, required: false, default: '' },
    },
}
</script>

<template>
    <figure class="mb-4 d-flex flex-column align-items-center">
        <img 
            :src="src" 
            class="img-fluid rounded" 
            style="max-width: 50%; height: auto;" 
            :alt="alt"
        >
        <figcaption class="text-center text-muted mt-4 fst-italic">
            {{ caption }}
        </figcaption>
    </figure>
</template>