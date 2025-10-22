
<template>
    <div class="container">
        <div class="row">
            <div class="col lg-12 p-4" style="border:solid 1px #000">
                <registrar-datos-intra-operatorios/>
            </div>
        </div>
    </div>
</template>

<script>
    import RegistrarDatosIntraOperatorios from '@/components/RegistrarDatosIntraOperatorios.vue'
    

    export default {
        name: 'RegistrarView',
        components: {RegistrarDatosIntraOperatorios}
    }
</script>