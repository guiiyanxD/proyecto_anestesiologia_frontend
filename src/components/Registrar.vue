<template>
    <h1 style="text-align: center;">Formulario</h1>
    <datos-personales-form></datos-personales-form>


</template>
<script>
    import DatosPersonalesForm from './DatosPersonales.vue';    
    export default{
        name:"RegistrarComponent",
        data: ()=>({
            
        }),
        components:{ DatosPersonalesForm},
    }
</script>