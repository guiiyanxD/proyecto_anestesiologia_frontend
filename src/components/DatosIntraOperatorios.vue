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
            data: {},
            
        }),
    }
</script>