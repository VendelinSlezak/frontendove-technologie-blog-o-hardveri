<script lang="ts">
export default {
    name: 'KontaktView',
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: ''
            },
            apiUrl: import.meta.env.VITE_API_URL + '/messages',
            sending: false,
            statusMessage: null,
            messages: [],
        }
    },
    methods: {
        async sendEmail() {
            this.statusMessage = null;
            this.sending = true;

            try {
                const response = await fetch(this.apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: this.formData.name,
                        email: this.formData.email,
                        message: this.formData.message,
                        date: new Date().toISOString()
                    })
                });
                if(!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }
            }
            catch(error) {
                console.error("Chyba pri komunikácii so serverom:", error);
                this.statusMessage = "Nepodarilo sa uložiť správu.";
                this.sending = false;
                return;
            }
            
            this.sending = false;
            this.formData.name = '';
            this.formData.email = '';
            this.formData.message = '';
            this.statusMessage = "Správa bola úspešne odoslaná!";
        }
    },
}
</script>

<template>
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <h1 class="mb-3 text-center">Kontaktujte nás</h1>
                <p class="text-center text-muted mb-4">
                    Máte otázku k hardvéru, recenziám alebo spolupráci? Napíšte nám.
                </p>
        
                <form @submit.prevent="sendEmail">
                    <div class="mb-3">
                        <label for="name" class="form-label">Meno</label>
                        <input type="text" v-model="formData.name" class="form-control" id="name" placeholder="Vaše meno" required>
                    </div>
            
                    <div class="mb-3">
                        <label for="email" class="form-label">E-mail</label>
                        <input type="email" v-model="formData.email" class="form-control" id="email" placeholder="vas@email.sk" required>
                    </div>

                    <div class="mb-4">
                        <label for="message" class="form-label">Správa</label>
                        <textarea v-model="formData.message" class="form-control" id="message" rows="5" placeholder="Napíšte nám vašu správu..." required></textarea>
                    </div>

                    <div class="d-grid">
                        <button type="submit" class="btn btn-primary btn-lg" :disabled="sending">
                            {{ sending ? 'Odosielam...' : 'Odoslať správu' }}
                        </button>
                    </div>
                </form>

                <div class="mt-3" v-if="statusMessage">
                    <div class="alert alert-secondary" role="alert">
                        {{ statusMessage }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>