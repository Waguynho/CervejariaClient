function carregaEventos() {
    if ($(document).ready()) {
        debugger;
        exibeBuscaAdequada();
        $("#option_set_ano").hide();
    }
}

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

function exibeBuscaAdequada(parameters) {
    try {

        $(".a1").click(function() {
            debugger;
            var op_selecionada = $(this).val();
            if (op_selecionada == "ano") {
                preencheOptionSetAno();
                $("#option_set_ano").show();
                $("#texto").hide();
            } else {
                $("#option_set_ano").hide();
                $("#texto").show();
            }

        });

    } catch (e) {
        alert("O PROBLEMA NO METODO: exibirMenuBusca \n" + e.message);
    }
}

function preencheOptionSetAno() {
    try {

        var minha_lista = document.getElementById("lista_anos");

        if (minha_lista[0] != null) {
            return;
        }

        var ano_inicial = 1900;

        for (i = ano_inicial; i <= 2500; i++) {

            if ((i == new Date().getFullYear())) {

                $("#lista_anos").append("<option selected='true' value=" + i + ">" + i + "</option>");
            }
            $("#lista_anos").append("<option value=" + i + ">" + i + "</option>");
        }

    } catch (e) {
        alert("O PROBLEMA NO METODO: preencheOptionSetAno \n" + e.message);
    }
}