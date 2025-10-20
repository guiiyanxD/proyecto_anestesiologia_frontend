<template>
    <form action="">
        <div class="row mt-3 mb-0">
            <div class="text-center text-primary">
                <h4>Datos Intra Operatorios</h4>
            </div>
        </div>
        <div class="row">
             <div class=" text-primary">
                <h4>Dosis de induccion</h4>
            </div>
        </div>
        <div class="row">
            <div class="col lg-6">
                <div class="form-floating">
                    <input type="number" name="induccionPropofol" class="form-control" v-model="data.induccionPropofol">
                    <label for="induccionPropofol">Propofol (mg)</label>
                </div>
            </div>
            <div class="col lg-6">
                <div class="form-floating">
                    <input type="number" name="induccionDexmedetomidina" class="form-control" v-model="data.induccionDexmedetomidina">
                    <label for="induccionDexmedetomidina">Dexmedetomidina (mcg/kg)</label>
                </div>
            </div>    
        </div> 
        <div class="row mt-3">
            <div class="col lg-6">
                <div class="form-floating">
                    <input type="number" name="induccionLidocaina" class="form-control" v-model="data.induccionLidocaina">
                    <label for="induccionLidocaina">Lidocaina (mg/kg)</label>
                </div>
            </div>
            <div class="col lg-6">
                <div class="form-floating">
                    <input type="number" name="induccionKetamina" class="form-control" v-model="data.induccionKetamina">
                    <label for="induccionKetamina">Ketamina (mg/kg)</label>
                </div>
            </div>    
        </div>      
        <div class="row mt-3">
             <div class=" text-primary">
                <h4>Dosis de mantenimiento</h4>
            </div>
        </div>
        <div class="row">
            <div class="col lg-6">
                <div class="form-floating">
                    <input type="number" name="mantenimientoPropofol" class="form-control" v-model="data.mantenimientoPropofol">
                    <label for="mantenimientoPropofol">Propofol (mg)</label>
                </div>
            </div>
            <div class="col lg-6">
                <div class="form-floating">
                    <input type="number" name="mantenimientoDexmedetomidina" class="form-control" v-model="data.mantenimientoDexmedetomidina">
                    <label for="mantenimientoDexmedetomidina">Dexmedetomidina (mcg/kg)</label>
                </div>
            </div>    
        </div> 
        <div class="row mt-3">
            <div class="col lg-6">
                <div class="form-floating">
                    <input type="number" name="mantenimientoLidocaina" class="form-control" v-model="data.mantenimientoLidocaina">
                    <label for="mantenimientoLidocaina">Lidocaina (mg/kg)</label>
                </div>
            </div>
            <div class="col lg-6">
                <div class="form-floating">
                    <input type="number" name="mantenimientoKetamina" class="form-control" v-model="data.mantenimientoKetamina">
                    <label for="mantenimientoKetamina">Ketamina (mg/kg)</label>
                </div>
            </div>    
        </div>
        <div class="row mt-3">
            <div class=" text-primary">
                <h4>Tiempo quirurgico</h4>
            </div>
        </div>
        <div class="row">
            <div class="col lg-6">
                <div class="form-floating">
                    <input type="number" name="despertar" class="form-control" v-model="data.despertar">
                    <label for="despertar">Despertar post-operatorio (min)</label>
                </div>
            </div>
            <div class="col lg-6">
                <div class="form-floating">
                    <input type="number" name="tiempoQx" class="form-control" v-model="data.tiempoQx">
                    <label for="tiempoQx">Tiempo quirurgico (min)</label>
                </div>
            </div>    
        </div> 
        <div class="row mt-3">
            <div class=" text-primary">
                <h4>Eventos Intra Operatorios</h4>
            </div>
        </div>
        <div class="col lg-12">
            <div class="row">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="checkPresionArterial" v-model="data.presionArterial" value=1>
                    <label class="form-check-label" for="checkPresionArterial">
                        Presion arterial (PA)
                    </label>
                    <div v-if="this.data.presionArterial === true" class="form-floating mt-2">
                        <input type="text" name="valorPresionArterial" class="form-control" v-model="data.valorPresionArterial" placeholder="Valor de PA">
                        <label for="valorPresionArterial">Valor presion arterial</label>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value=1 id="checkFrecuenciaCardiaca" v-model="data.frecuenciaCardiaca">
                    <label class="form-check-label" for="checkFrecuenciaCardiaca">
                        Frecuencia cardiaca (FC)
                    </label>
                    <div v-if="this.data.frecuenciaCardiaca === true" class="form-floating mt-2">
                        <input type="text" name="valorFrecuenciaCardiaca" class="form-control" v-model="data.valorFrecuenciaCardiaca" placeholder="Valor de FC">
                        <label for="valorFrecuenciaCardiaca">Valor frecuencia cardiaca</label>
                    </div>
                </div>
            </div>
            <div class="row">
                    <div class="form-check">
                         <input class="form-check-input" type="checkbox" value=1 id="checkCo2" v-model="data.co2">
                        <label class="form-check-label" for="checkCo2">
                            Co2
                    </label>
                    <div v-if="this.data.co2 === true" class="form-floating mt-2">
                        <input type="text" name="valorCo2" class="form-control" v-model="data.valorCo2" placeholder="Valor de Co2">
                        <label for="valorCo2">Valor Co2</label>
                    </div>
                </div>
            </div>    
            <div class="row">
                <div class="form-check">
                     <input class="form-check-input" type="checkbox" value=1 id="checkSatO2" v-model="data.satO2">
                    <label class="form-check-label" for="checkSatO2">
                        Saturacion O2
                    </label>
                    <div v-if="this.data.satO2 === true" class="form-floating mt-2">
                        <input type="text" name="valorSatO2" class="form-control" v-model="data.valorSatO2" placeholder="Valor de Saturacion O2">
                        <label for="valorSatO2">Valor Saturacion O2</label>
                    </div>
                </div>
            </div>    
            <div class="row">
                <div class="form-check">
                     <input class="form-check-input" type="checkbox" value=1 id="checkFR" v-model="data.frecuenciaRespiratoria">
                    <label class="form-check-label" for="checkFR">
                        Frecuencia respiratoria (FR)
                    </label>
                    <div v-if="this.data.frecuenciaRespiratoria === true" class="form-floating mt-2">
                        <input type="text" name="valorFR" class="form-control" v-model="data.valorFR" placeholder="Valor de FR">
                        <label for="valorFR">Valor frecuencia respiratoria</label>
                    </div>
                </div>
            </div>        
        </div> 
        

       <div class="row mt-3">
            <div class="col-lg-6 d-grid mt-2">
               <button class="btn btn-success" @click="save">Guardar</button>               
            </div>
            <div class="col-lg-6 d-grid mt-1">
               <button class="btn btn-secondary">Salir</button>               
            </div>
       </div>
    </form>
</template> 

<script>
    export default {
        name: "DatosIntraOperatoriosForm",
        data: () => ({
            data: {
            induccionPropofol: this.induccionPropofol,
            induccionDexmedetomidina: this.induccionDexmedetomidina,
            induccionLidocaina: this.induccionLidocaina,
            induccionKetamina: this.induccionKetamina,
            
            mantenimientoPropofol: this.mantenimientoPropofol,
            mantenimientoDexmedetomidina: this.mantenimientoDexmedetomidina,
            mantenimientoLidocaina: this.mantenimientoLidocaina,
            mantenimientoKetamina: this.mantenimientoKetamina,

            despertar: this.despertar,
            tiempoQx: this.tiempoQx,

            presionArterial: this.presionArterial ?? 0,
            valorPresionArterial: this.presionArterial != 0 ? this.valorPresionArterial : "",

            frecuenciaCardiaca : this.frecuenciaCardiaca ?? 0,
            valorFrecuenciaCardiaca: this.frecuenciaCardiaca != 0 ? this.valorFrecuenciaCardiaca : "",

            frecuenciaRespiratoria : this.frecuenciaRespiratoria ?? 0,
            valorFrecuenciaRespiratoria: this.frecuenciaRespiratoria != 0 ? this.valorFrecuenciaRespiratoria : "",

            co2 : this.co2 ?? 0,
            valorCo2 : this.co2 != 0 ? this.valorCo2 : "",

            satO2 : this.satO2 ?? 0 ,
            valorSatO2 : this.satO2 != 0 ? this.valorSatO2 : "",


       },
            
        }),
    }
</script>