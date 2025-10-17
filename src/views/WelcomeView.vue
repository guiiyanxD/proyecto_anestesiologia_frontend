<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <Welcome message="Bienvenido"/>
                <div class="d-flex justify-content-center">
                    <!-- <img height="250vh" alt="logo Dra. Cecilia Diaz" src="../assets/logoDra.png"> -->
                </div>
                
                <router-link class="btn btn-success" to="/registrar">Registrar</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import Welcome from '@/components/Welcome.vue'
    export default{
        components: { Welcome },
    }
</script>