<template>
    <h1 style="color: rebeccapurple">Este es el perfil del usuario</h1>
    <p>{{ this.userIdd }}</p>
</template>

<script>
 export default {
    name: "perfilComponent",
    mounted() {
        const userId = this.$route.params.userId;
        console.log("ID del usuario:", userId);
    },
    prop: {
        userIdd: {
            type: String,
            required: true,
        }
    }
 }
</script>