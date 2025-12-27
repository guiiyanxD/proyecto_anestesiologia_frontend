<template>
    <form @submit.prevent="update">
        <div class="row mt-3 mb-0">
            <div class="text-center text-primary">
                <h4>Editar Datos Intra Operatorios</h4>
            </div>
        </div>

        <!---SIGNOS VITALES--->
        <div>
            <div class="row">
                <div class="text-primary">
                    <h4>Signos Vitales</h4>
                </div>
            </div>
            <div class="row mt-1 mb-3">
                <div class="col-lg-5 col-12">
                    <div class="row">
                        <div class="text-primary">
                            <p style="color: crimson">Presión Arterial (PA)</p>
                        </div>
                    </div>
                    <div class="col col-lg-12">
                        <label for="pasistolica_ini">Inicio</label>
                        <div class="input-group mb-3">
                            <input
                                type="number"
                                class="form-control"
                                name="pasistolica_ini"
                                placeholder="Sistólica Inicial"
                                v-model="formData.pasistolica_ini"
                            />
                            <span class="input-group-text">/</span>
                            <input
                                type="number"
                                class="form-control"
                                name="padiastolica_ini"
                                placeholder="Diastólica Inicial"
                                v-model="formData.padiastolica_ini"
                            />
                            <span class="input-group-text">mmHg</span>
                        </div>
                    </div>
                    <div class="col col-lg-12">
                        <label for="pasistolica_postint">Post Intubación</label>
                        <div class="input-group mb-3">
                            <input
                                type="number"
                                class="form-control"
                                name="pasistolica_postint"
                                placeholder="Sistólica Post Intubación"
                                v-model="formData.pasistolica_postint"
                            />
                            <span class="input-group-text">/</span>
                            <input
                                type="number"
                                class="form-control"
                                name="padiastolica_postint"
                                placeholder="Diastólica Post Intubación"
                                v-model="formData.padiastolica_postint"
                            />
                            <span class="input-group-text">mmHg</span>
                        </div>
                    </div>
                    <div class="col col-lg-12">
                        <label for="pasistolica_fin">Final</label>
                        <div class="input-group mb-3">
                            <input
                                type="number"
                                class="form-control"
                                name="pasistolica_fin"
                                placeholder="Sistólica Final"
                                v-model="formData.pasistolica_fin"
                            />
                            <span class="input-group-text">/</span>
                            <input
                                type="number"
                                class="form-control"
                                name="padiastolica_fin"
                                placeholder="Diastólica Final"
                                v-model="formData.padiastolica_fin"
                            />
                            <span class="input-group-text">mmHg</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-12">
                    <div class="row">
                        <div class="text-primary">
                            <p style="color: crimson">Frecuencia Cardíaca (FC)</p>
                        </div>
                    </div>
                    <div class="col lg-3">
                        <label for="fcard_ini">Inicio</label>
                        <div class="input-group mb-3">
                            <input
                                type="number"
                                class="form-control"
                                name="fcard_ini"
                                placeholder="FC Inicial"
                                v-model="formData.fcard_ini"
                            />
                            <span class="input-group-text">lpm</span>
                        </div>
                    </div>
                    <div class="col lg-3">
                        <label for="fcard_postint">Post Intubación</label>
                        <div class="input-group mb-3">
                            <input
                                type="number"
                                class="form-control"
                                name="fcard_postint"
                                placeholder="FC Post Intubación"
                                v-model="formData.fcard_postint"
                            />
                            <span class="input-group-text">lpm</span>
                        </div>
                    </div>
                    <div class="col lg-3">
                        <label for="fcard_fin">Final</label>
                        <div class="input-group mb-3">
                            <input
                                type="number"
                                class="form-control"
                                name="fcard_fin"
                                placeholder="FC Final"
                                v-model="formData.fcard_fin"
                            />
                            <span class="input-group-text">lpm</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-12">
                    <div class="row">
                        <div class="text-primary">
                            <p style="color: crimson">Saturación O2 (SatO2)</p>
                        </div>
                    </div>
                    <div class="col lg-3">
                        <label for="sato_ini">Inicio</label>
                        <div class="input-group mb-3">
                            <input
                                type="number"
                                class="form-control"
                                name="sato_ini"
                                placeholder="SatO2 Inicial"
                                v-model="formData.sato_ini"
                            />
                            <span class="input-group-text">%</span>
                        </div>
                    </div>
                    <div class="col lg-3">
                        <label for="sato_postint">Post Intubación</label>
                        <div class="input-group mb-3">
                            <input
                                type="number"
                                class="form-control"
                                name="sato_postint"
                                placeholder="SatO2 Post Intubación"
                                v-model="formData.sato_postint"
                            />
                            <span class="input-group-text">%</span>
                        </div>
                    </div>
                    <div class="col lg-3">
                        <label for="sato_fin">Final</label>
                        <div class="input-group mb-3">
                            <input
                                type="number"
                                class="form-control"
                                name="sato_fin"
                                placeholder="SatO2 Final"
                                v-model="formData.sato_fin"
                            />
                            <span class="input-group-text">%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-1 mb-3">
                <div class="col-12 col-lg-6">
                    <label for="etco2">EtCO2</label>
                    <div class="input-group mb-3">
                        <input
                            type="number"
                            step="0.01"
                            placeholder="ETCO2 (mmHg)"
                            name="etco2"
                            class="form-control"
                            v-model="formData.etco2"
                        />
                        <span class="input-group-text">mmHg</span>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <label for="bis">Índice Biespectral (BIS)</label>
                    <div class="input-group mb-3">
                        <input
                            min="1"
                            max="100"
                            type="number"
                            name="bis"
                            placeholder="1-100"
                            class="form-control"
                            v-model="formData.bis"
                        />
                    </div>
                </div>
            </div>
        </div>

        <!---TIEMPO QUIRURGICO--->
        <div>
            <div class="row mt-3 mb-1">
                <div class="text-primary">
                    <h4>Tiempo Quirúrgico</h4>
                </div>
            </div>
            <div class="row mt-1 mb-3">
                <div class="col-12 col-lg-6">
                    <label for="despertar">Despertar post quirúrgico</label>
                    <div class="input-group">
                        <input
                            type="number"
                            name="despertar"
                            class="form-control"
                            v-model="formData.despertar"
                        />
                        <span class="input-group-text">min</span>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <label for="tiempoQx">Tiempo quirúrgico (min)</label>
                    <div class="input-group">
                        <input
                            type="number"
                            name="tiempoQx"
                            class="form-control"
                            v-model="formData.tiempoQx"
                        />
                        <span class="input-group-text">min</span>
                    </div>
                </div>
            </div>
        </div>

        <!---DOSIS DE INDUCCIÓN--->
        <div>
            <div class="row mt-3 mb-1">
                <div class="text-primary">
                    <h4>Fármacos de Inducción</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-lg-6">
                    <label for="induccionPropofol">Propofol</label>
                    <div class="input-group">
                        <input
                            type="number"
                            step="0.1"
                            name="induccionPropofol"
                            class="form-control"
                            v-model="formData.induccionPropofol"
                        />
                        <span class="input-group-text">mg</span>
                    </div>
                </div>
                <div class="col-6 col-lg-6">
                    <label for="induccionDexmedetomidina">Dexmedetomidina</label>
                    <div class="input-group">
                        <input
                            type="number"
                            step="0.1"
                            name="induccionDexmedetomidina"
                            class="form-control"
                            v-model="formData.induccionDexmedetomidina"
                        />
                        <span class="input-group-text">mcg</span>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-6 col-lg-6">
                    <label for="induccionLidocaina">Lidocaína</label>
                    <div class="input-group">
                        <input
                            type="number"
                            step="0.1"
                            name="induccionLidocaina"
                            class="form-control"
                            v-model="formData.induccionLidocaina"
                        />
                        <span class="input-group-text">mg</span>
                    </div>
                </div>
                <div class="col-6 col-lg-6">
                    <label for="induccionKetamina">Ketamina</label>
                    <div class="input-group">
                        <input
                            type="number"
                            step="0.1"
                            name="induccionKetamina"
                            class="form-control"
                            v-model="formData.induccionKetamina"
                        />
                        <span class="input-group-text">mg</span>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-12 col-lg-12">
                    <label for="induccionRNM">RNM</label>
                    <div class="input-group">
                        <input
                            type="number"
                            step="0.1"
                            name="induccionRNM"
                            class="form-control"
                            v-model="formData.induccionRNM"
                        />
                        <span class="input-group-text">mg</span>
                    </div>
                </div>
            </div>
        </div>

        <!---DOSIS DE MANTENIMIENTO--->
        <div>
            <div class="row mt-3">
                <div class="text-primary">
                    <h4>Fármacos de Mantenimiento</h4>
                </div>
            </div>
            <div class="row">
                <div class="col lg-6">
                    <label for="mantenimientoSevorane">Sevorane</label>
                    <div class="input-group">
                        <input
                            type="number"
                            step="0.1"
                            name="mantenimientoSevorane"
                            class="form-control"
                            v-model="formData.mantenimientoSevorane"
                        />
                        <span class="input-group-text">mg</span>
                    </div>
                </div>
                <div class="col lg-6">
                    <label for="mantenimientoDexmedetomidina">Dexmedetomidina</label>
                    <div class="input-group">
                        <input
                            type="number"
                            step="0.1"
                            name="mantenimientoDexmedetomidina"
                            class="form-control"
                            v-model="formData.mantenimientoDexmedetomidina"
                        />
                        <span class="input-group-text">mcg</span>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col lg-6">
                    <label for="mantenimientoLidocaina">Lidocaína</label>
                    <div class="input-group">
                        <input
                            type="number"
                            step="0.1"
                            name="mantenimientoLidocaina"
                            class="form-control"
                            v-model="formData.mantenimientoLidocaina"
                        />
                        <span class="input-group-text">mg</span>
                    </div>
                </div>
                <div class="col lg-6">
                    <label for="mantenimientoKetamina">Ketamina</label>
                    <div class="input-group">
                        <input
                            type="number"
                            step="0.1"
                            name="mantenimientoKetamina"
                            class="form-control"
                            v-model="formData.mantenimientoKetamina"
                        />
                        <span class="input-group-text">mg</span>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col col-lg-12">
                    <label for="mantenimientoSulfatoMg">Sulfato de Mg</label>
                    <div class="input-group">
                        <input
                            type="number"
                            step="0.1"
                            name="mantenimientoSulfatoMg"
                            class="form-control"
                            v-model="formData.mantenimientoSulfatoMg"
                        />
                        <span class="input-group-text">mg</span>
                    </div>
                </div>
            </div>
        </div>

        <!---COADYUVANTES--->
        <div>
            <div class="row mt-3">
                <div class="text-primary">
                    <h4>Coadyuvantes</h4>
                </div>
            </div>
            <div class="col lg-12">
                <div class="row">
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            id="checkOndasetron"
                            v-model="formData.ondasetron"
                        />
                        <label class="form-check-label" for="checkOndasetron">
                            Ondasetron
                        </label>
                        <div v-if="formData.ondasetron" class="input-group mt-2">
                            <input
                                type="number"
                                name="valorOndasetron"
                                step="0.1"
                                class="form-control"
                                v-model="formData.valorOndasetron"
                                placeholder="Dosis Ondasetron"
                            />
                            <span class="input-group-text">mg</span>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            id="checkMetamizol"
                            v-model="formData.metamizol"
                        />
                        <label class="form-check-label" for="checkMetamizol">
                            Metamizol
                        </label>
                        <div v-if="formData.metamizol" class="input-group mt-2">
                            <input
                                type="number"
                                name="valorMetamizol"
                                step="0.1"
                                class="form-control"
                                v-model="formData.valorMetamizol"
                                placeholder="Dosis Metamizol"
                            />
                            <span class="input-group-text">mg</span>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            id="checkDexametasona"
                            v-model="formData.dexametasona"
                        />
                        <label class="form-check-label" for="checkDexametasona">
                            Dexametasona
                        </label>
                        <div v-if="formData.dexametasona" class="input-group mt-2">
                            <input
                                type="number"
                                step="0.1"
                                name="valorDexametasona"
                                class="form-control"
                                v-model="formData.valorDexametasona"
                                placeholder="Valor de Dexametasona"
                            />
                            <span class="input-group-text">mg</span>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            id="checkKetorol"
                            v-model="formData.ketorol"
                        />
                        <label class="form-check-label" for="checkKetorol">
                            Ketorol
                        </label>
                        <div v-if="formData.ketorol" class="input-group mt-2">
                            <input
                                type="number"
                                step="0.1"
                                name="valorKetorol"
                                class="form-control"
                                v-model="formData.valorKetorol"
                                placeholder="Valor de Ketorol"
                            />
                            <span class="input-group-text">mg</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!---BOTONES--->
        <div class="row mt-4">
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
    name: "EditarDatosIntraOperatorios",
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
                // Signos Vitales - Presión Arterial
                pasistolica_ini: null,
                padiastolica_ini: null,
                pasistolica_postint: null,
                padiastolica_postint: null,
                pasistolica_fin: null,
                padiastolica_fin: null,
                // Frecuencia Cardíaca
                fcard_ini: null,
                fcard_postint: null,
                fcard_fin: null,
                // Saturación O2
                sato_ini: null,
                sato_postint: null,
                sato_fin: null,
                // Otros Signos Vitales
                etco2: null,
                bis: null,
                // Tiempo Quirúrgico
                despertar: null,
                tiempoQx: null,
                // Fármacos de Inducción
                induccionPropofol: null,
                induccionDexmedetomidina: null,
                induccionLidocaina: null,
                induccionKetamina: null,
                induccionRNM: null,
                // Fármacos de Mantenimiento
                mantenimientoSevorane: null,
                mantenimientoDexmedetomidina: null,
                mantenimientoLidocaina: null,
                mantenimientoKetamina: null,
                mantenimientoSulfatoMg: null,
                // Coadyuvantes
                ondasetron: false,
                valorOndasetron: null,
                metamizol: false,
                valorMetamizol: null,
                dexametasona: false,
                valorDexametasona: null,
                ketorol: false,
                valorKetorol: null
            },
            isLoading: false
        }
    },
    mounted() {
        this.loadUserData();
    },
    methods: {
        loadUserData() {
            // Signos Vitales
            this.formData.pasistolica_ini = this.userData.pasistolica_ini;
            this.formData.padiastolica_ini = this.userData.padiastolica_ini;
            this.formData.pasistolica_postint = this.userData.pasistolica_postint;
            this.formData.padiastolica_postint = this.userData.padiastolica_postint;
            this.formData.pasistolica_fin = this.userData.pasistolica_fin;
            this.formData.padiastolica_fin = this.userData.padiastolica_fin;
            
            this.formData.fcard_ini = this.userData.fcard_ini;
            this.formData.fcard_postint = this.userData.fcard_postint;
            this.formData.fcard_fin = this.userData.fcard_fin;
            
            this.formData.sato_ini = this.userData.sato_ini;
            this.formData.sato_postint = this.userData.sato_postint;
            this.formData.sato_fin = this.userData.sato_fin;
            
            this.formData.etco2 = this.userData.etco2;
            this.formData.bis = this.userData.bis;
            
            // Tiempo Quirúrgico
            this.formData.despertar = this.userData.despertar;
            this.formData.tiempoQx = this.userData.tiempoqx;
            
            // Fármacos de Inducción
            this.formData.induccionPropofol = this.userData.induccionpropofol;
            this.formData.induccionDexmedetomidina = this.userData.inducciondexmedetomidina;
            this.formData.induccionLidocaina = this.userData.induccionlidocaina;
            this.formData.induccionKetamina = this.userData.induccionketamina;
            this.formData.induccionRNM = this.userData.induccionrnm;
            
            // Fármacos de Mantenimiento
            this.formData.mantenimientoSevorane = this.userData.mantenimientosevorane;
            this.formData.mantenimientoDexmedetomidina = this.userData.mantenimientodexmedetomidina;
            this.formData.mantenimientoLidocaina = this.userData.mantenimientolidocaina;
            this.formData.mantenimientoKetamina = this.userData.mantenimientoketamina;
            this.formData.mantenimientoSulfatoMg = this.userData.mantenimientosulfatomg;
            
            // Coadyuvantes
            this.formData.ondasetron = this.userData.ondasetron || false;
            this.formData.valorOndasetron = this.userData.valorondasetron;
            this.formData.metamizol = this.userData.metamizol || false;
            this.formData.valorMetamizol = this.userData.valormetamizol;
            this.formData.dexametasona = this.userData.dexametasona || false;
            this.formData.valorDexametasona = this.userData.valordexametasona;
            this.formData.ketorol = this.userData.ketorol || false;
            this.formData.valorKetorol = this.userData.valorketorol;
        },
        async update() {
            this.isLoading = true;
            
            const dataToUpdate = {
                userId: this.userId,
                ...this.formData
            };

            try {
                const response = await fetch(`${API_BASE_URL}/updateDatosIntraOperatorios`, {
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