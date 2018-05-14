    function inserirUsuario(usuario){
        if($(`select>option:contains(${usuario})`).length === 0){
            $("#usuarios").prepend($("<option>").attr('value', usuario).attr('selected', true).text(usuario))
            $(`select>option[value='base']`).remove()
        }
    }

    function trocarInputUsuario(){
        $('#usuarios').toggleClass('invisible')
        $('#usuario_novo').toggleClass('invisible')
    }