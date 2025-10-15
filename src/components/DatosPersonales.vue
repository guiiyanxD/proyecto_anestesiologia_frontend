<template>
    <form action="">
        <div class="row">
            <div class="col lg-12">
                <div class="input-group">
                    <span class="input-group-text">Matricula</span>
                    <input type="number" class="form-control" v-model="data.fechaNacimiento" @change="calculoEdad()">
                     <span class="input-group-text" id="basic-addon1">-</span>
                    <input type="number" class="form-control">
                     <span class="input-group-text" id="basic-addon1">-</span>
                    <input type="text" class="form-control">
                </div>
            </div>
        </div>
       <div class="row mt-3"> 
            
            <div class="col lg-12">
                <div class="form-floating">
                    <input type="date" id="fechaCirugia" class="form-control" v-model="data.fechaCirugia" placeholder="Ingrese sus apellidos">
                    <label for="fechaCirugia">Fecha de la cirugia</label>
                </div>
            </div>
       </div>
       <div class="row mt-3">
            <div class="col-lg-6">
                <div class="form-floating">
                    <p class="m-1" style="align-items: start;">Genero:</p>
                    <div class="form-check-inline">
                        <input type="radio" name="genero" id="masculino" class="form-check-input" v-model="data.genero" value="masculino" checked>
                        <label for="masculino" class="form-check-label">Masculino</label>
                    </div>
                    <div class="form-check-inline">
                        <input type="radio" name="genero" id="femenino" class="form-check-input" v-model="data.genero" value="femenino">
                        <label for="femenino" class="form-check-label">Femenino</label>
                    </div>

                </div>

            </div>
            <div class="col-lg-6">
                 <div class="form-floating">
                    <input type="number" id="edad" name="edad" class="form-control" placeholder="Ingrese su edad" v-model="data.edad" disabled>
                    <label for="edad">Edad</label>
                </div>
            </div>
       </div>
       <div class="row mt-3">
            <div class="col lg-6">
                <div class="form-floating">
                    <input type="number" id="peso" name="peso" class="form-control" placeholder="" v-model="data.peso" @change="calculoImc">
                    <label for="peso">Peso</label>
                    
                </div>
            </div>
            <div class="col lg-6">
                <div class="form-floating">
                    <input type="number" id="talla" name="talla" class="form-control" placeholder="" v-model="data.talla" @change="calculoImc">
                    <label for="talla">Talla</label>
                </div>
            </div>
       </div>
       <div class="row mt-3">
            <div class="col lg-6">
                <div class="form-floating">
                    <input type="number" id="imc" name="imc" class="form-control" :value="this.imc" placeholder="" disabled>
                    <label for="imc">Indice de masa corporal</label>
                    
                </div>
            </div>
            <div class="col-lg-6">
                <div class="form-floating">
                    <p class="m-1" style="align-items: start;">Clasificacion ASA:</p>
                    <div class="form-check-inline">
                        <input type="radio" name="asa" id="asa1" class="form-check-input" v-model="data.asa" value="asa1">
                        <label for="asa1" class="form-check-label">ASA I</label>
                    </div>
                    <div class="form-check-inline">
                        <input type="radio" name="asa" id="asa2" class="form-check-input" v-model="data.asa" value="asa2">
                        <label for="asa2" class="form-check-label">ASA II</label>
                    </div>
                    <div class="form-check-inline">
                        <input type="radio" name="asa" id="asa3" class="form-check-input" v-model="data.asa" value="asa3">
                        <label for="asa3" class="form-check-label">ASA III</label>
                    </div>
                </div>
            </div>
       </div>
       <div class="row mt-3">
            
            <div class="col-lg-12">
                <div class="form-floating" >
                    <p class="m-1" >Tipo de Cirugia:</p>
                    <div class="form-check-inline">
                        <input type="radio" name="tipoCirugia" id="colecistectomia" class="form-check-input" v-model="data.tipoCirugia" value="colecistectomia" >
                        <label for="colecistectomia" class="form-check-label">Colecistectomia</label>
                    </div>
                    <div class="form-check-inline">
                        <input type="radio" name="tipoCirugia" id="hernorrafia" class="form-check-input" v-model="data.tipoCirugia" value="hernorrafia">
                        <label for="hernorrafia" class="form-check-label">Hernorrafia</label>
                    </div>
                    <div class="form-check-inline">
                        <input type="radio" name="tipoCirugia" id="bariatrica" class="form-check-input" v-model="data.tipoCirugia" value="bariatrica">
                        <label for="bariatrica" class="form-check-label">Bariatrica</label>
                    </div>
                    <div class="form-check-inline">
                        <input type="radio" name="tipoCirugia" id="otro" class="form-check-input" v-model="data.tipoCirugia" value="otro" >
                        <label for="otro" class="form-check-label">Otro</label>
                    </div>
                </div>
            </div>
       </div>
    </form>
</template>

<script>
    export default {
        name:"DatosPersonalesForm",
        data: ()=>({
            data:{},
            imc:0,
        }),
        computed:{
            calculateImc() {
                const peso = this.data.peso;
                const talla = this.data.talla;

                if (peso > 0 && talla > 0) {
                    const imcValue = (peso / ((talla / 100) * (talla / 100)));
                    return imcValue.toFixed(1);
                } else {
                    return 0;
                }
            }
        },
        methods:{
            calculoImc() {
                const peso = this.data.peso;
                const talla = this.data.talla;

                if (peso > 0 && talla > 0) {
                    const imcValue = (peso / ((talla / 100) * (talla / 100)));
                    this.imc = imcValue.toFixed(1);
                } else {
                    return 0;
                }
            },
            calculoEdad(){
                const fechaNacimiento = (this.data.fechaNacimiento);
                const fechaActual = new Date();
                let edad = fechaActual.getFullYear() - fechaNacimiento;
                /*const mes = fechaActual.getMonth() - fechaNacimiento.getMonth();

                if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
                    edad--;
                }*/
                console.log("Nuevo valor de edad:", edad);
                this.data.edad = edad;
            }
        }
    }
</script>