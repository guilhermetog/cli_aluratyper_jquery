$(function() {
    var texto_referencia;

    desabilitarTyper()
    carregarTabela()

    $("#btn_reiniciar").click(reiniciaJogo);

    $('#btn_placar').click(acionarPlacar)
   
    $("#btn_frase").click(function(){buscarFrase($('#id_frase').val())});
   
    $("#btn_sync").click(salvarTabela)

    $('select').on('change',function(){
        if($(this).val() === "outro"){
           trocarInputUsuario()
        }
    })

    $('#btn_novoUsuario').click(function(){
        var novo_usuario = $('#usuario_novo>input').val()
        if(novo_usuario !== ''){
            $('#usuario_novo>input').val('')
            inserirUsuario(novo_usuario)
            trocarInputUsuario()
            if($('#btn_reiniciar').attr('disabled')){
                reiniciaJogo()
            }
        }
    })

    $('#btn_cancelaUsuario').click(function(){
        if($('select').val() !== 'base'){
            $('#usuario_novo>input').val('')
            $('#usuarios').val($('#usuarios>option:first-child').val())
            trocarInputUsuario()
        }
    })
});