<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <datos-intra-operatorios-form 
                    :userId="userId">
                </datos-intra-operatorios-form>
            </div>
        </div>
    </div>
</template>

<script>
    import DatosIntraOperatoriosForm from './Forms/DatosIntraOperatorios.vue';
 export default {
    name: 'RegistrarDatosIntraOperatorios',
    data: () => ({
       userId: null,
    }),
    mounted() {
       this.userId = this.$route.params.userId;
    },
    components: {
       DatosIntraOperatoriosForm,
    },
 }
</script>