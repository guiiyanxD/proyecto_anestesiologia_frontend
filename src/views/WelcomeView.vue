<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <Welcome message="Bienvenida, Dra."/>
            </div>
        </div>
        <div class="row">
            <ultimos-registros></ultimos-registros>
        </div>  
    </div>
</template>

<script>
    import Welcome from '@/components/Welcome.vue';
    import UltimosRegistros from '@/components/UltimosRegistros.vue';
    export default{
        components: { Welcome, UltimosRegistros },
    }
</script>