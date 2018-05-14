var typer = $('#typer')

function habilitarTyper(){
    if(typer.attr('disabled') === 'disabled'){        
        typer.toggleClass('typer-desativado')
        typer.attr('disabled', false)
        typer.val("")
    }
}


function desabilitarTyper(){
    if(typer.attr('disabled') === undefined){
        typer.removeClass("borda-vermelha")
        typer.removeClass("borda-verde")
        typer.toggleClass('typer-desativado')
        typer.attr('disabled', true)
    }
}

typer.on('input', ()=>{
    $("#qtCaracteres").text(typer.val().length)
    $("#qtPalavras").text(typer.val().split(/\S+/).length -1)
    if(texto_referencia.substr(0,typer.val().length) == typer.val()){
        typer.removeClass("borda-vermelha")
        typer.addClass("borda-verde")
    }
    else{
        typer.removeClass("borda-verde")
        typer.addClass("borda-vermelha")
    }            
})

