modulo_cerveja

        .controller('cerveja_controller', ['$scope', '$http', function ($scope, $http) {

        //var host = 'http://192.168.56.1:8080/Cervejaria1/cervejas';
       var host = 'http://localhost:8080/Cervejaria1/cervejas';
                debugger;
//                $scope.cervejas = [];
//                debugger;
//                cerveja_service.getCervejas($scope);
//                debugger;


//=======================================
//                $http.get(host).success(function (data, status, fun, header) {
//                    debugger;
//                    $scope.cervejas = data;
//                }).error(function (data, status, fun, header) {
//                    debugger;
//                    console.log("PROBLEMA ==>: " + data);
//                });

//=======================================
                $.ajax({
                   
                    url: host,
                    data: null,
                    type: 'GET',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    crossDomain: true,
                    async: false,
                    success: function (data, XMLHttpRequest, jqXHR) {
                        try {
                            debugger;
                            if (jqXHR.readyState == 4) {

                                console.log(data);
                                $scope.cervejas = data;
                            }

                        } catch (e) {
                            console.log("O PROBLMEMA É: " + e.message);
                        }

                    },
                    error: function (data, XMLHttpRequest, jqXHR) {
                        debugger;
                        //var resultado = JSON.parse(data);
                        console.log(data);
                    }
                });



            }])

        .controller('adicionar_cerveja_ctrl', function ($scope) {

            $scope.adicionar = function () {
                debugger;
                var cerveja = $scope.cerveja;


                if (isValidouFormCerveja()) {

                    cerveja_service.criaCerveja(cerveja);

                    $scope.cerveja = {};
                }

                exibirMenuBusca(false);
            }

        })
        .controller('deletar_cerveja_ctrl', function ($scope, $routeParams) {
            debugger;
            var cerjeva_a_deletar = $scope.cervejas[$routeParams.index];

            cerveja_service.deletarCerveja(cerjeva_a_deletar, $scope, $routeParams.index);

        });

