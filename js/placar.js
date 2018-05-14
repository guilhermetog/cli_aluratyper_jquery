function inserePlacar(){
    var placar = $("#placar").find('tbody')
    var usuario = $("#usuarios").val()
    var palavras = $("#qtPalavras").text()

    placar.append(insereLinha(usuario, palavras))
}

function insereLinha(usuario, pontuacao){
    var linha = $('<tr>')
    var colUsuario = $('<td>').attr('id', 'usuario').text(usuario)
    var colPontuacao = $('<td>').attr('id', 'pontuacao').text(pontuacao)

    var colDelete = $('<td>').append(
                        $('<a>').attr('href','#')
                        .addClass('btn_delete').append(
                            $('<i>').addClass('material-icons')
                                    .addClass('blue-text')
                                    .addClass('text-darken-4')
                                    .text('delete')
                        )
                    )

    linha.append(colUsuario)
    linha.append(colPontuacao)
    linha.append(colDelete)

    linha.find('.btn_delete').click(deletaLinha)

    return linha
}


function deletaLinha(event){
    event.preventDefault()
    var linha = $(this).parent().parent()
    linha.fadeOut(1000);
    setTimeout(function() {
        linha.remove();
    }, 1000);
}

function acionarPlacar(){
    $('#placar').stop().slideToggle()
}

function mostrarPlacar(){
    $('#placar').stop().slideDown()
    scrollPlacar();
}

function esconderPlacar(){
    $('#placar').stop().slideUp()
}

function scrollPlacar() {
    var posicaoPlacar = $("#placar").offset().top;

    $("body").animate(
    {
        scrollTop: posicaoPlacar + "px"
    }, 1000);
}

function salvarTabela(){
    var tabela_atual = montarTabela()
    console.log(tabela_atual)
    $.post({
        url:'http://localhost:3000/placar',
        data: {
            placar: tabela_atual
        }
    }).done(function(){
        setTimeout(function(){
            $('#modal').addClass('invisible')
        },1000)
        
    })

    $('#modal').removeClass('invisible')

}

function carregarTabela(){
    var tabela = $('#placar').find('tbody')
    $.get({
        url:'https://guillhermetog-aluratyper.herokuapp.com/placar',
        success: function(data){
            data.forEach(elemento =>{
                tabela.append(insereLinha(elemento.usuario, elemento.pontos))
                inserirUsuario(elemento.usuario)
            })
            if($('select').val() !== 'base'){
                reiniciaJogo()
            }else{
                trocarInputUsuario()
                $("#btn_reiniciar").attr("disabled",true)
                $("#btn_frase").attr("disabled", false)
            }
        }
    })
}


function montarTabela(){
    var tabela = $('#placar').find('tr').map(function(index){
       return {
            usuario:$(this).find('#usuario').text(),
            pontos: $(this).find('#pontuacao').text()
       }
   }).toArray()

   tabela.shift()

   return tabela
}