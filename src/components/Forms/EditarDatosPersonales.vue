<template>
    <form @submit.prevent="update">
        <div class="row mt-3 mb-0">
            <div class="text-center text-primary">
                <h4>Editar Datos Personales</h4>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-lg-6">
                <div class="form-floating">
                    <input 
                        type="date" 
                        id="fechaNacimiento" 
                        class="form-control" 
                        v-model="formData.fechaNacimiento" 
                        required
                    >
                    <label for="fechaNacimiento">Fecha de nacimiento</label>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="form-floating">
                    <input 
                        type="date" 
                        id="fechaCirugia" 
                        class="form-control" 
                        v-model="formData.fechaCirugia" 
                        @change="calculoEdad()" 
                        required
                    >
                    <label for="fechaCirugia">Fecha de la cirugía</label>
                </div>
            </div>    
        </div>

        <div class="row mt-3">
            <div class="col-lg-6">
                <div class="form-floating">
                    <p class="m-1" style="align-items: start;">Género:</p>
                    <div class="form-check-inline">
                        <input 
                            type="radio" 
                            id="masculino" 
                            class="form-check-input" 
                            v-model="formData.genero" 
                            value="masculino" 
                            required
                        >
                        <label for="masculino" class="form-check-label">Masculino</label>
                    </div>
                    <div class="form-check-inline">
                        <input 
                            type="radio" 
                            id="femenino" 
                            class="form-check-input" 
                            v-model="formData.genero" 
                            value="femenino" 
                            required
                        >
                        <label for="femenino" class="form-check-label">Femenino</label>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="form-floating">
                    <input 
                        type="number" 
                        id="edad" 
                        class="form-control" 
                        v-model="formData.edad" 
                        disabled
                    >
                    <label for="edad">Edad</label>
                </div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-lg-6">
                <div class="form-floating">
                    <input 
                        type="number" 
                        id="peso" 
                        class="form-control" 
                        v-model="formData.peso" 
                        @change="calculoImc" 
                        step="0.01"
                        required
                    >
                    <label for="peso">Peso (kg)</label>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="form-floating">
                    <input 
                        type="number" 
                        id="talla" 
                        class="form-control" 
                        v-model="formData.talla" 
                        @change="calculoImc" 
                        step="0.01"
                        required
                    >
                    <label for="talla">Talla (cm)</label>
                </div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-lg-6">
                <div class="form-floating">
                    <input 
                        type="number" 
                        id="imc" 
                        class="form-control" 
                        :value="imc" 
                        disabled
                    >
                    <label for="imc">Índice de masa corporal</label>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="form-floating">
                    <p class="m-1" style="align-items: start;">Clasificación ASA:</p>
                    <div class="form-check-inline">
                        <input 
                            type="radio" 
                            id="asaI" 
                            class="form-check-input" 
                            v-model="formData.asa" 
                            value="Asa I" 
                            required
                        >
                        <label for="asaI" class="form-check-label">ASA I</label>
                    </div>
                    <div class="form-check-inline">
                        <input 
                            type="radio" 
                            id="asaII" 
                            class="form-check-input" 
                            v-model="formData.asa" 
                            value="Asa II" 
                            required
                        >
                        <label for="asaII" class="form-check-label">ASA II</label>
                    </div>
                    <div class="form-check-inline">
                        <input 
                            type="radio" 
                            id="asaIII" 
                            class="form-check-input" 
                            v-model="formData.asa" 
                            value="Asa III" 
                            required
                        >
                        <label for="asaIII" class="form-check-label">ASA III</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-lg-12">
                <div class="form-floating">
                    <p class="m-1">Tipo de Cirugía:</p>
                    <div class="form-check-inline">
                        <input 
                            type="radio" 
                            id="colecistectomia" 
                            class="form-check-input" 
                            v-model="formData.tipoCirugia" 
                            value="colecistectomia" 
                            required
                        >
                        <label for="colecistectomia" class="form-check-label">Colecistectomía</label>
                    </div>
                    <div class="form-check-inline">
                        <input 
                            type="radio" 
                            id="hernorrafia" 
                            class="form-check-input" 
                            v-model="formData.tipoCirugia" 
                            value="hernorrafia" 
                            required
                        >
                        <label for="hernorrafia" class="form-check-label">Hernorrafia</label>
                    </div>
                    <div class="form-check-inline">
                        <input 
                            type="radio" 
                            id="bariatrica" 
                            class="form-check-input" 
                            v-model="formData.tipoCirugia" 
                            value="bariatrica" 
                            required
                        >
                        <label for="bariatrica" class="form-check-label">Bariátrica</label>
                    </div>
                    <div class="form-check-inline">
                        <input 
                            type="radio" 
                            id="otro" 
                            class="form-check-input" 
                            v-model="formData.tipoCirugia" 
                            value="otro" 
                            required
                        >
                        <label for="otro" class="form-check-label">Otros</label>
                    </div>
                </div>
            </div>
            
            <div v-if="formData.tipoCirugia === 'otro'" class="col-lg-12">
                <div class="form-floating mt-3">
                    <textarea 
                        id="otraCirugia" 
                        cols="30" 
                        rows="3" 
                        class="form-control" 
                        v-model="formData.otraCirugia"
                    ></textarea>
                    <label for="otraCirugia">Otra Cirugía</label>
                </div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-lg-6 d-grid mt-2">
                <button 
                    type="submit" 
                    class="btn btn-success" 
                    :disabled="isLoading"
                >
                    <span 
                        v-if="isLoading" 
                        class="spinner-border spinner-border-sm" 
                        role="status" 
                        aria-hidden="true"
                    ></span>
                    {{ isLoading ? ' Actualizando...' : 'Actualizar' }}
                </button>               
            </div>
            <div class="col-lg-6 d-grid mt-2">
                <button 
                    type="button"
                    class="btn btn-secondary"
                    :disabled="isLoading"
                    @click="$emit('cancel')"
                >
                    Cancelar
                </button>              
            </div>
        </div>
    </form>
</template>

<script>
import API_BASE_URL from '../config.js/api';

export default {
    name: "EditarDatosPersonales",
    props: {
        userData: {
            type: Object,
            required: true
        },
        userId: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            formData: {
                fechaNacimiento: '',
                fechaCirugia: '',
                genero: '',
                edad: 0,
                peso: 0,
                talla: 0,
                asa: '',
                tipoCirugia: '',
                otraCirugia: ''
            },
            imc: 0,
            isLoading: false
        }
    },
    mounted() {
        // Cargar datos existentes al montar el componente
        this.loadUserData();
    },
    methods: {
        loadUserData() {
            // Convertir fechas del formato que viene del backend
            this.formData.fechaNacimiento = this.formatDateForInput(this.userData.fechanacimiento);
            this.formData.fechaCirugia = this.formatDateForInput(this.userData.fechacirugia);
            this.formData.genero = this.userData.genero;
            this.formData.edad = this.userData.edad;
            this.formData.peso = parseFloat(this.userData.peso);
            this.formData.talla = parseFloat(this.userData.talla);
            this.formData.asa = this.userData.asa;
            this.formData.tipoCirugia = this.userData.tipocirugia;
            this.formData.otraCirugia = this.userData.otracirugia || '';
            
            // Calcular IMC con los datos cargados
            this.calculoImc();
        },
        formatDateForInput(dateString) {
            if (!dateString) return '';
            // Si viene como "2024-12-15T00:00:00" o "2024-12-15", tomar solo la fecha
            return dateString.split('T')[0];
        },
        calculoImc() {
            const peso = this.formData.peso;
            const talla = this.formData.talla;

            if (peso > 0 && talla > 0) {
                const imcValue = (peso / ((talla / 100) * (talla / 100)));
                this.imc = imcValue.toFixed(1);
            } else {
                this.imc = 0;
            }
        },
        calculoEdad() {
            const fechaNacimiento = new Date(this.formData.fechaNacimiento);
            const fechaCirugia = new Date(this.formData.fechaCirugia);
            let edad = fechaCirugia.getFullYear() - fechaNacimiento.getFullYear();
            const mes = fechaCirugia.getMonth() - fechaNacimiento.getMonth();

            if (mes < 0 || (mes === 0 && fechaCirugia.getDate() < fechaNacimiento.getDate())) {
                edad--;
            }
            this.formData.edad = edad;
        },
        async update() {
            this.isLoading = true;
            
            const dataToUpdate = {
                id: this.userId,
                fechanacimiento: this.formData.fechaNacimiento,
                fechacirugia: this.formData.fechaCirugia,
                genero: this.formData.genero,
                edad: this.formData.edad,
                peso: this.formData.peso,
                talla: this.formData.talla,
                imc: this.imc,
                asa: this.formData.asa,
                tipocirugia: this.formData.tipoCirugia,
                otracirugia: this.formData.otraCirugia ?? ""
            };

            try {
                const response = await fetch(`${API_BASE_URL}/updateDatosPersonales`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(dataToUpdate)
                });

                const data = await response.json();
                
                if (!response.ok) {
                    throw new Error(`Error en la solicitud: ${response.status}`);
                }

                if (data.status === 'failed' || data.status === 'error') {
                    alert("Error al actualizar los datos: " + (data.message || 'Error desconocido'));
                } else {
                    this.$emit('updated');
                }
            } catch (error) {
                console.error('Error al actualizar datos:', error);
                alert('Error al actualizar los datos. Inténtelo de nuevo. Detalles: ' + error.message);
            } finally {
                this.isLoading = false;
            }
        }
    }
}
</script>

<style scoped>
.form-floating {
    margin-bottom: 0;
}
</style>