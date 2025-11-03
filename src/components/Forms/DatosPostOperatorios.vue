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
                    <input type="number" name="despertar" class="form-control" v-model="data.recuperacionPostAnestesia" required>
                    <label for="despertar">Tiempo de recuperación Post Anestésica (min)</label>
                    <small>Tiempo desde la extubación Aldrete > 9</small>
                </div>
            </div>
            <div class="col lg-6">
                <div class="form-floating">
                    <input type="number" min="1" max="6" name="ramsay" class="form-control" v-model="data.ramsay" required>
                    <label for="ramsay">Escala de Ramsay</label>
                    <small>Escala de 1 a 6</small>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col lg-6">
                <div class="form-floating">
                    <input type="number" min="1" max="10" name="evaIngreso" class="form-control" v-model="data.evaIngreso" required>
                    <label for="evaIngreso">Escala EVA de ingreso</label>
                    <small>Escala de 1 a 10</small>
                </div>
            </div>
            <div class="col lg-6">
                <div class="form-floating">
                    <input type="number" min="1" max="10" name="eva1hr" class="form-control" v-model="data.eva1hr" required>
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
                        <input type="checkbox" name="nauseas" id="nauseas" class="form-check-input" v-model="data.nauseas" value="1" >
                        <label for="nauseas" class="form-check-label">Nauseas</label>
                    </div>
                    <div class="form-check-inline">
                        <input type="checkbox" name="vomitos" id="vomitos" class="form-check-input" v-model="data.vomitos" value="1">
                        <label for="vomitos" class="form-check-label">Vomitos</label>
                    </div>
                </div>
            </div>
            <div class="col lg-4">
                <div class="form-floating" >
                    <p class="m-1" >Consumo de analgesico de rescate</p>
                    <div class="form-check-inline">
                        <input type="radio" name="consumoAnalgesico" id="siConsumo" class="form-check-input" v-model="data.consumoAnalgesico" value=1 required>
                        <label for="siConsumo" class="form-check-label">Si</label>
                    </div>
                    <div class="form-check-inline">
                        <input type="radio" name="consumoAnalgesico" id="noConsumo" class="form-check-input" v-model="data.consumoAnalgesico" value=0 required>
                        <label for="noConsumo" class="form-check-label">No</label>
                    </div>
                </div>
                <div v-if="data.consumoAnalgesico == 1">
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
                        <input type="radio" name="depresionRespiratoria" id="siDepresion" class="form-check-input" v-model="data.depresionRespiratoria" value=1 required>
                        <label for="siDepresion" class="form-check-label">Si</label>
                    </div>
                    <div class="form-check-inline">
                        <input type="radio" name="depresionRespiratoria" id="noDepresion" class="form-check-input" v-model="data.depresionRespiratoria" value=0 required>
                        <label for="noDepresion" class="form-check-label">No</label>
                    </div>
                </div>
                <div v-if="data.depresionRespiratoria == 1">
                    <div class="form-floating mt-3">
                        <textarea name="spo2Bajo" id="spo2Bajo" cols="30" rows="3" class="form-control" v-model="data.spo2Bajo"></textarea>
                        <label for="spo2Bajo">Saturación de Oxígeno mas bajo</label>
                    </div>
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
                    <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    {{ isLoading ? ' Guardando...' : 'Guardar' }}
                </button>               
            </div>
            <div class="col-lg-6 d-grid mt-1">
               <button 
                    class="btn btn-secondary"
                    :disabled="isLoading" 
                >
                    Salir
                </button>              
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
                recuperacionPostAnestesia: 0, 
                ramsay : 0,
                evaIngreso : 0,
                eva1hr : 0,
                nauseas : false,
                vomitos : false,
                consumoAnalgesico : false,
                tipoAnalgesico:  "",
                depresionRespiratoria :  false,
                spo2Bajo : "",
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
          async  save(){
                this.isLoading = true;
                this.data.userId = this.userId;
                try{
                    const response = await fetch('/api/saveDatosPostOperatorios', {
                        method: 'POST',
                        headers: {
                        "Content-Type": "application/json"
                        },
                        body: JSON.stringify(this.data)
                    });

                    const data = await response.json();
                    if(!response.ok){
                        throw new Error(`Error en la solicitud: `)
                    }

                    if(data.status === 'failed'){
                        alert("Error al cargar los datos" + data.message);
                    }else{
                        this.$router.push({
                            name: "perfil", 
                            params:{
                                userId: data.data,
                            }
                        });
                    }
                }catch(error){
                    console.error('Error al guardar datos:', error);
                    alert('Error al guardar los datos. Inténtelo de nuevo. Detalles: '+ error.message);
                }finally{
                    this.isLoading = false;
                    this.data = {};
                }
            },  
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