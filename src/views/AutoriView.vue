<script lang="ts">
import { RouterLink } from 'vue-router'

export default {
    name: 'AutoriView'
}
</script>

<template>
<div class="container py-5">
  <h1 class="mb-4">Naši autori</h1>
  
  <!-- Autor 1 -->
  <div class="row justify-content-center mb-4">
    <div class="col-12">
      <div class="card shadow-sm border-0" style="background-color: #f7f6f3;">
        <div class="row g-0 align-items-center">

          <!-- Obrázok autora -->
          <div class="col-md-4 text-center">
            <img
              src="https://via.placeholder.com/200x200"
              alt="Autor 1"
              class="card-img-top rounded-circle mx-auto mt-3"
              style="width: 150px; height: 150px; object-fit: cover;"
            >
          </div>

          <!-- Informácie o autorovi -->
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title fw-bold">Ján Novák</h5>
              <p class="text-muted">Expert na počítačové komponenty</p>
              <p class="card-text text-secondary">
                Ján Novák je vášnivý recenzent hardvéru a počítačových technológií. 
                Má viac než 10 rokov skúseností v oblasti IT a jeho odborné články sú 
                obľúbené medzi technickými nadšencami.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <!-- Autor 2 -->
  <div class="row justify-content-center mb-4">
    <div class="col-12">
      <div class="card shadow-sm border-0" style="background-color: #f7f6f3;">
        <div class="row g-0 align-items-center">

          <!-- Obrázok autora -->
          <div class="col-md-4 text-center">
            <img
              src="https://via.placeholder.com/200x200"
              alt="Autor 2"
              class="card-img-top rounded-circle mx-auto mt-3"
              style="width: 150px; height: 150px; object-fit: cover;"
            >
          </div>

          <!-- Informácie o autorovi -->
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title fw-bold">Mária Kováčová</h5>
              <p class="text-muted">Špecialistka na mobilné zariadenia</p>
              <p class="card-text text-secondary">
                Mária Kováčová je odborníčka na mobilné zariadenia a príslušenstvo. 
                Okrem toho píše aj recenzie na novinky v oblasti smartfónov a tabletov.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <!-- Autor 3 -->
  <div class="row justify-content-center mb-4">
    <div class="col-12">
      <div class="card shadow-sm border-0" style="background-color: #f7f6f3;">
        <div class="row g-0 align-items-center">

          <!-- Obrázok autora -->
          <div class="col-md-4 text-center">
            <img
              src="https://via.placeholder.com/200x200"
              alt="Autor 3"
              class="card-img-top rounded-circle mx-auto mt-3"
              style="width: 150px; height: 150px; object-fit: cover;"
            >
          </div>

          <!-- Informácie o autorovi -->
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title fw-bold">Tomáš Bielik</h5>
              <p class="text-muted">Expert na počítačové siete</p>
              <p class="card-text text-secondary">
                Tomáš Bielik sa špecializuje na počítačové siete a zabezpečenie. 
                Na blogu sa venuje najnovším technológiam v oblasti sietí a dátovej bezpečnosti.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</div>


</template>