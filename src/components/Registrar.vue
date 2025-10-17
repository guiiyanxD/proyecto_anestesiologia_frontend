<template>
    <h1 style="text-align: start;">Nuevo registro</h1>

    <div>
        <datos-personales-form></datos-personales-form>
    </div>


</template>
<script>
    import DatosPersonalesForm from './Forms/DatosPersonales.vue'; 
   
    export default{
        name:"RegistrarComponent",
        data: ()=>({
            datosPersonales: true,
            
        }),
        components:{ DatosPersonalesForm,},
    }
</script>