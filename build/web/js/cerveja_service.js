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

        request.onreadystatechange = sucesso;

        request.setRequestHeader("Content-Type", "application/json");

        debugger;
        var cerveja_transformada = JSON.stringify(cerveja);

        request.send(cerveja_transformada);

    }

};


function sucesso() {
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


