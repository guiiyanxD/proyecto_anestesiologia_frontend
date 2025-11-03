<template>
    <div class="container py-5">
        <div class="row">
            <div class="col col-lg-12">
                <perfil-component></perfil-component>
            </div>
        </div>
    </div>
</template>
<script>
import PerfilComponent from '@/components/Perfil.vue';
 export default {
    name: "perfilView",
    components:{ PerfilComponent}
 }
</script>