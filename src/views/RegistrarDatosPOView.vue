
<template>
    <div class="container">
        <div class="row">
            <div class="col lg-12 p-4" style="border:solid 1px #000">
                <registrar-datos-post-operatorios/>
            </div>
        </div>
    </div>
</template>

<script>
    import RegistrarDatosPostOperatorios from '@/components/RegistrarDatosPostOperatorios.vue'
    

    export default {
        name: 'RegistrarDatosPOView',
        components: {RegistrarDatosPostOperatorios}
    }
</script>