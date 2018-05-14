function inicializaContadores(){
    $("#qtCaracteres").text("0")
    $("#qtPalavras").text("0")
}

function inicializaCronometro(tempo_restante){
    var elemento = $("#tempo-digitacao")
    elemento.text(tempo_restante)
    typer.one('focus', ()=>{
        $("#btn_frase").attr('disabled', true)
        var tempo = setInterval(()=>{
            elemento.text(parseInt(elemento.text()) - 1)
            if(elemento.text() < 1){
                clearInterval(tempo)
                finalizaJogo()
            }
        },1000)
    })
}