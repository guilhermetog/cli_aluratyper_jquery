var tempo_inicial = $('#tempo-digitacao').text()

function reiniciaJogo(){
    buscarFrase();
    esconderPlacar();
    inicializaContadores()
    inicializaCronometro(tempo_inicial)
    $("#btn_reiniciar").attr("disabled",true)
    $("#btn_frase").attr("disabled", false)
}

function finalizaJogo(){
    $("#btn_reiniciar").attr("disabled", false)
    $("#btn_frase").attr("disabled", true)
    desabilitarTyper()
    inserePlacar()
    mostrarPlacar()
}

function bloqueiaJogo(){
    $("#btn_reiniciar").attr("disabled", false)
    esconderPlacar()
    desabilitarTyper()
}

function desbloqueiaJogo(){
    $("#btn_reiniciar").attr("disabled", true)
    habilitarTyper()
}
