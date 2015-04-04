var request = null;
var dados;
var $scope;
var cerveja_service = {
    getCervejas: function (url, escopo) {
        $scope = escopo;
        request = retornaObjetoRequest();

        //var url = "http://localhost:8080/Cervejaria1/cervejas/4";
        debugger;
        request.open("GET", url, true);

        request.onreadystatechange = retornaDados;

        request.send(null);

    }

};


function retornaDados() {
    try {
        debugger;
        if (request.readyState == 4) {


            var RESULTADO = request.responseText;

            dados = JSON.parse(RESULTADO);

            $scope.cervejas = dados;

        }

    } catch (e) {
        alert("O PROBLEMA " + e.message);
    }

}


