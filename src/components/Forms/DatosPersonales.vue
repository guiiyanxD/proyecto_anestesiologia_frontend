<template>
    <form v-on:submit.prevent="save">
        <div class="row mt-3 mb-0">
            <div class="text-center text-primary">
                <h4>Datos Personales</h4>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col lg-6">
                <div class="form-floating">
                    <input type="date" class="form-control" v-model="data.fechaNacimiento" required>
                    <label for="fechaNacimiento">Fecha de nacimiento</label>
                </div>
            </div>
            <div class="col lg-6">
                <div class="form-floating">
                    <input type="date" id="fechaCirugia" class="form-control" v-model="data.fechaCirugia" placeholder="Ingrese sus apellidos" @change="calculoEdad()" required>
                    <label for="fechaCirugia">Fecha de la cirugia</label>
                </div>
            </div>    
        </div> 
       <div class="row mt-3">
            <div class="col-lg-6">
                <div class="form-floating">
                    <p class="m-1" style="align-items: start;">Genero:</p>
                    <div class="form-check-inline">
                        <input type="radio" name="genero" id="masculino" class="form-check-input" v-model="data.genero" value="masculino" required>
                        <label for="masculino" class="form-check-label"> Masculino</label>
                    </div>
                    <div class="form-check-inline">
                        <input type="radio" name="genero" id="femenino" class="form-check-input" v-model="data.genero" value="femenino" required>
                        <label for="femenino" class="form-check-label"> Femenino</label>
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
                    <input type="number" id="peso" name="peso" class="form-control" placeholder="" v-model="data.peso" @change="calculoImc" required>
                    <label for="peso">Peso (kg)</label>
                    
                </div>
            </div>
            <div class="col lg-6">
                <div class="form-floating">
                    <input type="number" id="talla" name="talla" class="form-control" placeholder="" v-model="data.talla" @change="calculoImc" required>
                    <label for="talla">Talla (cm)</label>
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
                        <input type="radio" name="asa" id="asa I" class="form-check-input" v-model="data.asa" value="Asa I" required>
                        <label for="asa1" class="form-check-label">ASA I</label>
                    </div>
                    <div class="form-check-inline">
                        <input type="radio" name="asa" id="asa II" class="form-check-input" v-model="data.asa" value="Asa II" required>
                        <label for="asa2" class="form-check-label">ASA II</label>
                    </div>
                    <div class="form-check-inline">
                        <input type="radio" name="asa" id="asa III" class="form-check-input" v-model="data.asa" value="Asa III" required>
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
                        <input type="radio" name="tipoCirugia" id="colecistectomia" class="form-check-input" v-model="data.tipoCirugia" value="colecistectomia" required>
                        <label for="colecistectomia" class="form-check-label">Colecistectomia</label>
                    </div>
                    <div class="form-check-inline">
                        <input type="radio" name="tipoCirugia" id="hernorrafia" class="form-check-input" v-model="data.tipoCirugia" value="hernorrafia" required>
                        <label for="hernorrafia" class="form-check-label">Hernorrafia</label>
                    </div>
                    <div class="form-check-inline">
                        <input type="radio" name="tipoCirugia" id="bariatrica" class="form-check-input" v-model="data.tipoCirugia" value="bariatrica" required>
                        <label for="bariatrica" class="form-check-label">Bariatrica</label>
                    </div>
                    <div class="form-check-inline">
                        <input type="radio" name="tipoCirugia" id="otro" class="form-check-input" v-model="data.tipoCirugia" value="otro"  required>
                        <label for="otro" class="form-check-label">Otros</label>
                    </div>
                </div>
            </div>
            <div v-if="data.tipoCirugia === 'otro'">
                <div class="form-floating mt-3">
                    <textarea name="otraCirugia" id="otraCirugia" cols="30" rows="3" class="form-control" v-model="data.otraCirugia"></textarea>
                    <label for="otraCirugia">Otra Cirugia</label>
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
        name:"DatosPersonalesForm",
        data: ()=>({
            data:{},
            imc:0,
        }),
        computed:{
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
                const fechaNacimiento = new Date(this.data.fechaNacimiento);
                const fechaCirugia = new Date(this.data.fechaCirugia);
                let edad = fechaCirugia.getFullYear() - fechaNacimiento.getFullYear();
                const mes = fechaCirugia.getMonth() - fechaNacimiento.getMonth();

                if (mes < 0 || (mes === 0 && fechaCirugia.getDate() < fechaNacimiento.getDate())) {
                    edad--;
                }
                this.data.edad = edad;
            },
            save(){
                const dataToSave = {
                    fechaNacimiento: this.data.fechaNacimiento,
                    fechaCirugia: this.data.fechaCirugia,
                    genero: this.data.genero,
                    edad: this.data.edad,
                    peso: this.data.peso,
                    talla: this.data.talla,
                    imc: this.imc,
                    asa: this.data.asa,
                    tipoCirugia: this.data.tipoCirugia,
                    otraCirugia: this.data.otraCirugia
                };
                fetch('/api/saveDatosPersonales', {
                    method: 'POST',
                    headers: {
                       "Content-Type": "application/json"
                    },
                    body: JSON.stringify(dataToSave)
                })
                .then(response => response.json())
                .then(data => {
                    if(data.status === 'failed'){
                        alert('Estos datos ya existen: '+ data.message);
                    }
                })
                .catch((error) => {
                    alert('Errores: '+ error);
                });
                

            },
        }
    }
</script>