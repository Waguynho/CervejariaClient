var request = null;
var url_base = "http://localhost:8080/Cervejaria1/cervejas/";
var dados;
var $scope;
var cerveja_service = {
    getCervejas: function (escopo) {

        $scope = escopo;

        request = retornaObjetoRequest();

        debugger;
        request.open("GET", url_base, true);

        request.onreadystatechange = retornaDados;

        request.send(null);

    },
    criaCerveja: function (cerveja) {

        request = retornaObjetoRequest();

        request.open("POST", url_base, true);

        request.onreadystatechange = sucessoSave;

        request.setRequestHeader("Content-Type", "application/json");

        debugger;
        var cerveja_transformada = JSON.stringify(cerveja);

        request.send(cerveja_transformada);

    },
    deletarCerveja: function (cerveja, escopo, indice) {

        dados = indice;
        $scope = escopo;//Apenas para atualizar o Form sem recarregar a pag.

        var url_delete = url_base + cerveja.codigo;

        request = retornaObjetoRequest();

        debugger;
        request.open("DELETE", url_delete, true);

        request.onreadystatechange = sucessoDelete;

        request.send(null);

    },
};

function sucessoDelete(teste) {
    try {

        if (request.readyState == 4) {

            if (request.status == 200) {
                debugger;
                alert('Excluído com sucesso!');

               $scope.cervejas.splice(dados,1);//Retiro do meu array o item excluido na posicão adequada

                //document.location = "http://localhost:8080/CervejariaClient1/#/";
                
                document.location = "#/";

            }
        }

    } catch (e) {
        alert("O PROBLEMA " + e.message);
    }

}

function sucessoSave() {
    try {

        if (request.readyState == 4) {

            debugger;
            var RESULTADO = request.responseText;

            if (request.status == 201) {

                alert('Salvo com sucesso!');
                $("form")[0].reset();
            }
        }

    } catch (e) {
        alert("O PROBLEMA " + e.message);
    }

}


function retornaDados() {
    try {

        if (request.readyState == 4) {
            debugger;

            var RESULTADO = request.responseText;

            dados = JSON.parse(RESULTADO);

            $scope.cervejas = dados;

        }

    } catch (e) {
        alert("O PROBLEMA " + e.message);
    }

}


