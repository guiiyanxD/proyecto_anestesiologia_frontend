<template>
    <form action="">
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
                        <input type="radio" name="nauseasVomitos" id="nauseas" class="form-check-input" v-model="data.nauseasVomitos" value="nauseas" >
                        <label for="nauseas" class="form-check-label">Si</label>
                    </div>
                    <div class="form-check-inline">
                        <input type="radio" name="nauseasVomitos" id="vomitos" class="form-check-input" v-model="data.nauseasVomitos" value="vomitos" checked>
                        <label for="vomitos" class="form-check-label">No</label>
                    </div>
                </div>
            </div>
            <div class="col lg-4">
                <div class="form-floating" >
                    <p class="m-1" >Consumo de analgesico de rescate</p>
                    <div class="form-check-inline">
                        <input type="radio" name="consumoAnalgesico" id="siConsumo" class="form-check-input" v-model="data.consumoAnalgesico" value="si" >
                        <label for="siConsumo" class="form-check-label">Si</label>
                    </div>
                    <div class="form-check-inline">
                        <input type="radio" name="consumoAnalgesico" id="noConsumo" class="form-check-input" v-model="data.consumoAnalgesico" value="no" checked>
                        <label for="noConsumo" class="form-check-label">No</label>
                    </div>
                </div>
                <div v-if="data.consumoAnalgesico === 'si'">
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
                        <input type="radio" name="depresionRespiratoria" id="siDepresion" class="form-check-input" v-model="data.depresionRespiratoria" value="si" >
                        <label for="siDepresion" class="form-check-label">Si</label>
                    </div>
                    <div class="form-check-inline">
                        <input type="radio" name="depresionRespiratoria" id="noDepresion" class="form-check-input" v-model="data.depresionRespiratoria" value="no" checked>
                        <label for="noDepresion" class="form-check-label">No</label>
                    </div>
                </div>
                <div v-if="data.depresionRespiratoria === 'si'">
                    <div class="form-floating mt-3">
                        <textarea name="spo2Bajo" id="spo2Bajo" cols="30" rows="3" class="form-control" v-model="data.spo2Bajo"></textarea>
                        <label for="spo2Bajo">Saturación de Oxígeno mas bajo</label>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        name: "DatosPostOperatoriosForm",
        data: () => ({
            data: {},
            
        }),
    }
</script>