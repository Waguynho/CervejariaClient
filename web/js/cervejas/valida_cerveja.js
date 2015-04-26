
function validaNome() {
    try {
        var nome_cerveja = $("#nome").val();

        if (nome_cerveja == "" || nome_cerveja == null) {

            zeraCampo("nome", "Nome Inválido");

            return false;
        }

        return true;
        
    } catch (e) {
        alert("O PROBLEMA NO METODO: validaNome \n" + e.message);
        return false;
    }



}

function validaAno() {
    try {

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
    } catch (e) {
        alert("O PROBLEMA NO METODO: validaAno \n" + e.message);
        return false;
    }


}

function zeraCampo(nome_campo, msg) {
    try {
        alert(msg);
        $("#" + nome_campo).val(null);
        $("#" + nome_campo).focus();
    } catch (e) {
        alert("O PROBLEMA NO METODO: zeraCampo \n" + e.message);
    }
}

function isValidouFormCerveja() {
    try {
        if (!validaNome()) {
            return false;
        }

        if (!validaAno()) {
            return false;
        }

        return  true;
    } catch (e) {
        alert("O PROBLEMA NO METODO: isValidouFormCerveja \n" + e.message);
        return false;
    }
}

function exibirMenuBusca(exibir) {
    try {
        if (exibir == true) {

            $("#menu_buscar").show();
        } else {

            $("#menu_buscar").hide();
        }
    } catch (e) {
        alert("O PROBLEMA NO METODO: exibirMenuBusca \n" + e.message);
    }
}

