<template>
    Registrar datos post operatorios
   Aqui ttiene qu eir el formulario 
   <datos-post-operatorios-form :userId="userId"></datos-post-operatorios-form>

</template>

<script>
import DatosPostOperatoriosForm from './Forms/DatosPostOperatorios.vue';

    export default{
        name: "RegistrarDatosPostOperatorios",
        data: () => ({
            userId: null,
        }),
        mounted(){
            this.userId = this.$route.params.userId;
        },
        components:{
           DatosPostOperatoriosForm,
        }
    }
    
</script>