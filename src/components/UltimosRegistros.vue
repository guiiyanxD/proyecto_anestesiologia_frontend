<template>
  <div class="ultimos-registros py-5">
    <div class="container">
      <!-- Título de la sección -->
      <div class="text-center mb-5">
        <h2 class="display-6 fw-bold text-dark-custom">Últimos Registros</h2>
        <p class="text-muted">Los 10 pacientes registrados recientemente</p>
      </div>
        
      <!-- Grid de Cards -->
      <div class="row g-4">
        
        <div 
          v-for="paciente in pacientes" 
          :key="paciente.id" 
          class="col-12 col-md-6 col-lg-4"
        >
          <div class="card patient-card h-100">
            <div class="card-body d-flex flex-column">
              <!-- Header del Card -->
              <div class="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h5 class="card-title text-primary-custom mb-1">
                    Paciente #{{ paciente.id }}
                  </h5>
                  <small class="text-muted">{{ formatDate(paciente.created_at) }}</small>
                </div>
                <span :class="getAsaBadgeClass(paciente.asa)" class="badge">
                   {{ paciente.asa }}
                </span>
              </div>

              <!-- Información Principal -->
              <div class="patient-info mb-3 flex-grow-1">
                <div class="info-row">
                  <span class="info-label">Edad:</span>
                  <span class="info-value">{{ paciente.edad }} años</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Género:</span>
                  <span class="info-value">{{ paciente.genero === 'M' ? 'Masculino' : 'Femenino' }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">IMC:</span>
                  <span class="info-value">{{ paciente.imc }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Cirugía:</span>
                  <span class="info-value text-truncate">{{ paciente.tipocirugia }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Fecha Cirugía:</span>
                  <span class="info-value">{{ formatDate(paciente.fechacirugia) }}</span>
                </div>
              </div>

              <!-- Botón Ver Más -->
              <button 
                @click="verDetalle(paciente.id)" 
                class="btn btn-custom w-100"
              >
                Ver Detalles
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Mensaje si no hay datos -->
      <div v-if="pacientes.length === 0" class="text-center py-5">
        <p class="text-muted">No hay registros disponibles</p>
      </div>

      <!-- Botón Ver Todos -->
      <div class="text-center mt-5" v-if="pacientes.length > 0">
        <button @click="verTodos" class="btn btn-outline-custom btn-lg">
          Ver Todos los Registros
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UltimosRegistros',
  data() {
    return {
      pacientes: [],
      isLoading: false
    }
  },
  mounted() {
    this.cargarUltimosRegistros();
  },
  methods: {
    async cargarUltimosRegistros() {
      this.isLoading = true;
      try {
        const response = await fetch('/api/getUltimosRegistros', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        
        if (data.status === 'success') {
          this.pacientes = data.data;
        } else {
          console.error('Error:', data.message);
        }
      } catch (error) {
        console.error('Error al cargar registros:', error);
        alert('Error al cargar los últimos registros');
      } finally {
        this.isLoading = false;
      }
    },
    formatDate(dateString) {
      if (!dateString) return 'N/A';
      const date = new Date(dateString);
      return date.toLocaleDateString('es-ES', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric' 
      });
    },
    getAsaBadgeClass(asa) {
      const classes = {
        '1': 'badge-asa-1',
        '2': 'badge-asa-2',
        '3': 'badge-asa-3',
        '4': 'badge-asa-4',
        '5': 'badge-asa-5'
      };
      return classes[asa] || 'badge-asa-default';
    },
    verDetalle(id) {
        this.$router.push({
            name: "perfil", 
            params:{
                userId: id,
            }
        });
    },
    verTodos() {
      // Navegar a la página con todos los registros
      this.$router.push('/pacientes');
    }
  }
}
</script>

