<template>
    <h1 style="text-align: center;">Formulario</h1>
    
    <div v-if="datosPersonales == false">
        <datos-personales-form></datos-personales-form>
    </div>
    <div v-if="datosIntraOperatorio == false">
        <datos-intra-operatorios-form></datos-intra-operatorios-form>
    </div>


</template>
<script>
    import DatosPersonalesForm from './DatosPersonales.vue'; 
    import DatosIntraOperatoriosForm from './DatosIntraOperatorios.vue';   
    export default{
        name:"RegistrarComponent",
        data: ()=>({
            datosPersonales: true,
            datosIntraOperatorio: false,
            datosPostOperatorio: false,
        }),
        components:{ DatosPersonalesForm, DatosIntraOperatoriosForm},
    }
</script>