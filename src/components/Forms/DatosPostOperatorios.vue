<template>
    <form v-on:submit.prevent="save">
        <div class="row">
            <div class="text-center text-primary">
                <h4>Datos Post Operatorios {{ userId }}</h4>
            </div>
        </div>
        <div class="row">
            <div class="text-center text-primary">
                <h4>Datos Post Operatorios</h4>
            </div>
        </div>
        <div class="row">
            <div class="col lg-6">
                <div class="form-floating">
                    <input type="number" name="despertar" class="form-control" v-model="data.recuperacionPostAnestesica">
                    <label for="despertar">Tiempo de recuperación Post Anestésica (min)</label>
                    <small>Tiempo desde la extubación Aldrete > 9</small>
                </div>
            </div>
            <div class="col lg-6">
                <div class="form-floating">
                    <input type="number" min="1" max="6" name="ramsay" class="form-control" v-model="data.ramsay">
                    <label for="ramsay">Escala de Ramsay</label>
                    <small>Escala de 1 a 6</small>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col lg-6">
                <div class="form-floating">
                    <input type="number" min="1" max="10" name="evaIngreso" class="form-control" v-model="data.evaIngreso">
                    <label for="evaIngreso">Escala EVA de ingreso</label>
                    <small>Escala de 1 a 10</small>
                </div>
            </div>
            <div class="col lg-6">
                <div class="form-floating">
                    <input type="number" min="1" max="10" name="eva1hr" class="form-control" v-model="data.eva1hr">
                    <label for="eva1hr">Escala EVA a las 1 hora</label>
                    <small>Escala de 1 a 10</small>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col lg-4">
                <div class="form-floating" >
                    <p class="m-1" >Nauseas y vomitos</p>
                    <div class="form-check-inline">
                        <input type="checkbox" name="nauseasVomitos" id="nauseas" class="form-check-input" v-model="data.nauseas" value="1" >
                        <label for="nauseas" class="form-check-label">Nauseas</label>
                    </div>
                    <div class="form-check-inline">
                        <input type="checkbox" name="nauseasVomitos" id="vomitos" class="form-check-input" v-model="data.vomitos" value="1">
                        <label for="vomitos" class="form-check-label">Vomitos</label>
                    </div>
                </div>
            </div>
            <div class="col lg-4">
                <div class="form-floating" >
                    <p class="m-1" >Consumo de analgesico de rescate</p>
                    <div class="form-check-inline">
                        <input type="radio" name="consumoAnalgesico" id="siConsumo" class="form-check-input" v-model="data.consumoAnalgesico" value=1 >
                        <label for="siConsumo" class="form-check-label">Si</label>
                    </div>
                    <div class="form-check-inline">
                        <input type="radio" name="consumoAnalgesico" id="noConsumo" class="form-check-input" v-model="data.consumoAnalgesico" value=0 checked>
                        <label for="noConsumo" class="form-check-label">No</label>
                    </div>
                </div>
                <div v-if="data.consumoAnalgesico === 1">
                    <div class="form-floating mt-3">
                        <textarea name="tipoAnalgesico" id="tipoAnalgesico" cols="30" rows="3" class="form-control" v-model="data.tipoAnalgesico"></textarea>
                        <label for="tipoAnalgesico">Tipo de Analgesico</label>
                    </div>
                </div>
            </div>
            <div class="col lg-4">
                <div class="form-floating" >
                    <p class="m-1" >Depresion respiratoria</p>
                    <div class="form-check-inline">
                        <input type="radio" name="depresionRespiratoria" id="siDepresion" class="form-check-input" v-model="data.depresionRespiratoria" value=1 >
                        <label for="siDepresion" class="form-check-label">Si</label>
                    </div>
                    <div class="form-check-inline">
                        <input type="radio" name="depresionRespiratoria" id="noDepresion" class="form-check-input" v-model="data.depresionRespiratoria" value=0 checked>
                        <label for="noDepresion" class="form-check-label">No</label>
                    </div>
                </div>
                <div v-if="data.depresionRespiratoria === 1">
                    <div class="form-floating mt-3">
                        <textarea name="spo2Bajo" id="spo2Bajo" cols="30" rows="3" class="form-control" v-model="data.spo2Bajo"></textarea>
                        <label for="spo2Bajo">Saturación de Oxígeno mas bajo</label>
                    </div>
                </div>
            </div>
        </div>


        <div class="row mt-3">
            <div class="col-lg-6 d-grid mt-2">
               <button class="btn btn-success" type="submit">Guardar</button>               
            </div>
            <div class="col-lg-6 d-grid mt-1">
               <button class="btn btn-secondary">Salir</button>               
            </div>
       </div>
    </form>
</template>

<script>
    export default {
        name: "DatosPostOperatoriosForm",
        data: () => ({
            data: {
                userId: "",
            },
            
        }),
        props: {
            userId: {
                type: String,
                required: true,
            },
        },
        methods: {
          save(){
            return true;
          }  
        },
    }

    /*
    recuperacionPostAnestesica: "",
                ramsay : "",
                evaIngreso : 0,
                eva1hr : 0,
                nauseas : 0,
                vomitos : 0,

                consumoAnalgesico : 0,
                tipoAnalgesico:  "",

                depresionRespiratoria :  0,
                spo2Bajo : "",
    */
</script>