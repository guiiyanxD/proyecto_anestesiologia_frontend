
<template>
    <div class="container">
        <div class="row">
            <div class="col lg-12 p-4" style="border:solid 1px #000">
                <registrar-component/>
            </div>
        </div>
    </div>
</template>

<script>
    import RegistrarComponent from '@/components/Registrar.vue'
    

    export default {
        name: 'RegistrarView',
        components: {RegistrarComponent}
    }
</script>