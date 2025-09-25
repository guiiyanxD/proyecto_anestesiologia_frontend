<template>
    <h1>{{ message }}</h1>
</template>

<script>
    export default{
        name: 'welcomeApp',
        description: "Main page for app",
        props: {
            message: {
                type: String, 
                default: "Bienvenido",
            },
        }
    }
</script>