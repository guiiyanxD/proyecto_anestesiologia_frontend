<template>
    <h1>Este es el perfil del usuario 1</h1>
</template>

<script>
 export default {
    name: "perfilComponent",
    mounted() {
        const id = this.$route.params.id;
        console.log("ID del usuario:", id);
    }
 }
</script>