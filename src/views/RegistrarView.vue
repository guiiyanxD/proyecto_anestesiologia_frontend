<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="row" style="padding: 5px; margin: 5px;">
                    <div class="col-lg-12 m-2" style="text-align: left;">
                        <h2>Registrar Paciente</h2>
                        
                    </div>
                </div>
                <div class="row" style="padding: 10px; margin: 15px;">
                    <div class="col-lg-3" style="background-color: #FFD1DC; ">
                        <p>Stepper</p>
                    </div>
                    <div class="col-lg-9" style="background-color: #f8f6f7; justify-items: start; ">
                            <div class="col-lg-12">
                                <div class="text-left">
                                    <h4 class="mt-1">
                                        Informacion del paciente
                                    </h4>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <form action="" >
                                    <div class="form-row">
                                        <div class="form-floating col-md-5">     
                                            <input type="text" class="form-control" id="matricula" placeholder="matricula">
                                            <label for="matricula">Matricula</label>
                                        </div>
                                        <div class="form-floating col-md-5">
                                            <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                                            <label for="inputPassword4">Password</label>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RegistrarView'
    }
</script>