modulo_cerveja

        .controller('cerveja_controller', ['$scope', '$http', function ($scope, $http) {

//                $scope.cervejas = [];
//                debugger;
//                cerveja_service.getCervejas($scope);
//                debugger;
                
                
//=======================================
                $http.get('http://localhost:8080/Cervejaria1/cervejas').success(function (data, status, fun, header) {
                    debugger;
                    $scope.cervejas = data;
                }).error(function(data, status, fun, header) {
                    debugger;
                    console.log("PROBLEMA ==>: "+data);
                });
                
//=======================================
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

        .controller('adicionar_cerveja_ctrl', function ($scope) {

            $scope.adicionar = function () {
                
                var cerveja = $scope.cerveja;
                debugger;
                cerveja_service.criaCerveja(cerveja);
                //$http.create(cerveja);
                debugger;                
            }

        })
        .controller('deletar_cerveja_ctrl', function ($scope, $routeParams) {
            debugger;
            var cerjeva_a_deletar = $scope.cervejas[$routeParams.index];
            
            cerveja_service.deletarCerveja(cerjeva_a_deletar, $scope, $routeParams.index);
            
        })
        .controller('editarCervejasController', function ($scope, $routeParams) {
            debugger;
            $scope.cerveja = $scope.cervejas[$routeParams.index];

        });

