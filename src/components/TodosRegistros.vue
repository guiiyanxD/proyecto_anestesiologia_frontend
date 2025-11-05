<template>
  <div class="todos-registros py-5">
    <div class="container-fluid px-4">
      <!-- Header -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 class="display-6 fw-bold text-dark-custom mb-1">Todos los Registros</h2>
          <p class="text-muted mb-0">{{ totalRegistros }} pacientes registrados</p>
        </div>
        <button @click="exportarDatos" class="btn btn-custom">
          📥 Exportar
        </button>
      </div>

      <!-- Barra de búsqueda y filtros -->
      <div class="card mb-4 border-0 shadow-sm">
        <div class="card-body">
          <div class="row g-3">
            <div class="col-md-6">
              <input 
                v-model="busqueda" 
                type="text" 
                class="form-control" 
                placeholder="🔍 Buscar por ID, edad, tipo de cirugía..."
              >
            </div>
            <div class="col-md-3">
              <select v-model="filtroASA" class="form-select">
                <option value="">Todos los ASA</option>
                <option value="Asa I">ASA 1</option>
                <option value="Asa II">ASA 2</option>
                <option value="Asa III">ASA 3</option>
                <option value="Asa IV">ASA 4</option>
                <option value="Asa V">ASA 5</option>
              </select>
            </div>
            <div class="col-md-3">
              <select v-model="filtroGenero" class="form-select">
                <option value="">Todos los géneros</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading -->
      <div v-if="isLoading" class="text-center py-5">
        <div class="spinner-border text-primary-custom" role="status">
          <span class="visually-hidden">Cargando...</span>
        </div>
        <p class="mt-3 text-muted">Cargando registros...</p>
      </div>

      <!-- Tabla -->
      <div v-else class="card border-0 shadow-sm">
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0">
            <thead class="table-header">
              <tr>
                <th @click="ordenar('id')" class="sortable">
                  ID <span v-if="ordenColumna === 'id'">{{ ordenDireccion === 'asc' ? '↑' : '↓' }}</span>
                </th>
                <th @click="ordenar('fechaCirugia')" class="sortable">
                  Fecha Cirugía <span v-if="ordenColumna === 'fechaCirugia'">{{ ordenDireccion === 'asc' ? '↑' : '↓' }}</span>
                </th>
                <th @click="ordenar('edad')" class="sortable">
                  Edad <span v-if="ordenColumna === 'edad'">{{ ordenDireccion === 'asc' ? '↑' : '↓' }}</span>
                </th>
                <th>Género</th>
                <th @click="ordenar('peso')" class="sortable">
                  Peso <span v-if="ordenColumna === 'peso'">{{ ordenDireccion === 'asc' ? '↑' : '↓' }}</span>
                </th>
                <th @click="ordenar('talla')" class="sortable">
                  Talla <span v-if="ordenColumna === 'talla'">{{ ordenDireccion === 'asc' ? '↑' : '↓' }}</span>
                </th>
                <th @click="ordenar('imc')" class="sortable">
                  IMC <span v-if="ordenColumna === 'imc'">{{ ordenDireccion === 'asc' ? '↑' : '↓' }}</span>
                </th>
                <th>ASA</th>
                <th>Tipo Cirugía</th>
                <th class="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="paciente in pacientesFiltrados" :key="paciente.id">
                <td>
                  <code class="text-muted small">{{ paciente.id }}</code>
                </td>
                <td>{{ formatDate(paciente.fechacirugia) }}</td>
                <td>{{ paciente.edad }}</td>
                <td>
                  <span :class="paciente.genero === 'M' ? 'badge-genero-m' : 'badge-genero-f'" class="badge">
                    {{ paciente.genero === 'masculino' ? 'M' : 'F' }}
                  </span>
                </td>
                <td>{{ paciente.peso }} kg</td>
                <td>{{ paciente.talla }} cm</td>
                <td>
                  <span :class="getIMCClass(paciente.imc)">{{ paciente.imc }}</span>
                </td>
                <td>
                  <span :class="getAsaBadgeClass(paciente.asa)" class="badge">
                    {{ paciente.asa }}
                  </span>
                </td>
                <td>
                  <span class="text-truncate d-inline-block" style="max-width: 200px;" :title="paciente.tipocirugia">
                    {{ paciente.tipocirugia }}
                  </span>
                </td>
                <td class="text-center">
                  <div class="btn-group btn-group-sm">
                    <button @click="verDetalle(paciente.id)" class="btn btn-outline-primary btn-sm" title="Ver detalles">
                      👁️
                    </button>
                    <button @click="editarPaciente(paciente.id)" class="btn btn-outline-secondary btn-sm" title="Editar">
                      ✏️
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Sin resultados -->
        <div v-if="pacientesFiltrados.length === 0" class="text-center py-5">
          <p class="text-muted">No se encontraron registros</p>
        </div>

        <!-- Paginación -->
        <div class="card-footer bg-white border-0 d-flex justify-content-between align-items-center">
          <div class="text-muted small">
            Mostrando {{ pacientesFiltrados.length }} de {{ totalRegistros }} registros
          </div>
          <nav v-if="totalPaginas > 1">
            <ul class="pagination pagination-sm mb-0">
              <li class="page-item" :class="{ disabled: paginaActual === 1 }">
                <a class="page-link" @click="cambiarPagina(paginaActual - 1)">Anterior</a>
              </li>
              <li 
                v-for="pagina in totalPaginas" 
                :key="pagina"
                class="page-item" 
                :class="{ active: paginaActual === pagina }"
              >
                <a class="page-link" @click="cambiarPagina(pagina)">{{ pagina }}</a>
              </li>
              <li class="page-item" :class="{ disabled: paginaActual === totalPaginas }">
                <a class="page-link" @click="cambiarPagina(paginaActual + 1)">Siguiente</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API_BASE_URL from './config.js/api';
export default {
  name: 'TodosRegistros',
  data() {
    return {
      pacientes: [],
      isLoading: false,
      busqueda: '',
      filtroASA: '',
      filtroGenero: '',
      ordenColumna: 'fechaCirugia',
      ordenDireccion: 'desc',
      paginaActual: 1,
      registrosPorPagina: 20
    }
  },
  computed: {
    pacientesFiltrados() {
      let filtrados = [...this.pacientes];

      // Filtro de búsqueda
      if (this.busqueda) {
        const termino = this.busqueda;
        filtrados = filtrados.filter(p => 
          p.id.includes(termino) ||
          p.tipocirugia.includes(termino) ||
          p.edad.toString().includes(termino)
        );
      }

      // Filtro ASA
      if (this.filtroASA) {
        filtrados = filtrados.filter(p => p.asa === this.filtroASA);
      }

      // Filtro Género
      if (this.filtroGenero) {
        filtrados = filtrados.filter(p => p.genero === this.filtroGenero);
      }

      // Ordenamiento
      filtrados.sort((a, b) => {
        let valorA = a[this.ordenColumna];
        let valorB = b[this.ordenColumna];

        if (typeof valorA === 'string') {
          valorA = valorA.toLowerCase();
          valorB = valorB.toLowerCase();
        }

        if (this.ordenDireccion === 'asc') {
          return valorA > valorB ? 1 : -1;
        } else {
          return valorA < valorB ? 1 : -1;
        }
      });

      return filtrados;
    },
    totalRegistros() {
      return this.pacientes.length;
    },
    totalPaginas() {
      return Math.ceil(this.pacientesFiltrados.length / this.registrosPorPagina);
    }
  },
  mounted() {
    this.cargarTodosRegistros();
  },
  methods: {
    async cargarTodosRegistros() {
      this.isLoading = true;
      try {
        const response = await fetch(`${API_BASE_URL}/ver-todo`, {
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
          alert('Error al cargar registros: ' + data.message);
        }
      } catch (error) {
        console.error('Error al cargar registros:', error);
        alert('Error al cargar los registros');
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
    getIMCClass(imc) {
      const valor = parseFloat(imc);
      if (valor < 18.5) return 'text-primary';
      if (valor < 25) return 'text-success fw-bold';
      if (valor < 30) return 'text-warning fw-bold';
      return 'text-danger fw-bold';
    },
    ordenar(columna) {
      if (this.ordenColumna === columna) {
        this.ordenDireccion = this.ordenDireccion === 'asc' ? 'desc' : 'asc';
      } else {
        this.ordenColumna = columna;
        this.ordenDireccion = 'asc';
      }
    },
    cambiarPagina(pagina) {
      if (pagina >= 1 && pagina <= this.totalPaginas) {
        this.paginaActual = pagina;
      }
    },
    verDetalle(id) {
        this.$router.push({
            name: "perfil", 
            params:{
                userId: id,
            }
        });
    },
    editarPaciente(id) {
      this.$router.push(`/editar/${id}`);
    },
    exportarDatos() {
      // Implementar exportación a CSV/Excel
      console.log('Exportando datos...');
      alert('Funcionalidad de exportación próximamente');
    }
  }
}
</script>

