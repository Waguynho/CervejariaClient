modulo_cerveja

        .controller('cerveja_controller', ['$scope', '$http', function ($scope, $http) {

                $scope.cervejas = [];
                debugger;

                $http.get('http://localhost:8080/Cervejaria1/cervejas').success(function (data) {
                    debugger;
                    $scope.cervejas = data;
                });

//                $.ajax({
//                    //pegando a url apartir da action do form
//                    url: 'http://localhost:8080/Cervejaria1/cervejas',
//                    data: null,
//                    type: 'GET',
//                    contentType: "application/json; charset=utf-8",
//                    dataType: "json",
//                    crossDomain: true,
//                    async: true,
//                    success: function (data, XMLHttpRequest, jqXHR) {
//                        try {
//                            debugger;
//                            if (jqXHR.readyState == 4) {
//
//                                console.log(data);
//                                $scope.cervejas = data;
//                            }
//
//                        } catch (e) {
//                            console.log("O PROBLMEMA É: " + e.message);
//                        }
//
//                    },
//                    error: function (data) {
//                        debugger;
//                        //var resultado = JSON.parse(data);
//                        console.log(data);
//                    }
//                });



            }])

        .controller('pessoasAdicionarController', function ($scope) {

            $scope.adicionar = function () {
                debugger;
                $scope.pessoas.push($scope.pessoa);
                alert('Salvo com sucesso');
                $scope.pessoa = null;

            }

        })
        .controller('pessoaExcluirController', function ($scope, $routeParams) {

            debugger;
            $scope.pessoas.splice($routeParams.index, 1);
            alert('Excluido com sucesso!');

        })
        .controller('editarCervejasController', function ($scope, $routeParams) {
            debugger;
            $scope.cerveja = $scope.cervejas[$routeParams.index];

        });

