
<template>
    <div class="container">
        <div class="row">
            <div class="col lg-12 p-4" >
                <registrar-datos-intra-operatorios/>
            </div>
        </div>
    </div>
</template>

<script>
    import RegistrarDatosIntraOperatorios from '@/components/RegistrarDatosIntraOperatorios.vue'
    

    export default {
        name: 'RegistrarDatosIOView',
        components: {RegistrarDatosIntraOperatorios}
    }
</script>