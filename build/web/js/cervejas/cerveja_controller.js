//var url_base = 'http://10.1.1.41:8080/Cervejaria1/cervejas';
//var url_base = 'http://192.168.43.112:8080/Cervejaria1/cervejas';
var url_base = 'http://localhost:8084/Cervejaria1/cervejas/';
var dummy = "?dummy=" + new Date().getTime();
modulo_cerveja

        .controller('cerveja_controller', ['$scope', '$http', function($scope, $http) {
                carregaEventos();

                debugger;
//                $scope.cervejas = [];
//                debugger;
//                cerveja_service.getCervejas($scope);
//                debugger;


//=======================================
                $http.get(url_base + dummy).success(function(data, status, fun, header) {
                    debugger;
                    $scope.cervejas = data;
                }).error(function(data, status, fun, header) {
                    debugger;
                    console.log("PROBLEMA ==>: " + data);
                });

//=======================================

//                $.ajax({
//                    crossDomain: true,
//                    url: url_base,
////                    data: null,
////                    type: 'GET',
//                    //contentType: "application/json; charset=utf-8",
//                    //dataType: "json",
//                    context: {},
//                    //async: false,
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
//                    error: function (data, XMLHttpRequest, jqXHR) {
//                        debugger;
//                        //var resultado = JSON.parse(data);
//                        console.log(data);
//                    }
//                });

//=======================================
//                $.ajaxSetup({
//                    crossOrigin: true
//                });
//                $.getJSON(url_base,
//                        function(data, text, xhr) {
//                            $scope.cervejas = [];
//                            $scope.cervejas = data;
//                                                      
//                            debugger;
//                        }
//                );


            }])
        .controller('adicionar_cerveja_ctrl', function($scope) {

            exibirMenuBusca(false);

            $("#titulo_form_cerveja").html("{{cerveja.nome}}<small> &nbsp; - Novo(a)   </small>");//so pra aproveitar o mesmo formulario

            $scope.salvarRegistro = function() {

                debugger;
                var cerveja = $scope.cerveja;

                if (isValidouFormCerveja()) {

                    cerveja_service.criaCerveja(cerveja);

                    $scope.cerveja = {};
                }
            }


        })
        .controller('deletar_cerveja_ctrl', function($scope, $routeParams) {
            debugger;
            var cerjeva_a_deletar = $scope.cervejas[$routeParams.index];

            cerveja_service.deletarCerveja(cerjeva_a_deletar, $scope, $routeParams.index);

        })
        .controller('editar_cerveja_ctrl', function($scope, $routeParams) {
            debugger;
            exibirMenuBusca(false);

            $scope.cerveja = $scope.cervejas[$routeParams.index];

            $("#titulo_form_cerveja").html($scope.cerveja.nome + "<small> &nbsp; - Editar  </small>");//so pra aproveitar o mesmo formulario

            $scope.salvarRegistro = function() {

                var cerveja_a_editar = $scope.cerveja;


                debugger;
                if (isValidouFormCerveja()) {

                    cerveja_service.editarCerveja(cerveja_a_editar);
                }
            }

        })
        .controller('listar_cerveja_por_ano_ctrl', ['$scope', '$http', function($scope, $http) {

                var filtro = $("#filtro_ano").val();
                var ano = $("#lista_anos").val();
                var sufixo = "ano?valor="+ano;
                debugger;
                if (filtro == "maior") {
                    sufixo += "&maior=true";
                }

                if (filtro == "menor") {
                    sufixo += "&menor=true";
                }

                $http.get(url_base + sufixo+"&"+ new Date().getTime()).success(function(data, status, fun, header) {
                    debugger;
                    $scope.cervejas = data;
                }).error(function(data, status, fun, header) {
                    debugger;
                    console.log("PROBLEMA ==>: " + data);
                });


            }]);


