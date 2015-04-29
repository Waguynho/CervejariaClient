var request = null;

var dados;
var $scope;
var cerveja_service = {
    getCervejas: function (escopo) {
        try {
            $scope = escopo;

            request = retornaObjetoRequest();

            debugger;
            request.open("GET", url_base, true);

            request.onreadystatechange = retornaDados;

            request.send(null);
        } catch (e) {
            alert("O PROBLEMA NO METODO: getCervejas \n" + e.message);
        }

    },
    criaCerveja: function (cerveja) {
        try {
            request = retornaObjetoRequest();

            request.open("POST", url_base, true);

            request.onreadystatechange = sucessoSave;

            request.setRequestHeader("Content-Type", "application/json");

            debugger;
            var cerveja_transformada = JSON.stringify(cerveja);

            request.send(cerveja_transformada);
        } catch (e) {
            alert("O PROBLEMA NO METODO: criaCerveja \n" + e.message);
        }
    },
    deletarCerveja: function (cerveja, escopo, indice) {
        try {
            dados = indice;//Usado pela função succesDelete p/ remover a linha excluida da tabela
            $scope = escopo;//Apenas para atualizar o Form sem recarregar a pag.

            var url_delete = url_base + cerveja.codigo;

            request = retornaObjetoRequest();

            debugger;
            request.open("DELETE", url_delete, true);

            request.onreadystatechange = sucessoDelete;

            request.send(null);
        } catch (e) {
            alert("O PROBLEMA NO METODO: deletarCerveja \n" + e.message);
        }


    },
    editarCerveja:  function (cerveja) {
        try {
            request = retornaObjetoRequest();

            request.open("PUT", url_base+cerveja.codigo, true);

            request.onreadystatechange = sucessoSave;

            request.setRequestHeader("Content-Type", "application/json");

            debugger;
            var cerveja_transformada = JSON.stringify(cerveja);

            request.send(cerveja_transformada);
        } catch (e) {
            alert("O PROBLEMA NO METODO: editarCerveja \n" + e.message);
        }
    }
};

function sucessoDelete(teste) {
    try {

        if (request.readyState == 4) {

            if (request.status == 200) {
                debugger;
                alert('Excluído com sucesso!');

                $scope.cervejas.splice(dados, 1);//Retiro do meu array o item excluido na posicão adequada

                //document.location = "http://localhost:8080/CervejariaClient1/#/";

                document.location = "#/";

            }
        }

    } catch (e) {
        alert("O PROBLEMA NO METODO: sucessoDelete \n" + e.message);
    }

}

function sucessoSave() {
    try {

        if (request.readyState == 4) {

            debugger;
            var RESULTADO = request.responseText;

            if (request.status == 201 ) {//Post

                alert('Criado com sucesso!');
                $("form")[0].reset();
                return;
            }
            
            if (request.status == 200 ) {//Put

                alert('Editado com sucesso!');
               return;
            }
            
            alert("ERRO NO SERVIDOR: "+request.status+" "+request.statusText);
        }

    } catch (e) {
        alert("O PROBLEMA NO METODO \n: sucessoSave" + e.message);
        alert("ERRO NO SERVIDOR: "+request.status+" "+request.statusText);
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
        alert("O PROBLEMA NO METODO: retornaDados \n" + e.message);
    }

}


