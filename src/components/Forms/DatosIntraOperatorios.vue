<template>
  <form v-on:submit.prevent="save">
    <div class="row mt-3 mb-0">
      <div class="text-center text-primary">
        <h4>Datos Intra Operatorios</h4>
        <p>Este es el id: {{ userId }}</p>
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
              <p style="color: crimson">Presion Arterial (PA)</p>
            </div>
          </div>
          <div class="col col-lg-12">
            <label for="pasistolica_ini">Inicio</label>
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control"
                name="pasistolica_ini"
                placeholder="Sistolica Inicial"
                aria-label="pasistolica_ini"
                v-model="data.pasistolica_ini"
              />
              <span class="input-group-text">/</span>
              <input
                type="number"
                class="form-control"
                name="padiastolica_ini"
                placeholder="Diastolica Inicial"
                aria-label="padiastolica_ini"
                v-model="data.padiastolica_ini"
              />
              <span class="input-group-text">mmHg</span>
            </div>
          </div>
          <div class="col col-lg-12">
            <label for="pasistolica_postint">Post Intubacion</label>
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control"
                name="pasistolica_postint"
                placeholder="Sistolica Post Intubacion"
                aria-label="pasistolica_postint"
                v-model="data.pasistolica_postint"
              />
              <span class="input-group-text">/</span>
              <input
                type="number"
                class="form-control"
                name="padiastolica_postint"
                placeholder="Diastolica Post Intubacion"
                aria-label="padiastolica_postint"
                v-model="data.padiastolica_postint"
              />
              <span class="input-group-text">mmHg</span>
            </div>
          </div>
          <div class="col col-lg-12">
            <label class="text-bold" for="pasistolica_fin">Final</label>
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control"
                name="pasistolica_fin"
                placeholder="Sistolica Final"
                aria-label="pasistolica_fin"
                v-model="data.pasistolica_fin"
              />
              <span class="input-group-text">/</span>
              <input
                type="number"
                class="form-control"
                name="padiastolica_fin"
                placeholder="Diastolica Final"
                aria-label="padiastolica_fin"
                v-model="data.padiastolica_fin"
              />
              <span class="input-group-text">mmHg</span>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-12">
          <div class="row">
            <div class="text-primary">
              <p style="color: crimson">Frecuencia Cardiaca (FC)</p>
            </div>
          </div>
          <div class="col lg-3">
            <label class="" for="fcard_ini">Inicio</label>
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control"
                name="fcard_ini"
                placeholder="FC Inicial"
                aria-label="fcard_ini"
                v-model="data.fcard_ini"
              />
              <span class="input-group-text">lpm</span>
            </div>
          </div>
          <div class="col lg-3">
            <label for="fcard_postint">Post Intubacion</label>
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control"
                name="fcard_postint"
                placeholder="FC Post Intubacion"
                aria-label="fcard_postint"
                v-model="data.fcard_postint"
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
                aria-label="fcard_fin"
                v-model="data.fcard_fin"
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
                aria-label="sato_ini"
                v-model="data.sato_ini"
              />
              <span class="input-group-text">%</span>
            </div>
          </div>
          <div class="col lg-3">
            <label for="sato_postint">Post Intubacion</label>
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control"
                name="sato_postint"
                placeholder="SatO2 Post Intubacion"
                aria-label="sato_postint"
                v-model="data.sato_postint"
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
                aria-label="sato_fin"
                v-model="data.sato_fin"
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
              placeholder="ETCO2 (mmHg)"
              name="etco2"
              class="form-control"
              v-model="data.etco2"
            />
            <span class="input-group-text">mmHg</span>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <label for="bis">Indice Biespectral (BIS)</label>
          <div class="input-group mb-3">
            <input
              min="1"
              max="100"
              type="number"
              name="bis"
              placeholder="1-100"
              class="form-control"
              v-model="data.bis"
            />
          </div>
        </div>
      </div>
    </div>

    <!---TIEMPO QUIRURGICO  --->
    <div>
      <div class="row mt-3 mb-1">
        <div class="text-primary">
          <h4>Tiempo quirurgico</h4>
        </div>
      </div>
      <div class="row mt-1 mb-3">
        <div class="col-12 col-lg-6">
          <label for="despertar">Despertar post quirurgico</label>
          <div class="input-group">
            <input
              type="number"
              name="despertar"
              class="form-control"
              v-model="data.despertar"
            />
            <span class="input-group-text"> min </span>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <label for="tiempoQx">Tiempo quirurgico (min)</label>
          <div class="input-group">
            <input
              type="number"
              name="tiempoQx"
              class="form-control"
              v-model="data.tiempoQx"
            />

            <span class="input-group-text">min</span>
          </div>
        </div>
      </div>
    </div>

    <!---DOSIS DE INDUCCIÓN --->
    
    <div>
        <div class="row mt-3 mb-1">
            <div class="text-primary">
                <h4>Farmacos de induccion</h4>
            </div>
        </div>  
        <div class="row">
            <div class="col-12 col-lg-6">
            <div class="form-floating">
                <input
                type="number"
                step="0.1"
                name="induccionPropofol"
                class="form-control"
                v-model="data.induccionPropofol"
                />
                <label for="induccionPropofol">Propofol (mg)</label>
            </div>
            </div>
            <div class="col-12 col-lg-6">
            <div class="form-floating">
                <input
                type="number"
                name="induccionDexmedetomidina"
                class="form-control"
                v-model="data.induccionDexmedetomidina"
                />
                <label for="induccionDexmedetomidina"
                >Dexmedetomidina (mcg/kg)</label
                >
            </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col lg-6">
            <div class="form-floating">
                <input
                type="number"
                name="induccionLidocaina"
                class="form-control"
                v-model="data.induccionLidocaina"
                />
                <label for="induccionLidocaina">Lidocaina (mg/kg)</label>
            </div>
            </div>
            <div class="col lg-6">
            <div class="form-floating">
                <input
                type="number"
                name="induccionKetamina"
                class="form-control"
                v-model="data.induccionKetamina"
                />
                <label for="induccionKetamina">Ketamina (mg/kg)</label>
            </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col lg-12">
            <div class="form-floating">
                <input
                type="number"
                name="induccionKetamina"
                class="form-control"
                />
                <label for="induccionKetamina">RNM</label>
            </div>
            </div>
        </div>
    </div>

    <!---DOSIS DE MANTENIMIENTO --->
    <div class="row mt-3">
      <div class="text-primary">
        <h4>Farmacos de mantenimiento</h4>
      </div>
    </div>
    <div class="row">
      <div class="col lg-6">
        <div class="form-floating">
          <input
            type="number"
            name="mantenimientoSevorane"
            class="form-control"
            v-model="data.mantenimientoSevorane"
          />
          <label for="mantenimientoSevorane">Sevorane (mg)</label>
        </div>
      </div>
      <div class="col lg-6">
        <div class="form-floating">
          <input
            type="number"
            name="mantenimientoDexmedetomidina"
            class="form-control"
            v-model="data.mantenimientoDexmedetomidina"
          />
          <label for="mantenimientoDexmedetomidina"
            >Dexmedetomidina (mcg/kg)</label
          >
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col lg-6">
        <div class="form-floating">
          <input
            type="number"
            name="mantenimientoLidocaina"
            class="form-control"
            v-model="data.mantenimientoLidocaina"
          />
          <label for="mantenimientoLidocaina">Lidocaina (mg/kg)</label>
        </div>
      </div>
      <div class="col lg-6">
        <div class="form-floating">
          <input
            type="number"
            name="mantenimientoKetamina"
            class="form-control"
            v-model="data.mantenimientoKetamina"
          />
          <label for="mantenimientoKetamina">Ketamina (mg/kg)</label>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col col-lg-12">
        <div class="form-floating">
          <input
            type="number"
            name="mantenimientoSulfatoMg"
            class="form-control"
            v-model="data.mantenimientoSulfatoMg"
          />
          <label for="mantenimientoSulfatoMg">Sulfato de Mg</label>
        </div>
      </div>
    </div>

    <!--- EVENTOS INTRA OPERATORIOS --->
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
            id="checkPresionArterial"
            v-model="data.presionArterial"
            value="1"
          />
          <label class="form-check-label" for="checkPresionArterial">
            Presion arterial (PA)
          </label>
          <div
            v-if="this.data.presionArterial === true"
            class="form-floating mt-2"
          >
            <input
              type="text"
              name="valorPresionArterial"
              class="form-control"
              v-model="data.valorPresionArterial"
              placeholder="Valor de PA"
            />
            <label for="valorPresionArterial">Valor presion arterial</label>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="1"
            id="checkFrecuenciaCardiaca"
            v-model="data.frecuenciaCardiaca"
          />
          <label class="form-check-label" for="checkFrecuenciaCardiaca">
            Frecuencia cardiaca (FC)
          </label>
          <div
            v-if="this.data.frecuenciaCardiaca === true"
            class="form-floating mt-2"
          >
            <input
              type="text"
              name="valorFrecuenciaCardiaca"
              class="form-control"
              v-model="data.valorFrecuenciaCardiaca"
              placeholder="Valor de FC"
            />
            <label for="valorFrecuenciaCardiaca"
              >Valor frecuencia cardiaca</label
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="1"
            id="checkCo2"
            v-model="data.co2"
          />
          <label class="form-check-label" for="checkCo2"> Co2 </label>
          <div v-if="this.data.co2 === true" class="form-floating mt-2">
            <input
              type="text"
              name="valorCo2"
              class="form-control"
              v-model="data.valorCo2"
              placeholder="Valor de Co2"
            />
            <label for="valorCo2">Valor Co2</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="1"
            id="checkSatO2"
            v-model="data.satO2"
          />
          <label class="form-check-label" for="checkSatO2">
            Saturacion O2
          </label>
          <div v-if="this.data.satO2 === true" class="form-floating mt-2">
            <input
              type="text"
              name="valorSatO2"
              class="form-control"
              v-model="data.valorSatO2"
              placeholder="Valor de Saturacion O2"
            />
            <label for="valorSatO2">Valor Saturacion O2</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="1"
            id="checkFR"
            v-model="data.frecuenciaRespiratoria"
          />
          <label class="form-check-label" for="checkFR">
            Frecuencia respiratoria (FR)
          </label>
          <div
            v-if="this.data.frecuenciaRespiratoria === true"
            class="form-floating mt-2"
          >
            <input
              type="text"
              name="valorFR"
              class="form-control"
              v-model="data.valorFrecuenciaRespiratoria"
              placeholder="Valor de FR"
            />
            <label for="valorFR">Valor frecuencia respiratoria</label>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-lg-6 d-grid mt-2">
        <button type="submit" class="btn btn-success" :disabled="isLoading">
          <span
            v-if="isLoading"
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          {{ isLoading ? " Guardando..." : "Guardar" }}
        </button>
      </div>
      <div class="col-lg-6 d-grid mt-1">
        <a @click="salir" class="btn btn-secondary" :disabled="isLoading">
          Salir
        </a>
      </div>
    </div>
  </form>
</template> 

<script>
import API_BASE_URL from "../config.js/api";
export default {
  name: "DatosIntraOperatoriosForm",
  data: () => ({
    data: {
      userId: "",
      /*induccionPropofol: 0,
                induccionDexmedetomidina: 0,
                induccionLidocaina: 0,
                induccionKetamina: 0,
                mantenimientoPropofol: 0,
                mantenimientoDexmedetomidina: 0,
                mantenimientoLidocaina: 0,
                mantenimientoKetamina: 0,
                despertar: 0,
                tiempoQx: 0,
                presionArterial: false,
                valorPresionArterial: "",
                frecuenciaCardiaca: false,
                valorFrecuenciaCardiaca: "",
                frecuenciaRespiratoria: false,
                valorFrecuenciaRespiratoria: "",
                co2: false,
                valorCo2: "",
                satO2: false,
                valorSatO2: "",
                etco2:"",*/
    },
    isLoading: false,
  }),
  props: {
    userId: {
      type: String,
      required: true,
    },
  },
  methods: {
    async save() {
      this.isLoading = true;
      this.data.userId = this.userId;
      try {
        const response = await fetch(
          `${API_BASE_URL}/saveDatosIntraOperatorios`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.data),
          }
        );

        const data = await response.json();
        if (!response.ok) {
          throw new Error(`Error en la solicitud: `);
        }

        if (data.status === "failed") {
          alert("Error al cargar los datos" + data.message);
        } else {
          this.$router.push({
            name: "perfil",
            params: {
              userId: data.data,
            },
          });
        }
      } catch (error) {
        console.error("Error al guardar datos:", error);
        alert(
          "Error al guardar los datos. Inténtelo de nuevo. Detalles: " +
            error.message
        );
      } finally {
        this.isLoading = false;
        this.data = {};
      }
    },
    salir() {
      this.$router.back();
    },
  },
};
</script>
