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
    <figure class="mb-4">
        <img :src="src" class="img-fluid rounded" :alt="alt">
        <figcaption class="text-center text-muted mt-2 fst-italic">
            {{ caption }}
        </figcaption>
    </figure>
</template>