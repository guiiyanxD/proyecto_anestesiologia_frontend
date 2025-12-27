<template>
  <h1 style="color: rebeccapurple">Perfil del Paciente</h1>
  <p>ID de Paciente: **{{ userId }}**</p>

  <div v-if="isLoading" class="text-center p-4">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Cargando...</span>
    </div>
    <p class="mt-2">Cargando datos...</p>
  </div>

  <div v-else-if="errorMessage" class="alert alert-danger" role="alert">
    Error: {{ errorMessage }}
  </div>

  <div class="accordion" id="accordionPanelsStayOpenExample">
    <!-- DATOS PERSONALES -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseOne"
        >
          Datos Personales
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseOne"
        class="accordion-collapse collapse show"
      >
        <div class="accordion-body">
          <dl class="row">
            <dt class="col-sm-4">Fecha de Nacimiento:</dt>
            <dd class="col-sm-8">{{ formatDate(userData.fechanacimiento) }}</dd>

            <dt class="col-sm-4">Fecha de Cirugía:</dt>
            <dd class="col-sm-8">{{ formatDate(userData.fechacirugia) }}</dd>

            <dt class="col-sm-4">Género:</dt>
            <dd class="col-sm-8 text-capitalize">{{ userData.genero }}</dd>

            <dt class="col-sm-4">Edad:</dt>
            <dd class="col-sm-8">{{ userData.edad }} años</dd>

            <dt class="col-sm-4">Peso / Talla:</dt>
            <dd class="col-sm-8">
              {{ parseFloat(userData.peso).toFixed(2) }} kg /
              {{ parseFloat(userData.talla).toFixed(2) }} cm
            </dd>

            <dt class="col-sm-4">IMC:</dt>
            <dd class="col-sm-8">
              <strong>{{ parseFloat(userData.imc).toFixed(2) }}</strong>
            </dd>

            <dt class="col-sm-4">Clasificación ASA:</dt>
            <dd class="col-sm-8">{{ userData.asa }}</dd>

            <dt class="col-sm-4">Tipo de Cirugía:</dt>
            <dd class="col-sm-8 text-capitalize">{{ userData.tipocirugia }}</dd>

            <template
              v-if="userData.tipocirugia === 'otro' && userData.otracirugia"
            >
              <dt class="col-sm-4">Otra Cirugía:</dt>
              <dd class="col-sm-8">{{ userData.otracirugia }}</dd>
            </template>
          </dl>

          <button
            class="btn"
            style="color: aliceblue; background-color: rebeccapurple"
            data-bs-toggle="modal"
            data-bs-target="#modalEditarDatosPersonales"
          >
            Editar
          </button>
        </div>
      </div>
    </div>

    <!-- DATOS INTRA OPERATORIOS -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseTwo"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseTwo"
        >
          Datos Intra Operatorios
          <span v-if="!hasDatosIntra" class="badge bg-warning ms-2"
            >Pendiente</span
          >
        </button>
      </h2>
      <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
        <div class="accordion-body">
          <!-- Si NO tiene datos intra operatorios -->
          <div v-if="!hasDatosIntra" class="text-center py-4">
            <p class="text-muted">No hay datos intra operatorios registrados</p>
            <button class="btn btn-primary" @click="registraDIO">
              <i class="bi bi-plus-circle"></i> Registrar Datos Intra
              Operatorios
            </button>
          </div>

          <!-- Si tiene datos intra operatorios -->
          <div v-else>
            <!-- SIGNOS VITALES -->
            <h6 class="fw-bold mb-3 text-danger">
              <i class="bi bi-activity"></i> Signos Vitales
            </h6>

            <div class="row mb-4">
              <!-- Presión Arterial -->
              <div class="col-md-4">
                <h6 class="text-muted mb-2">Presión Arterial (mmHg)</h6>
                <dl class="row small">
                  <dt class="col-5">Inicio:</dt>
                  <dd class="col-7">
                    {{ userData.pasistolica_ini }}/{{
                      userData.padiastolica_ini
                    }}
                  </dd>

                  <dt class="col-5">Post Intub.:</dt>
                  <dd class="col-7">
                    {{ userData.pasistolica_postint }}/{{
                      userData.padiastolica_postint
                    }}
                  </dd>

                  <dt class="col-5">Final:</dt>
                  <dd class="col-7">
                    {{ userData.pasistolica_fin }}/{{
                      userData.padiastolica_fin
                    }}
                  </dd>
                </dl>
              </div>

              <!-- Frecuencia Cardíaca -->
              <div class="col-md-4">
                <h6 class="text-muted mb-2">Frecuencia Cardíaca (lpm)</h6>
                <dl class="row small">
                  <dt class="col-5">Inicio:</dt>
                  <dd class="col-7">{{ userData.fcard_ini }}</dd>

                  <dt class="col-5">Post Intub.:</dt>
                  <dd class="col-7">{{ userData.fcard_postint }}</dd>

                  <dt class="col-5">Final:</dt>
                  <dd class="col-7">{{ userData.fcard_fin }}</dd>
                </dl>
              </div>

              <!-- Saturación O2 -->
              <div class="col-md-4">
                <h6 class="text-muted mb-2">Saturación O2 (%)</h6>
                <dl class="row small">
                  <dt class="col-5">Inicio:</dt>
                  <dd class="col-7">{{ userData.sato_ini }}%</dd>

                  <dt class="col-5">Post Intub.:</dt>
                  <dd class="col-7">{{ userData.sato_postint }}%</dd>

                  <dt class="col-5">Final:</dt>
                  <dd class="col-7">{{ userData.sato_fin }}%</dd>
                </dl>
              </div>
            </div>

            <!-- Otros Signos Vitales -->
            <div class="row mb-4">
              <div class="col-md-6">
                <dl class="row mb-0">
                  <dt class="col-4">EtCO2:</dt>
                  <dd class="col-8">{{ userData.etco2 }} mmHg</dd>
                </dl>
              </div>
              <div class="col-md-6">
                <dl class="row mb-0">
                  <dt class="col-4">BIS:</dt>
                  <dd class="col-8">{{ userData.bis }}</dd>
                </dl>
              </div>
            </div>

            <hr class="my-4" />

            <!-- Tiempos -->
            <h6 class="fw-bold mb-3 text-info">
              <i class="bi bi-clock-history"></i> Tiempos
            </h6>
            <div class="row mb-4">
              <div class="col-md-6">
                <dl class="row mb-0">
                  <dt class="col-6">Despertar:</dt>
                  <dd class="col-6">{{ userData.despertar }} minutos</dd>
                </dl>
              </div>
              <div class="col-md-6">
                <dl class="row mb-0">
                  <dt class="col-6">Tiempo de Cirugía:</dt>
                  <dd class="col-6">{{ userData.tiempoqx }} minutos</dd>
                </dl>
              </div>
            </div>

            <hr class="my-4" />

            <!-- Fármacos de Inducción y Mantenimiento -->
            <div class="row">
              <!-- INDUCCIÓN -->
              <div class="col-md-6">
                <h6 class="fw-bold mb-3 text-primary">
                  <i class="bi bi-syringe"></i> Fármacos de Inducción
                </h6>
                <dl class="row">
                  <dt class="col-6">Propofol:</dt>
                  <dd class="col-6">{{ userData.induccionpropofol }} mg</dd>

                  <dt class="col-6">Dexmedetomidina:</dt>
                  <dd class="col-6">
                    {{ userData.inducciondexmedetomidina }} mcg
                  </dd>

                  <dt class="col-6">Lidocaína:</dt>
                  <dd class="col-6">{{ userData.induccionlidocaina }} mg</dd>

                  <dt class="col-6">Ketamina:</dt>
                  <dd class="col-6">{{ userData.induccionketamina }} mg</dd>

                  <dt class="col-6">RNM:</dt>
                  <dd class="col-6">{{ userData.induccionrnm }} mg</dd>
                </dl>
              </div>

              <!-- MANTENIMIENTO -->
              <div class="col-md-6">
                <h6 class="fw-bold mb-3 text-success">
                  <i class="bi bi-heart-pulse"></i> Fármacos de Mantenimiento
                </h6>
                <dl class="row">
                  <dt class="col-6">Sevorane:</dt>
                  <dd class="col-6">{{ userData.mantenimientosevorane }} mg</dd>

                  <dt class="col-6">Dexmedetomidina:</dt>
                  <dd class="col-6">
                    {{ userData.mantenimientodexmedetomidina }} mcg
                  </dd>

                  <dt class="col-6">Lidocaína:</dt>
                  <dd class="col-6">
                    {{ userData.mantenimientolidocaina }} mg
                  </dd>

                  <dt class="col-6">Ketamina:</dt>
                  <dd class="col-6">{{ userData.mantenimientoketamina }} mg</dd>

                  <dt class="col-6">Sulfato de Mg:</dt>
                  <dd class="col-6">
                    {{ userData.mantenimientosulfatomg }} mg
                  </dd>
                </dl>
              </div>
            </div>

            <hr class="my-4" />

            <!-- Coadyuvantes -->
            <h6 class="fw-bold mb-3 text-warning">
              <i class="bi bi-capsule"></i> Coadyuvantes
            </h6>
            <div class="row">
              <div class="col-md-6">
                <dl class="row">
                  <dt class="col-6">Ondasetron:</dt>
                  <dd class="col-6">
                    <span
                      :class="
                        userData.ondasetron
                          ? 'badge bg-success'
                          : 'badge bg-secondary'
                      "
                    >
                      {{ userData.ondasetron ? "Sí" : "No" }}
                    </span>
                    <span
                      v-if="userData.ondasetron && userData.valorondasetron"
                      class="ms-2"
                    >
                      {{ userData.valorondasetron }} mg
                    </span>
                  </dd>

                  <dt class="col-6">Metamizol:</dt>
                  <dd class="col-6">
                    <span
                      :class="
                        userData.metamizol
                          ? 'badge bg-success'
                          : 'badge bg-secondary'
                      "
                    >
                      {{ userData.metamizol ? "Sí" : "No" }}
                    </span>
                    <span
                      v-if="userData.metamizol && userData.valormetamizol"
                      class="ms-2"
                    >
                      {{ userData.valormetamizol }} mg
                    </span>
                  </dd>
                </dl>
              </div>

              <div class="col-md-6">
                <dl class="row">
                  <dt class="col-6">Dexametasona:</dt>
                  <dd class="col-6">
                    <span
                      :class="
                        userData.dexametasona
                          ? 'badge bg-success'
                          : 'badge bg-secondary'
                      "
                    >
                      {{ userData.dexametasona ? "Sí" : "No" }}
                    </span>
                    <span
                      v-if="userData.dexametasona && userData.valordexametasona"
                      class="ms-2"
                    >
                      {{ userData.valordexametasona }} mg
                    </span>
                  </dd>

                  <dt class="col-6">Ketorol:</dt>
                  <dd class="col-6">
                    <span
                      :class="
                        userData.ketorol
                          ? 'badge bg-success'
                          : 'badge bg-secondary'
                      "
                    >
                      {{ userData.ketorol ? "Sí" : "No" }}
                    </span>
                    <span
                      v-if="userData.ketorol && userData.valorketorol"
                      class="ms-2"
                    >
                      {{ userData.valorketorol }} mg
                    </span>
                  </dd>
                </dl>
              </div>
            </div>

            <div class="mt-4">
              <div class="mt-4">
                <button
                  class="btn"
                  style="color: aliceblue; background-color: rebeccapurple"
                  data-bs-toggle="modal"
                  data-bs-target="#modalEditarDatosIntraOperatorios"
                >
                  Editar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- DATOS POST OPERATORIOS -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseThree"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseThree"
        >
          Datos Post Operatorios
          <span v-if="!hasDatosPost" class="badge bg-warning ms-2"
            >Pendiente</span
          >
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseThree"
        class="accordion-collapse collapse"
      >
        <div class="accordion-body">
          <!-- Si NO tiene datos post operatorios -->
          <div v-if="!hasDatosPost" class="text-center py-4">
            <p class="text-muted">No hay datos post operatorios registrados</p>
            <button
              class="btn btn-primary"
              @click="registraDPO"
              :disabled="!hasDatosIntra"
            >
              <i class="bi bi-plus-circle"></i> Registrar Datos Post Operatorios
            </button>
            <p v-if="!hasDatosIntra" class="text-warning mt-2 small">
              <i class="bi bi-exclamation-triangle"></i>
              Debe registrar primero los datos intra operatorios
            </p>
          </div>

          <!-- Si tiene datos post operatorios -->
          <div v-else>
            <!-- Recuperación en 2 columnas -->
            <div class="row">
              <div class="col-md-6">
                <h6 class="fw-bold mb-3 text-primary">
                  <i class="bi bi-clock"></i> Recuperación
                </h6>
                <dl class="row">
                  <dt class="col-6">Recuperación Post Anestesia:</dt>
                  <dd class="col-6">
                    {{ userData.recuperacionpostanestesia }} min
                  </dd>

                  <dt class="col-6">Escala Ramsay:</dt>
                  <dd class="col-6">
                    <span class="badge bg-info">{{ userData.ramsay }}</span>
                  </dd>
                </dl>
              </div>

              <div class="col-md-6">
                <h6 class="fw-bold mb-3 text-warning">
                  <i class="bi bi-emoji-dizzy"></i> Dolor (EVA)
                </h6>
                <dl class="row">
                  <dt class="col-6">EVA al Ingreso:</dt>
                  <dd class="col-6">
                    <span :class="getEvaClass(userData.evaingreso)">
                      {{ userData.evaingreso }}/10
                    </span>
                  </dd>

                  <dt class="col-6">EVA a 1 hora:</dt>
                  <dd class="col-6">
                    <span :class="getEvaClass(userData.eva1hr)">
                      {{ userData.eva1hr }}/10
                    </span>
                  </dd>
                </dl>
              </div>
            </div>

            <hr class="my-4" />

            <!-- Síntomas y Analgesia en 2 columnas -->
            <div class="row">
              <div class="col-md-6">
                <h6 class="fw-bold mb-3 text-success">
                  <i class="bi bi-clipboard2-pulse"></i> Síntomas
                </h6>
                <dl class="row">
                  <dt class="col-6">Náuseas:</dt>
                  <dd class="col-6">
                    <span
                      :class="
                        userData.nauseas
                          ? 'badge bg-warning'
                          : 'badge bg-success'
                      "
                    >
                      {{ userData.nauseas ? "Sí" : "No" }}
                    </span>
                  </dd>

                  <dt class="col-6">Vómitos:</dt>
                  <dd class="col-6">
                    <span
                      :class="
                        userData.vomitos
                          ? 'badge bg-warning'
                          : 'badge bg-success'
                      "
                    >
                      {{ userData.vomitos ? "Sí" : "No" }}
                    </span>
                  </dd>

                  <dt class="col-6">Depresión Respiratoria:</dt>
                  <dd class="col-6">
                    <span
                      :class="
                        userData.depresionrespiratoria
                          ? 'badge bg-danger'
                          : 'badge bg-success'
                      "
                    >
                      {{ userData.depresionrespiratoria ? "Sí" : "No" }}
                    </span>
                    <span
                      v-if="userData.depresionrespiratoria && userData.spo2bajo"
                      class="ms-1 small"
                    >
                      ({{ userData.spo2bajo }}%)
                    </span>
                  </dd>
                </dl>
              </div>

              <div class="col-md-6">
                <h6 class="fw-bold mb-3 text-danger">
                  <i class="bi bi-capsule"></i> Analgesia
                </h6>
                <dl class="row">
                  <dt class="col-6">Consumo de Analgésico:</dt>
                  <dd class="col-6">
                    <span
                      :class="
                        userData.consumoanalgesico
                          ? 'badge bg-info'
                          : 'badge bg-success'
                      "
                    >
                      {{ userData.consumoanalgesico ? "Sí" : "No" }}
                    </span>
                  </dd>

                  <template
                    v-if="userData.consumoanalgesico && userData.tipoanalgesico"
                  >
                    <dt class="col-6">Tipo:</dt>
                    <dd class="col-6">{{ userData.tipoanalgesico }}</dd>
                  </template>
                </dl>
              </div>
            </div>

            <div class="mt-4">
              <!-- <button class="btn" style="color: aliceblue; background-color: rebeccapurple">
                Editar
              </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL EDITAR DATOS PERSONALES -->
  <div
    class="modal fade"
    id="modalEditarDatosPersonales"
    tabindex="-1"
    aria-labelledby="modalEditarDatosPersonalesLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalEditarDatosPersonalesLabel">
            Editar Datos Personales
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <editar-datos-personales
            v-if="userData && Object.keys(userData).length > 0"
            :userData="userData"
            :userId="userId"
            @updated="handleDatosPersonalesUpdated"
            @cancel="closeModal"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- Modal para editar datos intra operatorios -->
  <div
    class="modal fade"
    id="modalEditarDatosIntraOperatorios"
    tabindex="-1"
    aria-labelledby="modalEditarDatosIntraOperatoriosLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalEditarDatosIntraOperatoriosLabel">
            Editar Datos Intra Operatorios
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <editar-datos-intra-operatorios
            v-if="userData && Object.keys(userData).length > 0"
            :userData="userData"
            :userId="userId"
            @updated="handleDatosIntraOperatoriosUpdated"
            @cancel="closeModalIntra"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import 'bootstrap';
import API_BASE_URL from "./config.js/api";
import EditarDatosPersonales from "./Forms/EditarDatosPersonales.vue";
import EditarDatosIntraOperatorios from "./Forms/EditarDatosIntraOperatorios.vue";

export default {
  name: "perfilComponent",
  components: {
    EditarDatosPersonales,
    EditarDatosIntraOperatorios
  },
  data: () => ({
    userId: null,
    userData: {},
    isLoading: false,
    errorMessage: false,
  }),
  mounted() {
    this.userId = this.$route.params.userId;
  },
  created() {
    this.fetchUserData();
  },
  computed: {
    hasDatosIntra() {
      return (
        this.userData.induccionpropofol !== null &&
        this.userData.induccionpropofol !== undefined
      );
    },
    hasDatosPost() {
      return (
        this.userData.recuperacionpostanestesia !== null &&
        this.userData.recuperacionpostanestesia !== undefined
      );
    },
  },
  methods: {
    async fetchUserData() {
      this.isLoading = true;
      try {
        const response = await fetch(`${API_BASE_URL}/user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: this.$route.params.userId }),
        });

        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();

        if (data.status === "success" && data.data) {
          this.userData = data.data;
        } else {
          this.errorMessage =
            data.message || "No se encontraron datos del paciente.";
        }
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
        this.errorMessage = "Error al cargar los datos del paciente";
      } finally {
        this.isLoading = false;
      }
    },
    handleDatosPersonalesUpdated() {
      this.closeModal();
      this.fetchUserData();
    },
    closeModal() {
      // Cerrar el modal usando Bootstrap
      const modal = document.getElementById("modalEditarDatosPersonales");
      const bsModal = window.bootstrap.Modal.getInstance(modal);
      if (bsModal) {
        bsModal.hide();
      }
    },
    registraDIO() {
      this.$router.push({
        name: "formDIO",
        params: {
          userId: this.userId,
        },
      });
    },
    registraDPO() {
      if (!this.hasDatosIntra) {
        alert("Debe registrar primero los datos intra operatorios");
        return;
      } else {
        this.$router.push({
          name: "formDPO",
          params: {
            userId: this.userId,
          },
        });
      }
    },
    formatDate(dateString) {
      if (!dateString) return "";
      const date = new Date(dateString);
      return date.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    },
    getEvaClass(value) {
      if (value <= 3) return "badge bg-success";
      if (value <= 6) return "badge bg-warning";
      return "badge bg-danger";
    },
    handleDatosIntraOperatoriosUpdaIntraOperatorios() {
        this.closeModalIntra();
        this.fetchUserData();
        
        // Mostrar mensaje de éxito
        alert('Datos intra operatorios actualizados correctamente');
    },
    closeModalIntra() {
        // Cerrar el modal usando Bootstrap
      const modal = document.getElementById("modalEditarDatosIntraOperatorios");
      const bsModal = window.bootstrap.Modal.getInstance(modal);
      if (bsModal) {
        bsModal.hide();
      }
    }
  }
};
</script>