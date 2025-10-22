<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h2>Registrar Datos Intra Operatorios para Usuario ID:</h2>
                <p> {{ userId }}</p>
            </div>
        </div>
    </div>
</template>

<script>
 export default {
     name: 'RegistrarDatosIntraOperatorios',
     data: () => ({
        userId: null,
     }),
     mounted() {
        this.userId = this.$route.params.userId;
     }
 }
</script>