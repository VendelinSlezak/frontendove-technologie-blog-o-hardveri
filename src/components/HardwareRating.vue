<script>
export default {
    name: 'HardwareRating',
    props: {
        priceRating: { type: Number, default: 0 },
        qualityRating: { type: Number, default: 0 }
    },
    data() {
        return {
            starFull: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Gold_Star.svg',
            starEmpty: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Star_empty.svg'
        }
    }
}
</script>

<template>
    <div class="hardware-rating p-4 border rounded bg-white shadow-sm">
        <div class="mb-4">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <h6 class="fw-bold text-uppercase mb-0">Cena</h6>
                <span class="badge rounded-pill bg-warning text-dark">{{ priceRating }} / 10</span>
            </div>
            <div class="star-container">
                <img 
                    v-for="n in 10" 
                    :key="'price-' + n"
                    :src="n <= priceRating ? starFull : starEmpty"
                    class="star-icon"
                    alt="star"
                >
            </div>
        </div>

        <div>
            <div class="d-flex justify-content-between align-items-center mb-2">
                <h6 class="fw-bold text-uppercase mb-0">Kvalita</h6>
                <span class="badge rounded-pill bg-success">{{ qualityRating }} / 10</span>
            </div>
            <div class="star-container">
                <img 
                    v-for="n in 10" 
                    :key="'quality-' + n"
                    :src="n <= qualityRating ? starFull : starEmpty"
                    class="star-icon"
                    alt="star"
                >
            </div>
        </div>
    </div>
</template>

<style scoped>
.star-container {
    display: flex;
    gap: 4px;
}

.star-icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
    transition: transform 0.2s;
}
</style>