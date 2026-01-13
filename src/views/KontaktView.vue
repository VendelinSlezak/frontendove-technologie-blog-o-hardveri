<script lang="ts">
export default {
    name: 'KontaktView'
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
  
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Meno</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Vaše meno"
              required
            >
          </div>
  
          <div class="mb-3">
            <label for="email" class="form-label">E-mail</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="vas@email.sk"
              required
            >
          </div>
  
          <div class="mb-3">
            <label for="subject" class="form-label">Predmet</label>
            <select class="form-select" id="subject">
              <option selected>Vyberte predmet</option>
              <option>Otázka k článku</option>
              <option>Návrh na tému</option>
              <option>Spolupráca / reklama</option>
              <option>Iné</option>
            </select>
          </div>

          <div class="mb-4">
            <label for="message" class="form-label">Správa</label>
            <textarea
              class="form-control"
              id="message"
              rows="5"
              placeholder="Napíšte nám vašu správu..."
              required
            ></textarea>
          </div>

          <div class="d-grid">
            <button type="submit" class="btn btn-primary btn-lg">
              Odoslať správu
            </button>
          </div>
        </form>
  
      </div>
    </div>
  </div>
</template>