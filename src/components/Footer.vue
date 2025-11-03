<template>
  <footer class="bg-dark text-white mt-auto">
    <div class="container py-4">
      <!-- Contenido Principal -->
      <div class="row mb-4">
        
        <!-- Sección 1: Información del Proyecto -->
        <div class="col-12 col-md-4 mb-3 mb-md-0">
          <h3 class="h5 mb-3">Proyecto Anestesiología</h3>
          <p class="text-white small">
            Sistema de gestión de información de pacientes para procedimientos anestesiológicos.
          </p>
        </div>

        <!-- Sección 3: Contacto -->
        <div class="col-12 col-md-4">
          <h3 class="h5 mb-3">Contacto</h3>
          <ul class="list-unstyled small text-white">
            <li class="mb-2">📧 williamswaz18@gmail.com</li>
            <li class="mb-2">📞 +591 780-67520</li>
            <li class="mb-2">📍 Santa Cruz, Bolivia</li>
          </ul>
        </div>
      </div>

      <!-- Línea Divisoria -->
      <hr class="border-secondary">
      
      <div class="row" style="text-align: center;">
        <div class="col-12">
          <div class="d-flex flex-column flex-md-row justify-content-between align-items-center small text-muted">
            <p class="mb-2 mb-md-0">© {{ currentYear }} Proyecto Anestesiología. Todos los derechos reservados.</p>
            
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
footer {
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.hover-white:hover {
  color: white !important;
  transition: color 0.3s ease;
}

.gap-3 {
  gap: 1rem;
}
</style>