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
                required
              />
              <span class="input-group-text">/</span>
              <input
                type="number"
                class="form-control"
                name="padiastolica_ini"
                placeholder="Diastolica Inicial"
                aria-label="padiastolica_ini"
                v-model="data.padiastolica_ini"
                required
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
                required
              />
              <span class="input-group-text">/</span>
              <input
                type="number"
                class="form-control"
                name="padiastolica_postint"
                placeholder="Diastolica Post Intubacion"
                aria-label="padiastolica_postint"
                v-model="data.padiastolica_postint"
                required
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
                required
              />
              <span class="input-group-text">/</span>
              <input
                type="number"
                class="form-control"
                name="padiastolica_fin"
                placeholder="Diastolica Final"
                aria-label="padiastolica_fin"
                v-model="data.padiastolica_fin"
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
              required
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
              required
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
              required
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
              required
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
        <div class="col-6 col-lg-6">
          <label for="induccionPropofol">Propofol</label>

          <div class="input-group">
            <input
              type="number"
              step="0.1"
              name="induccionPropofol"
              class="form-control"
              v-model="data.induccionPropofol"
              required
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
              v-model="data.induccionDexmedetomidina"
              required
            />

            <span class="input-group-text">mcg</span>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6 col-lg-6">
          <label for="induccionLidocaina">Lidocaina</label>
          <div class="input-group">
            <input
              type="number"
              step="0.1"
              name="induccionLidocaina"
              placeholder="lidocaina"
              class="form-control"
              v-model="data.induccionLidocaina"
              required
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
              v-model="data.induccionKetamina"
              required
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
              v-model="data.induccionRNM"
              required
            />
            <span class="input-group-text">mg</span>
          </div>
        </div>
      </div>
    </div>

    <!---DOSIS DE MANTENIMIENTO --->
    <div>
      <div class="row mt-3">
        <div class="text-primary">
          <h4>Farmacos de mantenimiento</h4>
        </div>
      </div>
      <div class="row">
        <div class="col lg-6">
          <label for="mantenimientoSevorane">Sevorane</label>
          <div class="input-group">
            <input
              type="number"
              name="mantenimientoSevorane"
              class="form-control"
              v-model="data.mantenimientoSevorane"
              required
            />

            <span class="input-group-text">mg</span>
          </div>
        </div>
        <div class="col lg-6">
          <label for="mantenimientoDexmedetomidina">Dexmedetomidina</label>
          <div class="input-group">
            <input
              type="number"
              name="mantenimientoDexmedetomidina"
              class="form-control"
              v-model="data.mantenimientoDexmedetomidina"
              required
            />
            <span class="input-group-text">mcg</span>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col lg-6">
          <label for="mantenimientoLidocaina">Lidocaina</label>

          <div class="input-group">
            <input
              type="number"
              name="mantenimientoLidocaina"
              class="form-control"
              v-model="data.mantenimientoLidocaina"
              required
            />

            <span class="input-group-text">mg</span>
          </div>
        </div>
        <div class="col lg-6">
          <label for="mantenimientoKetamina">Ketamina</label>

          <div class="input-group">
            <input
              type="number"
              name="mantenimientoKetamina"
              class="form-control"
              v-model="data.mantenimientoKetamina"
              required
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
              name="mantenimientoSulfatoMg"
              class="form-control"
              v-model="data.mantenimientoSulfatoMg"
              required
            />

            <span class="input-group-text">mg</span>
          </div>
        </div>
      </div>
    </div>

    <!--- EVENTOS INTRA OPERATORIOS --->
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
              id="checkOnddasetron"
              v-model="data.ondasetron"
              value="1"
            />
            <label class="form-check-label" for="checkOnddasetron">
              Ondasetron
            </label>
            <div v-if="this.data.ondasetron === true" class="input-group mt-2">
              <input
                type="number"
                name="valorOndasetron"
                step="0.1"
                class="form-control"
                v-model="data.valorOndasetron"
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
              value="1"
              id="checkmetamizol"
              v-model="data.metamizol"
            />
            <label class="form-check-label" for="checkmetamizol">
              Metamizol
            </label>
            <div v-if="this.data.metamizol === true" class="input-group mt-2">
              <input
                type="number"
                name="valorMetamizol"
                step="0.1"
                class="form-control"
                v-model="data.valorMetamizol"
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
              value="1"
              id="checkDexametasona"
              v-model="data.dexametasona"
            />
            <label class="form-check-label" for="checkDexametasona">
              Dexametasona
            </label>
            <div
              v-if="this.data.dexametasona === true"
              class="input-group mt-2"
            >
              <input
                type="text"
                name="valorDexametasona"
                class="form-control"
                v-model="data.valorDexametasona"
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
              value="1"
              id="checkKetorol"
              v-model="data.ketorol"
            />
            <label class="form-check-label" for="checkKetorol"> Ketorol </label>
            <div v-if="this.data.ketorol === true" class="input-group mt-2">
              <input
                type="number"
                step="0.1"
                name="valorKetorol"
                class="form-control"
                v-model="data.valorKetorol"
                placeholder="Valor de Ketorol"
              />
              <span class="input-group-text">mg</span>
            </div>
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
