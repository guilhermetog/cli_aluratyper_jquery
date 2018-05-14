function buscarFrase(id){
    if(id !== undefined && id !== ''){
        id = id-1
    }
    var data = {id}
    $("#texto_referencia").text("Buscando frases...")
    $.ajax({
        url:"https://guillhermetog-aluratyper.herokuapp.com/frases",
        data,
        success: trocaFrase,
        error: erroFrase
    })
}

function trocaFrase(data) {
    var frase = $("#texto_referencia");
    frase.removeClass('erro_frase')
    
    if(data.length > 1){
        var numeroAleatorio = Math.floor(Math.random() * data.length);
        frase.html("<strong> " + (numeroAleatorio + 1) +"- </strong> " + data[numeroAleatorio].texto);
        texto_referencia =  data[numeroAleatorio].texto;
    }else{
        frase.html("<strong> " + (data._id + 1) +"- </strong> " + data.texto);
        texto_referencia = data.texto;
    }

    tempo_inicial = parseInt((texto_referencia.length)/5)
    $("#tempo-digitacao").text(tempo_inicial)
    $("#numero-palavras").text((texto_referencia.split(/\S+/).length - 1)+ " ")
    
    desbloqueiaJogo()
}

function erroFrase(){
    $("#texto_referencia").text("Não foi possível localizar frases!")
    $("#texto_referencia").addClass('erro_frase')
    bloqueiaJogo()
}
