<template>
    <Welcome message="Bienvenida, Doctora"/>
    <div class="d-flex justify-content-center">
        <img height="250vh" alt="logo Dra. Cecilia Diaz" src="../assets/logoDra.png">
    </div>
</template>

<script>
    import Welcome from '@/components/Welcome.vue'
    export default{
        components: { Welcome },
    }
</script>