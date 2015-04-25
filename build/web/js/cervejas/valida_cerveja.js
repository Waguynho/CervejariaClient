
function validaNome() {

    var nome_cerveja = $("#nome").val();

    if (nome_cerveja == "" || nome_cerveja == null) {

        zeraCampo("nome", "Nome Inválido");

        return false;
    }
    
    return true;

}

function validaAno() {

    var ano_cerveja = $("#ano").val();

    if (isNaN(ano_cerveja)) {

        zeraCampo("ano", "Ano Inválido");

        return false;
    }

    var valida = /\d{4}/;

    if (!valida.test(ano_cerveja)) {

        zeraCampo("ano", "Ano Inválido");

        return false;
    }
    
    return  true;
}

function zeraCampo(nome_campo, msg) {

    alert(msg);
    $("#" + nome_campo).val(null);
    $("#" + nome_campo).focus();
}

function isValidouFormCerveja() {
    
     if (!validaNome()) {
        return false;
    }
    
     if (!validaAno()) {
        return false;
    }
    
    return  true;
}

function exibirMenuBusca(exibir) {
    
    if (exibir == true) {
        
         $("#menu_buscar").show();
    }else{
        
         $("#menu_buscar").hide();
    }
}