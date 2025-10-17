<template>
    <h1 style="text-align: center;">Formulario</h1>

    <div v-if="datosPersonales == false">
        <datos-personales-form></datos-personales-form>
    </div>
    <div v-if="datosIntraOperatorio == false">
        <datos-intra-operatorios-form></datos-intra-operatorios-form>
    </div>
    <div v-if="datosPostOperatorio == false">
        <datos-post-operatorios-form></datos-post-operatorios-form>
    </div>


</template>
<script>
    import DatosPersonalesForm from './DatosPersonales.vue'; 
    import DatosIntraOperatoriosForm from './DatosIntraOperatorios.vue';   
    import DatosPostOperatoriosForm from './DatosPostOperatorios.vue';
    export default{
        name:"RegistrarComponent",
        data: ()=>({
            datosPersonales: true,
            datosIntraOperatorio: true,
            datosPostOperatorio: false,
        }),
        components:{ DatosPersonalesForm, DatosIntraOperatoriosForm, DatosPostOperatoriosForm},
    }
</script>