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

  <div v-else class="accordion" id="accordionPanelsStayOpenExample">
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
            <dd class="col-sm-8">{{ userData.fechaNacimiento }}</dd>

            <dt class="col-sm-4">Fecha de Cirugía:</dt>
            <dd class="col-sm-8">{{ userData.fechaCirugia }}</dd>

            <dt class="col-sm-4">Género:</dt>
            <dd class="col-sm-8">{{ userData.genero }}</dd>

            <dt class="col-sm-4">Edad:</dt>
            <dd class="col-sm-8">{{ userData.edad }} años</dd>

            <dt class="col-sm-4">Peso / Talla:</dt>
            <dd class="col-sm-8">
              {{ userData.peso }} kg / {{ userData.talla }} cm
            </dd>

            <dt class="col-sm-4">IMC:</dt>
            <dd class="col-sm-8">**{{ userData.imc }}**</dd>

            <dt class="col-sm-4">Clasificación ASA:</dt>
            <dd class="col-sm-8">{{ userData.asa }}</dd>

            <dt class="col-sm-4">Tipo de Cirugía:</dt>
            <dd class="col-sm-8">{{ userData.tipoCirugia }}</dd>

            <dt v-if="userData.tipoCirugia === 'otro'" class="col-sm-4">
              Otra Cirugía:
            </dt>
            <dd v-if="userData.tipoCirugia === 'otro'" class="col-sm-8">
              {{ userData.otraCirugia }}
            </dd>
          </dl>
          <button class="btn " style="color: aliceblue;background-color: rebeccapurple">Editar</button>
        </div>
      </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseTwo"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseTwo"
        >
          Datos Intra Operatorios
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseTwo"
        class="accordion-collapse collapse show"
      >
        <div class="accordion-body">
          <button @click="registraDIO">Registrar Datos Intra Operatorios</button>
        </div>
      </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseThree"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseThree"
        >
          Datos Post Operatorios
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseThree"
        class="accordion-collapse collapse show"
      >
        <div class="accordion-body">
          <button class="btn btn-primary" @click="registraDPO">Registrar Datos Post Operatorios</button>
        </div>
      </div>
    </div>
</div>
</template>
<script>
export default {
  name: "perfilComponent",
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
  methods: {
    async fetchUserData() {
      this.isLoading = true;
      try {
        const response = await fetch('/api/user', {
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
      } finally {
        this.isLoading = false;
      }
    },
    registraDIO() {
      this.$router.push({ 
        name: 'formDIO', 
        params: { 
          userId: this.userId 
        } 
      });
    },
    registraDPO() {
      this.$router.push({ 
        name: 'formDPO', 
        params: { 
          userId: this.userId 
        } 
      });
    },
  },
};
</script>